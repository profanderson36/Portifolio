import React from 'react';
import tela4 from './tela4.css';
import ListPositions from '../../components/ListPositions';
import ListRadio from '../../components/ListRadio';
import { Link } from 'react-router-dom';

const logo = '/logo.jpg';
const logo2 = '/logo2.jpg';
const Facebook = '/Facebook.jpg';
const Google = '/Google.jpg';
const Instagram = '/Instagram.jpg';
const youtube = '/youtube.jpg';

function tela() {
    return (
        <>
        <header>
                <div>
                    <img className='logo' src={logo} alt='logo'></img>
                </div>
                <div className='titulo'>
                    <h1>Teste Técnico</h1>
                    <Link to="/">Voltar Página Inicial </Link>
                </div>
            </header>

        <section className='listContainer'>
            <div>
            <h2>O que é um Teste Técnico?</h2><br></br>
            <p><h3>Os testes técnicos são aplicados para avaliar as hard skills dos candidatos e podem ser direcionados a conhecimentos teóricos específicos ou resolução de problemas. Ao aplicar um teste técnico para desenvolvedores, é possível identificar a forma como o candidato(a)resolve um problema e de que maneira lida com um desafio.</h3></p>
            <p><img className='logo2' src={logo2} alt='logo2'></img></p>
            <a href="www.facebook.com.br"><img className='Facebook' src={Facebook} alt='Facebook'></img></a>
            <a href="www.google.com.br"><img className='Google' src={Google} alt='Google'></img></a>
            <a href="www.instagram.com.br"><img className='Instagram' src={Instagram} alt='Instagram'></img></a>
            <a href="www.youtube.com.br"><img className='youtube' src={youtube} alt='youtube'></img></a>
            </div>
            <div>
            <h2>Selecione os Testes a serem aplicados</h2><br></br>
            {aplication.map(CreateList)}
            <div> <Link to="/Test"> 
            <button2>Incluir</button2>
            </Link>
            </div>
            </div>
            
        </section>
        
       
        </>  
    )
};

const aplication = [
    {
        id: 'ap-1',
        name: 'Teste de Lógica',
    },
    {
        id: 'ap-2',
        name: 'Teste de Algoritmo',
    },
    {
        id: 'ap-3',
        name: 'Teste Prático',
    },
    {
        id: 'ap-4',
        name: 'Análise de códigos de outros desenvolvedores',
    },
    {
        id: 'ap-5',
        name: 'Quadro Branco',
    },
    {
        id: 'ap-6',
        name: 'Criação de Teste Unitário',
    },

    {
        id: 'ap-7',
        name: 'Teste Logico'
    },
    {
        id: 'ap-8',
        name: 'ADT (Inventário de Administração de Tempo'
    },
    {
        id: 'ap-9',
        name: 'Análise de Codigos com problemas'
    },
    {
        id: 'ap-10',
        name: 'Teste de Insanidade'
    },
    {
        id: 'ap-11',
        name: 'Talento para apresentação'
    },
    {
        id: '12',
        name: 'Habilidades básicas de escrita'
    },
    {
        id: '13',
        name: 'Análise de códigos com problemas'
    }

]

function CreateList(value) {
    return (
        <ListPositions
            key={value.id}
            name={value.name}
        />
    )
}

function CreateListRadio(value) {
    return (
        <ListRadio
            key={value.id}
            name={value.name}
        />
    )
}

export default tela;


