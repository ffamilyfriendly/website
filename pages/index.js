import React from "react"
import { Projects } from '../components/projects/projects';
import Contact from '../components/contact';
import About from '../components/about/about';
import SEO from "../components/seo";

const Home = () => {

  return (
    <div className='main'>
      <About    />
      <Contact  />
      <Projects />
    </div>
  )
}

function App() {
  return (
      <div className='container'>
        <SEO title="Family Friendly - Jonathan Hermin" description="Family Friendly is a developer doing nerd stuff" tags={["web dev", "sweden", "swedish", "family friendly", "thread watcher"]} />
        <Home />
      </div>
  );
}

export default App;
