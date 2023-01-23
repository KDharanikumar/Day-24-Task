function Card({ item, CartItem, handaddCart }) {
  return (
    <div class="card bg-white mb-5" style={{ width: "250px" }}>
      {item.isSale ? (
        <div className="badge bg-success text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
          Sale
        </div>
      ) : (
        <div className="badge bg-danger text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
          Out of Sale
        </div>
      )}
      <img src={item.image} className="card-img-top" alt="img" />
      <div className="card-body text-center">
        <h5 className="card-title">{item.product[0].type}</h5>
        <div className="ms-5"></div>
        <br />
        {!item.product.isOffer ? <s className="text-muted">{item.product[2].offer}</s> : ""} {item.product[3].price}
        <div className="mt-2">
          <button
            disabled={!item.isSale || CartItem.some((obj) => obj.id === item.id) ? true : false}
            onClick={() => {
              handaddCart(item);
            }}
            className="btn btn-outline-dark mt-auto"
          >
            {item.product[4].button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
