import React from 'react'
import  { Swiper , SwiperSlide } from "swiper/react"
import  { Autoplay , Pagination} from "swiper"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PropertCard from '@/Features/common/modules/PropertCard';
import { useIsDesktop } from '@/Features/common/Hooks/useDesktop';



const PropertySLider = ({featuredProperties}) => {
    const {IsDesktop} = useIsDesktop();
  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={IsDesktop ? 3 : 1}
    loop={true}
    loopFillGroupWithBlank={true}
    centeredSlides={true}
    pagination={{ dynamicBullets: true }}
    autoplay= {{ delay:2000 , disableInteraction: true}}
    modules ={[ Autoplay, Pagination ]}
    className="mySwiper"
  >
{
    featuredProperties.map((property)=>{
        return(
            <SwiperSlide key={property.id}>
               <PropertCard {...property}/>
            </SwiperSlide>
        )
    })
}
  </Swiper>
  )
}

export default PropertySLider
