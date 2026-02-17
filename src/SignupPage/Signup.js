import "./Singup.css";
import { Link,} from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Backbutton } from "./backbutton.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="App">
      <div className="Signcon">
        <section className="singup-form">
          <form>
            <div className="top-bar">
              <Link to="/" className="backbutton">
                <Backbutton />
              </Link>
              <h1 className="signup-title">회원가입</h1>
            </div>
            <div className="name-area">
              <input
                type="text"
                name="name"
                id="name"
                autoCapitalize="off"
                required
              />
              <label htmlFor="name">이름</label>
            </div>
            <div className="name-area">
              <input
                type="text"
                name="id"
                id="id"
                autoCapitalize="off"
                required
              />
              <label htmlFor="id">아이디</label>
            </div>
            <div className="name-area">
              <input
                type={showPassword ? "text" : "password"}
                name="pw"
                id="pw"
                autoCapitalize="off"
                required
              />
              <label htmlFor="pw">비밀번호</label>
              <div className="eyes"
              onClick={togglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="type-box">
              <p className="type-title">유형</p>

              <div className="button-group">
                <input type="radio" id="day" name="type" defaultChecked />
                <label htmlFor="day" className="type-btn">
                  통학생
                </label>

                <input type="radio" id="dorm" name="type" />
                <label htmlFor="dorm" className="type-btn">
                  기숙사생
                </label>
              </div>
            </div>

            <div className="btn-area">
              <button type="submit">확인</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Signup;
