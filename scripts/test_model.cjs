const assert=require('node:assert/strict');
const {project,baseline,presets}=require('../site/model.js');
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-8,`${a} != ${b}`);
// Flat volumes, no inflation reproduce FY26 costs; price chosen to reconcile audited revenue.
const flat=project({volume:baseline.volume,price:baseline.revenue*1000/baseline.volume,growth:0,inflation:0,fixed:60});
flat.forEach(r=>{near(r.cost,baseline.cost);near(r.revenue,baseline.revenue);near(r.gross,baseline.revenue-baseline.cost);});
// Independent closed-form reference calculation and unit conversion.
const ref=project(presets.reference);
near(ref[0].revenue,1215);
near(ref[0].cost,585.5*(.6+.4*13500/12122)*1.025);
near(ref[3].volume,13500*1.05**3);
near(ref[3].cost,585.5*(.6+.4*ref[3].volume/12122)*1.025**4);
assert.deepEqual(ref.map(r=>r.year),[2027,2028,2029,2030]);
// Price improves gross profit one-for-one at a fixed volume; cost is unaffected.
const hi=project({...presets.reference,price:100});
near(hi[0].gross-ref[0].gross,135);near(hi[0].cost,ref[0].cost);
// Fixed and variable endpoints, adverse scenario, malformed inputs.
near(project({...presets.reference,fixed:100})[0].cost,585.5*1.025);
near(project({...presets.reference,fixed:0})[0].cost,585.5*13500/12122*1.025);
assert.ok(project({...presets.downside,price:40})[0].gross<0);
assert.throws(()=>project({...presets.reference,price:NaN}));
assert.throws(()=>project({...presets.reference,fixed:101}));
console.log('PASS: baseline reconciliation, units, growth, inflation, sensitivity, cost endpoints and validation.');
