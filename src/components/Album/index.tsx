import FancyboxProvider from "../../providers/FancyBoxProivder";
import styles from "./album.module.scss";

const Album = () => {
  const images: string[] = Array.from(
    { length: 9 },
    (_, i) => `/albums/${i + 1}.jpeg`
  );

  return (
    <section
      className={`section ${styles.album}`}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="section-heading">
        <h2 className="heading-small">Album Ảnh</h2>
      </div>
      <FancyboxProvider className={`container ${styles.list}`}>
        {images.map((image, index) => (
          <div key={index} className={styles.item}>
            <a href={image} data-fancybox="gallery">
              <img src={image} alt={`Album ảnh ${index + 1}`} />
            </a>
          </div>
        ))}
      </FancyboxProvider>
    </section>
  );
};

export default Album;
