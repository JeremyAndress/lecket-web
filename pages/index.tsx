export default function Home() {
  return (
    <>
      <h2 className="primary-color">Discover</h2>
      <div className="discover-gallery">
        <div className="discover-item">
          <img
            className="card-img"
            src="https://picsum.photos/500/300"
            alt=""
          />
        </div>
        <div className="discover-item">
          <img
            className="card-img"
            src="https://picsum.photos/500/300"
            alt=""
          />
        </div>
      </div>
      <br />
      <h2 className="primary-color">Most Watches</h2>
      <div className="most-watches-gallery">
        <div className="most-watches-item">
          <div className="card size-width-s background-card-color">
            <img
              className="card-img"
              src="https://picsum.photos/300/200"
              alt=""
            />
            <div className="card-content">
              <h4 className="primary-color">Final Fantasy VII</h4>
              <p className="secondary-color">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
