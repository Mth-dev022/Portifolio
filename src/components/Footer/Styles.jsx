import styled from 'styled-components'

export const Container = styled.footer`
    width: 70%;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    display:flex;

    .left-side {
        display:flex;
        flex-direction: column;
        gap: 20px;
        width: 50%;
    }
    .title {
        width: 300px;
        font-size: 38px;
    }
    .mail-icon {
        font-size: 25px;
        margin-right: 15px;
    }
    .email-span {
        color:#777777;
    }
    .sub-title {
        color: #777777;
        width: 480px;
    }
    .information-box {
        display:flex;
        flex-direction: column;
        gap: 20px;
    }
    .icon-container {
        font-size: 35px;
        display:flex;
        gap: 10px;
    }
    .mail-text {
        color: #777777;
    }
    a {
        color: black;
    }
    .right-side {
        width: 50%;
    }
        .form-container {
            position: relative;
            background-color: #e0e0e978;
            padding: 20px 30px 50px 30px;
            border-radius: 10px;
            width: 80%;
        }
        .form-input-container {
            background-color: #c9c6c6;
            border-radius: 10px;
            padding: 10px;
            width: 90%;
            margin-top:10px;
        }
        .form-input {
            border: none;
            background-color: transparent;
            outline:none;
            margin-left: 15px;
            width: 80%;
            background-color: transparent;
        }
        .content {
            padding-top: 30px;
        }
        .button-container {
            display:flex;
            justify-content:center;
            padding-top: 30px;
        }
        .button {
            width: 60%;
            padding: 10px;
            border-radius: 10px;
            border:none;
            color: white;
            background-color: black;
            font-weight: 600;
            cursor: pointer;

            &:hover {
                background-color: #151515f0;
            }
        }
        .error-message {
        color: red;
        text-align: center;
        margin-top: 10px;
        font-weight: 600;
    }
`
export const Footer = styled.footer`
   width: 100%;
   padding: 35px;
   margin-top: 70px;
   font-family: 'Rubik', sans-serif;

   .footer-content {
        width: 70%;
        margin: 0 auto;
        display:flex;
        justify-content: space-between;
   }
   a {
      text-decoration: none;
   }
   .footer-title {
        font-size: 28px;
        background-image: linear-gradient(to right, #4958DE, #8150F2);
        background-clip: text;
        color: transparent;
   }
   .copyright {
    margin: auto 170px;
   }
`