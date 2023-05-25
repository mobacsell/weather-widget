import styles from "./Error.module.css";

export function Error() {
  return (
    <div className={styles.root}>
      <h1>Произошла ошибка.</h1>
      <p>
        К сожалению, в данный момент сервис не работает. Попробуйте обновить
        страницу позже.
      </p>
    </div>
  );
}
