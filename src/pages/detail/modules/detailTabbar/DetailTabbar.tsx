import styles from './dtTabbar.css';
import { history } from 'umi';

export default function DetailTabbar() {
  const data = ['商品', '参数', '评论', '推荐'];
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className={styles.dtTabbar}>
      <div onClick={goBack} className={styles.tbItem}>
        {'<'}
      </div>
      {data.map((item) => {
        return (
          <a className={styles.tbItem} key={item}>
            {item}
          </a>
        );
      })}
    </div>
  );
}
