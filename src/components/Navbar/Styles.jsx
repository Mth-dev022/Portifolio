import styled from 'styled-components'

export const Container = styled.nav`
    display:flex;
    justify-content: space-between;
    width: 70%;
    padding-top: 40px;
    margin: 0 auto;

    .logo {
        background-image: linear-gradient(to right, #4958DE, #8150F2);
        background-clip: text;
        color: transparent;
        font-weight: 900;
        font-size: 27px;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 1px;
    }
    .list {
        list-style:none;
        display:flex;
        gap: 45px;
        margin-right: 150px;
    }
    .list-items {
        font-family: 'Rubik', sans-serif;
        font-size: 16px;
        cursor: pointer;
        transition: ease-in .2s;

        &:hover {
            color: #4958DE;
        }
    }
    a { 
        text-decoration: none;
        color: black;
        }
    .selected {
        color: #4958DE;
    }
`