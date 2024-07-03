
import './App.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './composant/Image';
import Name from './composant/Name.js';
import Description from './composant/Description';
import Price from './composant/Price.js';
  
    const firstName = 'vito'
    function App() {
      return (
      

        <Container>
          <Row className="my-4">
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="./ferrari.jpeg" />
                <Card.Body>
                
                  <Card.Title>Ferrari</Card.Title>
                  <Card.Text>
                    <b>Description</b>: Ferrari utilise des technologies de pointe pour améliorer la performance de ses véhicules, y compris des moteurs puissants, une ingénierie légère et des systèmes de contrôle de la dynamique avancés. Les voitures Ferrari sont célèbres pour leur accélération rapide, leur maniabilité précise et leur vitesse de pointe impressionnante.
                 
                  </Card.Text>
                  <Card.Text>
                  <b>Prix</b>:200 000$
                  </Card.Text>
                  <Button variant="primary">Achetez maintenant</Button>
                </Card.Body>
                <Card.Footer>
                {firstName ? `Bonjour, ${firstName}` : 'Bonjour !'}
            </Card.Footer>
              </Card>
            </Col>
         
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="./bugatti.jpeg" />
                <Card.Body>
                  <Card.Title>Bugatti</Card.Title>
                  <Card.Text>
                  <b>Description</b>:Moteur : Les voitures Bugatti sont connues pour leurs moteurs puissants, notamment les moteurs W16 quad-turbo, qui sont parmi les plus avancés et les plus puissants au monde.
Design : Le design Bugatti est un mélange d'élégance et d'agressivité, avec des lignes fluides, des grilles de calandre en fer à cheval emblématiques et une attention méticuleuse aux détails.
Matériaux : Bugatti utilise des matériaux de la plus haute qualité, comme la fibre de carbone, l'aluminium et le cuir, pour garantir à la fois la légèreté et le luxe.
                  </Card.Text>
                  <Card.Text>
                  <b>Prix</b>:3 200 000$
                  </Card.Text>
                  <Button variant="primary">Achetez maintenant</Button>
                </Card.Body>
                <Card.Footer>
                {firstName ? `Bonjour, ${firstName}` : 'Bonjour !'}
            </Card.Footer>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="./BMW.jpeg" />
                <Card.Body>
                  <Card.Title>BMW</Card.Title>
                  <Card.Text>
                  BMW, ou Bayerische Motoren Werke AG, est un constructeur automobile allemand fondé en 1916. La marque est réputée pour ses véhicules de luxe et ses motos, alliant design élégant, performance dynamique et technologies innovantes. BMW se distingue par son engagement envers l'ingénierie de précision, l'innovation et une expérience de conduite exceptionnelle. Le logo emblématique de BMW, souvent interprété comme une hélice d'avion stylisée, fait référence aux origines de la marque dans l'aviation. Les véhicules BMW sont synonymes de qualité supérieure, de confort et de plaisir de conduire, avec une gamme variée allant des berlines aux SUV en passant par les voitures sportives et électriques.
                  </Card.Text>
                  <Card.Text>
                  <b>Prix</b>:96 560$
                  </Card.Text>

                  <Button variant="primary">Achetez maintenant</Button>
                </Card.Body>
                <Card.Footer>
                {firstName ? `Bonjour, ${firstName}` : 'Bonjour !'}
            </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
        
      );
    }
    
  
    
      

export default App;
