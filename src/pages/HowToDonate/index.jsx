import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Btn from "../../components/Btn";
import SlideOnLoad from "../../utils/slideOnLoad";
import addScrollEffects from "../../utils/scrollEffects";

const HowToDonate = () => {
  const location = useLocation;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    SlideOnLoad(".banner-how-to-donate h1", ".banner-how-to-donate");
  }, []);

  useEffect(() => {
    addScrollEffects(
      ".text-1-donate, .text-2-donate a, .how-to-donate-section-2 p",
      ".text-1-donate a, .text-2-donate, .how-to-donate-section-2 h3",
      ".line-about"
    );
  }, []);
  return (
    <div>
      <Header />
      <div className="bg-color-banner page-how-to-donate">
        <Banner
          className="banner-how-to-donate"
          title="Aqueça corações, doe agasalho"
        />
      </div>

      <main className="main-how-to-donate">
        <section className="how-to-donate-section-1">
          <div className="text-1-donate">
            <h2>Como fazer uma doação: </h2>
            <p>
              Para realizar uma doação de agasalhos, você pode localizar um dos
              quatro pontos de coleta estrategicamente localizados em São Paulo.
              Ao chegar lá, você será recebido por um voluntário da Doe
              Agasalho, que cuidadosamente receberá suas peças de agasalho e
              registrará as informações necessárias, posteriormente, as doações
              serão organizadas no estoque.
            </p>
            <Btn
              to="/collectionpoint"
              buttonText={"Pontos de Coleta"}
              className={"btn-how-to-donate"}
            />
          </div>

          <div className="line-about"></div>

          <div className="text-2-donate">
            <h2>Como receber uma doação</h2>
            <p>
              Se você está em busca de agasalhos para enfrentar o frio, pode
              procurar um ponto de distribuição. Ao chegar lá, será recebido por
              um voluntário que verificará a disponibilidade. Caso as peças
              estejam disponíveis, elas serão prontamente fornecidas a você. Ao
              receber a doação, você poderá sair do centro de distribuição com
              os agasalhos que lhe proporcionarão conforto e proteção contra o
              frio.
            </p>
            <Btn
              to="/collectionpoint"
              buttonText={"Pontos de Coleta"}
              className={"btn-how-to-donate"}
            />
          </div>
        </section>

        <section className="how-to-donate-section-2">
          <h3>O Impacto Significativo de Uma Doação</h3>
          <p>
            A doação de agasalhos é uma forma poderosa de transmitir calor
            humano e solidariedade. Ao doar um agasalho, aquecemos não apenas o
            corpo, mas também o coração daqueles que enfrentam o frio sem
            recursos. Além disso, estamos promovendo a sustentabilidade e
            construindo uma sociedade mais justa. Um gesto generoso pode
            transformar o inverno de alguém em um momento mais acolhedor e
            esperançoso.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowToDonate;
