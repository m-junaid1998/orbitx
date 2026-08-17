/**
 * Team member avatar. Falls back to initials when no photo is set, so the
 * layout holds up before every photo has been supplied.
 */
function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export default function Avatar({ name, image, className = 'w-14 h-14' }) {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        loading="lazy"
        className={`${className} rounded-full object-cover border border-line shrink-0`}
      />
    )
  }

  return (
    <div
      className={`${className} rounded-full bg-tint border border-primary/15 grid place-items-center shrink-0`}
      aria-hidden="true"
    >
      <span className="font-display font-semibold text-primary text-sm">{initials(name)}</span>
    </div>
  )
}
