import styles from './tabbar.css';
import { history } from 'umi';
import { useState } from 'react';

export default function TabBar(props: any) {
  const [active, setactive] = useState('/home');
  const goTopage = (url: string) => {
    history.push(url);
    setactive(url);
  };
  const tabPath = ['/home', '/category', '/cart', '/profile'];
  const tabName = {
    home: '首页',
    category: '分类',
    cart: '购物车',
    profile: '我的',
  };

  return (
    <div className={styles.TabBar}>
      {tabPath.map((item: string) => {
        return active === item ? (
          <div
            onClick={() => {
              goTopage(item);
            }}
            style={{ color: 'red' }}
          >
            {tabName[item.substr(1)]}
          </div>
        ) : (
          <div
            onClick={() => {
              goTopage(item);
            }}
          >
            {tabName[item.substr(1)]}
          </div>
        );
      })}
    </div>
  );
}
