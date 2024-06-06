import "././services.css";
import capilar from './images/capilar.ico'
import cortes from './images/cortes.ico'
import tratamentos from './images/tratamentos.ico'
import Card from 'react-bootstrap/Card';

function Service() {
    return(
        <>
        <hr className="Distance"/>

        <h1 className="Title">Serviços</h1>
        <p className="Desc">
                Com mais de 10 anos no mercado, o <a href="" className="Link">Beautysalon</a> já <br/> 
            conquistou clientes de inúmeros países com seus tratamentos <br/> 
                exclusivos e totalmente naturais.</p>
        <div>
        <Card className="Card">
            <Card.Img className="CardImg" variant="top" src={capilar}/>
                <Card.Body>
                    <Card.Title>Terapia Capilar</Card.Title>
                        <Card.Text>
                            Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos
                        </Card.Text>
                </Card.Body>
        </Card>
        
        <Card className="Card">
            <Card.Img className="CardImg" variant="top" src={cortes}/>
                <Card.Body>
                    <Card.Title>Cortes</Card.Title>
                        <Card.Text>
                            A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.
                        </Card.Text>
                </Card.Body>
        </Card>

        <Card className="Card">
            <Card.Img className="CardImg" variant="top" src={tratamentos}/>
                <Card.Body>
                    <Card.Title>Tratametos</Card.Title>
                        <Card.Text>
                            O Beautylason conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.
                        </Card.Text>
                </Card.Body>
        </Card>
        </div>

        <hr className="Distance"/>
        </>
    );
}

export default Service;