import "./Mydata.css";
import { useState } from "react";
import Menu from "../bottommenu/Menu";
import { ReactComponent as LogoutIcon } from "./logout.svg";
import { ReactComponent as User } from "./user.svg";
import banner from "./banner.svg";
import LogoutModal from "../logout/LogoutModal";
function Mydata() {
  const [openLog, setOpenLog] = useState(false);
  return (
    <div>
      <div className="App">
        <div className="mycon">
          <section className="mydata">
            <div
              className="color"
              style={{ backgroundImage: `url(${banner})` }}
            >
              <span className="infor">내 정보</span>
              <div className="user">
                <User className="user-icon" />
                <span>최예린</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-row">
                <span className="label">학번</span>
                <span className="value">1617</span>
              </div>

              <div className="info-row">
                <span className="label">이메일</span>
                <span className="value">D2535@e-mirim.hs.kr</span>
              </div>

              <div className="info-row">
                <span className="label">학생분류</span>
                <span className="value">통학생</span>
              </div>
            </div>
            <div className="mydata-logout">
              <button
                type="button"
                className="logout-button"
                onClick={() => {
                  setOpenLog(true);
                }}
              >
                로그아웃 <LogoutIcon />
              </button>
            </div>
            {openLog && <LogoutModal setOpenLog={setOpenLog} />}
          </section>
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Mydata;
