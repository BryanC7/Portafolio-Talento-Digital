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
    <div class="container">
  <header class="blog-header lh-1 py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <a class="link-secondary" href="#">Subscribe</a>
      </div>
      <div class="col-4 text-center">
        <a class="blog-header-logo text-dark" href="#">Large</a>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <a class="link-secondary" href="#" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
        </a>
        <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
      </div>
    </div>
  </header>

  <div class="nav-scroller py-1 mb-2">
    <nav class="nav d-flex justify-content-between">
      <a class="p-2 link-secondary" href="#">World</a>
      <a class="p-2 link-secondary" href="#">U.S.</a>
      <a class="p-2 link-secondary" href="#">Technology</a>
      <a class="p-2 link-secondary" href="#">Design</a>
      <a class="p-2 link-secondary" href="#">Culture</a>
      <a class="p-2 link-secondary" href="#">Business</a>
      <a class="p-2 link-secondary" href="#">Politics</a>
      <a class="p-2 link-secondary" href="#">Opinion</a>
      <a class="p-2 link-secondary" href="#">Science</a>
      <a class="p-2 link-secondary" href="#">Health</a>
      <a class="p-2 link-secondary" href="#">Style</a>
      <a class="p-2 link-secondary" href="#">Travel</a>
    </nav>
  </div>
</div>

    <main class="container">
        <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
            <div class="col-md-6 px-0">
                <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
                <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary">World</strong>
                    <h3 class="mb-0">Featured post</h3>
                    <div class="mb-1 text-muted">Nov 12</div>
                        <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="stretched-link">Continue reading</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-success">Design</strong>
                        <h3 class="mb-0">Post title</h3>
                        <div class="mb-1 text-muted">Nov 11</div>
                            <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>
                    <div class="col-auto d-none d-lg-block">
                    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    </div>
                </div>
            </div>
        </div>

    <div class="row g-5">
        <div class="col-md-8">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
            From the Firehose
        </h3>

        <article class="blog-post">
            <h2 class="blog-post-title mb-1">Sample blog post</h2>
            <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

            <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
            <hr>
            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
            <h2>Blockquotes</h2>
            <p>This is an example blockquote in action:</p>
            <blockquote class="blockquote">
            <p>Quoted text goes here.</p>
            </blockquote>
            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
            <h3>Example lists</h3>
            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
            <ul>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
            </ul>
            <p>And this is an ordered list:</p>
            <ol>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
            </ol>
            <p>And this is a definition list:</p>
            <dl>
            <dt>HyperText Markup Language (HTML)</dt>
            <dd>The language used to describe and define the content of a Web page</dd>
            <dt>Cascading Style Sheets (CSS)</dt>
            <dd>Used to describe the appearance of Web content</dd>
            <dt>JavaScript (JS)</dt>
            <dd>The programming language used to build advanced Web sites and applications</dd>
            </dl>
            <h2>Inline HTML elements</h2>
            <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
            <ul>
            <li><strong>To bold text</strong>, use <code class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
            <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
            <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
            <li>Citations, like <cite>— Mark Otto</cite>, should use <code class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
            <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
            <li>Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
            </ul>
            <p>Most of these elements are styled by browsers with few modifications on our part.</p>
            <h2>Heading</h2>
            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
            <h3>Sub-heading</h3>
            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
            <pre><code>Example code block</code></pre>
            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
        </article>

        <article class="blog-post">
            <h2 class="blog-post-title mb-1">Another blog post</h2>
            <p class="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>

            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
            <blockquote>
            <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
            </blockquote>
            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
            <h3>Example table</h3>
            <p>And don't forget about tables in these posts:</p>
            <table class="table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Upvotes</th>
                <th>Downvotes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Alice</td>
                <td>10</td>
                <td>11</td>
                </tr>
                <tr>
                <td>Bob</td>
                <td>4</td>
                <td>3</td>
                </tr>
                <tr>
                <td>Charlie</td>
                <td>7</td>
                <td>9</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td>Totals</td>
                <td>21</td>
                <td>23</td>
                </tr>
            </tfoot>
            </table>

            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
        </article>

        <article class="blog-post">
            <h2 class="blog-post-title mb-1">New feature</h2>
            <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>

            <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
            <ul>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
            </ul>
            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
        </article>

        <nav class="blog-pagination" aria-label="Pagination">
            <a class="btn btn-outline-primary rounded-pill" href="#">Older</a>
            <a class="btn btn-outline-secondary rounded-pill disabled">Newer</a>
        </nav>

        </div>

        <div class="col-md-4">
        <div class="position-sticky" style="top: 2rem;">
            <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">About</h4>
            <p class="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
            </div>

            <div class="p-4">
            <h4 class="fst-italic">Archives</h4>
            <ol class="list-unstyled mb-0">
                <li><a href="#">March 2021</a></li>
                <li><a href="#">February 2021</a></li>
                <li><a href="#">January 2021</a></li>
                <li><a href="#">December 2020</a></li>
                <li><a href="#">November 2020</a></li>
                <li><a href="#">October 2020</a></li>
                <li><a href="#">September 2020</a></li>
                <li><a href="#">August 2020</a></li>
                <li><a href="#">July 2020</a></li>
                <li><a href="#">June 2020</a></li>
                <li><a href="#">May 2020</a></li>
                <li><a href="#">April 2020</a></li>
            </ol>
            </div>

            <div class="p-4">
            <h4 class="fst-italic">Elsewhere</h4>
            <ol class="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
            </ol>
            </div>
        </div>
        </div>
    </div>

    </main>

    <footer class="blog-footer">
        <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
        <p>
            <a href="#">Back to top</a>
        </p>
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