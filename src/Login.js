import './Login.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "./급식패스.svg";

function Login() {
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
                  type="password"
                  name="pw"
                  id="pw"
                  autoCapitalize="off"
                  required
                />
                <label htmlFor="pw">비밀번호</label>
              </div>
              <div className="btn-area">
                <button type="submit">로그인</button>
              </div>
              <div className="SignUpButton">
                <Link to="/Signup"style={{ textDecoration: "none",color:"#1A1A1F"}}>회원가입하기</Link>
              </div>
               
            </form>

            {/* <div className="caption">
              <button type="button">비밀번호를 잊으셨나요?</button>
            </div> */}
          </section>
        </div>
    </div>
    </div>
  );
}

export default Login;
