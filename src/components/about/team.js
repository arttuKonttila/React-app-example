import teamData from "./team-data.json";
import { Image } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./team.scss";

export default function Team() {
  const mapTeam = teamData.employees.splice(0, 4).map((employee, index) => {
    return (
      <div class="col-xl-3 col-sm-6 mb-5 emp-card">
        <div class="bg-white rounded shadow-sm py-5 px-4">
          <Image
            src={employee.image}
            alt=""
            width="100"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">
            {employee.firstName} {employee.lastName}
          </h5>
          <h6 className="text-muted">{employee.email}</h6>
          <span className="small text-uppercase text-muted">{employee.title}</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a href="http://facebook.com" className="social-link">
                <FaFacebook />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="http://twitter.com" className="social-link">
                <FaTwitter />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="http://instagram.com" className="social-link">
                <FaInstagram />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="http://linkedin.com" className="social-link">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-light py-5">
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-lg-5">
            <h2 className="display-4 font-weight-light">Our team</h2>
            <p className="font-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="row text-center">{mapTeam}</div>
      </div>
    </div>
  );
}
