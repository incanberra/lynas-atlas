# Evidence and verification record

As of 28 October 2026 (Australia/Sydney). Company filings are the originating source; reporting a company statement does not independently validate its underlying forecast. No private information is included.

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
| Latest quarterly results included are June 2026 | Fact about coverage | Supported | Official archive and 19 Oct notice schedule Sept release for 29 Oct |
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
