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
    <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Carousel</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
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
    </header>

  
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                <div class="container">
                    <div class="carousel-caption text-start">
                        <h1>Example headline.</h1>
                        <p>Some representative placeholder content for the first slide of the carousel.</p>
                        <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                <div class="container">
                    <div class="carousel-caption">
                        <h1>Another example headline.</h1>
                        <p>Some representative placeholder content for the second slide of the carousel.</p>
                        <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                <div class="container">
                    <div class="carousel-caption text-end">
                        <h1>One more for good measure.</h1>
                        <p>Some representative placeholder content for the third slide of this carousel.</p>
                        <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="container marketing">
        <div class="row">
            <div class="col-lg-4">
                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <h2 class="fw-normal">Heading</h2>
                <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div class="col-lg-4">
                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <h2 class="fw-normal">Heading</h2>
                <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div class="col-lg-4">
                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <h2 class="fw-normal">Heading</h2>
                <p>And lastly this, the third column of representative placeholder content.</p>
                <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
                <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
            </div>
            <div class="col-md-5">
                <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
            </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
                <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div class="col-md-5 order-md-1">
                <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
            </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
            </div>
            <div class="col-md-5">
                <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
            </div>
        </div>

        <hr class="featurette-divider">
    </div>

    <footer class="container">
        <p class="float-end"><a href="#">Back to top</a></p>
        <p>&copy; 2017–2022 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
    `
}

// function loadPreview() {
//     preview.innerHTML =
//     `
//     <header class="p-3 text-bg-dark">
//         <div class="container">
//             <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//                 <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
//                     <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
//                 </a>

//                 <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//                     <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
//                     <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
//                     <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
//                     <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
//                     <li><a href="#" class="nav-link px-2 text-white">About</a></li>
//                 </ul>

//                 <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
//                     <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
//                 </form>

//                 <div class="text-end">
//                     <button type="button" class="btn btn-outline-light me-2">Login</button>
//                     <button type="button" class="btn btn-warning">Sign-up</button>
//                 </div>
//             </div>
//         </div>
//     </header>

//     <div class="container col-xxl-8 px-4 py-5">
//         <div class="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
//             <div class="col-10 col-sm-8 col-lg-6">
//                 <img src="./img/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
//             </div>
//             <div class="col-lg-6">
//                 <h1 class="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
//                 <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
//                 <div class="d-grid gap-2 d-md-flex justify-content-md-start">
//                     <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
//                     <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <main class="container">
//         <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
//             <div class="col">
//                 <div class="card mb-4 rounded-3 shadow-sm">
//                     <div class="card-header py-3">
//                         <h4 class="my-0 fw-normal">Free</h4>
//                     </div>
//                     <div class="card-body">
//                         <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
//                         <ul class="list-unstyled mt-3 mb-4">
//                             <li>10 users included</li>
//                             <li>2 GB of storage</li>
//                             <li>Email support</li>
//                             <li>Help center access</li>
//                         </ul>
//                         <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="col">
//                 <div class="card mb-4 rounded-3 shadow-sm">
//                     <div class="card-header py-3">
//                         <h4 class="my-0 fw-normal">Pro</h4>
//                     </div>
//                     <div class="card-body">
//                         <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
//                         <ul class="list-unstyled mt-3 mb-4">
//                             <li>20 users included</li>
//                             <li>10 GB of storage</li>
//                             <li>Priority email support</li>
//                             <li>Help center access</li>
//                         </ul>
//                         <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="col">
//                 <div class="card mb-4 rounded-3 shadow-sm border-primary">
//                     <div class="card-header py-3 text-bg-primary border-primary">
//                         <h4 class="my-0 fw-normal">Enterprise</h4>
//                     </div>
//                     <div class="card-body">
//                         <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
//                         <ul class="list-unstyled mt-3 mb-4">
//                             <li>30 users included</li>
//                             <li>15 GB of storage</li>
//                             <li>Phone and email support</li>
//                             <li>Help center access</li>
//                         </ul>
//                         <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <h2 class="display-6 text-center mb-4">Compare plans</h2>

//         <div class="table-responsive">
//             <table class="table text-center">
//                 <thead>
//                     <tr>
//                         <th style="width: 34%;"></th>
//                         <th style="width: 22%;">Free</th>
//                         <th style="width: 22%;">Pro</th>
//                         <th style="width: 22%;">Enterprise</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <th scope="row" class="text-start">Public</th>
//                         <td><i class="fa-solid fa-check"></i></td>
//                         <td><i class="fa-solid fa-check"></i></td>
//                         <td><i class="fa-solid fa-check"></i></td>
//                     </tr>
//                     <tr>
//                         <th scope="row" class="text-start">Private</th>
//                         <td></td>
//                         <td><i class="fa-solid fa-check"></i></td>
//                         <td><i class="fa-solid fa-check"></i></td>
//                     </tr>
//                 </tbody>

//                 <tbody>
//                     <tr>
//                         <th scope="row" class="text-start">Permissions</th>
//                         <td><i class="fa-solid fa-check"></i></td>
//                         <td><i class="fa-solid fa-check"></i></td>
//                         <td><i class="fa-solid fa-check"></i></td>
//                     </tr>
//                     <tr>
//                         <th scope="row" class="text-start">Sharing</th>
//                         <td></td>
//                         <td><i class="fa-solid fa-check"></i></td>
//                         <td><i class="fa-solid fa-check"></i></td>
//                     </tr>
//                     <tr>
//                         <th scope="row" class="text-start">Unlimited members</th>
//                         <td></td>
//                         <td><i class="fa-solid fa-check"></i></td>
//                         <td><i class="fa-solid fa-check"></i></td>
//                     </tr>
//                     <tr>
//                         <th scope="row" class="text-start">Extra security</th>
//                         <td></td>
//                         <td></td>
//                         <td><i class="fa-solid fa-check"></i></td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     </main>

//     <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
//         <p class="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>

//         <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
//             <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
//         </a>

//         <ul class="nav col-md-4 justify-content-end">
//             <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
//             <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
//             <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
//             <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
//             <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
//         </ul>
//     </footer>
//     `
// }

// function loadPreview() {
//     preview.innerHTML = 
//     `
//         <nav class="navbar navbar-expand-lg bg-body-tertiary">
//             <div class="container-fluid">
//                 <a class="navbar-brand" href="#">Navbar</a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li class="nav-item">
//                             <a class="nav-link active" aria-current="page" href="#">Home</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">Link</a>
//                         </li>
//                         <li class="nav-item dropdown">
//                             <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                 Dropdown
//                             </a>
//                             <ul class="dropdown-menu">
//                                 <li><a class="dropdown-item" href="#">Action</a></li>
//                                 <li><a class="dropdown-item" href="#">Another action</a></li>
//                                 <li><hr class="dropdown-divider"></li>
//                                 <li><a class="dropdown-item" href="#">Something else here</a></li>
//                             </ul>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link disabled">Disabled</a>
//                         </li>
//                     </ul>
//                     <form class="d-flex" role="search">
//                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//                         <button class="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//         <div id="carouselExample" class="carousel slide">
//             <div class="carousel-inner">
//                 <div class="carousel-item active">
//                     <img src="img/img-1.jpg" class="d-block w-100 img-carousel">
//                 </div>
//                 <div class="carousel-item">
//                     <img src="img/img-2.jpg" class="d-block w-100 img-carousel">
//                 </div>
//                 <div class="carousel-item">
//                     <img src="img/img-3.jpg" class="d-block w-100 img-carousel">
//                 </div>
//             </div>
//             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Anterior</span>
//             </button>
//             <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Siguiente</span>
//             </button>
//         </div>
//         <div class="card-group p-3">
//             <div class="card p-3">
//                 <img src="https://picsum.photos/id/10/300/200" class="card-img-top">
//                 <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
//                 </div>
//             </div>
//             <div class="card p-3">
//                 <img src="https://picsum.photos/id/11/300/200" class="card-img-top">
//                 <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//                 </div>
//             </div>
//             <div class="card p-3">
//                 <img src="https://picsum.photos/id/13/300/200" class="card-img-top">
//                 <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
//                 </div>
//             </div>
//         </div>
//         <div class="bg-dark my-5">
//             <div class="text-center text-light w-50 mx-auto p-4">
//                 <h2>About Us</h2>
//                 <i class="my-2 fa-solid fa-people-group fa-7x"></i>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolorum nemo accusantium ad facilis repellendus aspernatur illum quo nostrum officia nulla distinctio exercitationem consequuntur odio corporis enim obcaecati deleniti non.</p>
//             </div>
//         </div>
//         <footer class="text-center text-lg-start bg-white text-muted">
//             <section class="d-flex justify-content-center justify-content-lg-between p-4 border">
//                 <div class="me-5 d-none d-lg-block">
//                     <span>Get connected with us on social networks:</span>
//                 </div>
            
//                 <div>
//                     <a href="" class="me-4 link-secondary">
//                         <i class="fa-brands fa-facebook-f"></i>
//                     </a>
//                     <a href="" class="me-4 link-secondary">
//                         <i class="fa-brands fa-twitter"></i>
//                     </a>
//                     <a href="" class="me-4 link-secondary">
//                         <i class="fa-brands fa-google"></i>
//                     </a>
//                     <a href="" class="me-4 link-secondary">
//                         <i class="fa-brands fa-instagram"></i>
//                     </a>
//                     <a href="" class="me-4 link-secondary">
//                         <i class="fa-brands fa-linkedin"></i>
//                     </a>
//                     <a href="" class="me-4 link-secondary">
//                         <i class="fa-brands fa-github"></i>
//                     </a>
//                 </div>
//             </section>
        
//             <section>
//                 <div class="container text-center text-md-start mt-5">
//                     <div class="row mt-3">
//                         <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
//                             <h6 class="text-uppercase fw-bold mb-4">
//                                 <i class="fa-regular fa-gem"></i>Company name
//                             </h6>
//                             <p>
//                             Here you can use rows and columns to organize your footer content. Lorem ipsum
//                             dolor sit amet, consectetur adipisicing elit.
//                             </p>
//                         </div>
//                         <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
//                             <h6 class="text-uppercase fw-bold mb-4">Products</h6>
//                             <p><a href="#!" class="text-reset">Angular</a></p>
//                             <p><a href="#!" class="text-reset">React</a></p>
//                             <p><a href="#!" class="text-reset">Vue</a></p>
//                             <p><a href="#!" class="text-reset">Laravel</a></p>
//                         </div>
//                         <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
//                             <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
//                             <p><a href="#!" class="text-reset">Pricing</a></p>
//                             <p><a href="#!" class="text-reset">Settings</a></p>
//                             <p><a href="#!" class="text-reset">Orders</a></p>
//                             <p><a href="#!" class="text-reset">Help</a></p>
//                         </div>
                    
//                         <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
//                             <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
//                             <p><i class="fa-solid fa-house"></i>New York, NY 10012, US</p>
//                             <p><i class="fa-solid fa-envelope"></i>info@example.com</p>
//                             <p><i class="fa-solid fa-phone"></i>+ 01 234 567 88</p>
//                             <p><i class="fa-solid fa-print"></i>+ 01 234 567 89</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
        
//             <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025);">
//                 © 2023 Copyright:
//                 <a class="text-reset fw-bold" href="https://github.com/BryanC7">BryanC7</a>
//             </div>
//         </footer>
//     `
// }