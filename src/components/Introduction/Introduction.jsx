import * as C from './Styles'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import AboutUs from './../../assets/Introduction-images/about-us.png'

import CurriculoPDF from './../../assets/CV/cv.pdf'

import { useTranslation } from 'react-i18next';

const Introduction = () => {
    useEffect(() => {
        // Configuração do ScrollReveal
        ScrollReveal().reveal('.reveal', {
            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease-in-out',
            reset: true
        });
    }, []);

    const handleDownloadCV = () => {

        const link = document.createElement('a');
        link.href = CurriculoPDF;
        link.download = 'curriculo.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const { t } = useTranslation()

    return (
        <C.Container className='reveal' id="sobre">
            <div className='left-side'>
                <img src={AboutUs} />
            </div>

            <div className='right-side'>
                <h1 className='title'>{t("LET'S TALK ABOUT ME")}</h1>

                <p className='text'>{t("As a front-end developer, my focus is creating digital experiences that go beyond basic functionality. I see myself as a digital architect, designing interfaces that not only work, but also engage and captivate users.")}</p>

                <p className='sub-text'>{t("It’s about giving shape to digital, creating a unique and immersive experience for users. We are the architects of the digital world, bringing every line of code and every pixel on the screen to life. Together, we build the future of the web, where creativity flourishes and digital life comes to life.")}</p>

                <button onClick={handleDownloadCV} className='btn'>{t("Download CV")}</button>
            </div>
        </C.Container>
    )
}

export default Introduction