import * as C from './Styles';
import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
        setError('');
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setError('');
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar campos
        if (!name.trim()) {
            setError('Name is required');
            return;
        }
        if (!email.trim()) {
            setError('Email is required');
            return;
        }
        if (!phone.trim()) {
            setError('Phone is required');
            return;
        }

        const formData = {
            name,
            email,
            phone
        };

        axios.post('http://localhost:3000/form', formData)
            .then((resp) => {
                console.log(resp.data);
                toast.success('E-mail enviado com sucesso!');
                setName('');
                setEmail('');
                setPhone('');
                setError('');
            }).catch(e => {
                toast.error('Erro ao enviar o e-mail.');
                console.log(e);
            });
    };

    return (
        <>
            <C.Container id="contato">
                <div className='left-side'>
                    <h1 className='title'>{t("Do you have any projects? send a message")}</h1>
                    <p className='sub-title'>{t("Get in touch and let me know how I can help. Fill out the form, and I will get in touch as soon as possible.")}</p>

                    <div style={{ display: 'flex' }}>
                        <div>
                            <MdEmail className='mail-icon' />
                        </div>
                        <div className='information-box'>
                            <span className='mail-label'>Email: </span>
                            <p className='mail-text'>matheuszebende6@gmail.com</p>
                            <div className='icon-container'>
                                <a href='https://www.linkedin.com/in/matheus-souza-87336723a/'>
                                    <CiLinkedin  className='linkedin-icon'/>
                                </a>
                                <a href='https://github.com/Mth-dev022'>
                                    <FaGithub className='github-icon'/>
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
                                <label>{t("Name")}</label>
                                <div className='form-input-container'>
                                    <FaUser style={{fontSize:'17px'}} />
                                    <input onChange={(e) => handleName(e)}
                                        className='form-input'
                                        placeholder={t("Write your name")}
                                        type='text'
                                        name='nome'
                                        value={name}
                                    />
                                </div>
                                {error && error.includes('Name') && <p className="error-message">{error}</p>}
                            </div>

                            <div className='content'>
                                <label>E-mail</label>
                                <div className='form-input-container'>
                                    <MdEmail style={{fontSize:'17px'}} />
                                    <input className='form-input'
                                        onChange={(e) => handleEmail(e)}
                                        placeholder={t("Write your email")}
                                        type='email'
                                        name='email'
                                        value={email}
                                    />
                                </div>
                                {error && error.includes('Email') && <p className="error-message">{error}</p>}
                            </div>

                            <div className='content'>
                                <label>{t("Phone")}</label>
                                <div className='form-input-container'>
                                    <FaPhone style={{fontSize:'17px'}} />
                                    <input className='form-input'
                                        onChange={(e) => handlePhone(e)}
                                        placeholder={t("Write your phone")}
                                        type='tel'
                                        name='phone'
                                        value={phone}
                                    />
                                </div>
                                {error && error.includes('Phone') && <p className="error-message">{error}</p>}
                            </div>

                            <div className='button-container'>
                                <button className='button' type='submit'>{t("Submit")}</button>
                            </div>

                        </form>
                    </div>
                </div>
            </C.Container>

            <C.Footer className='footer'>
                <div className='footer-content'>
                    <a href='#'>
                        <h1 className='footer-title'>PORTIFOLIO</h1>
                    </a>
                    <p className='copyright'>&copy; 2024 Matheus Souza {t(" All rights reserved")}</p>
                </div>
               
            </C.Footer>       
        </>
    );
};

export default Footer;
