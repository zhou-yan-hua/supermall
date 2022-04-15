import styles from './index.less';
import TabBar from '@/components/tabbar/TabBar';
export default function IndexPage(props: any) {
  console.log(props);
  return (
    <div>
      <div style={{ padding: 20 }}>{props.children}</div>
      <TabBar />
    </div>
  );
}
