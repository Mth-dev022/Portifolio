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
 
    .card {
        position: relative;
        overflow: hidden;
        border-radius: 5px;
    }
    .card:hover .overlay {
        background-color: rgba(159, 164, 230, 0.8);
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 400px;
        height: 300px;
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
        font-family: 'Rubik', sans-serif;
        font-size: 23px;
    }
    .sub-title {
        color: #777777;
        font-size: 17px;
        font-family: 'Roboto', sans-serif;
    }
`