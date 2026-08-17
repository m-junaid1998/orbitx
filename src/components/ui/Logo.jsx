/**
 * The OrbitX wordmark.
 *
 * The file is public/assets/orbitx-logo.png — the logo you supplied, cropped
 * to the mark with the white background removed so it sits cleanly on any
 * surface. Swap that file to change the logo everywhere; nothing else needs
 * editing. If you get an SVG later, point `src` at it and it will scale even
 * more sharply.
 *
 * Height is set by the caller (h-8, h-9, …); width follows the aspect ratio.
 */
export default function Logo({ className = 'h-9 w-auto' }) {
  return (
    <img
      src="./assets/orbitx-logo.png"
      alt="OrbitX Digital Solutions"
      className={className}
      width="500"
      height="192"
      decoding="async"
    />
  )
}
