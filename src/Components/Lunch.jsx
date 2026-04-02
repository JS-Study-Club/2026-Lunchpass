import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Lunch({ MMEAL_SC_CODE }) {
  const now = new Date();
  const API_KEY = "5883a36288fc474c9acc91fa9fe906f4";
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const [lunchData, setLunchData] = useState([]);

  useEffect(() => {
    const formattedDate = `${year}${String(month).padStart(2, "0")}${String(date).padStart(2, "0")}`;
    const apiUrl = `https://open.neis.go.kr/hub/mealServiceDietInfo?Key=${API_KEY}&Type=json&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7011569&MLSV_YMD=${formattedDate}&MMEAL_SC_CODE=${MMEAL_SC_CODE}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        if (result.mealServiceDietInfo) {
          const rawMenu = result.mealServiceDietInfo[1].row[0].DDISH_NM;
          const cleanMenuArray = rawMenu
            .split("<br/>")
            .map((item) => item.replace(/\s?\([\d.]+\)/g, "").trim());

          setLunchData(cleanMenuArray);
        } else {
          setLunchData([]); // 데이터 없으면 빈 배열로 확실히 초기화
        }
      })
      .catch(() => {
        setLunchData([]);
      });
  }, [MMEAL_SC_CODE]); // 식사 코드가 바뀔 때만 재호출

  return (
    <>
      <DinnerBox
        style={{ marginRight: MMEAL_SC_CODE === "3" ? "0px" : "10px" }}
      >
        {lunchData.length > 0 ? (
          <>
            <Text>{MMEAL_SC_CODE === "1" ? "조식" : "석식"}</Text>
            <MenuContainer>
              {lunchData.map((item, index) => (
                <MenuText key={index}>{item}</MenuText>
              ))}
            </MenuContainer>
          </>
        ) : (
          <div style={{ display: "flex", margin: "64px 31px 0 31px" }}>
            <img
              margin="0"
              src={
                MMEAL_SC_CODE === "1"
                  ? "/assets/img/NoneBreakfast.svg"
                  : "/assets/img/NoneDinner.svg"
              }
              alt="급식 정보 없음"
            />
          </div>
        )}
      </DinnerBox>
    </>
  );
}

const DinnerBox = styled.div`
  box-sizing: border-box;
  width: 170px;
  height: 200px;
  background-color: #f2f2f8;
  border-radius: 10px;
  box-sizing: border-box;
`;

const Text = styled.p`
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  color: #1a1a1f;
  margin-left: 15px;
  margin-top: 15px;
`;
const MenuContainer = styled.div`
  margin-top: 11px;
  margin-left: 15px;
  margin-right: 11px;
`;

const MenuText = styled.div`
  margin-bottom: 5px;
  font-size: 13px;
  font-family: Pretendard;
  font-weight: 400;
  color: #494950;
`;
