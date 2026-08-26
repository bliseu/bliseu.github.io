# bliseu.github.io

Li Bin's academic homepage, deployed at `https://libinlab.cn` with GitHub Pages and Jekyll.

## Structure

- `_pages/about.md`: homepage
- `_includes/`: homepage sections
- `PhyExp/`: standalone physics experiment tools
- `images/phyexp-qr.png`: PhyExp QR code

## Local preview

```bash
bash run_server.sh
```

## Deploy

Commit and push to `main`. GitHub Pages builds the site and serves it at `https://libinlab.cn`.

## Notes

- `CNAME` points the custom domain to GitHub Pages.
- `google_scholar_crawler/` updates Google Scholar citation data via GitHub Actions.
