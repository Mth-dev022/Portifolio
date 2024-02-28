import styled from 'styled-components'

export const Container = styled.div`
    width: 70%;
    margin: 0 auto;
    padding-top: 150px;
    font-family: 'Rubik', sans-serif;
    display:flex;
    position:relative;

    .dark-theme {
            background-color: black;
            color: white;
          
        }

    .left-side {
        position:relative;
        padding-top: 100px;
        width: 50%;
    }
    .hello-span {
        font-size: 40px;
        font-weight: 600;
    }
    .line {
        width: 530px;
        height: 2px;
        background-color: black;
        position: absolute;
        right:50px;
        top: 125px;
    }
    .name-span {
        font-size: 70px;
    }
    .seniority {
        font-size: 24px;
    }
    .right-side {
        display:flex;
        position:absolute;
        right:20px;
        top:80px;
        width: 50%;
        padding-left: 100px;
    }
    .button-container {
        padding-top: 50px;
    }
    .hire-button {
        padding: 20px 40px;
        border-image: linear-gradient(to right, #4958DE, #8150F2) 1;
        color: #ffffff;
        background-image: linear-gradient(to right, #4958DE, #8150F2);
        font-weight: 700;
        font-size: 14px;
        cursor:pointer;
    }
    .CV-button {
        margin-left: 20px;
        padding: 20px 40px;
        background-color: #ffffff;
        color: #00001190;
        font-weight: 900;
        font-size: 14px;
        border-image: linear-gradient(to right, #4958DE, #8150F2) 1;
        transition: ease .2s;
        cursor:pointer;

        &:hover {
            background-image: linear-gradient(to right, #4958DE, #8150F2);
            color: #ffffff;
        }
    }
   
`