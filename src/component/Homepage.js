import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import photographers from './HardcodedPhotographers';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Homepage = (props) => {
    const { t, i18n } = useTranslation();
    const {name, description, yearsOfLife, imageSrc} = props.photographer;
    console.log(imageSrc);
    return (
        <Container className='mt-5'>
                <Col className="mb-5 d-flex justify-content-center">
                    <h1>{t('Фотограф Дня')}</h1>
                </Col>
                <hr></hr>
                <Col className="mb-5 d-flex justify-content-center">
                    <Image  height="auto" width="40%" src={imageSrc} className='rounded' ></Image>    
                </Col> 
                <hr></hr>
                <Row className="d-flex justify-content-end">
                    <h2>{t(name)}</h2>
                    <p className='mt-5'>{t('Годы жизни: ')}{t(yearsOfLife)}</p>
                    <p className='lead text-break'>{t(description)}</p>
                </Row>
                <Row>
                    <Link to={'/photographer/' + (photographers.indexOf(props.photographer) + 1)} >
                        <Button variant="secondary" padding>
                            {t('Страница фотографа')}
                        </Button>
                    </Link>
                </Row>
                
        </Container>
    );
}

export default Homepage;