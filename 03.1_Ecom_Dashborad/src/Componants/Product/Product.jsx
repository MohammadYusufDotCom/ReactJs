import { data } from "autoprefixer";
import { useCallback, useEffect, useState } from "react";
import "./Product.css";
import Logo from "./Img.jsx";
import { useNavigate } from "react-router-dom";

function Product() {
  let [product, setProduct] = useState([]);
  let [refresh, setRefresh] = useState([true]);
  let navigate = useNavigate();

  useEffect(() => {
    productList();
  }, [refresh]);

  async function productList() {
    let data = await fetch("http://localhost:5000/product");
    data = await data.json();
    setProduct(data);
  }

  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-center text-2xl my-5 font-semibold">
        Available Product List
      </h1>
      <div>
        <ul className=" flex justify-center">
          <li className="list font-bold">S No.</li>
          <li className="list font-bold">Name</li>
          <li className="list font-bold">Category</li>
          <li className="list font-bold">Price (₹)</li>
          <li className="list font-bold">Stock</li>
          <li className="list font-bold">Action</li>
        </ul>
        {product.map((currentElement, indexOfCurrentElement) => {
          return (
            <ul className="flex justify-center" key={currentElement._id}>
              <li className="list">{indexOfCurrentElement + 1}</li>
              <li className="list">{currentElement.product_name}</li>
              <li className="list">{currentElement.category}</li>
              <li className="list">{currentElement.price}</li>
              <li className="list">{currentElement.stock}</li>
              <li className="list flex justify-center">
                <Logo
                  id={currentElement._id}
                  setRefresh={setRefresh}
                  refresh={refresh}
                  onClick={() => productList()}
                />
              </li>
            </ul>
          );
          a;
        })}
      </div>
      <button
        className="bg-green-500 py-2 mt-6 rounded-2xl w-1/12 m-auto"
        onClick={() => navigate("/addproduct")}
      >
        Add Product
      </button>
    </div>
  );
}
export default Product;
