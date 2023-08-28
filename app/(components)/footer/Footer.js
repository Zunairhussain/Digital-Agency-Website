import React from 'react'
import Link from 'next/link'
import { Grey_Qo } from 'next/font/google'
export default function Footer() {
    return (
        <>
        <div>
            <br/>
            <br/>
            <br/>

            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h2>LOGO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                            sed do eiusmod tempor incididunt labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ea commodo consequat.</p>
                    </div>
                    <div className='col'>
                        <h3>Our Links</h3>
                        <div><Link href={"./About"}>About us</Link></div>
                        <div><Link href={"./"}>Home</Link></div>
                        <div><Link href={"./Services"}>Services</Link></div>
                        <div><Link href={"./Contact"}>Contact us</Link></div>
                        <div><Link href={"./Portfolio"}>Portfolio</Link></div>

                    </div>
                    <div className='col'>
                        <h4>Our Company</h4>
                        <p>About Company</p>  
                         <p> Get a free Quot</p>
                        <p>Our Testimonials</p>
                        <p>Latest News</p>
                        <p>Our misson</p>
                        
                    </div>
                    <div className='col'>
                        <h4>Our Services</h4>
                        <p>App Development</p>
                        <p> Graphic Design</p>
                        <p>Web Solution</p>

                        <p> App Design</p>  
                        
                    </div>

                </div>
            </div>
          
        </div>
        <h5 style={{textAlign:'center', color: "Grey"}}>All Rigth Reserved By M.Zunair Hussain</h5>
        </>
    )
}
