import styles from ".././styles/layout/EyeStructure.module.scss";
import headEye from "../assets/глаз.webp";
import headEye1 from "../assets/глаз1.webp";

const EyeStructure = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.blockTitle}>
          <h1 className={styles.title}>Строение глаза</h1>
        </div>
        <div className={styles.blockContent}>
          <div className={styles.imgBlock}>
            <img className={styles.imgEyeHead} src={headEye1} />
          </div>
          <div className={styles.contentWidth}>
            <div>
              <h1 className={styles.textUl}>
                Роговица – пропускает и преломляет свет. Склера – защищает
                содержание глаза, обеспечивает жесткость. Радужка – меняет
                размеры зрачка, регулирует свет. Хрусталик – обеспечивает
                фокусировку лучей света на сетчатке. Зрачок – отверстие в
                радужке, через которое проходит свет. Сетчатка – возбуждает
                зрительный нерв. Стекловидное тело – поддерживает форму глаза,
                пропускает свет. Периферический отдел – здесь расположены
                рецепторы сетчатки глаза. Проводниковая часть – это зрительный
                нерв. Центральный отдел – центр зрительного анализатора
                локализован в затылочной части головы человека.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.blockTitle}>
          <h1 className={styles.title}>Работа зрительного анализатора</h1>
        </div>
        <div className={styles.blockContent}>
          <div className={styles.imgBlock}>
            <img className={styles.imgEyeHead} src={headEye} />
          </div>
          <div className={styles.contentWidth}>
            <div>
              <h1 className={styles.mainDiscription}>
                Путь прохождения зрительного сигнала:{" "}
              </h1>
            </div>
            <div>
              <h1 className={styles.textUl}>
                Роговица → хрусталик → стекловидное тело → сетчатка → зрительный
                нерв → зрительная зона коры мозга.{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EyeStructure };
