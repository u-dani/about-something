
import './App.css'
import { Header } from './components/Header'
import { ContainerSections } from './components/ContainerSections.jsx'

function App() {

  return (
    <div className="App">
      <Header />
      <ContainerSections/>
      <footer>
        <p>Imagens do Pexels, e textos do Wikipedia.</p>
      </footer>
    </div>
  )
}

export default App
