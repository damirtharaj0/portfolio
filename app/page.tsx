import Navbar from "./navbar"
import Main from "./hero"
import Skills from "./skills"
import Projects from "./projects"

export default function Home() {
  return (<div>
    <Navbar />
    <Main />
    <Skills />
    <Projects />
  </div>
  )
}