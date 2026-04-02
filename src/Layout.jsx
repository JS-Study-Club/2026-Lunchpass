import styled from "styled-components";
import Menu from "./Components/Menu.jsx";
import { Outlet } from "react-router-dom";

const InnerSiteContainer = styled.div`
  position: relative;
  min-height: 100%;
  margin: 0 auto; /* 좌우 마진을 auto로 설정하여 중앙 정렬 */
  top: 0;
`;

const SiteContainer = styled.div`
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  background-color: #f9f9ff;
  min-height: 100vh;
  padding: 84px 20px 34px 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  position: relative;
`;

export default function Layout() {
  return (
    <SiteContainer>
      <InnerSiteContainer>
        <main>
          <Outlet />
        </main>
      </InnerSiteContainer>
      <Menu />
    </SiteContainer>
  );
}
