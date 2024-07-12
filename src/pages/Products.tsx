import { ReactElement, useCallback, useState } from "react";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import AdminSidebar from "../components/AdminSidebar/AdminSidebar";
import TableHOC from "../components/Tables/TableHOC";

interface ProductDataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<ProductDataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: ProductDataType[] = [
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: (
      <img
        src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"}
        alt="Laptop"
      />
    ),
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: (
      <img
        src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"}
        alt="Laptop"
      />
    ),
    name: "Macbook",
    price: 3546,
    stock: 1234,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 65478,
    stock: 3254,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: (
      <img
        src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"}
        alt="Laptop"
      />
    ),
    name: "Macbook",
    price: 5678,
    stock: 354,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 9876,
    stock: 3254,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: (
      <img
        src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"}
        alt="Laptop"
      />
    ),
    name: "Macbook",
    price: 245,
    stock: 5467,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 5678,
    stock: 7869,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: (
      <img
        src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"}
        alt="Laptop"
      />
    ),
    name: "Macbook",
    price: 8679,
    stock: 345,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 5678,
    stock: 567,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: (
      <img
        src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"}
        alt="Laptop"
      />
    ),
    name: "Macbook",
    price: 354,
    stock: 345,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 65478,
    stock: 3254,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: (
      <img
        src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"}
        alt="Laptop"
      />
    ),
    name: "Macbook",
    price: 5678,
    stock: 354,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 9876,
    stock: 3254,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: (
      <img
        src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"}
        alt="Laptop"
      />
    ),
    name: "Macbook",
    price: 245,
    stock: 5467,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 5678,
    stock: 7869,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: (
      <img
        src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"}
        alt="Laptop"
      />
    ),
    name: "Macbook",
    price: 8679,
    stock: 345,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8&w=1000&q=804"
        }
        alt="Shoes"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 5678,
    stock: 567,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: (
      <img
        src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"}
        alt="Laptop"
      />
    ),
    name: "Macbook",
    price: 354,
    stock: 345,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<ProductDataType[]>(arr);

  const ProductTable = useCallback(
    TableHOC<ProductDataType>(
      columns,
      data,
      "dashboardProductBox",
      "Products",
      true
    ),
    []
  );

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>{ProductTable()}</main>
      <Link to="/admin/product/new" className="createProductBtn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
