import styles from "./about.module.scss";

const About = () => {
  const duration = 2000;

  return (
    <section className="section">
      <div className="section-heading">
        <h2 className="section-title">CHÚ RỂ VÀ CÔ DÂU</h2>
      </div>
      <div className="container">
        <div className={styles.card}>
          <div
            className={styles.media}
            data-aos="fade-left"
            data-aos-duration={duration}
          >
            <img src="/codau.jpeg" alt="img" />
          </div>
          <div
            className={styles.data}
            data-aos="fade-right"
            data-aos-duration={duration}
          >
            <h3 className={styles.name}>Phương Ánh</h3>
            <p className="bride_birthday">20/12/2001</p>
            <p className="bride_des">
              Cô dâu thuộc tuýp người hướng nội . Sở thích nấu nướng và đi du
              lịch cùng gia đình.
            </p>
            <hr />
          </div>
        </div>
        <div className={styles.card}>
          <div
            className={styles.data}
            data-aos="fade-right"
            data-aos-duration={duration}
          >
            <h3 className={styles.name}>Công Thành</h3>
            <p className="bride_birthday">12/12/1998</p>
            <p className="bride_des">
              Chú rể là người cởi mở, thân thiện, giao tiếp tốt và thuộc tuýp
              người hướng ngoại.
            </p>
            <hr />
          </div>
          <div
            className={styles.media}
            data-aos="fade-left"
            data-aos-duration={duration}
          >
            <img src="/chure.jpeg" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
