import Link from "../../../node_modules/next/link";
import { useRouter } from "../../../node_modules/next/router";
import styles from "./styles.module.scss";

const Header = () => {
  const { asPath } = useRouter();
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src='/logo.svg' alt='DevNews' />
        <nav>
          <Link href='/'>
            <a className={asPath == "/" ? styles.active : ""}>Home</a>
          </Link>
          <Link href='/posts'>
            <a className={asPath == "/posts" ? styles.active : ""}>Posts</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
