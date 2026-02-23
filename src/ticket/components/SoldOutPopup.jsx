import AlertIcon from '../../assets/Alert-icon.svg';
import './SoldOutPopup.css';

function SoldOutPopup({ setPopUp }) {
  return (
    <div id="blur">
      <div className="popup">
        <img src={AlertIcon} alt="" />
        <span>잔여 티켓이 모두 소진되었습니다</span>
        <button
          onClick={() => {
            setPopUp(false);
          }}
        >
          <p>확인</p>
        </button>
      </div>
    </div>
  );
}

export default SoldOutPopup;
