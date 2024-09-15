import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventScreen from "./screens/EventScreen";

const App = () => {
  return (
    <>
      <Router>
          <Header />
          <main>
            <Container>
              <Routes>
                <Route path="/" exact element={<HomeScreen />} />
                <Route path="/event/:id" element={<EventScreen/>} />
              </Routes>
            </Container>
          </main>
          <Footer />
      </Router>
    </>
  );
}

export default App;
