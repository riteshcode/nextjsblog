export default function Slider(params) {
    return(
        <>

<section class="slider_section">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">

          <div class="carousel-item active">

            <div class="container-fluid padding_dd">
              <div class="carousel-caption">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="text-bg">
                     <span>Welcome To Shree</span>
                      <h1>Vegetables Shop</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                      <form class="Vegetable">
                            <input class="Vegetable_fom" placeholder="Vegetable" type="text" name=" Vegetable" />
                            <button class="Search_btn">Search</button>
                        </form>
                      <a href="#">Contact Us</a> <a href="#">Vegetable</a>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="images_box">
                      <figure><img src="images/img2.png" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">

            <div class="container-fluid padding_dd">
              <div class="carousel-caption">

                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="text-bg">
                      <span>Welcome To Shree</span>
                      <h1>Vegetables Shop</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                      <form class="Vegetable">
                            <input class="Vegetable_fom" placeholder="Vegetable" type="text" name=" Vegetable" />
                            <button class="Search_btn">Search</button>
                        </form>
                      <a href="#">Contact Us</a> <a href="#">Vegetable</a>
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="images_box">
                      <figure><img src="images/img2.png" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div class="carousel-item">

            <div class="container-fluid padding_dd">
              <div class="carousel-caption ">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="text-bg">
                      <span>Welcome To Shree</span>
                      <h1>Vegetables Shop</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                       <form class="Vegetable">
                            <input class="Vegetable_fom" placeholder="Vegetable" type="text" name=" Vegetable" />
                            <button class="Search_btn">Search</button>
                        </form>
                      <a href="#">Contact Us</a> <a href="#">Vegetable</a>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="images_box">
                      <figure><img src="images/img2.png" /></figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

</section>


        <div id="about" className="about">
        <div class="container-fluid">
            <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="about-box">
                <h2>About us</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages andIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many</p>
                <a href="#">Read more</a>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_rl">
                <div className="about-box_img">
                <figure><img src="images/about.jpg" alt="#" /></figure>
                </div>
            </div>
            </div>

        </div>
        </div>
        </>
    )
}