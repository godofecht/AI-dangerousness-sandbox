import {DEFAULT,simulate} from "./model.js";
export const SWEEP_FIELDS=Object.freeze(["warming","cooling","gridStress","hardening","cooperation","demand"]);
export function sweep(field,values,scenario=DEFAULT){
 if(!SWEEP_FIELDS.includes(field))throw new RangeError("Unknown scenario dimension: "+field);
 if(!Array.isArray(values)||values.length>10000)throw new RangeError("Provide up to 10000 values");
 const baseline=simulate(DEFAULT).totalCompute;
 return values.map(value=>{
  if(!Number.isFinite(value))throw new TypeError("Scenario values must be finite");
  const output=simulate({...scenario,[field]:value});
  return {variable:field,value,radiationChangePct:output.radiationChangePct,
   computeIndex:100*output.totalCompute/baseline,
   electricityTWh:output.globalPowerTWh,
   exposureBillions:output.totalExposure};
 });
}
export function linearValues(start,end,count){
 if(!Number.isFinite(start)||!Number.isFinite(end)||!Number.isInteger(count)||count<2||count>10000)throw new RangeError("Invalid sweep range");
 return Array.from({length:count},(_,i)=>start+(end-start)*i/(count-1));
}
export function csv(rows){
 const keys=["variable","value","radiationChangePct","computeIndex","electricityTWh","exposureBillions"];
 return [keys.join(","),...rows.map(row=>keys.map(key=>String(row[key])).join(","))].join("\n")+"\n";
}
