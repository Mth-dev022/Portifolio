import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    margin: 0 auto;
    font-family: 'Rubik', sans-serif;
    padding-top: 200px;

    .title-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    .title {
        font-size: 35px;
    }
    .sub-title {
        width: 600px;
        color: #777777;
    }
    .capsule {
        background-color: #e4e1e1;
        border-radius: 20px;
        padding: 10px 25px;
    }
    .capsule span {
        z-index: 1;
        cursor: pointer;
    }
    .selectedT {
        background-color: #7336D1;
        color: white;
        padding: 8px 15px;
        border-radius: 15px;
    }  
    .t02 {
        margin-left: 20px;
    }
    .x {
        width: 50px;
        height: 50px;
        background-color: purple;
        
    }
`;
