import TabBar from '@/components/tabbar/TabBar';

export default function IndexPage(props: any) {
  return (
    <div>
      <div>{props.children}</div>
      <TabBar />
    </div>
  );
}
