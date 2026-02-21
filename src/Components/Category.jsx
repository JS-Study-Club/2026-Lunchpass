import styled from "styled-components";
import { useState } from 'react';

export default function Category(){
    const [activeTab, setActiveTab] = useState('전체');
    const categories=["전체", "조식", "석식"]
    return(
        <CategoryContainer>
            {categories.map((tap) => (
                <CategoryItem
                    key={tap}
                    className={activeTab === tap ? "Touched" : ""}
                    onClick={() => setActiveTab(tap)}
                >
                    <CategoryText>{tap}</CategoryText>
                </CategoryItem>
            ))}
        </CategoryContainer>
    )
}

const CategoryContainer=styled.div`
    display: flex;
    margin: 52px 0 0 0;
    color: #4566DE;
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 500;
    background-color: #F9F9FF;
`
const CategoryItem=styled.div`
    align-content: center;
    justify-content: center;
    height: 30px;
    width: 48px;
    border: 1px solid #4566DE;
    border-radius: 50px;
    margin-right: 10px;

    &.Touched {
    color: #F9F9FF;
    background-color: #4566DE;
    border: none;
    }
`
const CategoryText=styled.span`
    margin: 0px 11px;
`