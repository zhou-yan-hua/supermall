import React from 'react';
import { Swiper } from 'antd-mobile';
export default function hsSwiper(props: any) {
  console.log(props);
  const items = props.imageData.map((item: string, index: number) => (
    <Swiper.Item key={index}>
      <div>
        <img src={item} alt="" style={{ display: 'block', width: '100vw' }} />
      </div>
    </Swiper.Item>
  ));
  return (
    <div>
      <Swiper
        loop
        autoplay
        style={{
          '--border-radius': '8px',
          height: '40vh',
          width: '100vw',
        }}
      >
        {items}
      </Swiper>
    </div>
  );
}
