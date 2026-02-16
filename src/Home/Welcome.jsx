import styled from "styled-components";

export default function Welcome({ username, commute }) {
  return (
    <Container>
      {/* 첫 번째 줄: 인사말 + 뱃지 */}
      <HeaderRow>
        <NameWrapper>
          <Text>안녕하세요,&nbsp;</Text>
          <Text style={{ fontSize: "20px", color: "#4566DE" }}>{username}</Text>
          <Text>님</Text>
        </NameWrapper>
        <CommuteBadge>
          <BadgeText>{commute}</BadgeText>
        </CommuteBadge>
      </HeaderRow>

      {/* 두 번째 줄: 티켓 안내 */}
      <SubText>오늘 사용할 수 있는 티켓이 있어요!</SubText>
    </Container>
  );
}

// 전체를 감싸는 컨테이너 (여백 관리 용이)
const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Pretendard;
`;

const HeaderRow = styled.div`
    display: flex;
    align-items: center; /* 수직 중앙 정렬의 핵심! */
    margin-bottom: 7px;
`;

const NameWrapper = styled.div`
    display: flex;
    align-items: baseline; /* 글자 아래 기준선을 맞춤 */
    margin-right: 8px; /* 뱃지와의 간격 */
`;

const Text = styled.span` /* p 대신 span 사용 권장 */
    font-size: 18px;
    font-weight: 600;
    color: #1A1A1F;
`;

const CommuteBadge = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
    height: 18px;
    border-radius: 9px;
    background-color: rgba(143, 166, 249, 0.15);
`;

const BadgeText = styled.span`
    font-weight: 500;
    font-size: 10px;
    color: #4566DE;
`;

const SubText = styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: #A6A6A6;
`;

// const CommuteandDormitory=styled.div`
//     display: inline-block;
//     width: 45px;
//     height: 20px;
// `

