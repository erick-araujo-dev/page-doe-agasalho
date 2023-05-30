import React, { useEffect } from "react";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import unidade1 from "../../assets/images/unidade1.jpg";
import unidade2 from "../../assets/images/unidade2.jpg";
import unidade3 from "../../assets/images/unidade3.jpg";
import unidade4 from "../../assets/images/unidade4.jpg";
import addScrollEffects from "../../utils/scrollEffects";
import { useLocation } from "react-router-dom";
import SlideOnLoad from "../../utils/slideOnLoad";

const CollectionPoint = () => {
  const location = useLocation;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    SlideOnLoad(
      ".card-box-r-load, .card-box-l-load img ",
      ".card-box-l-load, .card-box-r-load img"
    );
  }, []);

  useEffect(() => {
    addScrollEffects(
      ".card-box-r-scroll, .card-box-l-scroll img, .card-content-r-scroll h2, .card-content-l-scroll p, .card-content-r-scroll a, .p-text-collection-point",
      ".card-box-l-scroll, .card-box-r-scroll img, .card-content-l-scroll h2, .card-content-r-scroll p, .card-content-l-scroll a, .title-text-collection-point"
    );
  }, []);

  return (
    <div>
      <Header />
      <main className="collection-point">
        <h1 className="h1-collection-point">Conheça nossos pontos de coleta</h1>
        <div className="cards">
          <div className="card card-box-r-load">
            <img
              className="card-img"
              src={unidade1}
              alt="Posto de coleta centro"
              title="Posto de coleta centro"
            />
            <div className="card-txt card-content-r-load">
              <h2>Unidade I - Centro</h2>
              <p>
                Nossa primeira unidade esta localizada no centro no endereço: -
                Rua da Solidariedade, 123 - Bairro Centro, São Paulo/SP
              </p>
              <a
                target="_blank"
                href="https://www.google.com.br/maps/place/Zona+Central+de+S%C3%A3o+Paulo+-+Rep%C3%BAblica,+S%C3%A3o+Paulo+-+SP,+01037-010/@-23.5448181,-46.6405124,15.5z/data=!4m6!3m5!1s0x94ce5853d96a1441:0xebba5cad95ff31bb!8m2!3d-23.545!4d-46.638333!16s%2Fm%2F080jl_n?entry=ttu"
                title="Clique para ver no Google Maps"
              >
                Como chegar
              </a>
            </div>
          </div>

          <div className="card card-box-l-load">
            <img
              className="card-img"
              src={unidade2}
              alt="Posto de coleta norte"
              title="Posto de coleta zona norte"
            />
            <div className="card-txt card-content-l-load">
              <h2>Unidade II - Zona Norte</h2>
              <p>
                Nossa segunda unidade esta localizada na zona norte no endereço:
                - Avenida Estrela Azul, 456 - Bairro Zona Norte, São Paulo/SP
              </p>
              <a
                target="_blank"
                href="https://www.google.com.br/maps/place/Zona+Central+de+S%C3%A3o+Paulo+-+Rep%C3%BAblica,+S%C3%A3o+Paulo+-+SP,+01037-010/@-23.5448181,-46.6405124,15.5z/data=!4m6!3m5!1s0x94ce5853d96a1441:0xebba5cad95ff31bb!8m2!3d-23.545!4d-46.638333!16s%2Fm%2F080jl_n?entry=ttu"
                title="Clique para ver no Google Maps"
              >
                Como chegar
              </a>
            </div>
          </div>

          <div className="card card-box-r-scroll">
            <img
              className="card-img"
              src={unidade3}
              alt="Posto de coleta zona leste"
              title="Posto de coleta zona leste"
            />
            <div className="card-txt card-content-r-scroll">
              <h2>Unidade III - Zona Leste</h2>
              <p>
                Nossa terceira unidade esta localizada na Zona Leste endereço: -
                Travessa do Sol Poente, 789 - Bairro Zona Leste, São Paulo/SP
              </p>
              <a
                target="_blank"
                href="https://www.google.com.br/maps/place/Zona+Central+de+S%C3%A3o+Paulo+-+Rep%C3%BAblica,+S%C3%A3o+Paulo+-+SP,+01037-010/@-23.5448181,-46.6405124,15.5z/data=!4m6!3m5!1s0x94ce5853d96a1441:0xebba5cad95ff31bb!8m2!3d-23.545!4d-46.638333!16s%2Fm%2F080jl_n?entry=ttu"
                title="Clique para ver no Google Maps"
              >
                Como chegar
              </a>
            </div>
          </div>

          <div className="card card-box-l-scroll">
            <img
              className="card-img"
              src={unidade4}
              alt="Posto de coleta zona sul"
              title="Posto de coleta zona sul"
            />
            <div className="card-txt card-content-l-scroll">
              <h2>Unidade IV - Zona Sul</h2>
              <p>
                Nossa quarta unidade esta localizada na Zona Sul no endereço: -
                Praça da Harmonia, 987 - Bairro Zona Sul, São Paulo/SP
              </p>
              <a
                target="_blank"
                href="https://www.google.com.br/maps/place/Zona+Central+de+S%C3%A3o+Paulo+-+Rep%C3%BAblica,+S%C3%A3o+Paulo+-+SP,+01037-010/@-23.5448181,-46.6405124,15.5z/data=!4m6!3m5!1s0x94ce5853d96a1441:0xebba5cad95ff31bb!8m2!3d-23.545!4d-46.638333!16s%2Fm%2F080jl_n?entry=ttu"
                title="Clique para ver no Google Maps"
              >
                Como chegar
              </a>
            </div>
          </div>
        </div>
        <div className="text-collection-point">
          <h3 className="title-text-collection-point">
            Locais estratégicos para receber suas doações
          </h3>
          <p className="p-text-collection-point">
            Nossos postos de coletas e distribuição estão localizados em
            estabelecimentos públicos em pontos estratégicos na cidade de São
            Paulo. Descubra onde encontrar esses locais e como eles desempenham
            um papel fundamental em nossa iniciativa de doação de agasalhos.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CollectionPoint;
