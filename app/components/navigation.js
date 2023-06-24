
'use client'
import Image from 'next/image'
import BlogPic1 from '../images/web.png'
export default function Nav() {
    return <>
        <div class="d-flex justify-content-between">
            <div>
                <h3>RA</h3>
            </div>
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>


    </>
}