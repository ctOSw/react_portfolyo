import React, { useState } from "react";
import { Drawer, Radio, Space } from "antd";
import { TiThMenu } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <div className="block md:hidden">
      <Space>
        <Radio.Group value={placement} onChange={onChange}></Radio.Group>
        <div onClick={showDrawer}>
          <TiThMenu className="text-2xl cursor-pointer" />
        </div>
      </Space>

      <Drawer
        title={
          <div className="flex justify-between items-center">
            <span className="font-bold text-2xl">Logo</span>
            <div className="flex items-center space-x-2 text-gray-700">
              <FaPhoneAlt />
              <span>+90 555 555 55 55</span>
            </div>
          </div>
        }
        placement={placement}
        closable={true}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <ul className="flex flex-col text-lg space-y-4 mt-4">
          <li>
            <a href="#anasayfa" className="text-gray-800 hover:text-blue-500">
              Anasayfa
            </a>
          </li>
          <li>
            <a href="#hakimizda" className="text-gray-800 hover:text-blue-500">
              Hakkımızda
            </a>
          </li>
          <li>
            <a href="#iletisim" className="text-gray-800 hover:text-blue-500">
              İletişim
            </a>
          </li>
          <li>
            <a href="#siparis" className="text-gray-800 hover:text-blue-500">
              Sipariş
            </a>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
