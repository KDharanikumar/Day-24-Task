function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container px-4 px-lg-5 ">
          <div className="row">
            <div className="col">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-3">
                  <li className="nav-item">
                    <p className="nav-link fw-bold" aria-current="page">
                      Mobiles
                    </p>
                  </li>
                  <li className="nav-item">
                    <p className="nav-link" aria-current="page">
                      Home
                    </p>
                  </li>
                  <li className="nav-item">
                    <p className="nav-link" aria-current="page">
                      About
                    </p>
                  </li>
                  <li className="nav-item">
                    <p className="nav-link" aria-current="page">
                      Shop
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
