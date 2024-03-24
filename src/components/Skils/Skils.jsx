import * as C from './Styles';
import Habilidades from './Components/Habilidades';
import Ferraments from './Components/Ferraments';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';

const Skils = () => {
    const [selected, setSelected] = useState('habilidades');

    const handleCLick = (item) => {
        setSelected(item);
    };

    const {t} = useTranslation()

    return (
        <C.Container id="habilidades">
            <div className="title-container">
                <h1 className="title">{t("Skills")}</h1>
                <p className="sub-title">
                    {t("As a developer, I have a wide range of technical skills and competencies that allow me to create innovative and efficient solutions.")}
                </p>
                <div className="capsule">
                    <span onClick={() => handleCLick('habilidades')} className={selected === 'habilidades' ? 'selectedT t01' : 't01'}>
                        {t("Skills")}
                    </span>
                    <span onClick={() => handleCLick('ferraments')} className={selected === 'ferraments' ? 'selectedT t02' : 't02'}>
                        {t("Tools")}
                    </span>
                    {selected === 'habilidades' ? <div className="selectedCapsule t01"></div> : <div className="selectedCapsule t02"></div>}
                </div>
            </div>
            {selected === 'habilidades' ? <Habilidades /> : <Ferraments />}
        </C.Container>
    );
};

export default Skils;
