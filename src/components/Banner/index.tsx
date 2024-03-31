import styles from "./banner.module.scss";

const bridegroom = "Công Thành";
const bride = "Phương Ánh";

const Banner = () => {
  return (
    <section className="section">
      <img
        src="/leaf-top.png"
        className={styles.bg_top}
        data-aos="fade-down-left"
        data-aos-duration="2000"
        alt="leaf-top"
      />
      <img
        src="/top-right.png"
        className={styles.bg_right}
        data-aos="fade-left"
        data-aos-duration="2000"
        alt="top-right"
      />
      <img
        src="/bottom-left.png"
        className={styles.bg_bottom_left}
        data-aos="fade-up-right"
        data-aos-duration="2000"
        alt="bottom-left"
      />
      <img src="/leaf1.png" className={styles.leaf_1} alt="leaf1" />
      <img src="/leaf2.png" className={styles.leaf_2} alt="leaf2" />
      <div className={`container ${styles.banner_container}`}>
        <h1 className={styles.title}>Save the date</h1>
        <div className={styles.name}>
          {bridegroom}
          <br />
          &
          <br />
          {bride}
        </div>
        <div>
          <p>Vào Lúc</p>
          <p className={styles.time}>10H00</p>
        </div>
        <div className={styles.date}>
          <span className={styles.day_name}>Chủ Nhật</span>
          <span>|</span>
          <span className={styles.date_no}>04</span>
          <span>|</span>
          <span className={styles.month}>02</span>
        </div>
        <div>
          <p>Hôn lễ được tổ chức tại</p>
          <p className={styles.address_name}>Luxury Palace</p>
          <address>171 Nguyễn Thái Sơn, P8, Gò Vấp</address>
        </div>
        <div className="social_link">
          <a href="tel:+84562992522">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
            </svg>
          </a>
          <a href="#gift">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.0049 2.00281C17.214 2.00281 19.0049 3.79367 19.0049 6.00281C19.0049 6.73184 18.8098 7.41532 18.4691 8.00392L23.0049 8.00281V10.0028H21.0049V20.0028C21.0049 20.5551 20.5572 21.0028 20.0049 21.0028H4.00488C3.4526 21.0028 3.00488 20.5551 3.00488 20.0028V10.0028H1.00488V8.00281L5.54065 8.00392C5.19992 7.41532 5.00488 6.73184 5.00488 6.00281C5.00488 3.79367 6.79574 2.00281 9.00488 2.00281C10.2001 2.00281 11.2729 2.52702 12.0058 3.35807C12.7369 2.52702 13.8097 2.00281 15.0049 2.00281ZM13.0049 10.0028H11.0049V20.0028H13.0049V10.0028ZM9.00488 4.00281C7.90031 4.00281 7.00488 4.89824 7.00488 6.00281C7.00488 7.05717 7.82076 7.92097 8.85562 7.99732L9.00488 8.00281H11.0049V6.00281C11.0049 5.00116 10.2686 4.1715 9.30766 4.02558L9.15415 4.00829L9.00488 4.00281ZM15.0049 4.00281C13.9505 4.00281 13.0867 4.81869 13.0104 5.85355L13.0049 6.00281V8.00281H15.0049C16.0592 8.00281 16.923 7.18693 16.9994 6.15207L17.0049 6.00281C17.0049 4.89824 16.1095 4.00281 15.0049 4.00281Z"></path>
            </svg>
          </a>
          <a href="https://www.google.com/maps/@21.0304536,105.8647617,16.13z?entry=ttu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2 5L9 2L15 5L21.303 2.2987C21.5569 2.18992 21.8508 2.30749 21.9596 2.56131C21.9862 2.62355 22 2.69056 22 2.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V5Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
