import "./App.css";
import { Header } from "./layout/header/Header";
import { Skills } from "./layout/section/skills/Skills";
import { Main } from "./layout/section/main/Main";
import { About } from "./layout/section/about/About";
import { Portfolio } from "./layout/section/portfolio/Portfolio";
import { Footer } from "./layout/footer/footer";
import { theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import { SimpleSlider } from "./components/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
        <Skills />
        <About />
        <Portfolio />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
