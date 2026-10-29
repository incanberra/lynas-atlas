# Evidence and verification record

As of 29 October 2026 (Australia/Sydney). Company filings are the originating source; reporting a company statement does not independently validate its underlying forecast. No private information is included.

## Historical data

- FY26 annual report, printed p65 (PDF p68): five-year revenue, total REO output, REO sales, NPAT. Amounts originally A$000 divided by 1,000 for A$m.
- FY26 printed pp17–18 (PDF pp20–21): FY23–FY26 basket ASP, cost of sales, total production and NdPr output; FY25–FY26 operating cash.
- FY23 Directors' Report and Note A.1: FY22–23 EBITDA, NdPr output, costs. FY22 operating cash A$460.072m, cost A$348.4m. Checked against FY22 report (consolidated cash flow; financial performance).
- FY24 and FY25 Note A.1: EBITDA A$132.132m and A$101.186m. Adjusted EBITDA is a different series and is not used.
- Annual ASP uses FY26 five-year table precision. That table labels the row “per REO tonne” but the numeric scale is A$/kg, as established by the Directors' Report and volume × price reconciliation. Preserve A$/kg in the site; do not propagate the apparent table-label inconsistency.
- Annual historical figures are nominal; the site rounds display values but exports transcribed precision.
- Annual figures are cross-checked, not an independent audit of the financial statements.

## Current announcements

See `site/data/sources.json` for URLs and locators. Key status checks:

| Claim | Type | Verdict | Basis / qualification |
|---|---|---|---|
| Latest quarterly results included are September 2026 | Fact about coverage | Supported | Original 29 Oct report; original archive checked through 29 Oct |
| Meteoric transaction is proposed | Company transaction announcement | Supported | 1 Oct announcement pp1–4; shareholder, court and regulatory conditions |
| Caldeira production/capex metrics | Company forecast | Not presently testable | 1 Oct presentation slide6; project DFS estimates, no probabilities assigned |
| JS Link factory is planned | Company development announcement | Supported with qualification | 7 Jul p1; partnership signed, does not establish factory completion |
| LS Eco investment issuance | Conditional transaction | Supported with qualification | 27 Jul pp1–2; conditions precedent apply |
| Malaysia licence renewed for 10 years | Company report of regulatory letter | Supported with qualification | 2 Mar p1; licence separate from expansion EIA |
| Updated EIA required | Company disclosure | Supported as at release | 23 Jun p1; no subsequent approval inferred |
| Sm first production | Company operational milestone | Supported as reported | 19 Mar p1; does not verify commercial shipment timing |
| JARE floor applies to entire REO basket | Incorrect interpretation | Contradicted | 10 Mar pp1–2: specified NdPr offtake; USD vs AUD basket matters |
| FY26 cash increase all from operations | Incorrect interpretation | Contradicted | FY26 results p3: equity issuance also supported balance sheet |

## Calculations and limits

- Revenue growth = (977.945 / 556.512 − 1) × 100 = 75.7% rounded.
- NdPr output growth = (7260 / 6558 − 1) × 100 = 10.7% rounded.
- Quarterly June report pp3–4: gross sales, sales tonnes, basket ASP and output transcribed without interpolation. Sum of gross sales A$956m is not audited net revenue A$977.945m.
- Python asserts NdPr ≤ total REO output and approximate volume × basket price reconciliation (tolerance A$2m reflects independently rounded reported values).
- Node model checks cover baseline reconciliation, unit conversions, compounding, inflation, sensitivity, all-fixed/all-variable costs, loss scenarios and invalid assumptions.
- Map boundary source: Natural Earth 110m, public domain. Markers use approximate facility-region coordinates, not surveyed coordinates.
- Scenario model uses gross profit, excludes acquisition effects and capex, and cannot establish enterprise value, share value, NPAT or cash flow.

Confidence is high for numerical transcription checked across original records and arithmetic; moderate for interpretation of project status in selected company disclosures; forecast outcomes remain unknown. The release selection is substantive rather than exhaustive. No external human review or company contact is claimed.

## 29 October 2026 update record

Originating source: https://wcsecure.weblink.com.au/pdf/LYC/03154748.pdf (8 pages), released 29 October.

- Page 5 supplies all five quarters of sales, basket ASP and cash customer receipts; p6 supplies total REO, NdPr and combined Dy/Tb output. Inputs are preserved in `research/quarterly.csv`, with exact period ends and fiscal labels. Comparison percentages in `site/data/latest-summary.json` are Python calculations, not extra company guidance.
- Latest quarter: 3,039t REO sales; A$310.1m gross sales; A$102.1/kg ASP; A$266.6m receipts; 4,254t total REO output; 2,082t NdPr; 23t Dy/Tb. The news summaries were used only for discovery; these figures were checked in the original PDF.
- Page 7 gives closing cash and short-term deposits A$1,212.5m (cover rounds this to A$1,212m), prior balance A$1,209.1m, and capex/exploration/development payments A$28.7m. Do not call all cash movement operating cash flow.
- Cash bridge: 1209.1 + 266.6 + 29.0 + 12.2 - 185.2 - 28.7 - 0.3 - 4.2 - 29.9 - 52.3 - 3.8 = 1212.5 A$m.
- Page 6: roughly one-month Malaysia maintenance and roughly two-week Kalgoorlie/Western Power shutdown are planned for Q2 FY27. Lower December-quarter output is company outlook, not an observed result. Mt Weld IsaMill commencement is expected in Q2 FY27, not complete. The 900t/month NdPr figure is nameplate capacity, expressly not an ASX production target; no such figure is used as a model forecast.
- Pages 2–3: Meteoric remains a conditional scheme; integration scoping does not establish completion. Convertible instruments were executed, but the Vietnam metal-processing agreement remains under negotiation.
- Page 7: expanded Malaysia HRE works continue, prioritising Gd then Y. Do not infer an undisclosed revised cost, completed plant, commissioning date or EIA approval.
- Formal archive https://wcsecure.weblink.com.au/Clients/lynascorp/HeadlineJsonP.aspx?numberHdPerPage=100&pageNumber=1&year=2026&search= checked in full. A dated subset of all 11 entries from 25 September is retained in `site/data/formal-announcements.json`. Archive timestamps are converted to Australia/Sydney; UTC dates would incorrectly place the 29 October release on 28 October.
- Additional originals: director retirement https://wcsecure.weblink.com.au/pdf/LYC/03148420.pdf p1; AGM notice https://wcsecure.weblink.com.au/pdf/LYC/03148429.pdf pp1–3; Capital Group https://wcsecure.weblink.com.au/pdf/LYC/03150247.pdf p1; scheme securities https://wcsecure.weblink.com.au/pdf/LYC/03142912.pdf pp1,3–4. Retirement takes effect after the AGM, the AGM resolutions are not approved yet, client-account voting power is not CGC own-account ownership, and proposed shares have not been treated as issued.

The FY26 audited model anchor remains unchanged. FY26 reset loads exact reported annual volume and rounded basket price, with zero growth/inflation assumptions; a small revenue difference reflects rounded ASP. Existing reference/downside/upside presets remain hypothetical.
