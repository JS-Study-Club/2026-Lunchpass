import "../Styles/Menu.css";
import homeIcon from '../Assets/home.svg';
import ticket from '../Assets/ticket.svg';
import mydata from '../Assets/mydata.svg';
export default function Menu() {
  return (
    <>
      <section className="mydata">
          <nav className="bottom-nav">

            <img className="nav-item" src={homeIcon} />
            <img className="nav-center" src={ticket} />
            <img className="nav-item" src={mydata} />

          </nav>
      </section>
      <div className="bottom"></div>
    </>
  );
}