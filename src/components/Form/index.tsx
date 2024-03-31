import { ChangeEvent, useState } from "react";
import styles from "./form.module.scss";

const Form = () => {
  const [house, setHouse] = useState<"girl" | "boy" | "">("");
  const [confirm, setConfirm] = useState<"yes" | "no" | "">("");

  const handleChangeHouse = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as "girl" | "boy";
    setHouse(value);
  };

  return (
    <section className={`section ${styles.form}`}>
      <div className="container">
        <form method="POST">
          <h2 className={`section-title ${styles.form_title}`}>
            Xác nhận tham dự
          </h2>
          <p>Hãy cho chúng tôi biết bạn sẽ đến tham dự nhé!</p>
          <div className={styles.form_group}>
            <div className={styles.radio_group}>
              <label
                htmlFor="girl"
                className={styles.radio_container}
                title="ẤP TÂN PHÚ A, XÃ TÂN BÌNH, HUYỆN THANH BÌNH, TỈNH ĐỒNG THÁP"
              >
                <input
                  type="radio"
                  id="girl"
                  name="house"
                  value="girl"
                  onChange={handleChangeHouse}
                />
                <span>Tư Gia Nhà Gái</span>
              </label>
              <label
                htmlFor="boy"
                className={styles.radio_container}
                title="ẤP HẠ, XÃ TÂN BÌNH, HUYỆN THANH BÌNH, TỈNH ĐỒNG THÁP"
              >
                <input
                  type="radio"
                  id="boy"
                  name="house"
                  value="boy"
                  onChange={handleChangeHouse}
                />
                <span>Tư Gia Nhà Trai</span>
              </label>
            </div>
            <div className={styles.input_group}>
              <label htmlFor="guest">Tên Khách Mời</label>
              <input
                type="text"
                id="guest"
                name="guest"
                placeholder="Tên khách mời"
                required
              />
            </div>
            <div className={styles.input_group}>
              <div className={styles.select_group}>
                <select name="confirm" id="confirm" className={styles.select}>
                  <option value="true">Có tôi sẽ đến </option>
                  <option value="false">
                    Xin lỗi tôi không tham dự được !{" "}
                  </option>
                </select>
              </div>
              <div className={styles.select_group}>
                <select
                  name="num_user"
                  id="num_user"
                  className={`${styles.select} ${styles.num_user}`}
                >
                  <option value="1">1 Người</option>
                  <option value="2">2 Người</option>
                  <option value="3">3 Người</option>
                </select>
              </div>
            </div>
            <div className={styles.input_group}>
              <label htmlFor="message">
                Lời nhắn <span>(không bắt buộc)</span>
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={4}
              ></textarea>
            </div>
            <div className={styles.input_group}>
              <button type="submit" className="btn">
                Xác nhận
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
