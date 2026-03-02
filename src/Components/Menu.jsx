import "../Styles/Menu.css";
import { Link } from "react-router-dom";
import homeIcon from '/assets/img/home.svg';
import ticket from '/assets/img/ticket.svg';
import mydata from '/assets/img/mydata.svg';
import styled from "styled-components";
export default function Menu() {
  return (
    <>
      <section className="mydata">
          <nav className="bottom-nav">

            <img className="nav-item" src={homeIcon}/>
            <Bottomcenter className="nav-center" to="/ticketing">
              <img src={ticket} />
            </Bottomcenter>
            <img className="nav-item" src={mydata} />

          </nav>
      </section>
      <div className="bottom"></div>
    </>
  );
}

const Bottomcenter = styled(Link)`
  position: fixed;
  display: flex;
  bottom: 52px;
`