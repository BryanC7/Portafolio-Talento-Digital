const header1 = document.querySelector('#header-1') 
const header2 = document.querySelector('#header-2') 
const header3 = document.querySelector('#header-3') 
const body1 = document.querySelector('#body-1') 
const body2 = document.querySelector('#body-2') 
const body3 = document.querySelector('#body-3') 
const body4 = document.querySelector('#body-4') 
const footer1 = document.querySelector('#footer-1') 
const footer2 = document.querySelector('#footer-2') 
const footer3 = document.querySelector('#footer-3') 
const footer4 = document.querySelector('#footer-4')

const preview = document.querySelector('#preview')
window.addEventListener('DOMContentLoaded', loadPreview)

function loadPreview() {
    preview.innerHTML = 
    `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img/img-1.jpg" class="d-block w-100 img-carousel">
                </div>
                <div class="carousel-item">
                    <img src="img/img-2.jpg" class="d-block w-100 img-carousel">
                </div>
                <div class="carousel-item">
                    <img src="img/img-3.jpg" class="d-block w-100 img-carousel">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
        <div class="card-group p-3">
            <div class="card p-3">
                <img src="https://picsum.photos/id/10/300/200" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            <div class="card p-3">
                <img src="https://picsum.photos/id/11/300/200" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
            <div class="card p-3">
                <img src="https://picsum.photos/id/13/300/200" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>
        <div class="bg-dark my-5">
            <div class="text-center text-light w-50 mx-auto p-4">
                <h2>About Us</h2>
                <i class="my-2 fa-solid fa-people-group fa-7x"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolorum nemo accusantium ad facilis repellendus aspernatur illum quo nostrum officia nulla distinctio exercitationem consequuntur odio corporis enim obcaecati deleniti non.</p>
            </div>
        </div>
        <footer class="text-center text-lg-start bg-white text-muted">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border">
                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
            
                <div>
                    <a href="" class="me-4 link-secondary">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                        <i class="fa-brands fa-google"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </section>
        
            <section>
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fa-regular fa-gem"></i>Company name
                            </h6>
                            <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum
                            dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                            <p><a href="#!" class="text-reset">Angular</a></p>
                            <p><a href="#!" class="text-reset">React</a></p>
                            <p><a href="#!" class="text-reset">Vue</a></p>
                            <p><a href="#!" class="text-reset">Laravel</a></p>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                            <p><a href="#!" class="text-reset">Pricing</a></p>
                            <p><a href="#!" class="text-reset">Settings</a></p>
                            <p><a href="#!" class="text-reset">Orders</a></p>
                            <p><a href="#!" class="text-reset">Help</a></p>
                        </div>
                    
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i class="fa-solid fa-house"></i>New York, NY 10012, US</p>
                            <p><i class="fa-solid fa-envelope"></i>info@example.com</p>
                            <p><i class="fa-solid fa-phone"></i>+ 01 234 567 88</p>
                            <p><i class="fa-solid fa-print"></i>+ 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>
        
            <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025);">
                © 2023 Copyright:
                <a class="text-reset fw-bold" href="https://github.com/BryanC7">BryanC7</a>
            </div>
        </footer>
    `
}