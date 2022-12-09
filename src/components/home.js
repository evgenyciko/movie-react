import "./styles/Home.css";

function Home() {
  return (
    <section className="home-carousel">
      <div className="gambar1">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="true"
        > 
          <div className="carousel-inner gambar">
            <div className="carousel-item active">
              <img
                src="images/fast_and_furious_9.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/6-underground-4k-movie-jz.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/jyNcNRpe9hPSFFj09efB2RI5j9d.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default Home;
