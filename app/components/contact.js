import Image from 'next/image'
import logo1 from '../images/git.png'
import logo2 from '../images/linkedin.png'
import logo3 from '../images/gmail.png'
export default function Contact() {
    return <>
        <div class="row-colour mt-5" id='contact'>
            <div class="row ">
                <h2 class="text-primary-colour text-center mt-5">Connect with Me</h2>
                <div class="contact justify-content-around d-flex text-center mt-5 mb-5">
                    <div class="text-center mt-5">
                        <a href='https://github.com/ra-berjuega'>
                            <Image
                                src={logo1}
                                className='img-fluid'
                                alt="Github Logo"
                                priority={true} /></a>
                        <p class="mt-3">ra-berjuega</p>
                    </div>
                    <div class="text-center mt-5">
                        <a href='https://www.linkedin.com/in/rose-ann-berjuega-279821235/'>
                            <Image
                                src={logo2}
                                className='img-fluid'
                                alt="Linkedin Logo"
                                priority={true} /></a>
                        <p class="mt-3">Rose Ann Berjuega</p>
                    </div>
                    <div class="text-center mt-5">
                        <a href='https://mail.google.com/'>
                            <Image
                                src={logo3}
                                className='img-fluid'
                                alt="Gmail Logo"
                                priority={true} /></a>
                        <p class="email mt-3 text-break">roseannberjuega12@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
