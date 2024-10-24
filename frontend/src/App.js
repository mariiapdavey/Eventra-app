import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import EventScreen from "./screens/EventScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from './screens/LoginScreen';

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
                <Route path="/cart" element=
                  {<CartScreen />} />
                <Route path="/cart/:id" element=
                  {<CartScreen />} />
                <Route path="/login" element=
                {<LoginScreen />} />
              </Routes>
            </Container>
          </main>
          <Footer />
      </Router>
    </>

  );
}

export default App;
