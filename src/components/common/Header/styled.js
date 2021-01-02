import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 0;
    padding: 1em 40px;
    font-size: 100%;
    color: #855;
    background-color: #fff;
    box-shadow: 0px 20px 6px -20px #ddd;
    .logo{
        font-size: 16px;
        font-weight: 600;
        color: #000;
        letter-spacing: 1px;
        margin-left: -10px;
    }
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    li{
        display: inline;
        line-height: 58px;
        font-weight: 700;
        color: #000;
    }
    .active{
        background-color: #f8f9ff;
    }
`;