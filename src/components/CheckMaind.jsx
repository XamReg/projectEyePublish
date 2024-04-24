import styles from "../styles/layout/CheckMaind.module.scss";
import color1 from "../assets/1.jpg";
import color2 from "../assets/2.jpg";
import color3 from "../assets/3.jpg";
import color4 from "../assets/4.jpg";
import color5 from "../assets/5.jpg";
import color6 from "../assets/6.jpg";
import color7 from "../assets/7.jpg";
import color8 from "../assets/8.jpg";
import color9 from "../assets/9.jpg";
import color10 from "../assets/10.jpg";
import { ContentColor } from "./ContentColor";
// import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const CheckMaind = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blockTitle}>
        <h1 className={styles.title}>Проверь себя, пройди исследование</h1>
      </div>
      <div className={styles.blockDiscription}>
        <h1 className={styles.textDiscription}>
          Выберите из десяти представленных картинок, каждая из которых имеет
          свой доминирующий цвет (красный, жёлтый, зелёный, розовый и т.п.),
          наиболее понравившуюся.
        </h1>
      </div>
      <div className={styles.blockImg}>
        <Link
          to={{ pathname: `colorContent/${1}` }}
          className={styles.imgBlock}
        >
          <img className={styles.imgColor} src={color1} />
        </Link>
        <Link
          to={{ pathname: `colorContent/${2}` }}
          className={styles.imgBlock}
        >
          <img className={styles.imgColor} src={color2} />
        </Link>
        <Link
          to={{ pathname: `colorContent/${3}` }}
          className={styles.imgBlock}
        >
          <img className={styles.imgColor} src={color3} />
        </Link>
        <Link
          to={{ pathname: `colorContent/${4}` }}
          className={styles.imgBlock}
        >
          <img className={styles.imgColor} src={color4} />
        </Link>
        <Link
          to={{ pathname: `colorContent/${5}` }}
          className={styles.imgBlock}
        >
          <img className={styles.imgColor} src={color5} />
        </Link>
        <Link
          to={{ pathname: `colorContent/${6}` }}
          className={styles.imgBlock}
        >
          <img className={styles.imgColor} src={color6} />
        </Link>
        <Link
          to={{ pathname: `colorContent/${7}` }}
          className={styles.imgBlock}
        >
          <img className={styles.imgColor} src={color7} />
        </Link>
        <Link
          to={{ pathname: `colorContent/${8}` }}
          className={styles.imgBlock}
        >
          <img className={styles.imgColor} src={color8} />
        </Link>
        <Link
          to={{ pathname: `colorContent/${9}` }}
          className={styles.imgBlock}
        >
          <img className={styles.imgColor} src={color9} />
        </Link>
        <Link
          to={{ pathname: `colorContent/${10}` }}
          className={styles.imgBlock}
        >
          <img className={styles.imgColor} src={color10} />
        </Link>
      </div>
    </div>
  );
};

export { CheckMaind };
