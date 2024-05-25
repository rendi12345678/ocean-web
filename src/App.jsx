import { Hero } from "./sections";
import { Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <section className="bg-[url(/images/sky1.jpg)] bg-center bg-cover bg-no-repeat">
        <Hero />
      </section>
      <section className="h-[200rem] bg-gradient-to-b from-[#01022f] to-black"></section>
    </>
  );
}

export default App;
