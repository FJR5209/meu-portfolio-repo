import './App.css'
import Hero from './sections/Hero'
import Sobre from './sections/Sobre'
import Projetos from './sections/Projetos'
import Galeria from './sections/Galeria'
import Contato from './sections/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Hero />
      <main>
        <Sobre />
        <Projetos />
        <Galeria />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App