import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <main className="max-x-8xl mx-auto">
      <Hero />
      <About />
      <Services />
    </main>
  );
}

export default App;
