import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { removeCart } from "./Action/Actions";
import Navbar from "./Navbar";

const Cart = () => {
  // const Data = useSelector((state) => state.product);
  /*  const { Data } = useSelector(({ data = initialState }) => ({
    Data: data.product,
  }));
   */
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const Data = state.cart;
  const Product_Length = state.cart.length;
  const Total_Price = state.Total;
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="row">
          {Data.map((item, index) => {
            return (
              <>
                <div key={index} className="col-md-3 col-sm-6 pb-3 item">
                  <div className="card item-card card-block">
                    <img src={item.url} alt="Photo of sunset" />
                    <h5 className="card-title  mt-3 mb-3">{item.name}</h5>
                    {item.qty > 0 ? (
                      <p className="card-text">
                        Price: {item.price}
                        <br />
                        Qty: {item.cQty}
                      </p>
                    ) : (
                      <p>Out Of Stock</p>
                    )}
                    <button
                      disabled={item.qty > 0 ? false : true}
                      onClick={() => dispatch(removeCart(item))}
                      className="btn btn-danger"
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="CartBox">
          {Product_Length > 0 ? (
            <h2>Total Product: {Product_Length}</h2>
          ) : (
            <h2>Not a Product</h2>
          )}
          {Total_Price > 0 ? <h2>Total Amount: {Total_Price}</h2> : null}
        </div>
      </div>
    </>
  );
};

export default Cart;
