import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_bottom}>
        <p>Bản quyền {new Date().getFullYear()} thuộc về duc82®</p>
      </div>
    </footer>
  );
};

export default Footer;
