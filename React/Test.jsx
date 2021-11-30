import React from 'react'
import './Test.css';
import ListPositions from '../../components/ListPositions';
import ListRadio from '../../components/ListRadio';
import { Link } from 'react-router-dom';

const logo = '/logo.jpg';
const logo2 = '/logo2.jpg';
const Facebook = '/Facebook.jpg';
const Google = '/Google.jpg';
const Instagram = '/Instagram.jpg';
const youtube = '/youtube.jpg';

function Test() {
    return (
        <>
        <header>
                <div>
                    <img className='logo' src={logo} alt='logo'></img>
                </div>
                <div className='titulo'>
                    <h1>Teste de Personalidade</h1>
                    <Link to="/">Voltar Página Inicial </Link>
                </div>
            </header>

        <section className='listContainer'>
            <div>
            <h2>O que é um Teste de Personalidade?</h2><br></br>
            <p><h3>Os testes de personalidade são utilizados para descobrir as características de um indivíduo. Eles são desenvolvidos e aplicados por psicólogos e envolvem a análise de diferentes fatores. O teste de personalidade irá te axiliar a decidir qual o melhor perfil para a vaga. Além disso, ele ajuda ao candidato a se conhecer melhor. É de estrema importância que o candidato saiba quem ele é para que ele utilize seus pontos fortes na entrevista e consiga mostrar seu potencial.</h3></p>
            <p><img className='logo2' src={logo2} alt='logo2'></img></p>
            <a href="www.facebook.com.br"><img className='Facebook' src={Facebook} alt='Facebook'></img></a>
            <a href="www.google.com.br"><img className='Google' src={Google} alt='Google'></img></a>
            <a href="www.instagram.com.br"><img className='Instagram' src={Instagram} alt='Instagram'></img></a>
            <a href="www.youtube.com.br"><img className='youtube' src={youtube} alt='youtube'></img></a>
            </div>
            <div>
            <h2>Características
desejadas para o candidato.</h2><br></br>
            {aplication.map(CreateList)}
            <div> <Link to="/Concluir/Final"> 
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
        name: 'Arquiteto',
    },
    {
        id: 'ap-2',
        name: 'Analista',
    },
    {
        id: 'ap-3',
        name: 'Lógico',
    },
    {
        id: 'ap-4',
        name: 'Comandante',
    },
    {
        id: 'ap-5',
        name: 'Inovador',
    },
    {
        id: 'ap-6',
        name: 'Diplomata',
    },

    {
        id: 'ap-7',
        name: 'Mediador'
    },
    {
        id: 'ap-8',
        name: 'Ativista'
    },
    {
        id: 'ap-9',
        name: 'Sentinela'
    },
    {
        id: 'ap-10',
        name: 'Logístico'
    },
    {
        id: 'ap-11',
        name: 'Defensor'
    },
    {
        id: '12',
        name: 'Executivo'
    },
    {
        id: '13',
        name: 'Explorador'
    },
        {
        id: '14',
        name: 'Virtuoso'
    },
        {
        id: '15',
        name: 'Aventureiro'
    },
        {
        id: '16',
        name: 'Empresário'
    },
        {
        id: '17',
        name: 'Cônsul'
    },
        {
        id: '18',
        name: 'Inovador'
    },
        {
        id: '19',
        name: 'Ansioso'
    },
        {
        id: '20',
        name: 'Perfeccionista'
    },
        {
        id: '21',
        name: 'Proativo'
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

export default Test;