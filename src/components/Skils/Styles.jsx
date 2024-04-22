import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

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
        padding: 10px 35px;
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
    .t03 {
        margin-left: 20px;
    }
    .x {
        width: 50px;
        height: 50px;
        background-color: purple;
    }

    /* Animações */
    .fade-in {
        animation: ${fadeIn} 0.5s ease-in-out;
    }

    .fade-out {
        animation: ${fadeOut} 0.5s ease-in-out;
    }
    
    /* Aplicando animações aos cards */
    .fade-container {
        display: flex;
        justify-content:center;
        gap: 20px;
        flex-wrap: wrap;
    }

    .fade-container .fade-card {
        animation: ${fadeIn} 0.5s ease-in-out;
    }
`;
