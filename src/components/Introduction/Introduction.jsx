import * as C from './Styles'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import AboutUs from './../../assets/Introduction-images/about-us.png.webp'

import CurriculoPDF from './../../assets/CV/cv.pdf'

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

  return (
    <C.Container className='reveal' id="sobre">
        <div className='left-side'>
            <img src={AboutUs} />
        </div>

        <div className='right-side'>
            <h1 className='title'>VAMOS FALAR SOBRE MIM</h1>

            <p className='text'>Como desenvolvedor front-end, meu foco é criar experiências digitais que vão além da funcionalidade básica. Vejo-me como um arquiteto digital, projetando interfaces que não apenas funcionam, mas também envolvem e cativam os usuários.</p>

            <p className='sub-text'>É dar forma ao digital, criando uma experiência única e imersiva para os usuários. Somos os arquitetos do mundo digital, dando vida a cada linha de código e cada pixel na tela. Juntos, construímos o futuro da web, onde a criatividade floresce e a vida digital ganha vida.</p>

            <button onClick={handleDownloadCV} className='btn'> Baixar CV</button>
        </div>
    </C.Container>
  )
}

export default Introduction