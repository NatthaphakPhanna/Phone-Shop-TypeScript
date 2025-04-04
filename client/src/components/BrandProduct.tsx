import React from "react";
import PhoneImage from "../../public/PhoneImage.png";

const BrandProduct = (): React.JSX.Element => {
  return (
    <div className="brand-product">
      <div className="product">
        <div className="content-left">
          <div className="head">
            <h1>Product Apple</h1>
          </div>
          <div className="content">
            <p>
              iPhone มาพร้อมดีไซน์ที่โดดเด่น ผสานพลังแห่งเทคโนโลยีที่ล้ำสมัย
              กล้องคุณภาพระดับมืออาชีพ ประสิทธิภาพแรงเหนือชั้น
              และความปลอดภัยที่ไว้ใจได้ในทุกการใช้งาน
              เชื่อมต่ออย่างลื่นไหลกับทุกอุปกรณ์ Apple เพื่อไลฟ์สไตล์ที่ลงตัว
              ไม่ว่าจะสร้างสรรค์ ถ่ายภาพ ทำงาน หรือความบันเทิง
              ทุกอย่างทำได้ง่ายในเครื่องเดียว
            </p>
          </div>
          <div className="btn">
            <button>เลือกซื้อสินค้า</button>
          </div>
        </div>
        <div className="image-right">
          <div className="image">
            <img src={PhoneImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
