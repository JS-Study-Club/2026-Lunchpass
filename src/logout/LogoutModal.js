import "./LogoutModal.css";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
export const LogoutModal = ({setOpenLog }) => {
  const navigate = useNavigate();
  return ReactDOM.createPortal(
    <div className="Overlay">
      <div className="logout-con">
        <span className="logout-mes">로그아웃 하시겠습니까?</span>
        <button className="cancle"
          type="button"
          onClick={() => {
            setOpenLog(false);
          }}
        >
          닫기
        </button>
        <button className="logout" type="button"
          onClick={() => {
             navigate("/");
             setOpenLog(false);
          }}
        >
          로그아웃
        </button>
      </div>
    </div>,
    document.body
  );
}

export default LogoutModal;
