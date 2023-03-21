import {GlogalStyles} from './GlobalStyles'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Sobre from './components/sobre/Sobre'
import Estrutura from './components/estrutura/Estrutura'
import Formacao from './components/formacao/Formacao'
import Curiosidade from './components/curiosidade/Curiosidade'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <div className="App">
        <GlogalStyles/>
        <Header/>
        <Home/>
        <Sobre/>
        <Estrutura/>
        <Formacao/>
        <Curiosidade/>
        <Footer/>
    </div>//End App
  )
}