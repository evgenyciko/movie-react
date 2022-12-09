function Splide() {
  let splideShowing = new Splide("#showing-splide", {
    drag: "free",
    perPage: 1,
  });

  let splideSpotlight = new Splide("#spotlight-splide", {
    drag: "free",
    perPage: 1,
  });

  let splideComing = new Splide("#coming-splide", {
    drag: "free",
    perPage: 1,
  });

  let splideAnime = new Splide("#anime-splide", {
    drag: "free",
    perPage: 1,
  });

  let splideWestern = new Splide("#western-splide", {
    drag: "free",
    perPage: 1,
  });

  let splideAsian = new Splide("#asian-splide", {
    drag: "free",
    perPage: 1,
  });

  let splideCategories = new Splide("#categories-splide", {
    drag: "free",
    perPage: 1,
  });

  splideCategories.mount();
  splideAsian.mount();
  splideWestern.mount();
  splideAnime.mount();
  splideComing.mount();
  splideSpotlight.mount();
  splideShowing.mount();
}

export default Splide;
