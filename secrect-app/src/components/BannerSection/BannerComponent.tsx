import Image from 'next/image';
import React from 'react';
import banner  from '@/assets/img/banner.png'
function BannerComponent() {
    return (
        <section className=''>
            <Image className='rounded-lg' src={banner.src} alt='' width={1920} height={1080}/>
        </section>
    );
}

export default BannerComponent;