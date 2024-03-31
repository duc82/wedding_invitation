import { useEffect, useState } from "react";
import styles from "./countdown.module.scss";

const formatInt = (n: number) => (n > 9 ? n : `0${n}`);

const formatDays = (time: number) => Math.floor(time / (1000 * 60 * 60 * 24));
const formatHours = (time: number) =>
  Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const formatMinutes = (time: number) =>
  Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const formatSeconds = (time: number) => Math.floor((time % (1000 * 60)) / 1000);

const Countdown = ({ time }: { time: number }) => {
  const [countdown, setCountdown] = useState<number>(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`section ${styles.section_countdown}`}>
      <div className={`container ${styles.countdown_container}`}>
        <p>Cùng đếm ngược thời gian</p>
        <h2 className="heading-small">Save the date</h2>
        <svg
          className={styles.heartbeat}
          width="64"
          height="64"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="red"
            d="M16.5 13.287c-2.475-2.716-5.5-.712-5.5 2.112c0 2.56 1.814 4.035 3.358 5.292l.044.036l.427.35c.571.475 1.121.923 1.671.923s1.1-.448 1.671-.923C19.789 19.73 22 18.224 22 15.399c0-.927-.326-1.767-.853-2.38c-1.075-1.251-2.985-1.556-4.647.268Z"
          ></path>
          <path
            fill="#f1ebe4"
            d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501C16.5.825 22 4.274 22 9.137c0 .834-.118 1.6-.329 2.31a4.203 4.203 0 0 0-2.619-.947c-.89-.005-1.758.274-2.553.81c-1.39-.933-2.956-1.058-4.33-.395c-1.635.79-2.669 2.556-2.669 4.484c0 2.306 1.149 3.923 2.342 5.095c-.948-.076-1.897-.808-2.88-1.583c-.277-.219-.564-.44-.856-.664Z"
          ></path>
        </svg>
        <div className={styles.timer}>
          <div className={styles.item}>
            <div className={styles.time}>
              {formatInt(formatDays(countdown))}
            </div>
            <span className={styles.label}>Ngày</span>
          </div>
          <div className={styles.item}>
            <div className={styles.time}>
              {formatInt(formatHours(countdown))}
            </div>
            <span className={styles.label}>Giờ</span>
          </div>
          <div className={styles.item}>
            <div className={styles.time}>
              {formatInt(formatMinutes(countdown))}
            </div>
            <span className={styles.label}>Phút</span>
          </div>
          <div className={styles.item}>
            <div className={styles.time}>
              {formatInt(formatSeconds(countdown))}
            </div>
            <span className={styles.label}>Giây</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
