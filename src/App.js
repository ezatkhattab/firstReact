import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark pt-5 pb-5 ">
        <div class="container">
          <a href="#" class="navbar-brand">
            {" "}
            Learning React{" "}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a href="#learn" class="nav-link">
                  What you'll Learn
                </a>
              </li>
              <li class="nav-item">
                <a href="#questins" class="nav-link">
                  Questions
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Instructors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section class="bg-dark text-light p-5 p-lg-0 text-center showcase">
        <div class="container">
          <div class="d-sm-flex bb">
            <div>
              <h1>
                Become a <span class="text-warning">React Developer</span>{" "}
              </h1>
              <p class="lead my-3">
                We focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
              </p>
              <button class="btn btn-warning btn-lg">ENROLL NOW</button>
            </div>
            <img class="img-fluid w-50" src='./images/undraw_Dev_focus_re_6iwt.svg' alt="dev-focus" />
          </div>
        </div>
      </section>

      <section class="p-5 text-dark">
        <div class="container">
          <div class="row text-start align-items-center">
            <div class="col-md ">
              <h1 class="pb-2">Learn React</h1>
              <p class="pb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <button type="button" class="btn btn-dark">
                <span class="text-light">Read More</span>
              </button>
            </div>
            <div class="col-md">
              <img class="img-fluid w-40" src="./images/undraw_react_y7wq.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="questins" class="p-5 bg-warning text-dark text-center">
        <div class="container">
          <h1>Frequently Asked Questions</h1>

          <div
            class="accordion accordion-flush pt-5"
            id="accordionFlushExample"
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Where exacly are you located ?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse text-start"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed text-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How much does cost to attend ?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What do i need to know ?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse text-start"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" class="bg-dark text-light">
        <p>© Copyright Web Bootcamp</p>
      </footer>
    </div>
  );
}

export default App;
