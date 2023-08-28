import React from 'react'
import Navebar from "./(components)/navbar/navbar"
import Round from "./(components)/buttons/Button"
import Button from "./(components)/buttons/Round"
import Cards from "./(components)/cards/Card"
import Image from 'next/image'


export default function page() {
  return (
    
    <div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-5'>
          <br/>
          <br/>
          
            
           </div>
            <div className='col'>
          
          <br/>
          <br/>
            <Navebar/>
            </div>
        </div>
            <br />
        <div className='row'>
            <div className='col'>
              <h1 >Creative </h1>
              <h1 >Digital Agencey</h1>
              <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante dui. Nulla facilisi. Vivamus nec dictum purus. Suspendisse potenti.
              </p>
               <Button title="Learn more" />
            </div>
        </div>
      </div>

      <h1 style={{textAlign : 'center'}}>We Are Providing Digital services</h1>
      
      
      <div className="container">

        <div className='row'>

          <div className='col-4'>
            <Cards card="Web Developer" src="/img/download.png" /><br />
          </div>
          <div className='col-4'>
            <Cards card="Graphic Design" src="/img/graphic.png"/><br />
          </div>
          <div className='col-4'>
            <Cards card="Digital Marketing"  src="/img/digital.png"/><br />  
          </div>
        </div>
      </div>

{/* we design  build  */}
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Image src="/img/web.png" width={"500"} height={350} alt="not found" />
          </div>
          <div className='col'>
            <h1>We design, build brands
              & digital projects.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit

              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident,</p>
            <Button title="Read More" />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Cards card="Smart planing"  src="/img/smart.png"/>
          </div>
          <div className='col'>
            <Cards  card="Our partnership" src ="/img/patnership.png"/>
          </div>
          <div className='col'>
            <Cards card="Super ideas" src="/img/super idea.png"/>
          </div>
        </div>
      </div>

      <br />
      <br />
   {/* take a look our work  slidder */}
          <h2 style={{textAlign : 'center'}}>Take A Look At Our Latest Work</h2>
          <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/img/todolist-app.jpg" class="d-block w-100" alt="..." style={{padding :50}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color: 'black'}}>First slide label</h5>
        <p style={{color: 'black'}}>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/img/todolist-app.jpg" class="d-block w-100" alt="..." style={{padding :50}} />
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color: 'black'}}>First slide label</h5>
        <p style={{color: 'black'}}>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/img/halloween.png" class="d-block w-100" alt="..." style={{padding :50}} />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p >Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
</div>

   

      {/* our top persons  */}

      <h2 className='our'>Our top dedicated professionals.</h2>
      <div className='container'>
        <div className='row'>

          <div className='col'>
            <Image src="/img/douglas.png" width={"300"} height={300} alt="not found" />
            <h5>Duglas Walker</h5>
            <p>SHIEF STAFF</p>
          </div>
          <div className='col'>
            <Image src="/img/caroline.png" width={"300"} height={300} alt="not found" />
            <h5>Caroline Harrison</h5>
            <p>FOUNDER & NANAGER</p>
          </div>
          <div className='col'>
            <Image src="/img/safia.png" width={"300"} height={300} alt="not found" />
            <h5>Safia Simpson</h5>
            <p>WEB DESIGNER</p>
          </div>
        </div>
      </div>

      {/* Our plans  */}
      
        <div className='container'>
          <div className='row'>
          <div className='col'>
          <h2 style={{textAlign : 'center'}}>Choose A Plan That’s Right For You</h2>
          </div>
          </div>
          <div className='endcard'>
          <div className='row'>
          <div className='col'>
            <div className='cardbase'>
              <h3>Basic Plan</h3>
              <Image src="/img/download.png" width={"80"} height={"80"} alt="not found" className='img' />
              <h3>$50/month</h3>
              <p>Graphic Design <br />
                Web Design <br />
                UI/UX<br />
                HTML/CSS<br />
                SEO Marketing<br />
                Business Analysis</p>
              <Button title="Start now" />
              </div>
            </div>

            <div className='col'>
            <div className='cardbase'>
              <h3>Standart Plan</h3>
              <Image src="/img/graphic.png" width={"80"} height={"80"} alt="not found" className='img' />
              <h3>$99/month</h3>
              <p>Graphic Design <br />
                Web Design <br />
                UI/UX<br />
                HTML/CSS<br />
                SEO Marketing<br />
                Business Analysis</p>
              <Button title="Start now" />
            </div>
            </div>

            <div className='col'>
            <div className='cardbase'>
              <h3>Premium Plan</h3>
              <Image src="/img/digital.png" width={"80"} height={"80"} alt="not found" className='img' />
              <h3>$150/month</h3>
              <p>Graphic Design <br />
                Web Design <br />
                UI/UX<br />
                HTML/CSS<br />
                SEO Marketing<br />
                Business Analysis</p>
              <Button title="Start now" />
            </div>
            </div>

          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className='bluesec'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <h2>We’re trusted by clients.</h2>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='twocard'>
                <Image src="/img/mina.png" width={"80"} height={"80"} alt="not found" className='img' />
                <h4>Mina Whatson</h4>
                <p>CONSULTANT</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour,
                  or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, </p>
              </div>
            </div>

            <div className='col'>
              <div className='twocard'>

                <Image src="/img/edward.png" width={"80"} height={"80"} alt="not found" className='img' />
                <h4>Edward Hunter</h4>
                <p>IT SPCIALIST</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour,
                  or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
     
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2>Letest News & Blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
sed do eiusmod tempor incididunt labo. </p>
<input type='email' placeholder='Enter Your mail'/><Button title="Send"/>


          </div>
          <div className='col'>
            <h5>Maecenas laoree efficiture sagittis
              aliquam eleifend nisl.</h5>
            <h5>Posted 7 MArch, 2020</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              sed do eiusmod tempor incididunt labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident,</p>
          </div>
          <div className='col'>
            <h5>Maecenas laoree efficiture sagittis
              aliquam eleifend nisl.</h5>
            <h5>Posted 7 MArch, 2020</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
              sed do eiusmod tempor incididunt labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident,</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
