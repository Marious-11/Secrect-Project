import Image from 'next/image';
import React from 'react';
import banner  from '@/assets/img/banner.jpg'
function BannerComponent() {
    return (
        <section className=''>
            <Image className='rounded-lg' priority quality={100}  loading='eager' src={banner.src} alt='' width={1920} height={400}/>
        </section>
    );
}

export default BannerComponent;