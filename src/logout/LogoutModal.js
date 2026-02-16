import "./LogoutModal.css";
import { Link } from "react-router-dom";
export const LogoutModal = ({setOpenLog }) => {
  return (
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
             <Link to="/"></Link>;
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}

export default LogoutModal;
