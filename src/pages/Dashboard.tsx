import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userPic.png";
import WidgetItem from "./dashboard/WidgetItem";
import CategoryItem from "./dashboard/CategoryItem";
import { categories as categoryItems } from "../assets/data.json";
import { BarChart } from "../components/Charts/Charts";

const Dashboard = () => {
  const widgetItems = [
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
          {widgetItems.map((item, index) => (
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

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            <BarChart 
            data_1={[200,444,343,556,778,455,990]}
            data_2={[300,144,433,655,237,755,190]}
            title_1="Revenue"
            title_2="Transaction"
            bgColor_1="rgb(0,115,255)"
            bgColor_2="rgba(53,162,235,0.8)"
            />
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {categoryItems.map((item, index) => (
                <CategoryItem
                  key={index}
                  heading={item.heading}
                  value={item.value}
                  color={`hsl(
                    ${item.value * 4}
                    ,${item.value}%
                    ,50%
                    )`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
