
import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/styles.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Footer />
    </>
  )
}

export default App
