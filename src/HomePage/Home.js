import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Product from "./Product";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div className="home-banner-container">
          <Banner />
          <Banner />
        </div>
        <div>
          <div className="home-new-arival-area">
            <h3>New Arrivals</h3>
            <span className="home-viewAll">View All</span>
          </div>
          <div className="home-product-container">
            <Product />
            <Product />
          </div>
        </div>
        <div className="home-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
