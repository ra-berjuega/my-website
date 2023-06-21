import Image from 'next/image'
import profile1Pic2 from '../images/image3.png'
export default function About() {
    return <>
        <div class="row-colour" id='about'>
            <div class="row">
                <h1 class='text-primary-colour'><strong>About</strong></h1>
                <div class="col-5">
                    <Image
                        src={profile1Pic2}
                        className='img-fluid p-5'
                        alt="Picture of the author"
                        priority={true} />
                </div>
                <div class="col-7 p-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>

        <div class="row-colour-about">
            <h2 class="text-primary-colour text-center mt-5"><strong>My Expertise</strong></h2>
            <div class="row p-5">
                <div class="col-sm-6 p-3">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">Skilled in various Oracle Cloud Application technical technologies such as delivering Oracle Reports, Data Migration, and Fast Formulas</p>
                            <h3 class="card-title">Oracle Cloud Application Technical</h3>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 p-3">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">Experienced in selected Oracle Cloud Application HCM modules, such as Absence, Time and Labor,  Talent, Compensation, Payroll, and Core HR.</p>
                            <h3 class="card-title"> Oracle Cloud Application - HCM</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
}