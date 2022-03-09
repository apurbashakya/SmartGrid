import NavigationBar from "./NavigationBar";
import Home from "./components/Home";
import { Row, Container } from "react-bootstrap";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "ELCON"
  }, [])
  return (
    <>
      <Container fluid>
        <Row>
          <NavigationBar></NavigationBar>
        </Row>
      </Container>
      <Container>
        <br></br>
        <Row>
          <Home></Home>
        </Row>
      </Container>
    </>
  );
}

export default App;
