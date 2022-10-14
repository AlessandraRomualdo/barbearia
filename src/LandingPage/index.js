import './style.css';
import React,{ useState } from 'react';

export default function LandingPAge() {
const cordefundoE = 'modo-escuro';
const cordefundoC = 'modo-claro'; 
const [novoEstilo, setNovoEstilo]= useState(false)

 const alterarEstilo = () => {
    setNovoEstilo(!novoEstilo)
 };
    return(
        <div className={novoEstilo ? cordefundoE : cordefundoC}>
        <header>
          <div className="topo limitar-secao">  
            <img className="logo" src="assets/barbearia-logo.png" alt="Logo"/>
            <button onClick={alterarEstilo}>
                <img className="icone" src="assets/moon.png" alt="icone"/>
                Alterar estilo
                <img className="icone" src='assets/sun.png' alt='icone'/>
            </button>
          </div>  
        </header>
        <section >
            <div className="Banner "></div>
        </section>
        <section>
           <div className="texto limitar-secao">
            <h1>Bem-vindo a Barber Shop</h1>
            <p className='destacado'>Nossa barbearia sempre oferece proficionais de qualidade e estamos prontos 
                para lidar com suas maiores expectativas</p>
                <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma
                    equipe premiada que demostrou o talento de mestres bardeiros em vários
                    concursos de estilo. Deixe nosso barveiro ser seu estilista pessoal
                    e você nunca ficara desapontado. </p>
                    <p className='assinatura'>S. Kelly</p>
           </div>         
        </section>

        </div>
    );
}