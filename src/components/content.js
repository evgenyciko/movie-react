import "./styles/Content.css";
import "./styles/splide-core.min.css";
import "./spildeList.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Axios from "axios";
import { useEffect, useState } from "react";

function Content() {
  const urlImage = `${process.env.REACT_APP_BASEIMGURL}`;
  const [filem, setFilem] = useState([]);

  useEffect(() => {
    const getData = () => {
      Axios({
        method: "get",
        url: `${process.env.REACT_APP_BASEURL}movie/popular?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`,
      }).then(function (response) {
        setFilem(response.data.results);
      });
    };
    getData();
  }, []);

  return (
    <section className="showing mt-5">
      <div className="container">
        <div className="d-flex flex-row justify-content-between">
          <h1 className="text-light">Now Showing</h1>
        </div>
        <Splide aria-label="My Favorite Images">
          {filem.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div className="card border-0 bg-transparent">
                  <div className="card-header me-3 d-flex justify-content-center align-items-center flex-column">
                    <img
                      className="rounded-0 position-absolute"
                      src={`${urlImage}${item.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="card-title text-light">
                    <span className="text-dark">
                      Popularity: {item.popularity}
                    </span>
                    <br />
                    <span className="text-dark">ID: {item.id}</span>
                    <h1 className="text-dark">{item.title}</h1>
                    <span className="text-dark">{item.overview}</span>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
}

export default Content;
