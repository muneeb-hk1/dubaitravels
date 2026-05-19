// types.d.ts
import 'react';

declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/react' {
    import { ReactNode } from 'react';
    import { SwiperProps, SwiperSlideProps } from 'swiper/react';
    export const Swiper: React.FunctionComponent<SwiperProps & { children?: ReactNode }>;
    export const SwiperSlide: React.FunctionComponent<SwiperSlideProps & { children?: ReactNode }>;
}
declare module 'swiper/modules';