import test from "node:test";
import assert from "node:assert/strict";
import {sweep,linearValues,csv} from "./experiments.js";
test("linear ranges have correct inclusive endpoints",()=>{assert.deepEqual(linearValues(-5,5,3),[-5,0,5]);assert.throws(()=>linearValues(0,1,1))});
test("warming sweep preserves monotonically increasing radiation",()=>{const r=sweep("warming",linearValues(-5,76,101));assert.equal(r.length,101);for(let i=1;i<r.length;i++)assert.ok(r[i].radiationChangePct>r[i-1].radiationChangePct)});
test("warming reduces modeled effective compute over this sweep",()=>{const r=sweep("warming",[0,25,76]);assert.ok(r[0].computeIndex>=r[1].computeIndex);assert.ok(r[1].computeIndex>=r[2].computeIndex)});
test("CSV has header and matching rows",()=>{const r=sweep("cooling",[0,100]);assert.equal(csv(r).trim().split("\n").length,3)});
test("invalid parameter rejected",()=>assert.throws(()=>sweep("unsupported",[1])));
