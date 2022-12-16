import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import i18next from "i18next";
import { Link } from "react-router-dom";

const PhotographersList = (props) => {
  const filterPhotographers = (f) => {
    return (
    photographers.map((p, i) => {
    if ((t(p.name)).match(f))
      return (
        <Row>
            <Col className="mb-5">
              <h2>{t(p.name)}</h2>
              <p className="lead text-break">{t(p.description)}</p>
              <p className="mt-5">
                {t("Годы жизни: ")}
                {t(p.yearsOfLife)}
              </p>
            <Link to={"/photographer/" + (i + 1)}>
              <Button variant="secondary">{t("Страница фотографа")}</Button>
            </Link>
            </Col>
            <Col className="mb-5">
              <Image
                height="auto"
                width="70%"
                src={p.imageSrc}
                className="rounded"
                style={{ float: "right" }}
              ></Image>
            </Col>
            <hr />
          </Row>
      );
      
    }));
  };
  const { t, i } = useTranslation();
  const { photographers } = props;
  const [search, setSearch] = useState("");
  i18next.on('languageChanged', () => {
    console.log("hello");
    setList(filterPhotographers(""));
  }); 
  const [list, setList] = useState(filterPhotographers(""));
  const handleClick = () => {
    setList(filterPhotographers(search));
  };

  return (
    <Container className="mt-5">
      <Form className="d-flex mb-5">
        <Form.Control
          type="search"
          placeholder={t("Поиск")}
          className="me-2"
          aria-label={t("Поиск")}
          onChange={(event) => setSearch(event.target.value)}
          label={search}
        ></Form.Control>
        <Button variant="secondary" onClick={handleClick}>
          {t("Поиск")}
        </Button >
      </Form>
      {list}
    </Container>
  );
};

export default PhotographersList;
