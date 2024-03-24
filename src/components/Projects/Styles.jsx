import styled from 'styled-components'

export const Container = styled.div`
    width:70%;
    margin: 250px auto;
    font-family: 'Rubik', sans-serif;
    
    .text {
        color:#9A9A9A;
        margin-top: 20px;
        width: 40%;
    }
    .list {
        display:flex;
        list-style: none;
        padding-top: 100px;
        gap: 60px;
    }
    .list-items {
        cursor:pointer;
        font-family: 'Rubik', sans-serif;
        font-size: 14px;

        &:hover {
            color: #854FEF;
        }
    }
    .selected {
        color: #854FEF
    }
`
export const Gallery = styled.div`
    margin: 100px auto;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    font-family: 'Poppins', sans-serif;

    .img{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .card {
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        width: 410px;
        padding: 30px;
        background-color: #fdfcfcf8;
        box-shadow: 1px 1px 20px 6px  #281341;
    }
    .card:hover .overlay {
        background-color: rgba(42, 43, 56, 0.8);
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 410px;
        height: 330px;
        background-color: rgba(159, 164, 230, 0);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon {
        font-size: 7rem;
        color: white;
    }
    .title{
        position: relative;
        z-index: 1;
        padding: 20px 0px;
        font-size: 23px;
    }
   .stack-container {
        display:flex;
        flex-wrap: wrap;
        gap: 10px;
        padding-top: 10px;
   }
   .stack {
    background-image: linear-gradient(to right, #4958DE, #8150F2);
    padding: 5px 9px;
    border-radius: 10px;
   }
   .description {
    padding-top: 30px;
    font-weight: 500;
   }
`