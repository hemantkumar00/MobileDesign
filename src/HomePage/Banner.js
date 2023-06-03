export default function Banner() {
  return (
    <>
      <div className="home-banner">
        <img
          className="home-banner-image"
          src="https://media.istockphoto.com/id/1312494475/photo/notebook-is-placed-on-the-right-side-there-is-an-empty-space-on-the-left-3d-render.jpg?s=612x612&w=0&k=20&c=XjJ5M8ieZj4_Hv3NCs0VRRKUWXO5rVV-_ytjbLp5xWE="
          alt=""
        />
        <div className="home-banner-textArea">
          <h1 className="home-banner-off">50% Off</h1>
          <strong className="home-banner-heading">On everything today</strong>
          <p className="home-banner-code">With code:FSCREATION</p>
          <button className="home-banner-button">Get Now</button>
        </div>
      </div>
    </>
  );
}
