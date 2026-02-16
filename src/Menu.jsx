import "./Menu.css";
import homeIcon from './assets/home.svg';
import ticket from './assets/ticket.svg';
import mydata from './assets/mydata.svg';

function Menu() {
  return (
    <div className="bottom">
      <nav className="bottom-nav">
        
        {/* <Link to="/" ><img className="nav-item" src={homeIcon} /></Link>
        <Link to="/" ><img className="nav-center" src={ticket} /></Link>
        <Link to="/" ><img className="nav-item" src={mydata} /></Link> */}

        <img className="nav-item" src={homeIcon} />
        <img className="nav-center" src={ticket} />
        <img className="nav-item" src={mydata} />

      </nav>
    </div>
  );
}

export default Menu;