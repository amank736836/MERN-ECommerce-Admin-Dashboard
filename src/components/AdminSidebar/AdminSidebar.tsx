import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDatabaseFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { useLocation } from "react-router-dom";
import Li from "./Li";

const AdminSidebar = () => {
  const location = useLocation();

  const dashboard = [
    {
      name: "Dashboard",
      icon: RiDatabaseFill,
      url: "/admin/dashboard",
    },
    {
      name: "Product",
      icon: RiShoppingBag3Fill,
      url: "/admin/product",
    },
    {
      name: "Customer",
      icon: IoIosPeople,
      url: "/admin/customer",
    },
    {
      name: "Transaction",
      icon: AiFillFileText,
      url: "/admin/transaction",
    },
  ];

  const charts = [
    {
      name: "Bar Chart",
      icon: FaChartBar,
      url: "/admin/chart/bar",
    },
    {
      name: "Pie Chart",
      icon: FaChartPie,
      url: "/admin/chart/pie",
    },
    {
      name: "Line Chart",
      icon: FaChartLine,
      url: "/admin/chart/line",
    },
  ];

  const apps = [
    {
      name: "Stopwatch",
      icon: FaStopwatch,
      url: "/admin/app/stopwatch",
    },
    {
      name: "Coupon",
      icon: RiCoupon3Fill,
      url: "/admin/app/coupon",
    },
    {
      name: "Toss",
      icon: FaGamepad,
      url: "/admin/app/toss",
    },
  ];

  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          {dashboard.map((item, index) => (
            <Li
              key={index}
              url={item.url}
              text={item.name}
              location={location}
              Icon={item.icon}
            />
          ))}
        </ul>
      </div>
      <div>
        <h5>Charts</h5>
        <ul>
          {charts.map((item, index) => (
            <Li
              key={index}
              url={item.url}
              text={item.name}
              location={location}
              Icon={item.icon}
            />
          ))}
        </ul>
      </div>
      <div>
        <h5>Apps</h5>
        <ul>
          {apps.map((item, index) => (
            <Li
              key={index}
              url={item.url}
              text={item.name}
              location={location}
              Icon={item.icon}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
