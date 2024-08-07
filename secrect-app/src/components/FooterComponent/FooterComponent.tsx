import Image from "next/image";
import React from "react";
import logo from "@/assets/img/logo.png";

function FooterComponent() {
  return (
    <section className="bg-black h-full py-10">
      <div className="container grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="col-span-2 flex flex-col gap-3 text-white">
          <Image
            src={logo.src}
            alt=""
            width={200}
            height={100}
            className="w-[200px] h-[100px] object-cover"
          />
          <p className="text-2xl font-semibold">Công ty cổ phần Marious</p>
          <ul className="flex flex-col gap-3">
            <li>Địa Chỉ: </li>
            <li>Email: phat@gmail.com</li>
            <li>Phone: 0916215180</li>
          </ul>
        </div>
        <div className="col-span-3 grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col gap-5">
            <p className="text-white text-xl font-semibold">Hổ trợ </p>
            <ul className="text-white flex flex-col gap-2">
              <li>Trung tâm trợ giúp</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách bảo mật thông tin</li>
              <li>Điều khoản dịch vụ</li>
              <li>Chính sách hủy vé</li>
            </ul>
          </div>
          {/*  */}
          <div className="flex flex-col gap-5">
            <p className="text-white text-xl font-semibold">Chính sách </p>
            <ul className="text-white flex flex-col gap-2">
              <li>Trung tâm trợ giúp</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách bảo mật thông tin</li>
              <li>Điều khoản dịch vụ</li>
              <li>Chính sách hủy vé</li>
            </ul>
          </div>
          {/*  */}
          <div className="flex flex-col gap-5">
            <p className="text-white text-xl font-semibold">Truyền Thông </p>
            <ul className="text-white flex flex-col gap-2">
              <li>Trung tâm trợ giúp</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách bảo mật thông tin</li>
              <li>Điều khoản dịch vụ</li>
              <li>Chính sách hủy vé</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t-2 border-white flex justify-between text-white pt-2 mt-4  items-center text-[14px]">
        <p>© 2024 All rights reserved</p>
        <p>Made By Marious</p>
      </div>
    </section>
  );
}

export default FooterComponent;
