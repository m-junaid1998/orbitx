export default function Eyebrow({ children }) {
  return (
    <div className="eyebrow text-primary flex items-center gap-3 mb-5">
      <span className="w-6 h-px bg-primary/40" />
      {children}
    </div>
  )
}
