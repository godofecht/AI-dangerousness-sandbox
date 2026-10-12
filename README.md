# AI Dangerousness Sandbox

A spatial, interactive Earth-scale **scenario model**, not a forecast. Run the [interactive dashboard](https://godofecht.github.io/AI-dangerousness-sandbox/).

This sandbox separates observed anchors, user-adjustable assumptions and model consequences. The visualisation includes sampled countries/regions, population exposure, thermal headroom, data-centre electricity demand, governance and infrastructure resilience.

## Method

The physical Earth is represented by georeferenced regions and longitude/latitude coordinates, not a literal microscopic-scale simulation. Global thermal radiation is calculated using the Stefan–Boltzmann law; cooling penalties are calculated from local ambient temperatures and user-specified thermal thresholds. The climate control is a **uniform perturbation** for stress testing, not a climate projection. Computing power does not arise directly from planetary outgoing longwave radiation.

Every scenario output is conditional on the selected parameters. The representative infrastructure markers are illustrative, **not verified facility coordinates**. Governance and population resilience scores are hypothetical assumptions and must not be interpreted as observations about countries.

**Calibration anchors:** IEA *Energy and AI* (2025) reports data-centre use ~415 TWh in 2024 and ~945 TWh in 2030 (base scenario); IEA *Key Questions on Energy and AI* (2026) gives ~950 TWh in 2030. [2025 report](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai) · [2026 update](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary).

## How to run

Open `index.html` directly, or serve this repository using any static HTTP server. The app attempts to load geographic boundaries from the public `datasets/geo-countries` GeoJSON repository; a schematic fallback is provided if that download fails. No tracking or backend.

## Claims protocol

Claims from [the linked video](https://www.youtube.com/watch?v=98syxABbUPk) are **unverified until timestamped quotations are entered**. The video was not reliably accessible from the authoring environment. Do not claim a simulation has disproved or proved a speaker's unspecified argument.

Testable initial propositions: hotter Earth has higher outgoing blackbody radiation; higher ambient temperatures generally reduce air-cooled compute thermal headroom; electrical supply and cooling impose resource constraints; political cooperation and grid reliability change available compute. A successful counterexample to a claim should survive uncertainty sweeps.

## Deployment

GitHub Pages: Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)`. The Pages environment is configured to publish directly from the `main` branch. A separate GitHub Actions workflow runs all model and experiment tests; it does not compete with the native Pages publisher. 

## Sensitivity laboratory

Open [the experiment dashboard](https://godofecht.github.io/AI-dangerousness-sandbox/experiments.html) to sweep one input through 101 evenly spaced counterfactuals, compare normalized compute with outgoing radiation, and download the full numeric CSV. All other assumptions remain fixed at the model baseline. Plot lines are scaled separately: never infer that visually coincident line heights indicate identical units or magnitudes.

Run both suites locally with `npm test`. The model and experiments are deterministic; no stochastic confidence intervals are implied by a parameter sweep.
