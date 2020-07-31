import React from 'react';

import PerfilGithub from '../../../../assets/perfilgithub.jpg';

import { HeaderContainer, HeaderProfile, HeaderActions } from './styles';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderProfile>
                <img src={PerfilGithub} alt="perfilgithub" />
                <h1>Bruno Alves</h1>
            </HeaderProfile>
            <HeaderActions>
                <button>
                    <h1>SOBRE</h1>
                    <div></div>
                </button>
                <button>

                    <h1>PORTFOLIO</h1>
                    <div ></div>
                </button>
                <button>

                    <h1>CONTATO</h1>
                    <div></div>
                </button>
            </HeaderActions>

        </HeaderContainer>
    );
}
export default Header;