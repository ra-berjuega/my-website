import Image from 'next/image'
import logo1 from '../images/git.png'
import logo2 from '../images/linkedin.png'
import logo3 from '../images/gmail.png'
export default function Contact() {
    return <>
        <div class="row-colour" id='contact'>
            <div class="row">
                <h2 class="text-primary-colour text-center mt-5"><strong>Connect with me</strong></h2>
                <div class="contact justify-content-around d-flex text-center mt-5">
                    <div class="text-center">
                        <Image
                            src={logo1}
                            className='img-fluid'
                            alt="Github Logo"
                            priority={true} />
                        <p class="mt-3">ra-berjuega</p>
                    </div>
                    <div class="text-center">
                        <Image
                            src={logo2}
                            className='img-fluid'
                            alt="Linkedin Logo"
                            priority={true} />
                        <p class="mt-3">Rose Ann Berjuega</p>
                    </div>
                    <div class="text-center">
                        <Image
                            src={logo3}
                            className='img-fluid'
                            alt="Gmail Logo"
                            priority={true} />
                        <p class="email mt-3 text-break">roseannberjuega12@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
