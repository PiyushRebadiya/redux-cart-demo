import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { addCart } from "./Action/Actions";
import Navbar from './Navbar'

const Home = () => {
  // const Data = useSelector((state) => state.product);
  /*  const { Data } = useSelector(({ data = initialState }) => ({
    Data: data.product,
  }));
   */
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const Data = state.product;
  return (
    <div className="App">
      <div className="row">
        <Navbar />
        {Data && Data.map((item, index) => {
          return (
            <div key={index} className="col-md-3 col-sm-6 pb-3 item">
              <div className="card item-card card-block">
                <img src={item.url} alt="Photo of sunset" />
                <h5 className="card-title  mt-3 mb-3">{item.name}</h5>
                {item.qty > 0 ? (
                  <p className="card-text">
                    Price: {item.price}
                    <br />
                    Qty: {item.qty}
                  </p>
                ) : (
                  <p className="card-text">Out Of Stock</p>
                )}
                <button
                  disabled={item.qty > 0 ? false : true}
                  onClick={() => dispatch(addCart(item))}
                  className="btn btn-primary"
                >
                  Add Item
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
