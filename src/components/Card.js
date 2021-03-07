import React from "react";
import { connect } from "react-redux";
import { deleteProduct, editProduct } from "../redux/actions";

export const Card = (props) => {
  let gatdate = (dates) => {
    return dates.sort((a, b) => new Date(b.date) - new Date(a.date));
  };
  return (
    <div className="w-full rounded-md shadow-lg text-lg relative font-semibold p-2 flex bg-white m-2 flex-col">
      <h4
        onClick={() => props.deleteProduct({ id: props.id })}
        className="absolute top-1 right-2 font-semibold cursor-pointer"
      >
        x
      </h4>
      <h2>{props.title}</h2>
      <hr />
      <div className="w-full p-2 hidden">
        <input
          type="text"
          className="h-8 w-20 outline-none bg-gray-400 rounded-sm"
        />
      </div>
      <div className="w-full flex flex-row justify-between items-center h-10">
        <div className="flex flex-row-reverse justify-around p-3">
          {gatdate(props.price).map((f, d) => (
            <small key={d} className={`${d > 0 ? "line-through m-1" : "m-1"}`}>
              {f.price}
            </small>
          ))}
        </div>
        <button
          onClick={() => {
            props.editProduct(props.id);
            props.UpdatePrice({
              productName: props.title,
              productPrice: gatdate(props.price)[0].price,
            });
          }}
          className="h-8 rounded-sm bg-blue-500 text-white text-sm px-2 shadow-lg outline-none focus:outline-none"
        >
          Edit price
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  editProduct: (prod) => dispatch(editProduct(prod)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
