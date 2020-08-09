import React from 'react';
import { FaInstagram, FaTwitter, FaMediumM } from "react-icons/fa";

import { Container, SocialLinks } from './styles';

const ContainerService: React.FC = () => {
    return (
        <Container>
            <strong id="service">Serviços</strong>
            <p>
                Tém algum serviço e gostaria de ter um aplicativo para alavancar o seu negócio? <br /> mande um email para
            <span id='email'> bruno.santos@ifpi.edu.br</span>
            </p>
            <SocialLinks>
                <strong>Social Links</strong>

                <div className='icon'>
                    <FaInstagram color={"grey"} size={20} />
                    <span>@nito_b.a</span>
                </div>
                <div className='icon'>

                    <FaTwitter color={"grey"} size={20} />
                    <span>@NitoB_a</span>
                </div>
                <div className='icon'>
                    <FaMediumM color={"grey"} size={20} />
                    <span>@bruno.santos</span>

                </div>

            </SocialLinks>
            <div id='line' />
            <span id="copyright">
                Copyright 2020,
                    <span>
                    Bruno Alves.
                    </span>
                     All Right Reserved
            </span>
        </Container>
    );
}

export default ContainerService;