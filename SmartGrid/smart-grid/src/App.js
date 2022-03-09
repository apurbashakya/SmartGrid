import NavigationBar from "./NavigationBar";
import Home from "./components/Home";
import { Row, Container } from "react-bootstrap";
function App() {
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
