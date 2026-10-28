"""Rebuild data and original vector visuals. Run from any directory with Python 3.
Requires matplotlib only. Values are manually transcribed; no live market feed.
"""
from pathlib import Path
import csv,json,math
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib import font_manager
ROOT=Path(__file__).resolve().parents[1]; SITE=ROOT/'site'; A=SITE/'assets'; D=SITE/'data'
D.mkdir(exist_ok=True)
font_manager.fontManager.addfont(str(A/'OpenSans.ttf'))
plt.rcParams.update({'font.family':'Open Sans','svg.fonttype':'none','axes.spines.top':False,'axes.spines.right':False,'axes.spines.left':False,'axes.edgecolor':'#D6D6D6','text.color':'#323232','axes.labelcolor':'#323232','xtick.color':'#323232','ytick.color':'#323232'})
rows=list(csv.DictReader((ROOT/'research/annual.csv').open()))
for r in rows:
 for k in r:
  if k!='source_id':r[k]=float(r[k]) if k!='year' else int(r[k])
 assert r['ndpr_production']<=r['reo_production']
 assert abs(r['reo_sales']*r['basket_asp']/1000-r['revenue'])<2
(SITE/'data/annual.json').write_text(json.dumps(rows,indent=2)+'\n')
(SITE/'data/annual.csv').write_text((ROOT/'research/annual.csv').read_text())
q=[{'period':p,'reo_sales':s,'gross_sales':g,'basket_asp':a,'reo_production':r,'ndpr_production':n} for p,s,g,a,r,n in zip(['Sep 2025','Dec 2025','Mar 2026','Jun 2026'],[3691,2359,3131,2941],[200.2,201.9,265,288.9],[54.3,85.6,84.6,98.2],[3993,2382,3233,3481],[2003,1404,1996,1857])]
(D/'quarterly.json').write_text(json.dumps(q,indent=2)+'\n')
with (D/'quarterly.csv').open('w') as f:
 w=csv.DictWriter(f,fieldnames=q[0]);w.writeheader();w.writerows(q)
# Original static comparison for downloading and no-JavaScript reading.
fig,ax=plt.subplots(figsize=(10,4.7));fig.subplots_adjust(left=.08,right=.97,top=.76,bottom=.22)
y=[r['revenue'] for r in rows];ax.bar([str(r['year']) for r in rows],y,color=['#A3926E']*4+['#003E46'],width=.52)
ax.set_ylim(0,1150);ax.set_yticks([0,250,500,750,1000]);ax.grid(axis='y',color='#D6D6D6',linewidth=.6);ax.set_axisbelow(True);ax.tick_params(length=0,pad=10)
for i,v in enumerate(y):ax.text(i,v+30,f'{v:,.1f}',ha='center',fontsize=11,fontweight='semibold')
fig.text(.08,.91,'Revenue recovered above its FY2022 level',fontsize=19,fontweight='bold');fig.text(.08,.83,'Lynas annual sales revenue, A$ million • years ending 30 June',fontsize=11)
fig.text(.08,.07,'Source: Lynas annual reports (2022–2026). Figures rounded to one decimal.',fontsize=9)
fig.savefig(A/'revenue-history.svg');fig.savefig(A/'revenue-history.png',dpi=170);plt.close(fig)
# Equirectangular geography, Natural Earth 1:110m public-domain boundaries.
world=json.loads((A/'world.geojson').read_text());W,H=960,500
# Area of interest 85–160E, 15N–43S. Keep geographic aspect ratio near 15S.
xmin,xmax,ymin,ymax=85,160,-43,15
sx=W/(xmax-xmin);sy=H/(ymax-ymin)
def xy(lon,lat):return ((lon-xmin)*sx,(ymax-lat)*sy)
paths=[]
for feat in world['features']:
 geom=feat['geometry'];polys=geom['coordinates'] if geom['type']=='MultiPolygon' else [geom['coordinates']]
 for poly in polys:
  ring=poly[0]
  if not any(xmin-10<=p[0]<=xmax+10 and ymin-10<=p[1]<=ymax+10 for p in ring):continue
  path='M'+'L'.join(f'{x:.2f},{y:.2f}' for x,y in (xy(*p[:2]) for p in ring))+'Z'
  paths.append(f'<path d="{path}"/>')
svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" role="img" aria-label="Map of Southeast Asia and Australia. Approximate operational locations are overlaid in the website."><rect width="960" height="500" fill="#edf2ee"/><g fill="#d3ded5" stroke="#f9faf7" stroke-width="1">'+''.join(paths)+'</g>'
for lat in [-30,0]:
 _,yy=xy(85,lat);svg+=f'<path d="M0,{yy}H960" stroke="#c8d6cf" stroke-dasharray="4 7" fill="none"/>'
svg+='<g font-family="Open Sans, sans-serif" fill="#75897f" font-size="14" letter-spacing="3"><text x="495" y="400">AUSTRALIA</text><text x="220" y="45">MALAYSIA</text><text x="70" y="290" font-size="12">INDIAN OCEAN</text></g></svg>'
(A/'operations-map.svg').write_text(svg)
print(f'Prepared {len(rows)} annual records, {len(q)} quarterly records, charts and map.')
