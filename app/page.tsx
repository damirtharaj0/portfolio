import Navbar from "./components/navbar"
import Main from "./components/hero"
import Skills from "./components/skills"
import Projects from "./components/projects"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Skills />
      <Projects />
    </div>
  )
}