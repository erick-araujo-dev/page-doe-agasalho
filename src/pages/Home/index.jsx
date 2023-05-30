import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Btn from "../../components/Btn";
import addScrollEffects from "../../utils/scrollEffects";
import SlideOnLoad from "../../utils/slideOnLoad";

const Home = () => {
  const location = useLocation;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    SlideOnLoad(".banner-home", ".banner-home h1");
  }, []);

  useEffect(() => {
    addScrollEffects(
      ".about-home .text-1, .title-how-to-donate",
      ".about-home .text-2, .p-how-to-donate, .btn-home",
      ".about-home .line"
    );
  }, []);
  return (
    <div className="home">
      <Header />
      <Banner
        className="banner-home"
        title="Compartilhe Amor, Faça uma Doação"
      />
      <main>
        <section className="about-home">
          <p className="text-1">
            Estamos arrecadando doações de agasalhos em diversos pontos no
            Munícipio de São Paulo
          </p>

          <div className="line"></div>

          <p className="text-2">
            Doe Agasalho é uma organização sem fins lucrativos que está
            empenhada em combater o frio e espalhar calor humano pelas ruas do
            Munícipio de São Paulo. Através da doação de agasalhos, buscamos
            criar um impacto positivo na vida das pessoas em situação de
            vulnerabilidade, proporcionando-lhes condições mais dignas de
            enfrentar o inverno. Juntos, podemos aquecer vidas e promover
            esperança.
          </p>
        </section>
        <section className="how-to-donate" id="how-to-donate">
          <h1 className="title-how-to-donate">Como é feita uma doação?</h1>
          <p className="p-how-to-donate">
            Para realizar uma doação, basta dirigir-se a um dos quatro pontos de
            coleta espalhados pelo município de São Paulo. Ao se dirigir a um
            dos pontos de coleta, você será recebido por um voluntário dedicado
            da Doe Agasalho, que estará presente na recepção do estabelecimento.
            O voluntário irá receber sua doação de agasalhos com gratidão e
            cuidado, garantindo que as peças sejam devidamente registradas no
            banco de dados da organização. Após o registro, as doações serão
            encaminhadas aos centros de distribuição, onde serão triadas e
            direcionadas para aqueles que mais necessitam. Agradecemos
            profundamente pela sua contribuição e pela confiança em nossa
            organização.
            <strong>
              Clique no botão abaixo e descubra a localização dos pontos de
              coleta.
            </strong>
          </p>
          <div className="btn-home" title="Ver endereços">
            <Btn to="/collectionpoint" buttonText={"Pontos de Coleta"} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
