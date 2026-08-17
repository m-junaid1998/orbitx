import Icon from './Icon.jsx'

const VARIANTS = {
  primary:
    'relative overflow-hidden bg-primary text-white hover:bg-deep shadow-blue hover:-translate-y-0.5 ' +
    // sweep of light that crosses the button on hover
    'before:absolute before:inset-y-0 before:-left-full before:w-1/2 before:skew-x-[-20deg] ' +
    'before:bg-white/25 before:transition-transform before:duration-700 hover:before:translate-x-[320%]',
  ghost:   'border border-line bg-white text-ink hover:border-primary/40 hover:shadow-soft'
}

export default function Button({
  children,
  href = '#contact',
  variant = 'primary',
  icon = true,
  ...rest
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-all duration-300 ${VARIANTS[variant]}`}
      {...rest}
    >
      <span className="relative">{children}</span>
      {icon && (
        <Icon name="arrow" className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  )
}
