import './Button.style.css'

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  round = false,
  ...rest
}) => (
  <button
    className={`button button--${variant} button--${size} ${
      round ? 'button--round' : ''
    }`}
    {...rest}
  >
    {children}
  </button>
)
