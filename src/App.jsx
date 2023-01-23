import Nav from "./Nav";
import Card from "./Card";
import CartItem from "./CardItem";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [data] = useState([
    {
      id: 1,
      no: 1,
      image: "Images/Iphone.jpg",
      isSale: false,
      product: [
        {
          type: "I-Phone",
        },
        {
          rating: "4",
        },
        {
          offer: "",
          isOffer: true,
        },
        {
          price: "$1000",
        },
        {
          button: "Sale Close",
        },
      ],
    },
    {
      id: 2,
      no: 1,
      image: "Images/Blackberry.jpg",
      isSale: true,
      product: [
        {
          type: "Blackberry",
        },
        {
          rating: "4.5",
        },
        {
          offer: "$250",
          isOffer: true,
        },
        {
          price: "$300",
        },
        {
          button: "Add to cart",
        },
      ],
    },
    {
      id: 3,
      no: 1,
      image: "Images/Honor.webp",
      isSale: true,
      product: [
        {
          type: "Honor",
        },
        {
          rating: "3",
        },
        {
          offer: "$150",
          isOffer: true,
        },
        {
          price: "$200",
        },
        {
          button: "Add to cart",
        },
      ],
    },
    {
      id: 4,
      no: 1,
      image: "Images/Oneplus.webp",
      isSale: false,
      product: [
        {
          type: "OnePlus",
        },
        {
          rating: "3.5",
        },
        {
          offer: "",
        },
        {
          price: "$400",
        },
        {
          button: "Sale Close",
        },
      ],
    },
    {
      id: 5,
      no: 1,
      image: "Images/Oppo.webp",
      isSale: true,
      product: [
        {
          type: "Oppo",
        },
        {
          rating: "2",
        },
        {
          offer: "$280",
          isOffer: true,
        },
        {
          price: "$300",
        },
        {
          button: "Add to cart",
        },
      ],
    },
    {
      id: 6,
      no: 1,
      image: "Images/Realme.jpg",
      isSale: false,
      product: [
        {
          type: "Realme",
        },
        {
          rating: "5",
        },
        {
          offer: "",
        },
        {
          price: "$190",
        },
        {
          button: "Sale Close",
        },
      ],
    },
    {
      id: 7,
      no: 1,
      image: "Images/Redmi.webp",
      isSale: true,
      product: [
        {
          type: "Redmi",
        },
        {
          rating: "3",
        },
        {
          offer: "$160",
          isOffer: true,
        },
        {
          price: "$200",
        },
        {
          button: "Add to cart",
        },
      ],
    },
    {
      id: 8,
      no: 1,
      image: "Images/Samsung.webp",
      isSale: false,
      product: [
        {
          type: "Samsung",
        },
        {
          rating: "2.5",
        },
        {
          offer: "",
        },
        {
          price: "$240",
        },
        {
          button: "Sale Close",
        },
      ],
    },
    {
      id: 9,
      no: 1,
      image: "Images/Sony.jpg",
      isSale: true,
      product: [
        {
          type: "Sony",
        },
        {
          rating: "4.5",
        },
        {
          offer: "$400",
          isOffer: true,
        },
        {
          price: "$450",
        },
        {
          button: "Add to cart",
        },
      ],
    },
  ]);

  const [cart, Setcart] = useState([]);
  const [total, Settotal] = useState(0);

  let Addcart = (item) => {
    Setcart([...cart, item]);
    Settotal(total + item.no);
  };

  let Removecart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    Setcart([...cart]);
    Settotal(total - item.no);
  };
  return (
    <>
      <Nav></Nav>

      <div className="container">
        <div className="row ">
          <div className="col-8 d-flex flex-wrap justify-content-between">
            {data.map((item) => {
              return <Card item={item} CartItem={cart} handaddCart={Addcart}></Card>;
            })}
          </div>
          <div className="col-3">
            <form className="d-flex justify-content-center mt-3">
              <button className="btn btn-outline-dark fa mb-5" type="submit">
                <FontAwesomeIcon icon={faCartShopping} />
                <span classNameName="ms-2"> Cart</span>
                <span className="badge bg-dark text-white ms-2 rounded-pill">{total}</span>
              </button>
            </form>
            <ol class="list-group list-group-numbered">
              {cart.map((item) => {
                return <CartItem item={item} Removecart={Removecart}></CartItem>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
