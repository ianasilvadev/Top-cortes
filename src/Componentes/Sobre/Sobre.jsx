import about from './images/sobre.jpg';
import shape from './images/Shape.png';
import './Sobre.css';

function Sobre () {
    return (
        <>
        <div className="DistanceAbout"></div>
        <div className="TitleContainer">
            <h1 className="Title">Sobre Nós</h1>
        </div>
        <div className="shadow">
            <img src={shape} alt="Imagem de sombreamento"/>
        </div>
        <div className="ImgContainer">
            <span className="Img">
                <img src={about} alt="Imagem de mulheres do salão"/>
            </span>
        </div>
        <div className='Conteudo'>
            <p>Na Barbearia Cortes & Estilos, nossa paixão vai além de apenas aparar cabelos. Somos uma comunidade de barbeiros apaixonados, comprometidos em proporcionar a melhor experiência de cuidados masculinos.</p>
            <p>Entre na atmosfera autêntica da Barbearia Cortes & Estilos, onde tradição e estilo se encontram. Nossa equipe de profissionais experientes está pronta para transformar sua visita em um momento relaxante e revigorante.</p>
            <p>Nossa missão vai além de transformar cabelos, é sobre fazer você se sentir em casa, cuidado e confiante. Venha fazer parte da nossa família e descubra o poder de um bom corte de cabelo.</p>
        </div>

        <div className="DistanceBtm"></div>
        </>
    );
}

export default Sobre;