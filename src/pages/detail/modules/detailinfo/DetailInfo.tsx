import styles from './DetailInfo.css';

export default function DetailInfo(props: any) {
  return (
    <div>
      <div className={styles.title}>{props.itemInfo.title}</div>
      <div className={styles.price}>
        <span>{props.itemInfo.lowNowPrice}</span>
        <span>{'￥' + props.itemInfo.lowPrice}</span>
        <div>{props.itemInfo.discountDesc}</div>
      </div>
      <div className={styles.infomation}>
        <div>销量 1408</div>
        <div>收藏5人</div>
        <div>72小时发货</div>
      </div>
    </div>
  );
}
