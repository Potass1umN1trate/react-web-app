import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import i18n from "../i18n";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



const NavbarComponent = () => {
  const { t, i } = useTranslation();

  const handleClick = () => {
    window.sessionStorage.getItem("lang") === "en" ? window.sessionStorage.setItem("lang", "ru") : window.sessionStorage.setItem("lang", "en");
    i18n.changeLanguage(window.sessionStorage.getItem("lang"));
  };
  return (
    <Navbar bg="navbar navbar-dark bg-dark" expand="lg">
      <Container>
        <Navbar.Brand >{t("Фотографы Беларуси")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/home">{t("Фотограф дня")}</Link>
            <Link className="nav-link" to="/photographers-list">
              {t("Список фотографов")}
            </Link>
          </Nav>
          <Row className="d-flex flex-row-reverse justify-content-around justify-content-md-center text-light" style={{width: '25%'}}>
            <Col className="d-flex align-items-center"  style = {{ width: "5vw", height: "auto"}} md={6} >
              <Nav.Link href="https://github.com/Potass1umN1trate">
                <Image 
                 style={{
                  width: "2.5vw",
                  height: "auto"
                }}
                  className="rounded-circle me-auto"
                  src="https://avatars.githubusercontent.com/u/88926612?v=4"
                  alt=""
                />
                Daniil
              </Nav.Link>
            </Col>
            <Col style = {{ width: "5vw"}} md={6}>
              <Nav.Link href="https://github.com/Averagektn">
                <Image
                 style={{
                  width: "2.5vw",
                  height: "auto"
                }}
                  className="rounded-circle"
                  src="https://avatars.githubusercontent.com/u/90308369?v=4"
                  alt=""
                />
                Nikita
              </Nav.Link>
            </Col>
            <Col style = {{ width: "5vw"}} md={2}>
              <Nav.Link href="https://github.com/KotVMeshke">
                <Image
                 style={{
                  position: "relative",
                  top: "20%",
                  width: "2.5vw",
                  height: "auto"
                }}
                  className="rounded-circle"
                  src="https://avatars.githubusercontent.com/u/90338388?v=4"
                  alt=""
                />
                Dmitry
              </Nav.Link>
            </Col>
          </Row>
          <Button variant="dark" onClick={handleClick}>
           {window.sessionStorage.getItem("lang") === "en" ? "🇺🇸" : "🇷🇺"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
