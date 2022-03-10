import { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Daily from "./Daily";
import Monthly from "./Monthly";
import Annually from "./Annually";

const Analysis = () => {
  /* Define a function that toggles the visibility of the Analysis */
  const [toggledDay, setDay] = useState(false);
  const toggleDay = () => setDay(!toggledDay);
  /* Define a function that toggles the visibility of the Predictor */
  const [toggledMonth, setMonth] = useState(false);
  const toggleMonth = () => setMonth(!toggledMonth);
  /* Define a function that toggles the visibility of the Community Button */
  const [toggledYear, setYear] = useState(true);
  const toggleYear = () => setYear(!toggledYear);
  //Functions to make other options False
  const yearFalse = () => setYear(false);
  const monthFalse = () => setMonth(false);
  const dayFalse = () => setDay(false);

  let Day;
  if (toggledDay) {
    Day = <Daily />;
  }

  let Month;
  if (toggledMonth) {
    Month = <Monthly />;
  }

  let Year;
  if (toggledYear) {
    Year = <Annually />;
  }

  return (
    <>
      <Container>
        <br></br>
        <Row className="justify-content-md-center">
          <br></br>
          <Button
            variant="primary"
            onClick={() => {
              toggleYear();
              monthFalse();
              dayFalse();
            }}
          >
            Yearly
          </Button>

          <br></br>
          <Button
            variant="warning"
            onClick={() => {
              toggleMonth();
              yearFalse();
              dayFalse();
            }}
          >
            Monthly
          </Button>
          <br></br>
          <Button
            variant="success"
            onClick={() => {
              toggleDay();
              yearFalse();
              monthFalse();
            }}
          >
            Daily
          </Button>
        </Row>
        <Row>
          {Day}
          {Month}
          {Year}
        </Row>
        <br></br>
      </Container>
    </>
  );
};

export default Analysis;
