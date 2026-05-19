// src/customer/pages/Home.jsx
import { useEffect } from "react";
import Newsletter from "../components/Newsletter";
import FeatureIcons from "../components/FeatureIcons";
import ProductCard from "../components/ProductCard";
function Home() {

  useEffect(() => {
    setTimeout(() => {
      const $ = window.$;
      if (!$) return;
      try {
        $('.categories-slider-active').slick({
          dots: false, infinite: true, rows: 2, slidesToShow: 4, slidesToScroll: 1, autoplay: false,
          prevArrow: '<button type="button" class="slick-prev"> <i class="icon-rt-arrow-left-solid"> </i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="icon-rt-arrow-right-solid"> </i></button>',
          responsive: [
            { breakpoint: 1199, settings: { slidesToShow: 3 } },
            { breakpoint: 992,  settings: { slidesToShow: 2 } },
            { breakpoint: 767,  settings: { slidesToShow: 2, prevArrow: false, nextArrow: false } },
            { breakpoint: 479,  settings: { slidesToShow: 1, prevArrow: false, nextArrow: false } }
          ]
        });

        $('.product-slider-active').slick({
          dots: false, infinite: true, slidesToShow: 5, slidesToScroll: 1, autoplay: false,
          prevArrow: '<button type="button" class="slick-prev"> <i class="icon-rt-arrow-left-solid"> </i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="icon-rt-arrow-right-solid"> </i></button>',
          responsive: [
            { breakpoint: 1199, settings: { slidesToShow: 4 } },
            { breakpoint: 991,  settings: { slidesToShow: 3 } },
            { breakpoint: 767,  settings: { slidesToShow: 2 } },
            { breakpoint: 479,  settings: { slidesToShow: 1 } }
          ]
        });

        //  product-slider-active-4 — SABHI tabs ke liye alag alag initialize
        $('.product-slider-active-4').each(function() {
          $(this).slick({
            dots: false, infinite: true, slidesToShow: 5, slidesToScroll: 1, autoplay: false,
            prevArrow: '<button type="button" class="slick-prev"> <i class="icon-rt-arrow-left-solid"> </i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="icon-rt-arrow-right-solid"> </i></button>',
            responsive: [
              { breakpoint: 1199, settings: { slidesToShow: 5 } },
              { breakpoint: 991,  settings: { slidesToShow: 3 } },
              { breakpoint: 767,  settings: { slidesToShow: 2 } },
              { breakpoint: 479,  settings: { slidesToShow: 1 } }
            ]
          });
        });

        $('.category-three-slider-active').slick({
          dots: false, infinite: true, slidesToShow: 6, slidesToScroll: 1, autoplay: false,
          prevArrow: '<button type="button" class="slick-prev"> <i class="icon-rt-arrow-left-solid"> </i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="icon-rt-arrow-right-solid"> </i></button>',
          responsive: [
            { breakpoint: 1199, settings: { slidesToShow: 3 } },
            { breakpoint: 991,  settings: { slidesToShow: 3 } },
            { breakpoint: 767,  settings: { slidesToShow: 2 } },
            { breakpoint: 479,  settings: { slidesToShow: 1 } }
          ]
        });

        //  Tab switch hone par slider refresh — ZARURI HAI
        $('[data-bs-toggle="tab"]').on('shown.bs.tab', function() {
          $('.product-slider-active-4').slick('setPosition');
        });

      } catch(e) {
        console.log("Slick error:", e);
      }
    }, 500);
  }, []);

  return (
    <main>

      {/* Slider Main Start */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="assets/img/slider-1.png" className="d-block w-100" alt="image" />
          </div>
          <div className="carousel-item">
            <img src="assets/img/slider-2.png" className="d-block w-100" alt="image" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden"><i class="icon-rt-arrow-left-solid"> </i></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden"><i class="icon-rt-arrow-right-solid"> </i></span>
        </button>
      </div>
      {/* Slider Main End */}

      {/* Popular Categories Start */}
      <section className="popular-categories-section">
        <div className="container">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="section-title-wrap">
                <h2 className="section-title">Popular Categories</h2>
                <p>Some of our popular categories include grocery</p>
              </div>
            </div>
          </div>
          <div className="categories-box product-border-box">
            <div className="categories-slider-col-20">
              <a href="#" className="categories-banner-wrap">
                <img src="assets/images/banners/img_banner4_mixy1.webp" alt="image" />
              </a>
            </div>
            <div className="categories-slider-col-80">
              <div className="categories-slider-active">
                <div className="single-categories-item">
                  <div className="category-image">
                    <a href="#"><img src="assets/images/categories/fresh_vegetables.webp" alt="image" /></a>
                  </div>
                  <div className="category-content">
                    <h6><a href="#">Fresh Vegetables</a></h6>
                    <p className="count">8 Products</p>
                  </div>
                </div>
                <div className="single-categories-item">
                  <div className="category-image">
                    <a href="#"><img src="assets/images/categories/bread_bakery.webp" alt="image" /></a>
                  </div>
                  <div className="category-content">
                    <h6><a href="#">Bread &amp; Bakery</a></h6>
                    <p className="count">9 Products</p>
                  </div>
                </div>
                <div className="single-categories-item">
                  <div className="category-image">
                    <a href="#"><img src="assets/images/categories/canned_goods.webp" alt="image" /></a>
                  </div>
                  <div className="category-content">
                    <h6><a href="#">Canned Goods</a></h6>
                    <p className="count">10 Products</p>
                  </div>
                </div>
                <div className="single-categories-item">
                  <div className="category-image">
                    <a href="#"><img src="assets/images/categories/eggs_dairy.webp" alt="image" /></a>
                  </div>
                  <div className="category-content">
                    <h6><a href="#">Eggs &amp; Dairy</a></h6>
                    <p className="count">18 Products</p>
                  </div>
                </div>
                <div className="single-categories-item">
                  <div className="category-image">
                    <a href="#"><img src="assets/images/categories/meats_seafood.webp" alt="image" /></a>
                  </div>
                  <div className="category-content">
                    <h6><a href="#">Meats &amp; Seafood</a></h6>
                    <p className="count">8 Products</p>
                  </div>
                </div>
                <div className="single-categories-item">
                  <div className="category-image">
                    <a href="#"><img src="assets/images/categories/soft_drinks.webp" alt="image" /></a>
                  </div>
                  <div className="category-content">
                    <h6><a href="#">Soft Drinks</a></h6>
                    <p className="count">8 Products</p>
                  </div>
                </div>
                <div className="single-categories-item">
                  <div className="category-image">
                    <a href="#"><img src="assets/images/categories/fresh_vegetables.webp" alt="image" /></a>
                  </div>
                  <div className="category-content">
                    <h6><a href="#">Fresh Fruits</a></h6>
                    <p className="count">8 Products</p>
                  </div>
                </div>
                <div className="single-categories-item">
                  <div className="category-image">
                    <a href="#"><img src="assets/images/categories/fresh_fruits.webp" alt="image" /></a>
                  </div>
                  <div className="category-content">
                    <h6><a href="#">Fresh Fruits</a></h6>
                    <p className="count">8 Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Categories End */}


      {/* Best Sellers Section Start */}
      <section className="product-item-section best-sellers-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="d-lg-flex align-items-center justify-content-lg-between mb-4">
                <div className="section-title-wrap mb-md-0">
                  <h2 className="section-title">Best Sellers</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <ul className="nav menu-tabs" role="tablist">
                  <li className="active"><a className="active" href="#chicken" role="tab" data-bs-toggle="tab"> Chicken</a></li>
                  <li><a href="#eggs" role="tab" data-bs-toggle="tab"> Eggs </a></li>
                  <li><a href="#grocery-bakery" role="tab" data-bs-toggle="tab">Grocery</a></li>
                  <li><a href="#dairy" role="tab" data-bs-toggle="tab">Dairy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="custom-row product-border-box">
            <div className="custom-col-80">
              <div className="tab-content">

                {/* Chicken Tab */}
                <div className="tab-pane active" id="chicken">
                  <div className="product-slider-active-4">
                    <ProductCard name="Skinless Boneless Chicken Breast" price="$70.00" image="https://www.agrosuper.com/global/wp-content/uploads/2025/03/1013017.png" />
                    <ProductCard name="Leg Quarters" price="$70.00" image="https://www.greenbelt-global.com/wp-content/uploads/2025/08/10150713KG-checkers515Wx515H.png" />
                    <ProductCard name="Drumsticks" price="$70.00" image="https://static.vecteezy.com/system/resources/thumbnails/062/678/060/small/three-raw-chicken-drumsticks-with-rosemary-fresh-chicken-legs-uncooked-chicken-drumsticks-with-herbs-png.png" />
                    <ProductCard name="Boneless Thighs (Pargiot)" price="$70.00" image="https://elatmeat.com/wp-content/uploads/2025/05/Turkey-Wings.png" />
                    <ProductCard name="Chicken Consomme (Parve 5×2.2lbs)" price="$70.00" image="https://www.boombay.in/cdn/shop/articles/chicken_biryani_37b7b0fc-7021-4b9e-8e77-e1e6b7adaa84_1024x.png?v=1768472193" />
                    <ProductCard name="Drumsticks" price="$70.00" image="https://static.vecteezy.com/system/resources/thumbnails/062/678/060/small/three-raw-chicken-drumsticks-with-rosemary-fresh-chicken-legs-uncooked-chicken-drumsticks-with-herbs-png.png" />
                  </div>
                </div>

                {/* Eggs Tab */}
                <div className="tab-pane" id="eggs">
                  <div className="product-slider-active-4">
                    <ProductCard name="Fresh White/Brown Eggs" price="$70.00" image="https://static.vecteezy.com/system/resources/previews/053/783/988/non_2x/mixed-brown-and-white-eggs-free-png.png" />
                    <ProductCard name="Liquid Eggs" price="$70.00" image="https://png.pngtree.com/png-clipart/20250424/original/pngtree-fresh-brown-eggs-with-broken-shell-and-liquid-splash-png-image_20780455.png" />
                    <ProductCard name="Sugared Eggs" price="$70.00" image="https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-fried-egg-with-sugar-on-a-white-background-3d-illustration-png-image_12512362.png" />
                    <ProductCard name="Egg Whites" price="$70.00" image="https://nutrigroupe.ca/wp-content/uploads/2023/08/oeuf-couille-craque.png" />
                    <ProductCard name="Sugared Eggs" price="$70.00" image="https://png.pngtree.com/png-vector/20240511/ourmid/pngtree-egg-shaped-sugar-pot-png-image_12438157.png" />
                    <ProductCard name="Sugared Eggs" price="$70.00" image="https://png.pngtree.com/png-vector/20240511/ourmid/pngtree-egg-shaped-sugar-pot-png-image_12438157.png" />
                  </div>
                </div>

                {/* Grocery Tab */}
                <div className="tab-pane" id="grocery-bakery">
                  <div className="product-slider-active-4">
                    <ProductCard name="White Corn Tortillas (6×80pcs)" price="$70.00" image="https://www.easyfoods.com/specs/fried-tortilla-chips/16FW62R.png" />
                    <ProductCard name="Granulated Garlic (5lbs)" price="$70.00" image="https://5.imimg.com/data5/SELLER/Default/2026/1/576639315/WT/BL/OT/138799188/garlic-granules.png" />
                    <ProductCard name="Granulated Onion (5lbs)" price="$70.00" image="https://arizoneinternational.com/wp-content/uploads/2023/05/onion-powder.png.webp" />
                    <ProductCard name="Ground Black Pepper (5lbs)" price="$70.00" image="https://www.drrkfoods.com/wp-content/uploads/2021/01/black_pepper_dish1.png" />
                    <ProductCard name="Paprika (5lbs)" price="$70.00" image="https://static.vecteezy.com/system/resources/previews/072/106/059/non_2x/a-pile-of-vibrant-red-paprika-powder-isolated-on-a-transparent-background-showcasing-its-fine-texture-and-rich-color-free-png.png" />
                    <ProductCard name="Salt (25lbs)" price="$70.00" image="https://static.vecteezy.com/system/resources/thumbnails/041/042/710/small/ai-generated-heap-of-sea-salt-crystals-free-png.png" />
                    <ProductCard name="C&H Sugar (25lbs)" price="$70.00" image="https://www.chsugar.com/sites/default/files/2025-06/c%26h%20premium%20pure%20cane%20dark%20brown%20sugar.png" />
                  </div>
                </div>

                {/* Dairy Tab */}
                <div className="tab-pane" id="dairy">
                  <div className="product-slider-active-4">
                    <ProductCard name="Milk (2/1-Gallon)" price="$70.00" image="https://img.freepik.com/free-vector/realistic-vector-icon-illustration-dairy-farm-fresh-milk-splash-with-milk-jug-bottle-isola_134830-2399.jpg?w=360" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Best Sellers Section End */}


      {/* Category Section Start */}
      <section className="category-section section-space-ptb-90">
        <div className="container">
          <div className="col-lg-12 section-title-wrap text-center">
            <h2 className="section-title">Shop by Department</h2>
          </div>
          <div className="category-three-slider-active">
            <div className="col">
              <div className="single-category text-center">
                <h5 className="category-name fw-semibold mb-4">Fresh Vegetables</h5>
                <div className="category-image"><a href="#"><img src="assets/images/categories/fresh_vegetables.webp" alt="image" /></a></div>
                <div className="category-content"><p>8 Products</p></div>
              </div>
            </div>
            <div className="col">
              <div className="single-category text-center">
                <h5 className="category-name fw-semibold mb-4">Bread &amp; Bakery</h5>
                <div className="category-image"><a href="#"><img src="assets/images/categories/bread_bakery.webp" alt="image" /></a></div>
                <div className="category-content"><p>7 Products</p></div>
              </div>
            </div>
            <div className="col">
              <div className="single-category text-center">
                <h5 className="category-name fw-semibold mb-4">Canned Goods</h5>
                <div className="category-image"><a href="#"><img src="assets/images/categories/canned_goods.webp" alt="image" /></a></div>
                <div className="category-content"><p>5 Products</p></div>
              </div>
            </div>
            <div className="col">
              <div className="single-category text-center">
                <h5 className="category-name fw-semibold mb-4">Eggs &amp; Dairy</h5>
                <div className="category-image"><a href="#"><img src="assets/images/categories/eggs_dairy.webp" alt="image" /></a></div>
                <div className="category-content"><p>4 Products</p></div>
              </div>
            </div>
            <div className="col">
              <div className="single-category text-center">
                <h5 className="category-name fw-semibold mb-4">Meats &amp; Seafood</h5>
                <div className="category-image"><a href="#"><img src="assets/images/categories/meats_seafood.webp" alt="image" /></a></div>
                <div className="category-content"><p>8 Products</p></div>
              </div>
            </div>
            <div className="col">
              <div className="single-category text-center">
                <h5 className="category-name fw-semibold mb-4">Soft Drinks</h5>
                <div className="category-image"><a href="#"><img src="assets/images/categories/soft_drinks.webp" alt="image" /></a></div>
                <div className="category-content"><p>7 Products</p></div>
              </div>
            </div>
            <div className="col">
              <div className="single-category text-center">
                <h5 className="category-name fw-semibold mb-4">Fresh Fruits</h5>
                <div className="category-image"><a href="#"><img src="assets/images/categories/fresh_fruits.webp" alt="image" /></a></div>
                <div className="category-content"><p>9 Products</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Category Section End */}


      {/* Banner Section Start */}
      <div className="banner-section section-space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <a href="#" className="single-banner-area">
                <div className="single-benner-image">
                  <img src="assets/img/image-banner1.jpg" alt="image" />
                </div>
                <div className="banner-content">
                  <h2 className="banner-title2">Lorem ipsum dolor sit</h2>
                  <h2 className="banner-offer">FROM 20% OFF</h2>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-md-6">
              <a href="#" className="single-banner-area sm-mt-30">
                <div className="single-benner-image">
                  <img src="assets/img/image-banner2.jpg" alt="image" />
                </div>
                <div className="banner-content">
                  <h2 className="banner-title2">Lorem ipsum dolor sit</h2>
                  <h2 className="banner-offer">FROM 30% OFF</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Section End */}


      {/* New Arrivals Section Start */}
      <section className="product-item-section pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="section-title-wrap">
                <h2 className="section-title">New Arrivals</h2>
                <p>Add bestselling products to weekly line up</p>
              </div>
            </div>
          </div>
          <div className="product-slider-active product-border-box">
            <div className="single-product-item">
              <div className="single-product-item-image">
                <a href="#" className="prodcut-images"><img className="primary-image" src="assets/images/products/product-image-2-1.jpg" alt="image" /></a>
                <ul className="single-product-item-action">
                  <li className="single-product-item-action-list"><a href="#" className="single-product-item-action-link"><i className="icon-rt-heart2"></i></a></li>
                  <li className="single-product-item-action-list"><a href="#" className="single-product-item-action-link"><i className="icon-rt-eye2"></i></a></li>
                </ul>
              </div>
              <div className="single-product-item-content">
                <div className="single-product-item-rating"><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid"></i></div>
                <h6 className="single-product-item-title"><a href="#">Fresh organic kiwi</a></h6>
                <div className="single-product-item-price">$70.00</div>
                <div className="cart-btn1"><a href="#"><i className="fa fa-shopping-cart"></i>&nbsp; Add to cart</a></div>
              </div>
            </div>
            <div className="single-product-item">
              <div className="single-product-item-image">
                <a href="#" className="prodcut-images"><img className="primary-image" src="assets/images/products/product-image-1-1.jpg" alt="image" /></a>
                <ul className="single-product-item-action">
                  <li className="single-product-item-action-list"><a href="#" className="single-product-item-action-link"><i className="icon-rt-heart2"></i></a></li>
                  <li className="single-product-item-action-list"><a href="#" className="single-product-item-action-link"><i className="icon-rt-eye2"></i></a></li>
                </ul>
              </div>
              <div className="single-product-item-content">
                <div className="single-product-item-rating"><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid"></i></div>
                <h6 className="single-product-item-title"><a href="#">Dried mango</a></h6>
                <div className="single-product-item-price">$70.00</div>
                <div className="cart-btn1"><a href="#"><i className="fa fa-shopping-cart"></i>&nbsp; Add to cart</a></div>
              </div>
            </div>
            <div className="single-product-item">
              <div className="single-product-item-image">
                <a href="#" className="prodcut-images"><img className="primary-image" src="assets/images/products/product-image-3-1.jpg" alt="image" /></a>
                <ul className="single-product-item-action">
                  <li className="single-product-item-action-list"><a href="#" className="single-product-item-action-link"><i className="icon-rt-heart2"></i></a></li>
                  <li className="single-product-item-action-list"><a href="#" className="single-product-item-action-link"><i className="icon-rt-eye2"></i></a></li>
                </ul>
              </div>
              <div className="single-product-item-content">
                <div className="single-product-item-rating"><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid"></i></div>
                <h6 className="single-product-item-title"><a href="#">Dried banana</a></h6>
                <div className="single-product-item-price">$80.00</div>
                <div className="cart-btn1"><a href="#"><i className="fa fa-shopping-cart"></i>&nbsp; Add to cart</a></div>
              </div>
            </div>
            <div className="single-product-item">
              <div className="single-product-item-image">
                <a href="#" className="prodcut-images"><img className="primary-image" src="assets/images/products/product-image-4-1.jpg" alt="image" /></a>
                <ul className="single-product-item-action">
                  <li className="single-product-item-action-list"><a href="#" className="single-product-item-action-link"><i className="icon-rt-heart2"></i></a></li>
                  <li className="single-product-item-action-list"><a href="#" className="single-product-item-action-link"><i className="icon-rt-eye2"></i></a></li>
                </ul>
              </div>
              <div className="single-product-item-content">
                <div className="single-product-item-rating"><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid"></i></div>
                <h6 className="single-product-item-title"><a href="#">Crunchy crisps</a></h6>
                <div className="single-product-item-price">$90.00</div>
                <div className="cart-btn1"><a href="#"><i className="fa fa-shopping-cart"></i>&nbsp; Add to cart</a></div>
              </div>
            </div>
            <div className="single-product-item">
              <div className="single-product-item-image">
                <a href="#" className="prodcut-images"><img className="primary-image" src="assets/images/products/product-image-5-1.jpg" alt="image" /></a>
                <ul className="single-product-item-action">
                  <li className="single-product-item-action-list"><a href="#" className="single-product-item-action-link"><i className="icon-rt-heart2"></i></a></li>
                  <li className="single-product-item-action-list"><a href="#" className="single-product-item-action-link"><i className="icon-rt-eye2"></i></a></li>
                </ul>
              </div>
              <div className="single-product-item-content">
                <div className="single-product-item-rating"><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid"></i></div>
                <h6 className="single-product-item-title"><a href="#">Jewel cranberries</a></h6>
                <div className="single-product-item-price">$67.00</div>
                <div className="cart-btn1"><a href="#"><i className="fa fa-shopping-cart"></i>&nbsp; Add to cart</a></div>
              </div>
            </div>
            <div className="single-product-item">
              <div className="single-product-item-image">
                <a href="#" className="prodcut-images"><img className="primary-image" src="assets/images/products/product-image-6-1.jpg" alt="image" /></a>
                <ul className="single-product-item-action">
                  <li className="single-product-item-action-list"><a href="#" className="single-product-item-action-link"><i className="icon-rt-heart2"></i></a></li>
                  <li className="single-product-item-action-list"><a href="#" className="single-product-item-action-link"><i className="icon-rt-eye2"></i></a></li>
                </ul>
              </div>
              <div className="single-product-item-content">
                <div className="single-product-item-rating"><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid select-star"></i><i className="icon-rt-star-solid"></i></div>
                <h6 className="single-product-item-title"><a href="#">Fresh Broccoli</a></h6>
                <div className="single-product-item-price">$68.00</div>
                <div className="cart-btn1"><a href="#"><i className="fa fa-shopping-cart"></i>&nbsp; Add to cart</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Arrivals Section End */}


      {/* ================= Banner Section Start ================= */}
      <section className="banner-section banner-sec1">
        <div className="container">
          <div className="row">

            {/* Large Banner */}
            <div className="col-lg-8 col-md-8">
              <a href="/" className="single-banner-area">
                <div className="single-benner-image">
                  <img src="assets/img/image-banner3.jpg" alt="Main Banner" />
                </div>
                <div className="banner-content">
                  <h2 className="banner-title">Lorem ipsum, dolor sit</h2>
                  <h2 className="banner-title2 fw-semibold">Lorem ipsum dolor sit amet</h2>
                  <h2 className="banner-offer mt-3">$30.66</h2>
                </div>
              </a>
            </div>

            {/* Small Banner */}
            <div className="col-lg-4 col-md-4">
              <a href="/" className="single-banner-area sm-mt-30">
                <div className="single-benner-image">
                  <img src="assets/img/image-banner4.jpg" alt="Side Banner" />
                </div>
                <div className="banner-content">
                  <h2 className="banner-title">Lorem</h2>
                  <h2 className="banner-title2 fw-semibold">ipsum, dolor sit</h2>
                  <h2 className="banner-offer mt-3">$26.88</h2>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>
      {/* ================= Banner Section End ================= */}

      {/* Banner Start */}
      <section className="banner-section">
        <div className="container-fluid px-0">

          <div className="row gx-0">

            <div className="col-md-4">
              <a href="/" className="inner-image">
                <img
                  src="assets/img/img2.avif"
                  alt="banner"
                />
              </a>
            </div>

            <div className="col-md-4">
              <a
                href="/"
                className="inner-image position-relative"
              >
                <img
                  src="assets/images/banners/img2_banner2_mixy4.webp"
                  alt="banner"
                />

                <div className="banner-content banner-lg-text text-center w-100 start-0">

                  <h2 className="banner-title text-white">
                    Get Your Free Estimate
                  </h2>

                  <h2 className="banner-title-2 text-white">
                    (323) 963-1600
                  </h2>

                  <h2 className="banner-offer text-white">
                    restaurantpantryla@gmial.com
                  </h2>

                  <span className="mt-5 fw-semibold btn btn--primary btn--meddim">
                    Contact Us
                    <i className="icon-rt-arrow-right-solid"></i>
                  </span>

                </div>
              </a>
            </div>

            <div className="col-md-4">
              <a href="/" className="inner-image">
                <img
                  src="assets/img/img3.avif"
                  alt="banner"
                />
              </a>
            </div>

          </div>

        </div>
      </section>
      {/* Banner End */}

    </main>
  );
}

export default Home;
