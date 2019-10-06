import React from 'react';

const Conteudo = () => {
    return (
        // Texto sobre a importancia dos APP's de mobilidade urbana
        //---------------------------------------------------------------------//
        // No elemento h1 mostra-se a vantagem de fazer uma viagem pela A Sity
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Graças aos desenvolvedores temos App's de mobilidade urbana</h1>
                <p className="lead">As grandes cidades foram tomadas por motoristas de aplicativos de mobilidade urbana, também surgiram as bicicletas e os patinetes elétricos, no modelo da economia compartilhada. Em breve, poderemos ter taxis voadores e veículos autônomos nos principais centros urbanos.
                </p>
                <p className="lead">
                    No entanto, enquanto estes serviços ainda são uma novidade, é difícil prever se esses impactos na sociedade serão positivos ou negativos.
                    Segundo Jason Jackson, professor de planejamento urbano do MIT (Massachusetts Institute of Technology), o poder público é responsável por garantir que estas transformações mirem o bem social.
                    “Governo e empresas precisam trabalhar juntos de forma a promover a diminuição da desigualdade espacial com iniciativas de transporte”, afirma o especialista durante o evento The Future Of Work, que aconteceu em São Paulo na última quinta-feira (29).
                    “Desigualdade não existe apenas em uma questão econômica, mas também em uma questão espacial”, explica Jackson.
                </p>
                <p className="lead">
                    Os aplicativos de mobilidade estão vindo para nos ajudar no nosso dia a dia.
                </p><br></br>
                <h1>Entre muitos App's temos A Sity que investe na segurança dos seus motoristas</h1>
                <p className="lead">
                    <a target="_blank" href="logo-a-sity.png">
                        <img src="logo-a-sity.png" alt="Logo A Sity" width="180" height="150" align="left" />
                    </a>
                    A Sity é uma plataforma de de mobilidade preocupada com a segurança, bem estar e qualidade no serviço prestado aos nossos usuários.
                    O diretor de marketing da empresa Rafael Barrinha, vê o esse investimento como de grande importancia.
                    Essa ideio surgiu depois de algumas conversas com motoristas de aplicativos que questionavam sobre a questão da segurança, leventamento dado pela Secretaria Estadual da Segurança Pública revelados pela GloboNews.
                    Só no primeiro trimestre de 2018 houve um salto de 839 para 995 roubos a motoristas na comparação com o mesmo período de 2017. Para tentar evitar o problema, o aplicativo aposta em duas medidas.
                    Uma é cobrar dos usuários uma selfie no momento do cadastro. Ou seja, o motorista vai saber quem é o usuário - e, se no momento do embarque aparecer uma pessoa diferente, ele pode se recusar a fazer a corrida e não será punido por isso.
                    Já no momento da corrida, se o motorista se sentir numa situação de insegurança, poderá acionar um ‘botão de pânico’.
                </p>
                <p className="lead">
                    A questão de segurança e de super importância para o motorista, conquistar a confiança dos seus functionários é essencial para qualer empresa.
                </p>
            </div>
        </div>
    )
}

export default Conteudo;