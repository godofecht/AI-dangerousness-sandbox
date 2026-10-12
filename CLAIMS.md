# Claim register and falsification protocol

Reference: https://www.youtube.com/watch?v=98syxABbUPk

**Verification status:** No usable transcript was retrieved. These are hypotheses prompted by the requested topic and conversation, **not quotations or certified claims from the speaker**.

| ID | Proposition | Operational test | Interpretation |
| --- | --- | --- | --- |
| PHY-001 | A warmer planet emits more thermal radiation to space, all else equal | Compute σ(T+ΔT)^4 / σT^4 with absolute temperature | Physically true for constant emissivity; emitted heat is not a data-centre power source |
| PHY-002 | Warmer conditions improve terrestrial AI cooling | Increase ambient temperature while holding cooling technology constant; inspect effective compute and thermal derating | Counterexample available in this model; real refrigeration efficiency depends on cooling architecture and wet-bulb temperature |
| INF-001 | Computation can expand without infrastructure constraints | Change grid stress and demand independently | The model exhibits binding grid/thermal constraints, not an empirical universal bound |
| SOC-001 | AI can operate without functioning social infrastructure | Change hypothetical cooperation, governance and grid access | Conditional demonstration, not evidence of specific historical or geopolitical outcomes |
| HUM-001 | AI and humans have identical sensitivity to warming | Compare computed heat-exposure proxy to modeled compute capacity | Different functional impacts are possible; no medical outcomes are inferred |

## Design limitations

This is a **nine-region illustrative system**, not an Earth-system model validated against observational gridded climate datasets. Latitude/longitude are geographically meaningful; the drawn marker locations represent synthetic facilities. The regional populations, temperatures, infrastructure allocations, policy and grid scores are modeling assumptions. The temperature perturbation is spatially uniform, which is not realistic climate physics.

The chosen regional cooling penalty is an explicit toy response: `min(0.85, max(0, T_air - 24°C) × (1 - cooling_adaptation) × 0.023)`. It is not a fitted physical law. Likewise, scores for governance, human heat exposure and grid reliability are illustrative utility functions; **do not use these scores to make claims about populations or political systems**.

An empirical next stage should ingest authoritative datasets with licenses and timestamps: ERA5/Copernicus (air temperature, wet bulb), WorldPop/UN (population), IEA/EIA/Ember (generation and grid), national facility registries or trusted hyperscaler disclosures (compute infrastructure), and policy datasets with explicit version and uncertainty. Compare model outputs with withheld observational periods. Avoid treating forecast assumptions as measurements.

## Falsification requirements

A claim must be recorded with video timestamp, exact short quotation, operational definition, evidence, uncertainty bounds, and conditions under which a counterexample would be accepted. Report negative, inconclusive and positive results. Ensure calibration and evaluation data are disjoint. In particular, separate thermodynamic potential of the planet to radiate from the energy cost of removing heat from chips to ambient surroundings.
