import styles from "./message.module.scss";

const Mesage = () => {
  const messages = Array.from({ length: 100 }, (_, i) => ({
    name: "Nguyễn Văn A",
    text: `Chúc 2 bạn trăm năm hạnh phúc, sớm sinh quý tử nhé!❤️❤️ ${i + 1}`,
  }));

  return (
    <section className={`section ${styles.message}`}>
      <div className={styles.bg_overlay}></div>
      <div className={`container ${styles.message_container}`}>
        <h2 className="section-title">Gửi lời chúc đến cặp đôi</h2>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div key={index} className={styles.message_item}>
              <h3>{message.name}</h3>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.blur_bg}>
          <h3 className={styles.form_title}>Gửi lời chúc</h3>
          <form method="POST">
            <div className={styles.input_group}>
              <label htmlFor="name">Tên của bạn</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="message">Lời nhắn gửi</label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Gửi lời chúc
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Mesage;
