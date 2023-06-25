'use client'
import Image from 'next/image'
import BlogPic1 from '../images/web.png'
import Nav from "../components/navigation";
import Typewriter from 'typewriter-effect';
export default function Blog() {
    return <>
        <div class="container mt-3">

            <Nav></Nav>
            <div class="mt-3">
                <div class="p-3 mb-3">
                    <div>

                        <h2 class='justify-content-around d-flex text-center'>
                            <Typewriter
                                options={{
                                    strings: ["Hello", "Welcome to my Blog", "This is my Journey in Web Development"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                    </div>

                    <p class="mt-5">11/06/2023</p>
                    <h4 class="text-head text-primary-colour mt-2">Chapter 1: The Beginning</h4>
                    <div>
                        <p>
                            <br />Today marks the beginning of an exciting new chapter in my career. As someone with no prior experience in web development, I have decided to embark on a journey to learn Web Development and become an aspiring web developer. My ultimate goal is to transition into a web development role and establish a successful career in this field. <br /><br />

                            I work in the IT industry, although my current role is not directly related to web development. However, I am determined to manage my time effectively and allocate dedicated hours each day to learning and practicing web development skills.<br /><br />

                            To kickstart my journey, I spent the day researching the fundamentals of web development. I delved into articles, watched tutorial videos, and explored various online resources to gain a comprehensive understanding of the field. It was enlightening to discover the immense potential and career opportunities that web development offers.

                        </p>
                    </div>
                    <h4 class="text-head text-primary-colour mt-5">Chapter 2: The Quest for Knowledge</h4>
                    <div>
                        <p class="mt-4">
                            As a beginner, I recognized the importance of building a solid foundation. I embarked on a quest to learn the core technologies that form the backbone of the web: HTML, CSS, JavaScript, and Git. These fundamental building blocks would equip me with the necessary tools to create beautiful, interactive, and version-controlled websites. <br /><br />

                            <span class="highlight-text mb-5"><strong>Discovering HTML - The Structure of the Web</strong></span><br />

                            HTML, short for Hypertext Markup Language, was my first step into the world of web development. I learned about tags, elements, and attributes that define the structure of web pages. With HTML, I could create headings, paragraphs, lists, images, and links, forming the skeleton upon which my websites would be built. <br /><br />

                            <span class="highlight-text"><strong>Unleashing Creativity with CSS</strong></span><br />

                            With HTML providing the structure, I yearned to make my websites visually appealing and engaging. CSS, or Cascading Style Sheets, became my ally. I delved into the world of colors, fonts and layouts. CSS allowed me to add colors to elements, change fonts, position elements on the page, and apply beautiful styles, giving life to my web pages <br /><br />

                            <span class="highlight-text"><strong>Discovering JavaScript</strong></span><br />

                            While HTML and CSS enhanced the look and structure of my websites, I craved interactivity. JavaScript entered the stage as a powerful scripting language, allowing me to add dynamic elements to my web pages.  <br /><br />

                            <span class="highlight-text"><strong>Embracing Version Control with Git</strong></span><br />

                            As my projects grew in complexity, I sought a way to manage my code effectively and collaborate with others. Git, a distributed version control system, became my go-to tool. I learned how to initialize repositories, track changes, create branches, and collaborate with others through features like branching and merging. Git gave me the confidence to experiment with my code while ensuring I could easily roll back to a previous state if needed. <br /><br />



                        </p>
                    </div>
                </div>

            </div>
        </div>
    </>
}