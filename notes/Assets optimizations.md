# Assets optimizations

Use `brotli` for plain text compression. It's faster than `gzip` and `deflate`. Pre-compress static assets with `brotli+gzip`, compress dynamic assets (HTML) with `brotli` at level 1-4. Check for brotli support on CDNs. Make sure the server handles content processed with `brotli`

## Images

- Use responsive images, AVIF and WebP, with `srcset`, `picture` and `image-set`
	- Prefer AVIF to WebP
	- Provide a JPEG/PNG fallback
- Use *mozJPEG* for JPEG compression, *SVGO* for SVG compression, *Pingo* for PNG -- or use *Squoosh* for all of them (incl. AVIF)
- Make sure `width` and `height` are defined for all images
- For critical images, use progressive JPEGs and blur out unnecessary parts (by applying a Gaussian blur filter) and remove contrast (you can reapply it with CSS filters).
- Use `imaging-heap` to check the efficiency of your responsive markup

## Videos

- Use *animated WebP* (with a GIF fallback) or *looping HTML5 videos*
- Make sure that your MP4s are processed with a multipass-encoding, blurred with the *freior iirblur effect* (if applicable) and *moov atom* metadata is moved to the headof the file, while your server accepts byte serving.

## Fonts

- Prefer WOFF2
	-  Use a WOFF fallback, and display context in the fallback font right away
- Preload 1-2 fonts of each family
- Include `font-display: optional`
- Use *Font Load Events* for group repaints
- Use *Web Font Reflow Count* and *Time To Real Italics* metrics

---

- [Front-End Performance Checklist 2021](https://www.dropbox.com/s/34noajrbm324iai/performance-checklist-1.4.pdf?dl=0)