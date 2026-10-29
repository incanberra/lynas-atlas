# Lynas Atlas

An independent, interactive research website about **Lynas Rare Earths (ASX: LYC)**. Research cutoff: **29 October 2026, Sydney time**. Includes FY2026 annual results, the September 2026 quarter released 29 October, and recent formal announcements. [Open the live site](https://incanberra.github.io/lynas-atlas/).

## Explore

- **Overview:** business introduction, historical chart and key FY26 figures.
- **Financials:** FY2022–FY2026 annual history and FY26–Q1 FY27 quarterly operating data, hover values, definitions, accessible tables and CSV exports.
- **Operations:** Python-generated geography with interactive Mt Weld, Kalgoorlie and Malaysia details; mineral-to-magnet explanation.
- **Scenario lab:** editable FY2027–2030 sales, basket price and cost assumptions, presets, gross profit sensitivity table, CSV output and shareable URLs.
- **Developments:** searchable announcement timeline and status labels, including the proposed Meteoric acquisition and downstream partnerships.
- **Source library:** linked original filings, locators, coverage and methodology.

## GitHub Pages

This is a **static site**. No API key, server, package installation or paid service is required to host it. All browser assets are local, including the font and Chart.js.

1. Push this repository to GitHub with `main` as the default branch.
2. Open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Open **Actions → Publish Lynas Atlas → Run workflow** if the first push occurred before Pages was enabled.
4. The deployment job returns the actual Pages URL. Do not assume a Pages URL is live until that job succeeds.

The included `.github/workflows/pages.yml` checks the model and JavaScript, then publishes the `site/` directory. All application paths are relative, so project-repository Pages URLs work. A public repository supports free public Pages hosting; private repository support depends on the account plan. No repository visibility should be changed solely to enable deployment without the owner's agreement.

For a simpler manual deployment, copy `site/` contents to the repository root and choose branch deployment; the included Actions workflow is the recommended route.

## Local preview

```bash
python -m http.server 8000 --directory site
```

Open `http://localhost:8000`. Direct `file://` opening cannot load JSON because of browser fetch restrictions. The site uses no remote runtime services; source-document links require internet access. Shared scenario links encode only public model assumptions in the query string.

## Rebuild Python data and visuals

```bash
python -m pip install -r requirements.txt
python scripts/prepare_data.py
node scripts/test_model.cjs
```

`research/annual.csv` and `research/quarterly.csv` contain manually transcribed historical inputs, in A$m except quantities and A$/kg prices. `scripts/prepare_data.py` validates volume relationships and price/revenue consistency, exports annual and quarterly data, renders standalone annual and quarterly charts (SVG/PNG), and creates the map from the included Natural Earth boundaries. The annual chart is an exportable companion to the interactive browser charts.

The original research PDFs and temporary extracted text are excluded from Git. The website links to publisher-hosted originals. `site/data/sources.json` is the source register; `research/verification.md` records provenance and checks. Dates and source links are a static research snapshot, not a live feed.

## Forecast methodology

Outputs are **illustrative user scenarios**, not Lynas guidance, broker consensus, price targets or investment recommendations. No scenario probabilities are assigned.

- Revenue (A$m) = REO sales tonnes × basket selling price (A$/kg) / 1,000.
- Cost of sales (A$m) = FY26 cost 585.5 × [fixed share + (1 − fixed share) × projected sales / FY26 sales 12,122] × (1 + cost inflation)^(years after FY26).
- Gross profit = revenue − cost of sales. It is not EBITDA, NPAT or free cash flow.
- Volumes compound from FY27; basket selling price stays constant after FY27. FY26 revenue is 977.945 A$m.
- Fixed share, cost inflation and volume growth are assumptions. The model excludes step-changes in capacity, capex, acquisitions, financing, tax, detailed product mix, contract floors and upside sharing.

The JARE US$110/kg floor concerns specified NdPr offtake. It must not be applied to the entire REO basket, which is measured in A$/kg. Caldeira is a proposed acquisition with company project estimates, not realised Lynas output. Quarterly gross sales exclude quotational adjustments and should not be summed and labelled annual audited revenue.

## Refresh

Check the [official archive](https://lynasrareearths.com/investors-media/asx-announcements/). Update the annual and quarterly CSVs, `research/quarterly-context.json`, and source and development JSON records, visible cutoff labels, and any changed project status. Rebuild and run checks before pushing. There is no automated data collection or recurring refresh.

## Design and accessibility

Responsive layout, labelled controls, keyboard-operable ranges, reduced-motion support, native dialog, data tables alongside canvas charts, source context and readable chart colours. Open Sans and a restrained green palette are used throughout. Map locations are approximate and route lines schematic, not geospatial survey data or shipping tracks. No affiliation with Lynas or any government agency is claimed.

## Third-party assets

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Chart.js is MIT-licensed, Open Sans uses SIL OFL 1.1, and Natural Earth boundaries are public domain. Periodic-element artwork, chart and map compositions are original. Source reports remain copyrighted by their respective publishers; they are linked rather than reproduced.

## 29 October 2026 refresh

- Added Q1 FY27: gross sales A$310.1m; REO sales 3,039t; total REO output 4,254t; NdPr 2,082t; Dy/Tb 23t; basket ASP A$102.1/kg; customer receipts A$266.6m. Cash and term deposits use the precise A$1,212.5m finance table, not the rounded cover figure.
- Added December-quarter maintenance outlook, Mt Weld IsaMill status, HRE sequencing and current transaction context. Do not extrapolate the September quarter as full-year company guidance.
- Added the recent formal filing index (all 11 archive entries from 25 September to 29 October), director retirement, AGM notice, substantial holder notice and proposed scheme securities issue. Superseded letters remain identified in the index.
- Added a FY26 reset in the scenario lab: annual volume and basket price, zero assumed growth and cost inflation. The fixed cost share remains an assumption, not a reported figure.
- Quarterly inputs now live in `research/quarterly.csv`, with context in `research/quarterly-context.json`. Rebuild only quarterly data/chart with `python scripts/prepare_data.py --quarterly-only`. Run `node scripts/test_data.cjs` and `node scripts/test_model.cjs` before publishing.
