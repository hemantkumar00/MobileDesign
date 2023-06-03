import { BsFillFilterCircleFill } from "react-icons/bs";
export default function Header() {
  return (
    <>
      <div>
        <div className="home-header-top">
          <BsFillFilterCircleFill className="home-header-top-icon" />
          <img
            className="home-header-top-avatar"
            src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"
            alt=""
          />
        </div>
        <div className="home-header-mid">
          <h1>Welcome,</h1>
          <h2 className="home-header-mid-subheading">Our Fashions App</h2>
        </div>
        <div className="home-header-top">
          <input className="home-header-input" placeholder="Search..." />
          <BsFillFilterCircleFill className="home-header-top-icon" />
        </div>
      </div>
    </>
  );
}
