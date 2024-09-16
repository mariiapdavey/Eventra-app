<<<<<<< HEAD
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
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
                <Route path="/event/:id" element={<EventScreen />} />
              </Routes>
            </Container>
          </main>
          <Footer />
      </Router>
    </>
=======
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Eventra!</h1>
      </main>
    </div>
>>>>>>> master
  );
}

export default App;
