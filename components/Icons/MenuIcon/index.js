import styles from "./index.module.css";

export const MenuIcon = ({onClick, width = "2rem", open = false}) => {
  return (
    <button
      className={styles.button}
      onClick={(e) => {
        if (typeof onClick !== "function") return;
        onClick(e);
      }}
    >
      <svg
        width={width}
        height={width}
        viewBox={"0 0 100 100"}
      >
        <path 
          className={`${styles.top} ${open ? styles.open : ""}`}
        />
        <path 
          className={`${styles.middle} ${open ? styles.open : ""}`}
        />
        <path 
          className={`${styles.bottom} ${open ? styles.open : ""}`}
        />
      </svg>

    </button>
  );
};
