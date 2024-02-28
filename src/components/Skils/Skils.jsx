import * as C from './Styles';
import Habilidades from './Components/Habilidades';
import Ferraments from './Components/Ferraments';
import { useState } from 'react';

const Skils = () => {
    const [selected, setSelected] = useState('habilidades');

    const handleCLick = (item) => {
        setSelected(item);
    };

    return (
        <C.Container id="habilidades">
            <div className="title-container">
                <h1 className="title">Habilidades</h1>
                <p className="sub-title">
                    Como desenvolvedor, possuo uma ampla gama de habilidades técnicas e competências que me permitem criar soluções inovadoras e eficientes.
                </p>
                <div className="capsule">
                    <span onClick={() => handleCLick('habilidades')} className={selected === 'habilidades' ? 'selectedT t01' : 't01'}>
                        Skills
                    </span>
                    <span onClick={() => handleCLick('ferraments')} className={selected === 'ferraments' ? 'selectedT t02' : 't02'}>
                        Tools
                    </span>
                    {selected === 'habilidades' ? <div className="selectedCapsule t01"></div> : <div className="selectedCapsule t02"></div>}
                </div>
            </div>
            {selected === 'habilidades' ? <Habilidades /> : <Ferraments />}
        </C.Container>
    );
};

export default Skils;
