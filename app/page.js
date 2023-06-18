import Intro from './components/intro'
import About from './components/about'
import Contact from './components/contact'
export default function Page() {
    return <>
        <div class="container mt-3">
            <Intro></Intro>
            <About></About>
            <Contact></Contact>
        </div >
    </>
}
