import React, { useEffect } from 'react'
import imageHero from '../../public/MeanProfile.png'
import { TypeAnimation } from 'react-type-animation'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'

const hero = (): React.JSX.Element => {
    useEffect(() => {
        initLightboxJS("Hero", "image")
    })

    return (
        <div className='hero'>
            <div className="left">
                <h1>MeanMobileShop</h1>
                <h2 className="description">
                    ร้านเรา {" "}
                    <TypeAnimation
                        sequence={[
                            'เรายินดีให้บริการโทรศัพท์มือถือที่คุณต้องการ',
                            2500,
                            'พร้อมตอบโจทย์ทุกความต้องการด้านเทคโนโลยี',
                            2500,
                            'มอบประสบการณ์ที่เหนือชั้นและทันสมัย',
                            2500,
                            'บริการด้วยความจริงใจและความใส่ใจ',
                            2500
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h2>
                <p>
                    นวัตกรรมแห่งการสื่อสารที่เชื่อมต่อโลกไว้ในมือคุณ ด้วยความสามารถที่หลากหลาย ตั้งแต่การโทรติดต่อสื่อสาร, การใช้งานอินเทอร์เน็ต, ไปจนถึงฟีเจอร์ถ่ายภาพและวิดีโอที่คมชัด โทรศัพท์มือถือรุ่นใหม่มอบประสบการณ์ที่ครอบคลุมทั้งความสะดวกสบาย และเทคโนโลยีล้ำสมัยในทุกการใช้งาน
                </p>
                <div className="btn-hero">
                    <div className="btn">
                        <button>สั่งซื้อสินค้า</button>
                    </div>
                    <div className="btn">
                        <button>สมัครสมาชิก</button>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="image-hero">
                    <div className="image">
                        <SlideshowLightbox>
                            <img src={imageHero} alt="" />
                        </SlideshowLightbox>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hero