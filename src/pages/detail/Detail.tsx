import React, { useEffect, useState } from 'react';
import dtRequest from '@/network/detail/detailData';

// 引入组件必须是大写
import DetailTabbar from './modules/detailTabbar/DetailTabbar';
import HsSwiper from '@/components/swiper/Swiper';
import DetailInfo from './modules/detailinfo/DetailInfo';

export default function Detail(props: any) {
  const [data, setdata] = useState({ itemInfo: { topImages: [] } });
  useEffect(() => {
    dtRequest
      .get({
        url: '/detail?iid=' + props.location.query.iid,
      })
      .then((res) => {
        let data: any = res;
        setdata(data.result);
      });
  }, []);

  return (
    <div>
      <DetailTabbar></DetailTabbar>
      <HsSwiper imageData={data.itemInfo.topImages}></HsSwiper>
      <DetailInfo itemInfo={data.itemInfo}></DetailInfo>
    </div>
  );
}
