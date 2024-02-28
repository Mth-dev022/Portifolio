import styled from 'styled-components'

export const Container = styled.div`
    width:70%;
    margin: 350px auto 150px auto;
    display:flex;

    .left-side {
        width:50%;
    }
    .right-side {
        width:50%;
        margin: 100px 100px;
    }
    .title {
        font-family: 'Rubik', sans-serif;
        width: 300px;
        font-weight: 900;
        font-size: 36px;
        letter-spacing: 2px;
    }
    .text, .sub-text {
        font-family: 'Rubik', sans-serif;
        padding-top: 30px;
        color: #777777;
        font-weight: 400;
        font-size: 16px;
    }
    .btn {
        margin-top: 50px;
        padding: 15px 60px;
        border-radius: 5px;
        background-image: linear-gradient(to right, #4958DE, #8150F2);
        border: none;
        color: #FFFFFF;
        font-weight: 900;
        font-family: 'Rubik', sans-serif;
        cursor: pointer;
    }
`