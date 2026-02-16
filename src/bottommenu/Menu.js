import "./Menu.css";
import { ReactComponent as HomeIcon } from "./home.svg";
import { ReactComponent as TicketIcon } from "./ticket.svg";
import { ReactComponent as MydataIcon } from "./mydata.svg";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
      <div className="menucon">
        <section className="menudata">
          <nav className="bottom-nav">
            <div className="nav-item">
              <HomeIcon className="menu-icon" />
              <span>홈</span>
            </div>

            <div className="nav-center">
              <TicketIcon className="menu-icon center" />
            </div>

            <NavLink to="/Mydata" className="nav-item">
              <MydataIcon className="menu-icon" />
              <span>내 정보</span>
            </NavLink>
          </nav>
        </section>
      </div>
  );
}

export default Menu;
