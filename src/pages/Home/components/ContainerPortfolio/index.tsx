import React from 'react';

import { Container, TitlePortlofio, ListProjects, ItemProject } from './styles';

interface ItemPortlofio {
    title: string
    description: string
    seeMoreLink: string
}
const items: ItemPortlofio[] = [
    {
        title: "Nubank",
        description: "Redesign de aplicativos famosos para estudo de design de telas como Nubank e Instagram",
        seeMoreLink: "https://github.com/NitoBa/instagram-clone"
    },
    {
        title: "Morcegos do Piauí",
        description: "Produto de um projeto de pesquisa científica junto ao IFPI Campus Teresina Cenral",
        seeMoreLink: "https://github.com/NitoBa/app_morcegos"
    },
    {
        title: "Meetup Piauí",
        description: "App para agendametos de meetup sobre Flutter no Piauí",
        seeMoreLink: "https://github.com/irvine5k/flutter_piaui_app"
    },
    {
        title: "Be The Hero Flutter",
        description: "Projeto Be The Hero da Rocketseat contruído com flutter e Hasura",
        seeMoreLink: "https://github.com/NitoBa/betheheroflutter"
    },
    {
        title: "AnnaluxStore",
        description: "Aplicativo de ecommerce de uma loja de roupas do instragram",
        seeMoreLink: "https://github.com/NitoBa/annaluxstore"
    },
    {
        title: "EduMath",
        description: "Aplicativo quiz de matemática com design bonito onde você pode se desafiar em várias áreas da matemática",
        seeMoreLink: "https://github.com/NitoBa/edumath"
    },
];

const ContainerPortfolio: React.FC = () => {



    return (
        <Container>
            <TitlePortlofio>
                <h3>Aprendizado</h3>
                <h1>Portfólio</h1>
                <div />
            </TitlePortlofio>
            <ListProjects>
                {
                    items.map((item, index) => <ItemProject className={index % 2 === 0 ? 'outline' : ''} >
                        <div>
                            <h2>
                                {item.title}
                            </h2>
                            <h4>
                                {item.description}
                            </h4>
                            <a href={item.seeMoreLink} target="_blank" rel="noopener noreferrer">


                                <button>
                                    Ver mais
                                </button>
                            </a>

                        </div>
                    </ItemProject>
                    )
                }

            </ListProjects>
        </Container>
    );
}

export default ContainerPortfolio;