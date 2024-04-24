import diagram from "../assets/диаграмма 1.png";
import styles from ".././styles/layout/Graphics.module.scss";

const Graphics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blockTitle}>
        <h1 className={styles.title}>Интересные факты</h1>
      </div>
      <div className={styles.blockContent}>
        <div className={styles.imgBlock}>
          <img className={styles.imgEyeHead} src={diagram} />
        </div>
        <div className={styles.contentWidth}>
          <ul className={styles.blockUl}>
            <li className={styles.textUl}>
              Термин «Голубая кровь» начали использовать тогда, когда
              влиятельные семьи Египта начали использовать его для своих
              одеяний.
            </li>
            <li className={styles.textUl}>
              По статистике самым любимым цветом является синий, олицетворяющий
              спокойствие и безмятежность (40% в мире). Далее идут зеленый и
              пурпурный. Первый чаще всего выбирают мужчины, а второй — женщины.
              Самый нелюбимый — белый.
            </li>
            <li className={styles.textUl}>
              Воробьи видят мир в розовом цвете и не могут различать другие
              цвета.
            </li>
            <li className={styles.textUl}>
              Накидка матодора красная вовсе не потому, что быка раздражает этот
              цвет. Быки не различают цвета. Всё потому, что они дальтоники.
              Красный цвет использовали для того, чтобы скрыть брызги крови от
              зрителей.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Graphics };
