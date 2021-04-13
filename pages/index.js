import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../comps/Navbar'
import Headlink from '../comps/Headlink'
import Slider from '../comps/Slider'
import Testimonial from '../comps/Testimonial'
import Contact from '../comps/Contact'
import Footer from '../comps/Footer'
export default function Home() {
  return (
    <>
		<Head>
			<Headlink />
		</Head>
		<main>
			{/* <div class="loader_bg">
				<div class="loader"><img src="images/loading.gif" alt="#" /></div>
			</div> */}
			<Navbar />
      <Slider />
      <div id="vegetable" class="vegetable">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div  class="titlepage">
              <h2> Fresh <strong class="llow">vegetable</strong> </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
            <div class="vegetable_shop">
              <h3>Best Vegetables Shop</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages andIt is a long established fact that a reader will be distracted </p>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
            <div class="vegetable_img">
            <figure><img src="images/v1.jpg" alt="#"/></figure>
            <span>01</span>
            </div>
          </div>
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
            <div class="vegetable_img margin_top">
            <figure><img src="images/v2.jpg" alt="#"/></figure>
            <span>02</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Testimonial />
      <Contact />
      <Footer />
		</main>

		
    </>
  )
}
