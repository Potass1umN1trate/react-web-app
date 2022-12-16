import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";

import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const PhotographPage = (props) => {
  const { t, i } = useTranslation();
  const { name, description, imageSrc, yearsOfLife, timestamps, youtube, map} = props.photographer;
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col>
          <Image
            height="auto"
            width="60%"
            src={imageSrc}
            className="rounded"
            style={{ float: "left" }}
          ></Image>
        </Col>
        <Col>
          <h2>{t(name)}</h2>
          <p className="lead text-break">{t(description)}</p>
          <p className="mt-5">
            {t("Годы жизни: ")}
            {t(yearsOfLife)}
          </p>
        </Col>
      </Row>
      
        

      <VerticalTimeline className="mt-5">
        <VerticalTimelineElement class = "el1"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#4286f4", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #4286f4" }}
          iconStyle={{ background: "#4286f4", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            {t(timestamps[0].header)}
          </h3>
          <p>{t(timestamps[0].description)}</p>
        </VerticalTimelineElement>
        {timestamps.map((ts, i) => {
          if (i === 0) return null;
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={t(ts.year)}
              contentArrowStyle={{ borderRight: "7px solid  #8bb5f8" }}
              contentStyle={{ background: "#8bb5f8", color: "#fff" }}
              iconStyle={{ background: "#8bb5f8", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                {t(ts.header)}
              </h3>
              <p>{t(ts.description)}</p>
            </VerticalTimelineElement>
          );
        })}

        <VerticalTimelineElement
          iconStyle={{background: "#0e62ea", color: "#fff" }}
        />
      </VerticalTimeline>

      <hr></hr>

      <Row className="d-flex justify-content-center">
        <Col>
          {map}
        </Col>
        <Col>
          {youtube}
        </Col>
      </Row>

    </Container>
  );
};

export default PhotographPage;
