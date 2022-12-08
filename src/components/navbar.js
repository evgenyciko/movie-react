import "./styles/Navbar.css";

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="images/logo.png"
            alt="Logo"
            width="87"
            height="35"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                GENRES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                COMING SOON
              </a>
            </li>
            <li className="nav-item">
              <form className="d-flex" role="search"></form>
            </li>
            <li className="nav-item">
              <a
                className="btn btn-login"
                href="/"
                role="button"
                data-bs-toggle="modal"
                data-bs-target="#login"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
