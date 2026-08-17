export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`px-6 py-20 md:py-28 ${className}`}>
      <div className="max-w-shell mx-auto">{children}</div>
    </section>
  )
}
