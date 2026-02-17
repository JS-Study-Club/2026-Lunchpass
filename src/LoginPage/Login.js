import "./Login.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./급식패스.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="App">
      <div className="back">
        <div className="logcon">
          <section className="login-form">
            <Logo className="logo" />
            <form>
              <div className="int-area">
                <input
                  type="text"
                  name="id"
                  id="id"
                  autoCapitalize="off"
                  required
                />
                <label htmlFor="id">이름</label>
              </div>

              <div className="int-area">
                <input
                  type={showPassword ? "text" : "password"}
                  name="pw"
                  id="pw"
                  autoCapitalize="off"
                  required
                />
                <label htmlFor="pw">비밀번호</label>
                <div className="eyes" onClick={togglePassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <div className="btn-area">
                <button type="submit">로그인</button>
              </div>
              <div className="SignUpButton">
                <Link
                  to="/Signup"
                  style={{ textDecoration: "none", color: "#A6A6A6" }}
                >
                  회원가입하기
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
