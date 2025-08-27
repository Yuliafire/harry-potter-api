import { useRouteError } from 'react-router-dom';
import styles from './NotFound.module.scss';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);
  if (error instanceof Error) {
    return (
      <div id="error-page" className={styles.errorPage}>
        <h1 className={styles.heading}>Oops!</h1>
        <p className={styles.description}>
          Sorry, an unexpected error has occurred.
        </p>
        <p className={styles.errorMessage}>
          <i>{error.message}</i>
        </p>
      </div>
    );
  }
}
