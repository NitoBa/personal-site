import React from 'react';

import { Container, Description } from './styles';
import BollsImg from '../../../../assets/bolls.png';
import CirclesImg from '../../../../assets/circles2.png';
import PerfilImg from '../../../../assets/perfil3.png';


const ContainerDescription: React.FC = () => {
    return (
        <Container className="description">
            <div className='photos'>
                <img id='bolls' src={BollsImg} alt='bools' />
                <img id='profilePhoto' src={PerfilImg} alt='perfil' />
            </div>
            <Description>
                <h2>Um pouco sobre mim</h2>
                <span>
                    Formado em eletrônica, já atuei no
                    setor de desenvolvimento de jogos,
                    amante de programação e atualmente
                    se dedicando ao desenvolvimento de
                    aplicativos móveis com Flutter.
                </span>

            </Description>
            <img id='circles' src={CirclesImg} alt='circles' />
        </Container>
    );
}

export default ContainerDescription;