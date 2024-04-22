import * as C from './Styles';
import Habilidades from './Components/Habilidades';
import Ferraments from './Components/Ferraments';
import BackEnd from './Components/BackEnd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Skils = () => {
    const [selected, setSelected] = useState('front-end');
    const [fade, setFade] = useState(false); // Estado para controlar a animação
    const { t } = useTranslation();

    const handleCLick = (item) => {
        setFade(true); // Ativa a animação de fade-out
        setTimeout(() => {
            setSelected(item);
            setFade(false); // Desativa a animação de fade-out e ativa a de fade-in
        }, 500); // Tempo igual à duração da animação de fade-out
    };

    return (
        <C.Container id="habilidades">
            <div className="title-container">
                <h1 className="title">{t("Skills")}</h1>
                <p className="sub-title">
                    {t("As a developer, I have a wide range of technical skills and competencies that allow me to create innovative and efficient solutions.")}
                </p>
                <div className="capsule">
                    <span onClick={() => handleCLick('front-end')} className={selected === 'front-end' ? 'selectedT t01' : 't01'}>
                        {t("Front-End")}
                    </span>
                    <span onClick={() => handleCLick('back-end')} className={selected === 'back-end' ? 'selectedT t02' : 't02'}>
                        {t("Back-End")}
                    </span>
                    <span onClick={() => handleCLick('tools')} className={selected === 'tools' ? 'selectedT t03' : 't03'}>
                        {t("Tools")}
                    </span>
                    <div className={`selectedCapsule ${selected === 'front-end' ? 't01' : selected === 'back-end' ? 't02' : 't03'}`}></div>
                </div>
            </div>
            <div className="fade-container">
                {selected === 'front-end' && <div className={`fade-card ${fade ? 'fade-out' : 'fade-in'}`}><Habilidades /></div>}
                {selected === 'back-end' && <div className={`fade-card ${fade ? 'fade-out' : 'fade-in'}`}><BackEnd /></div>}
                {selected === 'tools' && <div className={`fade-card ${fade ? 'fade-out' : 'fade-in'}`}><Ferraments /></div>}
            </div>
        </C.Container>
    );
};

export default Skils;
