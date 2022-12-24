import styles from "./index.module.css";

export const Button = ({variant = "text", fullWidth = false, children, ...rest}) => {
  return (

  <button
    {...rest}
    className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.full_width : ""}`}
  >

    {children}

  </button>
  )
}