import React from 'react';
import { Container } from './styles';
import PerfilGithub from '../../../../assets/perfilgithub.jpg';

interface Props {

}

const Header: React.FC<Props> = () => {


    return (
        <Container>
            <header>
                <div className="contentHeader">
                    <img src={PerfilGithub} alt="Foto de perfil" />
                    <h2 className="username">Bruno Alves</h2>
                </div>

                <div className="contentActions">
                    <a href='#wellcome'>
                        <h1 className="about">SOBRE</h1>
                        <div className="indicator"></div>
                    </a>
                    <a href='#portfolio'>
                        <h1 className="portlofio">PORTFOLIO</h1>
                        <div className="indicator"></div>
                    </a>
                    <a href='#service'>
                        <h1 className="contact">CONTATO</h1>
                        <div className="indicator"></div>
                    </a>

                </div>
            </header>
        </Container>
    );
}

export default Header;