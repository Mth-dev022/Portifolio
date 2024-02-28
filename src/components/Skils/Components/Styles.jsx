import styled from "styled-components";

export const Container = styled.div`
    padding-top: 100px;

    .card-container {
        display:flex;
        gap: 50px;
    }
    .cards {
        width:300px;
        height: 350px;
        display:flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        font-family: 'Rubik', sans-serif;
        background-color: #F9F9FD;
        transition: .5s ease-out;

        &:hover {
            background-color: #FFFFFFFF;
            box-shadow: 1px 1px 20px 6px  rgba(98,46,156,1);
        }
    }
    .card-text {
        color: #777777;
        text-align: center;
    }
    .git {
        font-size: 80px;
        color: #E84E31;
    }
    .npm {
        font-size: 80px;
        color: #C60001;
    }
    .webpack {
        font-size: 80px;
        color: #1B74BA;
    }
    .vs {
        font-size: 80px;
        color: #40A8EB;
    }
`