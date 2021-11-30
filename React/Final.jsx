import React from 'react';
import { Link } from 'react-router-dom'
import contratar from './contratar.css';

const logo = '/logo.jpg';
const Facebook = '/Facebook.jpg';
const Google = '/Google.jpg';
const Instagram = '/Instagram.jpg';
const youtube = '/youtube.jpg';
const Imagem = '/imagem.jpg';
const End = '/End.jpg';

function Final() {
    return (
        <>
        <header>
                <div>
                    <img className='logo' src={logo} alt='logo'></img>
                </div>
                <div className='titulo'>
                    <h1>Parabéns!!</h1><br></br>
                    <Link to="/">Voltar Página Inicial </Link>
                </div>
            </header>

        <section className='listContainer'>
            <div>
            
            <p><h5>Suas informações foram registradas. Em breve iremos disponibilizaremos os candidatos que atendam aos requisitos</h5></p>
            <p><img className='Imagem' src={Imagem} alt='Imagem'></img></p>
            <a href="www.facebook.com.br"><img className='Facebook' src={Facebook} alt='Facebook'></img></a>
            <a href="www.google.com.br"><img className='Google' src={Google} alt='Google'></img></a>
            <a href="www.instagram.com.br"><img className='Instagram' src={Instagram} alt='Instagram'></img></a>
            <a href="www.youtube.com.br"><img className='youtube' src={youtube} alt='youtube'></img></a>
            </div>
            <div>
            <h5>Veja você mesmo(a) como nossas ferramentas vão ajudar sua empresa a contratar de forma mais rápida e efetiva, sempre.</h5><br></br>
            <p><img className='End' src={End} alt='End'></img></p>
            <div>
             <button2>Página Inicial</button2>
            </div>
            </div>
            
        </section>
        
       
        </>  
    )
};

export default Final;


