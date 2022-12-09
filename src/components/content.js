import "./styles/Content.css";
import { Modal } from "react-bootstrap";
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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
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
                    <div className="card-inner text-center d-flex flex-column justify-content-center align-items-center">
                      <p className="text-title">{item.title}</p>
                      <button
                        className="card-button btn mt-2 bg-light border-0 rounded-2 text-dark"
                        onClick={() => {
                          setModalData(item);
                          setModalIsOpen(true);
                        }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                  <div className="card-title text-light">
                    <h1 className="text-dark">{item.title}</h1>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
          <Modal size="md" variant="dark" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div className="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setModalIsOpen(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h1 className="card-title fs-4 my-2">{modalData.item.title}</h1>
              <h2 className="fs-6 fw-semibold mt-3">Overview</h2>
              <p className="card-overview mt-0">{modalData.item.overview}</p>
              <div className="row">
                <div className="col-6 text-center">
                  <p className="fs-6 fw-semibold my-2">Movie ID</p>
                  <div className="d-inline-flex align-items-center">
                    <i className="ri-hashtag fs-5 me-2 card-logo bg-dark d-flex align-items-center justify-content-center"></i>
                    <p className="card-score my-2">{modalData.item.id}</p>
                  </div>
                </div>
                <div className="col-6 text-center">
                  <p className="fs-6 fw-semibold my-2">Popularity</p>
                  <div className="d-inline-flex align-items-center">
                    <i className="ri-star-fill fs-5 me-2 card-logo bg-dark d-flex align-items-center justify-content-center"></i>
                    <p className="card-score my-2">
                      {modalData.item.popularity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark">
                Add to watchlist
              </button>
            </div>
          </Modal>
        </Splide>
      </div>
    </section>
  );
}

export default Content;
