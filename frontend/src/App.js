import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import EventScreen from "./screens/EventScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import PaymentScreen from './screens/PaymentScreen';
import OrderScreen from './screens/OrderScreen';

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
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/cart/:id" element={<CartScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path='/profile' element={<ProfileScreen />} />
                <Route path='/profile/myorders' element={<ProfileScreen />} />
                <Route path='/shipping' element={<ShippingScreen />} />
                <Route path='/placeorder' element={<PlaceOrderScreen />} />
                <Route path='/register' element={<RegisterScreen />} />
                <Route path='/payment' element={<PaymentScreen />} />
                <Route path='/order/:id' element={<OrderScreen />} />
              </Routes>
            </Container>
          </main>
          <Footer />
      </Router>
    </>

  );
}

export default App;
