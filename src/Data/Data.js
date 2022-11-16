// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Submissions",
  },
  {
    icon: UilUsersAlt,
    heading: "Departments",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "Projects Management System",
    png: UilUsdSquare,
    series: [
      {
        name: "Projects Management System",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  
  {
    title: "",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "M-Pesa Stop Order",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "Connected Car",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];


// Recent Update Card Data
export const UpdatesData = [
  {
    
    name: "VAS",
    noti: "SMSC upgrade in progress",
    time: "25 seconds ago",
  },
  {

    name: "Billing",
    noti: "FOR PROJECTS WITH DEPENDENCY ON VXVIEW!!!!: Please note VXVIEW upgrade scheduled for beginning of Nov 2022 to Feb 2023. ",
    time: "30 minutes ago",
  },
 
];
