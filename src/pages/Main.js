import React from "react";
import { connect } from "react-redux";
import Card from "../components/Card";
import { addProduct, addProductAll, updateProduct } from "../redux/actions";

const Main = (props) => {
  let { products, edit } = props;
  const formRef = React.useRef();

  const [form, setForm] = React.useState({
    productName: "",
    productPrice: 0,
  });

  const setMode = (b) => {
    setForm(b);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (edit) {
      props.updateProduct({ ...form, id: edit.id });
    } else {
      props.addProduct({
        ...form,
        id: Math.random().toString(36).substr(2, 9),
      });
    }
    formRef.current.reset();
    setForm({
      productName: "",
      productPrice: "",
    });
  };

  const getData = () => {
    fetch("http://www.mocky.io/v2/5c3e15e63500006e003e9795")
      .then((response) => response.json())
      .then((data) => {
        if (!products.length) {
          props.newProducts(data.products);
        }
      });
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-gradient-to-r flex  flex-col justify-center items-center from-pink-200 via-blue-100 to-blue-200 h-screen w-screen">
      <main className="w-5/6 lg:w-1/3 shadow-md  rounded-md bg-white my-10 h-90vh relative flex flex-col  items-center p-2">
        <h1 className="text-gray-600 text-lg font-semibold tracking-wider">
          List of products
        </h1>
        <form
          ref={formRef}
          onSubmit={submitForm}
          className="w-5/6 lg:w-1/2 flex flex-col p-4"
        >
          <fieldset className="mb-2">
            <label>Product name</label>
            <input
              type="text"
              required
              disabled={edit ? true : false}
              value={form.productName}
              onChange={(e) =>
                setForm({ ...form, productName: e.target.value })
              }
              id="productName"
              name="productName"
              className="w-full bg-gray-200 h-8 rounded-sm shadow-sm focus:ring-gray-300 focus:outline-none"
            />
          </fieldset>
          <fieldset className="mb-2">
            <label>Product price</label>
            <input
              type="number"
              id="productPrice"
              name="productPrice"
              value={form.productPrice}
              onChange={(e) =>
                setForm({ ...form, productPrice: e.target.value })
              }
              required
              className="w-full bg-gray-200 h-8 rounded-sm shadow-sm focus:ring-gray-300 focus:outline-none"
            />
          </fieldset>
          <button className="h-8 top-3 right-4 rounded-sm bg-blue-500 text-white text-sm px-2 shadow-lg outline-none focus:outline-none">
            {!edit ? "Add" : "Update"}
          </button>
        </form>

        <div className="p-2 lg:absolute  h-70 overflow-y-auto top-16 rounded-sm -right-36 px-3">
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.name}
              price={product.prices}
              UpdatePrice={setMode}
              id={product.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (prod) => dispatch(addProduct(prod)),
  newProducts: (prod) => dispatch(addProductAll(prod)),
  updateProduct: (prod) => dispatch(updateProduct(prod)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
