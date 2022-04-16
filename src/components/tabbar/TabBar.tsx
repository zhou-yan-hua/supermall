import styles from './tabbar.css';
import { history } from 'umi';
import { useState } from 'react';
import {
  AppstoreOutline,
  KoubeiOutline,
  TagOutline,
  TeamFill,
} from 'antd-mobile-icons';

export default function TabBar(props: any) {
  const [active, setactive] = useState('/home');
  const goTopage = (url: string) => {
    history.push(url);
    setactive(url);
  };
  const tabPath = ['/home', '/category', '/cart', '/profile'];

  //Record:定义对象键和值的类型，以便于提取
  type stringKey = Record<string, string>;
  const tabNames: stringKey = {
    home: '首页',
    category: '分类',
    cart: '购物车',
    profile: '我的',
  };
  type stringKeyIcon = Record<string, any>;
  const tabIcons: stringKeyIcon = {
    home: <AppstoreOutline />,
    category: <KoubeiOutline />,
    cart: <TagOutline />,
    profile: <TeamFill />,
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
            key={item}
          >
            {tabNames[item.substr(1)]}
            <div style={{ fontSize: 27 }} key={tabIcons[item.substr(1)]}>
              {tabIcons[item.substr(1)]}
            </div>
          </div>
        ) : (
          <div
            onClick={() => {
              goTopage(item);
            }}
          >
            {tabNames[item.substr(1)]}
            <div style={{ fontSize: 27 }} key={tabIcons[item.substr(1)]}>
              {tabIcons[item.substr(1)]}
            </div>
          </div>
        );
      })}
    </div>
  );
}
