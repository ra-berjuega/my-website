import Image from 'next/image'
import profile1Pic2 from '../images/image3.png'
export default function About() {
    return <>
        <div class="row-colour" id='about'>
            <div class="row p-5">
                <h2 class='about-text text-primary-colour mb-5'>About</h2>
                <div class="col-5 ">
                    <Image
                        src={profile1Pic2}
                        className='img-fluid'
                        alt="Picture of the author"
                        priority={true} />
                </div>
                <div class="col-7 mt-3">
                    <p class="text-left">After successfully completing my degree, I eagerly entered the IT industry to put my knowledge into practice. I started my career as Oracle Cloud Application Developer and Support where I provided assistance and resolved technical issues. <br /><br />

                        I expand my knowledge and skills by attending workshops and online courses. This helped me stay updated with the latest developments in cloud technologies. <br /><br />

                        My passion for learning extended beyond technical skills and continued to grow and adapt to the rapidly evolving IT landscape.  Learning is a lifelong journey, and
                        I'm fully committed to staying up-to-date with the latest emerging technologies and industry trends.


                    </p>
                </div>
            </div>
        </div>

        <div class="row-colour-about ">
            <h2 class="text-primary-colour text-center mt-5">My Expertise</h2>
            <div class='justify-content-around d-flex mt-5'>
                <div class="row">
                    <div class="col-sm-6 p-3">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text ">Skilled in various Oracle Cloud Application technical technologies such as delivering Oracle Reports, Data Migration, and Fast Formulas</p>
                                <h3 class="card-title ">Oracle Cloud Application Technical</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 p-3">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text ">Experienced in selected Oracle Cloud Application HCM modules, such as Absence, Time and Labor,  Talent, Compensation, Payroll, and Core HR.</p>
                                <h3 class="card-title "> Oracle Cloud Application Functional</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}