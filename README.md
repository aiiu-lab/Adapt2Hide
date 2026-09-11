# Adapt2Hide — ICIP 2026

Project page for **Adapt2Hide: Leveraging Off-the-shelf Autoencoder for Reversible Visual Processing**, accepted as **ICIP 2026 Spotlight Oral (top 3%)**.

The page preserves the original ReVP site's centered academic layout, navy resource buttons, zoomable figures, light/dark theme, and wave footer. It is implemented as a self-contained static site with HTML, CSS, and JavaScript; no Node installation, build step, external font, or CDN is needed.

## Preview

Open `index.html` directly, or serve this directory:

```sh
cd Adapt2Hide_Project_Page_Draft
python3 -m http.server 8000
```

Visit <http://localhost:8000>. Figure enlargement and citation download work locally. Clipboard copying requires browser permission; if copying is unavailable, the citation is selected for manual copying.

## Files

- `index.html`: title, authors, venue, abstract, method, selected results, acknowledgments, metadata, and citation.
- `assets/css/main.css`: responsive styling, dark mode, and the inherited visual theme.
- `assets/js/main.js`: accessible figure dialogs and citation copying.
- `images/`: optimized paper figures, social preview, and inherited footer assets.
- `paper/Adapt2Hide.pdf`: main manuscript and references, compiled from the supplied LaTeX (6 pages).
- `paper/Adapt2Hide-supplementary.pdf`: appendix and supplementary figures from the same compilation (12 pages).
- `paper/architecture.pdf`: original vector architecture figure.
- `paper/Adapt2Hide.bib`: downloadable citation, matching the visible BibTeX block.

The Paper button links to the [IEEE Xplore publication](https://ieeexplore.ieee.org/document/11630116/) (DOI: `10.1109/ICIP61757.2026.11630116`). The Supplementary button and supplementary references open `paper/Adapt2Hide-supplementary.pdf`, the 12-page PDF bundled in this repository. An IEEE-hosted supplement could not be verified: its media page was not readable during the check, and the Crossref metadata does not list supplementary files. The compiled main manuscript is retained locally as a reference copy.

## Content sources

- Title, author order, affiliations, and equal contributions: `../ICIP2026_Adapt2Hide/main.tex`.
- Abstract: `../ICIP2026_Adapt2Hide/sec/00-abs.tex`.
- Architecture, applications, and experiment descriptions: `sec/03-method.tex`, `sec/04-app.tex`, and `sec/05-exp.tex` in the paper source.
- Table values: selected rows from `assets/tables/main.tex`. The metric-reference and evaluation-setting notes are included below the table.
- Display figures: the supplied paper's `assets/figures/` directory. WebP versions are for visualization; they are not downloadable steganographic containers for inference.
- Visual theme and footer assets: `../revp2024.github.io/`.
- ICIP 2026 spotlight oral (top 3%) status: provided by the project owner.
- Author hyperlinks: verified personal or faculty websites for all six authors.

The code link comes from the paper. The publication URL and DOI were verified against Crossref metadata. No author homepages or page numbers have been guessed. No analytics or site-verification identifiers from the previous page are included.

The manuscript was compiled in a temporary copy of the source using `latexmk -pdf`, then split at the appendix boundary and optimized with Ghostscript's printer preset. The supplied LaTeX reports duplicate labels because it imports its own `main.aux` via `\externalcitedocument{main}`; the source has not been modified. Replace the local PDFs with the final publisher or author versions if appropriate.

## Edit

Edit page text and resource links in `index.html`. Update both the visible BibTeX block and `paper/Adapt2Hide.bib` if publication metadata changes.

All local URLs are relative, so the site works both at a domain root and under a repository path. Once the public URL is decided, set `og:image` to an absolute public URL and add a canonical URL to the HTML head for social crawlers. Scholarly metadata includes the publication DOI.

## GitHub Pages

Publish the contents of this directory as the repository root. In the repository's **Settings → Pages**, choose **Deploy from a branch**, then select the desired branch and **/(root)**. The included `.nojekyll` file allows GitHub Pages to serve the static files directly. No deployment has been performed by creating this draft.

## Attribution

Website theme adapted from [MeDM](https://github.com/medm2023/medm2023.github.io). Website material is shared under [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/), retaining that attribution in the footer. Paper and research-image rights remain with their respective owners; teaser image credits are Unsplash, the White House, and NYU Tandon, as listed in the paper.
