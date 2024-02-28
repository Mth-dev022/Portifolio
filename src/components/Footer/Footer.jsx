import * as C from './Styles'

import { useState } from 'react';

import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name,
            email,
            phone
        }
        axios.post('http://localhost:3000/form', formData)
            .then((resp) => {
                console.log(resp.data)
                toast.success('E-mail enviado com sucesso!');
            }).catch(e => {
                toast.error('Erro ao enviar o e-mail.');
                console.log(e)
            })
    }

    return (
        <>
            <C.Container id="contato">
                <div className='left-side'>
                    <h1 className='title'>Você tem algum projeto ? Mande mensagem</h1>
                    <p className='sub-title'>Entre em contato e diga como posso ajudar. Preencha o formulario, e  entrarei em contato o mais breve possivel.</p>

                    <div style={{ display: 'flex' }}>
                        <div>
                            <MdEmail className='mail-icon' />
                        </div>
                        <div className='information-box'>
                            <span>Email: </span>
                            <p className='mail-text'>matheuszebende6@gmail.com</p>
                            <div className='icon-container'>
                                <a href='https://www.linkedin.com/in/matheus-souza-87336723a/'>
                                    <CiLinkedin />
                                </a>
                                <a href='https://github.com/Mth-dev022'>
                                    <FaGithub />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='right-side'>
                    <div className='form-container'>
                        <form onSubmit={handleSubmit}>

                            <ToastContainer
                            position="top-right"
                            autoClose={1600}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            transition: Bounce />

                            <div className='content'>
                                <label>Nome</label>
                                <div className='form-input-container'>
                                    <FaUser style={{fontSize:'17px'}} />
                                    <input onChange={(e) => handleName(e)}
                                        className='form-input'
                                        placeholder='Digite seu nome'
                                        type='text'
                                        name='nome'
                                    />
                                </div>
                            </div>

                            <div className='content'>
                                <label>E-mail</label>
                                <div className='form-input-container'>
                                    <MdEmail style={{fontSize:'17px'}} />
                                    <input className='form-input'
                                        onChange={(e) => handleEmail(e)}
                                        placeholder='Digite seu Email'
                                        type='text'
                                        name='email'
                                    />
                                </div>
                            </div>

                            <div className='content'>
                                <label>Telefone</label>
                                <div className='form-input-container'>
                                    <FaPhone style={{fontSize:'17px'}} />
                                    <input className='form-input'
                                        onChange={(e) => handlePhone(e)}
                                        placeholder='Digite seu Telefone'
                                        type='text'
                                        name='phone'
                                    />
                                </div>
                            </div>

                            <div className='button-container'>
                                <button className='button' type='submit'>Enviar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </C.Container>

            <C.Footer className='footer'>
                <div className='footer-content'>
                    <a href='#'>
                        <h1 className='title'>PORTIFOLIO</h1>
                    </a>
                    <p className='copyright'>&copy; 2024 Matheus Souza All rights reserved</p>
                </div>
            </C.Footer>
        </>

    )
}

export default Footer