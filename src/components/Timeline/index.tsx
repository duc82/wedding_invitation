import styles from "./timeline.module.scss";
import timelines from "../../datas/timelines.json";

const Timeline = () => {
  return (
    <section className={`section ${styles.timeline}`}>
      <div className={styles.bg_overlay}></div>
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Love Story</h2>
        </div>

        <div className={styles.list}>
          {timelines.map((timeline) => (
            <div
              key={timeline.id}
              className={styles.item}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.media}>
                <img
                  src={timeline.image}
                  alt={"Image"}
                  className="timline-img"
                />
              </div>

              <div className={styles.body}>
                <span className={styles.story_date}>{timeline.time}</span>
                <span className={styles.title}>{timeline.title}</span>
                <p></p>
                <p>{timeline.description} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
