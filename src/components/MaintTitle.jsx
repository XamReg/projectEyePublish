// import "./MaintTitle.css";
import styles from "../styles/layout/MaintTitle.module.scss";
import rainbow from "../assets/радуга.jpg";

const MaintTitle = () => {
  return (
    <div className={styles.blockTitle}>
      <div className={styles.contentTitle}>
        <h1 className={styles.title}>Цвет и характер человека</h1>
      </div>
      <div className={styles.blockContentTitle}>
        <div className={styles.blockDiscription}>
          <div className={styles.blockTitleColor}>
            <h1 className={styles.mainDiscription}>
              <b className={styles.mainDiscriptionColor}>Цвет</b> — это
              способность объектов отражать или излучать световые волны
              отдельной части спектра.
            </h1>
          </div>
          <div>
            <img className={styles.blockRainbol} src={rainbow} />
          </div>
        </div>
        <div className={styles.blockKnow}>
          <div className={styles.blockKnow_blockKnowTitle}>
            <h1>А знали ли Вы, что…?</h1>
          </div>
          <div className={styles.blockKnow_discription}>
            <ul className={styles.blockKnow_discription_blockUl}>
              <li className={styles.textUl}>
                Синий цвет во всем мире является самым любимым цветом.
              </li>
              <li className={styles.textUl}>
                Красный – это первый цвет, который видит ребенок.
              </li>
              <li className={styles.textUl}>
                Разные цвета вызывают разные эмоции.
              </li>
              <li className={styles.textUl}>
                Цвет может влиять на восприятие времени, пространства и даже
                вкуса.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MaintTitle };
