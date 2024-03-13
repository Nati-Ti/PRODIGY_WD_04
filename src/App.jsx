import './App.css'
import Contact from './assets/components/Contact/Contact'
// import Facts from './assets/components/Facts/Facts'
import Footer from './assets/components/Footer/Footer'
import Header from './assets/components/Header/Header'
import Hero from './assets/components/Hero/Hero'
import Projects from './assets/components/Projects/Projects'
import Resume from './assets/components/Resume/Resume'
import Skills from './assets/components/Skills/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/JS/main.js';

function App() {

  return (
    <>
      
      <Header/>
      <Hero/>
      {/* <Facts/> */}
      <Skills/>
      <Resume/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>

  )
}

export default App
