import Image from 'next/image'
import profile1Pic1 from '../images/image2.png'
export default function Intro() {
    return <>

        <div class="row">
            <div class="col-6">
                <Image
                    src={profile1Pic1}
                    className='img-fluid'
                    alt="Picture of the author"
                    priority={true} />
            </div>
            <div class="col-6 d-flex align-items-center">
                <div>
                    <h1>Hi, I am <span class="text-primary-colour">Rose Ann.</span></h1>
                    <h3>Aspiring Web Developer</h3>
                    <a href="/files/CV.docx" download className="btn btn-primary text-white rounded-4 mt-3"><strong>Download CV</strong></a>
                </div>
            </div>
        </div>
    </>
}