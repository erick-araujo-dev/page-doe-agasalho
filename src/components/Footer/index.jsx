import React, { useEffect } from "react";
import './style.css';
import logo_footer from '../../assets/images/logo.png'
import {House, Envelope, Phone} from 'phosphor-react'

const Footer = () =>{
    useEffect(() => {
        const textElementRight = document.querySelectorAll('.contacts-content, .logo-footer');
        const textElementLeft = document.querySelectorAll('.icon-contacts, .copyright, .contacts-title');
        

        function slideInOnScroll() {
            textElementRight.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight) {
                element.classList.add('slide-in-right');
                }
            });
            textElementLeft.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight) {
                element.classList.add('slide-in-left');
                }
            });
        }

        window.addEventListener('scroll', slideInOnScroll);

        return () => {
        window.removeEventListener('scroll', slideInOnScroll);
        };
    }, []);
    return(
        <footer>
            <div className="contacts">
                <h1 className="contacts-title">Contatos</h1>
                <div className="contacts-content">
                <ul>
                    <li>
                        <a target="_blank" href="https://www.google.com.br/maps/place/Zona+Central+de+S%C3%A3o+Paulo+-+Rep%C3%BAblica,+S%C3%A3o+Paulo+-+SP,+01037-010/@-23.5448181,-46.6405124,15.5z/data=!4m6!3m5!1s0x94ce5853d96a1441:0xebba5cad95ff31bb!8m2!3d-23.545!4d-46.638333!16s%2Fm%2F080jl_n?entry=ttu">
                            <i class="icon-contacts"><House/></i>
                            <span>R. Um 0, Centro, São Paulo/SP</span>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="mailto:doeagasalho@email.com">
                            <i class="icon-contacts"><Envelope/></i>
                            <span>doeagasalho@email.com</span>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="tel:+5500000000000">
                            <i class="icon-contacts"><Phone/></i>
                            <span>+55 00 00000 0000</span>
                        </a>
                    </li>
                </ul>
                    <img src={logo_footer} alt="Logo Doe Agasalho" className="logo-footer" title='Logo Doe Agasalho'/>
                </div>
            </div>
            <div className="copyright">
                <p>Doe Agasalho. Deselvolvido por: </p>
                <div className="assign">
                    <a href="https://www.linkedin.com/in/erick-araujo-dev/" target="_blank" title="Clique para ver o LinkedIn">Erick Araujo de Carvalho</a>
                </div>
            </div>
        </footer>    
    )
}

export default Footer;