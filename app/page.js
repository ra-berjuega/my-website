import Intro from './components/intro'
import About from './components/about'
import Contact from './components/contact'
import Nav from "./components/navigation";
export default function Page() {
    return <>
        <div class="container mt-3">
            <Nav></Nav>
            <Intro></Intro>
            <About></About>
            <Contact></Contact>
        </div >
    </>
}
