import Image from 'next/image'
import Logo1 from '../images/github.png'
import Logo2 from '../images/Linkedin.png'
export default function Contact() {
    return <>
        <div class="row-colour" id='contact'>
            <div class="row">
                <h2 class="text-primary-colour text-center mt-5"><strong>Connect with me</strong></h2>
                <div class="row-contact d-flex text-center mt-5">
                    <div class="text-center p-5">
                        <Image
                            src={Logo1}
                            className='img-fluid'
                            alt="Github Logo"
                            priority={true} />
                        <p class="mt-3">ra-berjuega</p>
                    </div>
                    <div class="text-center p-5">
                        <Image
                            src={Logo2}
                            className='img-fluid'
                            alt="Linkedin Logo"
                            priority={true} />
                        <p class="mt-3">Rose Ann Berjuega</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
