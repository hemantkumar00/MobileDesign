import { BsHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function Product() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-product" onClick={() => navigate("/product")}>
        <div className="home-product-image-container">
          <img
            className="home-product-image"
            src="https://images.coach.com/is/image/Coach/6897_b4iy_a3?$mobileProduct$"
            alt=""
          />
          <BsHeartFill className="home-product-heart-button" />
        </div>
        <div className="home-product-content   ">
          <strong className="home-product-content-heading">
            The Marc Jacobs
          </strong>
          <p className="home-product-content-description">Traveler Tote</p>
          <strong className="home-product-content-price">$195.00</strong>
        </div>
      </div>
    </>
  );
}
