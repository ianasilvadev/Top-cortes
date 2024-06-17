import Card from 'react-bootstrap/Card';
import aspas from './images/Aspas.png';
import perfilW from './images/Women1.jpg';
import PerfilWm from './images/Women2.jpg'
import './Depoimentos.css';

function Depoimentos () {
    return (
        <>
        <div className="DistenceDepoimentos"></div>
        <div className="TitleDepoimentos">
            <h1 className="Depoimentos">
                Depoimentos de quem já passou por aqui
            </h1>
        </div>

        <Card className='CardDepoimentos'>
            <Card.Body>
                <img className='Aspas' src={aspas} alt="ícone de aspas do site" />
            <Card.Text className='Descricao'>
                Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.
            </Card.Text>    
                <img className='Perfil' src={perfilW} alt="Foto de perfil de uma menina de óculos" />
                <p className='User'>Wanessa Souza</p>
            </Card.Body>
        </Card>

        <Card className='CardDepoimentos'>
            <Card.Body>
                <img className='Aspas' src={aspas} alt="ícone de aspas do site" />
            <Card.Text className='Descricao'>
            Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo.
            Adoro todos os profissionais do Beautysalon.
            </Card.Text>    
                <img className='Perfil' src={PerfilWm} alt="Foto de perfil de uma menina de cabelos longos e loiro" />
                <p className='User'>Luna Falcão</p>
            </Card.Body>
        </Card>
        </>
    );
}

export default Depoimentos;