import { NavLink } from "react-router-dom";

const SecHeader = ({ Logo, dropdownItem, MenuInfo }) => {

  return (

    <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="#"><span><img style={{ height: '70px' }} src={Logo} alt="logo" /></span></a>
        {/* Toggler/collapsibe Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-expanded="false">
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
            <a className="nav-link" href="/#">Home</a>

            </li>
            {MenuInfo && MenuInfo.map((item, key) => (
              <li className="nav-item" key={key}>
                <a className="nav-link" href={item.path}>{item.nameLink}</a>
              </li>
            ))}
            <li className="lh-55px">
              <a
                href="mailto:contact@hugold.art"
                className="btn login-btn ml-50"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SecHeader;