import { useEffect, useState } from "react";
import { companyData as data } from "../data/data";
import { useLocation, useParams } from "react-router-dom";
import styles from "../styles/layout/ContentColor.module.scss";

const ContentColor = () => {
  const [colorData, setColorData] = useState({});
  const { state } = useLocation();
  const params = useParams();
  const paramsId = params.id;

  useEffect(() => {
    let contentFilter = data.filter((el) => el?.id == paramsId);
    setColorData(() => contentFilter[0]);
  }, []);

  const Content = ({ img, title, discription }) => {
    return (
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Результаты исследований</h1>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.blockImg}>
            <img className={styles.imgStyle} src={img} alt={title} />
          </div>
          <div className={styles.blockContent}>
            <div className={styles.blockContent_blockTitle}>
              <h1 className={styles.textContentTitle}>{title}</h1>
            </div>
            <div>
              <h1 className={styles.textContentDiscript}>{discription}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}></div>
      <Content
        img={colorData?.img}
        title={colorData?.title}
        discription={colorData?.discription}
      />
    </div>
  );
};

export { ContentColor };
