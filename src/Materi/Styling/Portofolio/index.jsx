import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { Image } from "react-bootstrap";

export default class Portofolio extends React.Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <Nav className="navbar navbar-expand-lg shadow-sm fixed-top" style={{ backgroundColor: "#1bdbfd" }}>
          <div className="container">
            <a className="navbar-brand" href="#">
              M Fadhli Rabani
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Nav>
        {/* Akhir Navbar */}
        {/* Jubotron */}
        <section className="jumbotron text-center">
          <img src="img/fadhli-3.jpg" alt="M Fadhli Rabani" width={200} className="rounded-circle img-thumbnail" />
          <h1 className="display-4">M Fadhli Rabani</h1>
          <p className="lead">College | Web Developer</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffff"
              fillOpacity={10}
              d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,170.7C840,171,960,117,1080,112C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </section>
        {/* Akhir Jumbotron */}
        {/* About */}
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col text-center justify-content-center fs-5">
                <h2>About Me</h2>
              </div>
            </div>
            <div className="row text-center justify-content-center fs-5">
              <div className="col-md-5">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, nobis ducimus optio rem ratione quisquam esse totam maxime eaque aspernatur.</p>
              </div>
              <div className="col-md-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam tenetur eum veritatis ipsum suscipit facilis voluptate, aspernatur officia eius. Veniam quibusdam saepe molestias eius!</p>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#b8f4f4"
              fillOpacity={10}
              d="M0,256L48,256C96,256,192,256,288,229.3C384,203,480,149,576,149.3C672,149,768,203,864,208C960,213,1056,171,1152,176C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </section>
        {/* Akhir About */}
        {/* Projects */}
        <section id="projects">
          <div className="container">
            <div className="row text-center justify-content-center mb-3">
              <div className="col">
                <h2>My Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <div className="card">
                  <img src="img/Dicoding_1.png" className="card-img-top" alt="Projects1" />
                  <div className="card-body">
                    <p className="card-text">Sertifikat Pemrograman Python Dasar dari Dicoding.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card">
                  <img src="img/Dicoding_2.png" className="card-img-top" alt="Projects2" />
                  <div className="card-body">
                    <p className="card-text">Sertifikat Dasar Visualisasi Data dari Dicoding.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card">
                  <img src="img/DQLab_3.png" className="card-img-top" alt="Projects3" />
                  <div className="card-body">
                    <p className="card-text">Sertifikat Pemrograman R dasar dari DQLab.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card">
                  <img src="img/DQLab-1.png" className="card-img-top" alt="Projects4" />
                  <div className="card-body">
                    <p className="card-text">Sertifikat Pemrograman Python for data profesional part-1.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffff"
              fillOpacity={10}
              d="M0,160L34.3,165.3C68.6,171,137,181,206,192C274.3,203,343,213,411,181.3C480,149,549,75,617,53.3C685.7,32,754,64,823,80C891.4,96,960,96,1029,112C1097.1,128,1166,160,1234,170.7C1302.9,181,1371,171,1406,165.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            />
          </svg>
        </section>
        {/* Akhir Projects */}
        {/* Contact */}
        <section id="contact">
          <div className="container">
            <div className="row text-center">
              <div className="col">
                <h2>Contact Me</h2>
              </div>
            </div>
            <div className="row justify-content-center mb-3">
              <div className="col-md-8">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nama Lengkap
                    </label>
                    <input type="text" className="form-control" id="name" aria-describedby="name" />
                    <div className="mb-3">
                      <label htmlFor="Email" className="form-label">
                        Email address
                      </label>
                      <input type="email" className="form-control" id="email" aria-describedby="email" />
                      <br />
                      <div className="mb-3">
                        <label htmlFor="Pesan" className="form-label">
                          Pesan
                        </label>
                        <textarea className="form-control" id="Pesan" rows={3} defaultValue={""} />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Akhir Contact */}
        {/* Footer */}
        <footer className="text-center text-white">
          <p>
            Create with by
            <a href="https://www.instagram.com/accounts/onetap/?next=https%3A%2F%2Fwww.instagram.com%2F%3F__coig_restricted%3D1%26__coig_login%3D1" className="text-white fw-bold">
              M Fadhli Rabani
            </a>
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#18f5f5"
              fillOpacity={10}
              d="M0,256L80,224C160,192,320,128,480,128C640,128,800,192,960,202.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </footer>
        {/* Akhir Footer */}
      </div>
    );
  }
}
