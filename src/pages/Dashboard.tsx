import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import WidgetItem from "./dashboard/WidgetItem";
const Dashboard = () => {

  const items = [
    {
      percent: 40,
      amount: true,
      value: 340000,
      heading: "Revenue",
      color: "rgb(0,115,255)",
    },
    {
      percent: -14,
      value: 400,
      heading: "Users",
      color: "rgb(0,198,202)",
    },
    {
      percent: 80,
      value: 23000,
      heading: "Transaction",
      color: "rgb(255,196,0)",
    },
    {
      percent: 30,
      value: 1000,
      heading: "Products",
      color: "rgb(76,0,255)",
    },
  ];

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs etc." />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        <section className="widgetContainer">
          {items.map((item, index) => (
            <WidgetItem
              key={index}
              heading={item.heading}
              value={item.value}
              percent={item.percent}
              amount={item.amount}
              color={item.color}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;