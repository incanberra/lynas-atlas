/* Transparent revenue/gross-profit sensitivity model. Browser and Node compatible. */
(function(root){
 'use strict';
 const baseline=Object.freeze({year:2026,revenue:977.945,cost:585.5,volume:12122});
 const presets=Object.freeze({fy26:{volume:12122,price:80.68,growth:0,inflation:0,fixed:60},downside:{volume:11500,price:65,growth:0,inflation:4,fixed:60},reference:{volume:13500,price:90,growth:5,inflation:2.5,fixed:60},upside:{volume:16000,price:115,growth:7,inflation:2.5,fixed:60}});
 function project(a){
  if(!['volume','price','growth','inflation','fixed'].every(k=>Number.isFinite(a[k])))throw new TypeError('All assumptions must be finite numbers');
  if(a.volume<=0||a.price<=0||a.growth<=-100||a.inflation<=-100||a.fixed<0||a.fixed>100)throw new RangeError('Invalid model assumption');
  return Array.from({length:4},(_,i)=>{
   const year=2027+i,volume=a.volume*(1+a.growth/100)**i,revenue=volume*a.price/1000;
   const cost=baseline.cost*(a.fixed/100+(1-a.fixed/100)*volume/baseline.volume)*(1+a.inflation/100)**(i+1);
   const gross=revenue-cost;
   return {year,volume,price:a.price,revenue,cost,gross,margin:gross/revenue*100};
  });
 }
 root.LynasModel={baseline,presets,project};
 if(typeof module!=='undefined'&&module.exports)module.exports=root.LynasModel;
})(typeof window!=='undefined'?window:globalThis);
