import {
  AiOutlineCalendar,

  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import {
  FiShoppingBag,
  FiEdit,

} from "react-icons/fi";
import {
  BsKanban,
  BsBarChart,

} from "react-icons/bs";
import { BiColorFill, BiAngry } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { GiLouvrePyramid } from "react-icons/gi";

export const links = [
  {
    // title: "Dashboard",
    category: "总览",
    links: [
      {
        name: "SDU",
        key: "SDU",
        icon: <GiLouvrePyramid />,
      },
      {
        name: "风采展示",
        key: "timeline",
        icon: <BiColorFill />,
      },
    ],
  },
  {
    // title: "Funcs",
    category: "研究方向",
    links: [
      {
        name: "等离子体与生物医学",
        key: "plasma",
        icon: <AiOutlineStock />,
      },
      {
        name: "储能电池",
        key: "battery",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "设备监测系统开发",
        key: "colorApp",
        icon: <BsBarChart />,
      },
      {
        name: "故障诊断算法",
        key: "algorithm",
        icon: <AiOutlineBarChart />,
      },
      // 动态路由组件
      {
        name: "其他/项目",
        key: "Projects",
        icon: <RiStockLine />,
      },
    ],
  },
  {
    // title: "Apps",
    category: "工具",
    links: [
      {
        name: "故障实时监测",
        key: "dashboard",
        icon: <FiShoppingBag />,
      },
      {
        name: "统计分析平台",
        key: "calendar",
        icon: <AiOutlineCalendar />,
      },

      {
        name: "AIGC",
        key: "aigc",
        icon: <BsKanban />,
      },
      {
        name: "ChatGPT",
        key: "gpt",
        icon: <FiEdit />,
      },
    ],
  },
  {
    // title: "Pages",
    category: "人员介绍",
    links: [
      {
        name: "导师",
        key: "orders",
        icon: <BiAngry />,
      },
      {
        name: "学生",
        key: "employees",
        icon: <RiContactsLine />,
      },
      {
        name: "校友",
        key: "customers",
        icon: <IoMdContacts />,

      },
    ],
  },
];
