import FancyboxProvider from "@/providers/FancyBoxProivder";
import "./gift.scss";
import styles from "./gift.module.scss";

const Gift = () => {
  return (
    <section className={`section ${styles.gift}`}>
      <div className="container">
        <h2 className={`heading-small ${styles.gift_title}`}>
          Gửi quà đến cô dâu và chú rể
        </h2>
        <FancyboxProvider>
          <a href="#box-gift" data-fancybox className="btn">
            <svg
              width="54"
              height="54"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="white">
                <path
                  d="M208 128v72a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-72Z"
                  opacity=".2"
                ></path>
                <path d="M216 72h-35.08c.39-.33.79-.65 1.17-1A29.53 29.53 0 0 0 192 49.57A32.62 32.62 0 0 0 158.44 16A29.53 29.53 0 0 0 137 25.91a54.94 54.94 0 0 0-9 14.48a54.94 54.94 0 0 0-9-14.48A29.53 29.53 0 0 0 97.56 16A32.62 32.62 0 0 0 64 49.57A29.53 29.53 0 0 0 73.91 71c.38.33.78.65 1.17 1H40a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-64a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m-67-35.49a13.69 13.69 0 0 1 10-4.5h.49A16.62 16.62 0 0 1 176 49.08a13.69 13.69 0 0 1-4.5 10c-9.49 8.4-25.24 11.36-35 12.4c1.2-10.59 4.5-25.98 12.5-34.97m-64.09.36A16.63 16.63 0 0 1 96.59 32h.49a13.69 13.69 0 0 1 10 4.5c8.39 9.48 11.35 25.2 12.39 34.92c-9.72-1-25.44-4-34.92-12.39a13.69 13.69 0 0 1-4.5-10a16.6 16.6 0 0 1 4.82-12.16ZM40 88h80v32H40Zm16 48h64v64H56Zm144 64h-64v-64h64Zm16-80h-80V88h80z"></path>
              </g>
            </svg>
          </a>
          <div id="box-gift" className="box_gift">
            <div className="gift_container">
              <div className="gift_card">
                <div className="gift_qr">
                  <img
                    src="https://thiepdientu.com.vn/wp-content/uploads/2023/12/qr-img.png"
                    alt=""
                    className="groom_qr"
                  />
                </div>
                <div className="gift-body">
                  <p>CÔNG THÀNH</p>
                </div>
              </div>
              <div className="gift_card">
                <div className="gift_qr">
                  <img
                    src="https://thiepdientu.com.vn/wp-content/uploads/2023/12/qr-img.png"
                    alt=""
                    className="groom_qr"
                  />
                </div>
                <div className="gift-body">
                  <p>CÔNG THÀNH</p>
                </div>
              </div>
            </div>
          </div>
        </FancyboxProvider>
      </div>
    </section>
  );
};

export default Gift;
