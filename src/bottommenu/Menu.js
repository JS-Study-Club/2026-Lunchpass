import "./Menu.css";
import { ReactComponent as HomeIcon } from "./home.svg";
import { ReactComponent as TicketIcon } from "./ticket.svg";
import { ReactComponent as MydataIcon } from "./mydata.svg";
import { ReactComponent as FullMydataIcon } from "./fullmydata.svg";
import { ReactComponent as FullHomeIcon } from "./fullhome.svg";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <div className="menucon">
      <section className="menudata">
        <nav className="bottom-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
           {({ isActive }) => (
              <>
                {isActive ? (
                  <FullHomeIcon className="icon home-icon" />
                ) : (
                  <HomeIcon className="icon home-icon" />
                )}
                <span>홈</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/Signup"
            className={({ isActive }) =>
              isActive ? "nav-center" : "nav-center"
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <TicketIcon className="menu-icon center" />
                ) : (
                  <TicketIcon className="menu-icon center" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/Mydata"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <FullMydataIcon className="icon info-icon" />
                ) : (
                  <MydataIcon className="icon info-icon" />
                )}
                <span>내 정보</span>
              </>
            )}
          </NavLink>
        </nav>
      </section>
    </div>
  );
}

export default Menu;
