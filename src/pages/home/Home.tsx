export default function Home(props: any) {
  const gotoDetail = () => {
    props.history.push('/detail?iid=1m81ha6');
  };
  return (
    <div>
      <button onClick={gotoDetail}>你好</button>
    </div>
  );
}
