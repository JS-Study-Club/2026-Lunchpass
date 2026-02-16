import closeButton from '../../assets/close-button.svg';
import './InfoModal.css';

function InfoModal({ setInfo }) {
  return (
    <div id="blur">
      <div className="Modal">
        <div className="head">
          <span>티켓팅 정보</span>
          <button onClick={() => setInfo(false)}>
            <img src={closeButton} alt="" />
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
