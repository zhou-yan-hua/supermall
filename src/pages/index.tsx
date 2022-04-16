import TabBar from '@/components/tabbar/TabBar';
// 引入初始化样式
import '../assets/css/normalize.css';

export default function IndexPage(props: any) {
  return (
    <div>
      <div>{props.children}</div>
      <TabBar />
    </div>
  );
}
