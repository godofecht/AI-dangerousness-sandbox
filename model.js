export const SIGMA=5.670374419e-8;
export const EARTH_RADIUS_M=6371000;
export const EARTH_AREA_M2=4*Math.PI*EARTH_RADIUS_M**2;
export const REGIONS=[
 {id:"na",name:"North America",lat:39,lon:-99,pop:0.61,base:13,grid:0.91,policy:0.78,share:0.48,sites:12},
 {id:"sa",name:"South America",lat:-15,lon:-60,pop:0.44,base:24,grid:0.73,policy:0.67,share:0.02,sites:4},
 {id:"eu",name:"Europe",lat:51,lon:10,pop:0.75,base:11,grid:0.93,policy:0.77,share:0.16,sites:11},
 {id:"af",name:"Africa",lat:0,lon:23,pop:1.51,base:27,grid:0.56,policy:0.59,share:0.02,sites:5},
 {id:"me",name:"Middle East",lat:27,lon:45,pop:0.31,base:31,grid:0.78,policy:0.63,share:0.03,sites:5},
 {id:"in",name:"South Asia",lat:22,lon:79,pop:2.02,base:29,grid:0.72,policy:0.60,share:0.05,sites:8},
 {id:"ea",name:"East Asia",lat:35,lon:112,pop:1.68,base:19,grid:0.88,policy:0.72,share:0.21,sites:12},
 {id:"sea",name:"Southeast Asia",lat:8,lon:113,pop:0.69,base:29,grid:0.75,policy:0.65,share:0.02,sites:7},
 {id:"oc",name:"Oceania",lat:-25,lon:135,pop:0.046,base:21,grid:0.92,policy:0.84,share:0.01,sites:4}
];
// Illustrative aggregate populations, temperatures, electricity shares and policies — not empirical region-specific data.
export function clamp(x,a,b){return Math.max(a,Math.min(b,x));}
export function radiativeFlux(tempKelvin,emissivity=1){return emissivity*SIGMA*tempKelvin**4;}
export function radiativeRatio(deltaC,baselineKelvin=288){return radiativeFlux(baselineKelvin+deltaC)/radiativeFlux(baselineKelvin);}
export function distanceKm(a,b){const p=Math.PI/180,dl=(b.lon-a.lon)*p,dp=(b.lat-a.lat)*p,h=Math.sin(dp/2)**2+Math.cos(a.lat*p)*Math.cos(b.lat*p)*Math.sin(dl/2)**2;return 2*EARTH_RADIUS_M/1000*Math.asin(Math.sqrt(h));}
export function simulate(s){
 const delta=Number(s.warming),demand=Number(s.demand),cooling=Number(s.cooling),cooperation=Number(s.cooperation),hardening=Number(s.hardening),gridStress=Number(s.gridStress);
 const regions=REGIONS.map(r=>{
  const ambient=r.base+delta;
  // Threshold model: headroom beyond 24 C incurs penalty, partially alleviated by cooling improvements.
  const thermalPenalty=clamp(Math.max(0,ambient-24)*(1-cooling/100)*0.023,0,0.85);
  const grid=clamp(r.grid-(gridStress/100)*0.40+hardening/100*0.13,0.05,1);
  const governance=clamp(r.policy+(cooperation-50)/100*0.28,0.02,1);
  const compute=demand*r.share*(1-thermalPenalty)*grid*(0.65+0.35*governance);
  // Illustrative aggregate heat exposure: not mortality or population displacement.
  const humanExposure=clamp((ambient-26)/14,0,1)*r.pop;
  const instability=clamp((1-grid)*0.5+(1-governance)*0.25+thermalPenalty*0.25,0,1);
  return {...r,ambient,thermalPenalty,grid,governance,compute,humanExposure,instability};
 });
 return {regions,totalCompute:regions.reduce((a,r)=>a+r.compute,0),totalExposure:regions.reduce((a,r)=>a+r.humanExposure,0),totalPopulation:regions.reduce((a,r)=>a+r.pop,0),radiationChangePct:(radiativeRatio(delta)-1)*100,nominalDemand:demand,globalPowerTWh:415*demand,delta};
}
export const DEFAULT={warming:0,demand:1,cooling:20,cooperation:50,hardening:30,gridStress:10};
