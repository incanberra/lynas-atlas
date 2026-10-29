const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=n=>JSON.parse(fs.readFileSync(path.join(root,'site/data',n+'.json'),'utf8'));
const q=read('quarterly'),summary=read('latest-summary'),sources=read('sources');
const ids=new Set(sources.map(s=>s.id));
assert.equal(q.length,5);
assert.equal(summary.context.snapshot_date,'2026-10-29');
for(let i=0;i<q.length;i++){
 const r=q[i],d=new Date(r.period_end+'T12:00:00Z'),month=d.getUTCMonth()+1;
 assert.equal(r.fiscal_year,d.getUTCFullYear()+(month>6?1:0));
 assert.equal(r.fiscal_quarter,Math.floor(((month+5)%12)/3)+1);
 if(i)assert.ok(r.period_end>q[i-1].period_end);
 assert.ok(r.ndpr_production+r.dy_tb_production<=r.reo_production);
 assert.ok(Math.abs(r.reo_sales*r.basket_asp/1000-r.gross_sales)<.5,'tonnes/kg unit reconciliation');
 assert.ok(ids.has(r.source_id));
}
// Independently transcribed from original report pp5–7, not news headlines.
assert.deepEqual([q[4].reo_sales,q[4].gross_sales,q[4].basket_asp,q[4].sales_receipts,q[4].reo_production,q[4].ndpr_production,q[4].dy_tb_production],[3039,310.1,102.1,266.6,4254,2082,23]);
assert.deepEqual(summary.latest,q[4]);
assert.equal(summary.context.closing_cash_and_short_term_deposits,1212.5);
const cashBridge=1209.1+266.6+29+12.2-185.2-28.7-.3-4.2-29.9-52.3-3.8;
assert.ok(Math.abs(cashBridge-summary.context.closing_cash_and_short_term_deposits)<1e-9);
assert.equal(summary.changes.gross_sales.qoq_pct.toFixed(1),'7.3');
assert.equal(summary.changes.ndpr_production.qoq_pct.toFixed(1),'12.1');
assert.equal(summary.changes.basket_asp.yoy_pct.toFixed(1),'88.0');
for(const d of read('developments')){
 assert.ok(ids.has(d.source));if(d.update_source)assert.ok(ids.has(d.update_source));
 assert.ok(d.date<=summary.context.snapshot_date);
}
const index=read('formal-announcements');assert.equal(index.announcements.length,11);
assert.equal(index.announcements[0].date,'2026-10-29');
assert.equal(index.announcements[0].title,'Quarterly Activities Report');
const html=fs.readFileSync(path.join(root,'site/index.html'),'utf8');
for(const [,id] of html.matchAll(/data-source="([^"]+)"/g))assert.ok(ids.has(id),'missing source '+id);
assert.ok(!html.includes('Next report: 29 October'));
assert.ok(html.includes('SEP 2026'));
assert.ok(html.includes('id="reset-fy26"'));
const {presets,project}=require('../site/model.js');
assert.equal(presets.fy26.volume,12122);assert.equal(presets.fy26.price,80.68);
assert.equal(presets.fy26.inflation,0);assert.equal(presets.fy26.growth,0);
assert.ok(Math.abs(project(presets.fy26)[0].cost-585.5)<1e-9);
console.log('PASS: source transcription, fiscal dates, unit and cash reconciliations, comparisons, source references and FY26 reset.');
