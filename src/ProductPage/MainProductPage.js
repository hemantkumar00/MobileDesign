import { BiShoppingBag } from "react-icons/bi";
import { BsFillSkipBackwardCircleFill } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MainProductPage() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  function decCount(c) {
    let val = c;
    val -= 1;
    if (val < 1) return 1;
    else return val;
  }

  return (
    <>
      <div className="product-page-container">
        <BsFillSkipBackwardCircleFill className="product-top-left" />
        <BiShoppingBag className="product-top-right" />
        <AiTwotoneLike className="product-bottom-right" />
        <img
          className="product-image"
          src="https://www.pavidas.com/images.pavidas.com/P23---nike---CZ7339101.JPG"
          alt=""
        />

        <div className="description-container">
          <div>
            <div className="product-description-head">
              <div>
                <h3>Roller Rabbit</h3>
                <p className="product-page-subheading">Vado Odelle Dress</p>
                <span className="product-review-count">
                  ⭐⭐⭐⭐⭐
                  <span className="product-review-count1">
                    (320 Review)
                  </span>{" "}
                </span>
              </div>
              <div className="product-counter">
                <div className="product-counter-button">
                  <button
                    className="product-counter-btn"
                    onClick={() => setCount((prevCount) => decCount(prevCount))}
                  >
                    -
                  </button>
                  <span className="product-counter-count">{count}</span>
                  <button
                    className="product-counter-btn"
                    onClick={() => setCount((prevCount) => prevCount + 1)}
                  >
                    +
                  </button>
                </div>
                <p className="product-available-text">
                  <strong>Available in stok</strong>
                </p>
              </div>
            </div>
            <div>
              <span>
                <strong>Size</strong>
              </span>
              <div className="product-size-button">
                <label>
                  <input type="radio" name="select" />
                  <span>S</span>
                </label>
                <label>
                  <input type="radio" name="select" />
                  <span>M</span>
                </label>
                <label>
                  <input type="radio" name="select" />
                  <span>L</span>
                </label>
                <label>
                  <input type="radio" name="select" />
                  <span>XL</span>
                </label>
                <label>
                  <input type="radio" name="select" />
                  <span>XXL</span>
                </label>
              </div>
            </div>
            <div className="product-page-description">
              <h3>Description</h3>
              <span className="product-page-desc">
                Get a little lift from these Sam Edelman sandals featuring
                ruched straps and leather lace-up ties, while a braided jute
                sole makes a fresh statement for summer.
              </span>
            </div>
            <div className="procuct-buy-section">
              <div>
                <span className="product-total">Total Price</span>
                <h3>${count * 198}.00</h3>
              </div>
              <button
                className="product-buy-button"
                onClick={() => navigate("/payment")}
              >
                <BiShoppingBag />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
