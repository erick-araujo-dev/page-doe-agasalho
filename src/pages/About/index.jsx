import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import logo_about from '../../assets/images/logo.png'
import caixa_img from '../../assets/images/caixa.jpg'
import mulher_img from '../../assets/images/mulhervertical.jpg'
import pc_img from '../../assets/images/pc.jpg'
import roupas_img from '../../assets/images/roupadobradra.jpg'
import addScrollEffects from "../../utils/scrollEffects";
import SlideOnLoad from "../../utils/slideOnLoad";


const About = () =>{
    const location = useLocation;
  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
      SlideOnLoad(
        ".about-box-slide-load img, .about-box-slide-load", 
        ".text-box-slide-load, .about-page h1"
      );
    }, []);

    useEffect(() => {
      addScrollEffects(
        '.about-box-slide-scroll, .about-box-slide-scroll img', 
        '.text-box-slide-scroll'
      );
    }, []);

    return (
      <div>
        <Header />
        <main className="about">
          
          <div className="about-page">
            <h1>Saiba um pouco mais sobre nosso trabaho</h1>
            <section className="about-box-slide-load about-section">
              <div className="text-box text-box-slide-load">
                <h2 className="title-section">Sobre Nós</h2>
                <p>
                  Doe Agasalho é uma organização sem fins lucrativos dedicada a
                  combater o frio e espalhar calor humano nas ruas do Município de
                  São Paulo. Nossa missão é proporcionar condições mais dignas
                  para pessoas em situação de vulnerabilidade enfrentarem o
                  inverno.
                  Além de arrecadar agasalhos, também promovemos ações e campanhas
                  para conscientizar a sociedade sobre a importância da
                  solidariedade e do apoio mútuo. Junte-se a nós nessa causa e
                  faça a diferença na vida de quem mais precisa.
                </p>
              </div>
              <img src={caixa_img} alt="Caixa com roupas" title="Imagem caixa com roupas" />
            </section>

            <section className="about-box-slide-scroll about-section">
              <img src={pc_img} alt="Imagem computador" title="Imagem computador" />
              <div className="text-box text-box-slide-scroll">
                <h2 className="title-section">Gerenciamento e Controle</h2>
                <p>
                A Doe Agasalho se destaca pelo seu sistema avançado de gerenciamento de agasalhos, que torna todo o processo de doação e distribuição mais eficiente. Com esse sistema, registramos detalhadamente cada doação, controlamos o estoque em tempo real e selecionamos as peças mais adequadas para cada situação. 
                Além disso, o sistema nos permite rastrear o histórico de cada agasalho doado, garantindo transparência e confiança. Com isso, podemos agilizar o processo e assegurar que as doações cheguem às pessoas que mais necessitam de forma organizada e eficaz.
                </p>
              </div>
            </section>

            <section className="about-box-slide-scroll about-section">
              <div className="text-box text-box-slide-scroll">
                <h2 className="title-section">Nossa Equipe</h2>
                <p>
                  Nossa equipe é formada por voluntários dedicados e
                  comprometidos, que doam seu tempo e esforço para tornar a missão
                  da Doe Agasalho uma realidade. Trabalhamos em conjunto para
                  organizar as campanhas de arrecadação, gerenciar os pontos de
                  coleta, triar as doações e distribuí-las às pessoas
                  necessitadas.
                  Agradecemos a todos os nossos voluntários e apoiadores, pois sem
                  eles não seria possível fazer a diferença na vida das pessoas em
                  situação de vulnerabilidade.
                </p>
              </div>
              <img src={mulher_img} alt="Imagem volunatária" title="Imagem volunatária" />
            </section>

            
          </div>
        </main>
        <Footer />
      </div>
    );
}

export default About;