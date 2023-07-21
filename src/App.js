import { Container } from "react-bootstrap";
import Content from "./components/Content";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="App">
      <Header title="To Do List App" />
      <Container style={{ minHeight: "100vh" }}>
        <Content />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
