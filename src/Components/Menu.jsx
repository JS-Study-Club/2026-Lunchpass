import "../Styles/Menu.css";
import homeIcon from '/assets/img/home.svg';
import ticket from '/assets/img/ticket.svg';
import mydata from '/assets/img/mydata.svg';
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