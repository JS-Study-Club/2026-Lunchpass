import styled from "styled-components";
import lunch from "/assets/img/Lunch.svg"
import { useNavigate } from "react-router-dom";

export default function Lunch(){
    const navigate=useNavigate()

    return(
        <LunchContainer>
            <LunchInformationContainer>
                <img src={lunch} style={{
                    marginRight: 10,
                    display: "inline-block"
                }}/>
                <LunchInformation>오늘의 급식</LunchInformation>
            </LunchInformationContainer>
            <BoxContainer>
                <BreakfastBox>
                    <Text>조식</Text>
                    <MenuContainer>
                        <MenuText>맛있는 푸딩</MenuText>
                        <MenuText>달달한 푸딩</MenuText>
                        <MenuText>굉장한 푸딩</MenuText>
                        <MenuText>푸딩</MenuText>
                    </MenuContainer>
                </BreakfastBox>
                <DinnerBox>
                    <Text>석식</Text>
                    <MenuContainer>
                        <MenuText>맛있는 푸딩</MenuText>
                        <MenuText>달달한 푸딩</MenuText>
                        <MenuText>굉장한 푸딩</MenuText>
                        <MenuText>푸딩</MenuText>
                    </MenuContainer>
                </DinnerBox>
            </BoxContainer>
        </LunchContainer>
    )
}
const LunchInformationContainer=styled.div`
    display: flex;
    align-items: center;
    margin: 0px 0px 10px 0px;
    height: 21px;
`
const LunchInformation = styled.span`
    margin-right:225px;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: normal;
`

const LunchContainer = styled.div`
    margin: 32px 0px 0px 0px;
    width: 350px;
    height: 229px;
`
const BoxContainer=styled.div`
    display: flex;
    // flex-direction: colum;
`
const BreakfastBox=styled.div`
    margin-right: 10px;
    width: 170px;
    height: 200px;
    background-color: #E9E9E9;
    border-radius: 10px;
    padding-left:15px;;
`
const DinnerBox=styled.div`
    margin-right: 0px;
    width: 170px;
    height: 200px;
    background-color: #E9E9E9;
    border-radius: 10px;
    padding-left:15px;
`

const Text=styled.p`
    font-size: 14px;
    font-family: Pretendard;
    font-weight: 500;
    color: #1A1A1F;
`
const MenuContainer=styled.div`
    margin-top: 11px;
`

const MenuText=styled.div`
    margin-bottom: 5px;
    font-size: 13px;
    font-family: Pretendard;
    font-weight: 400;
    color: #494950;
`
