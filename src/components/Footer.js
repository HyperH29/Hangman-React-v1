import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={"position-fixed bottom-0 w-100"}>
      <div className=" ">
        <footer
          className="text-center text-lg-start"
          style={{ backgroundColor: "#db6930" }}
        >
          <div className="container d-flex justify-content-center py-3">
            <a href={"https://github.com/HyperH29?tab=repositories"}>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-floating mx-2"
                style={{ backgroundColor: "#54456b" }}
              >
                <BsGithub />
              </button>
            </a>
            <a
              href={
                "https://www.linkedin.com/in/hamza-khan-benjamin-20150b155/"
              }
            >
              <button
                type="button"
                className="btn btn-primary btn-lg btn-floating mx-2"
                style={{ backgroundColor: "#54456b" }}
              >
                <BsLinkedin />
              </button>
            </a>
          </div>

          <div
            className="text-center text-white p-2"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://github.com/HyperH29">
              Hamza Khan-Benjamin
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
// Footer From: mdbootstrap.com
// https://mdbootstrap.com/snippets/standard/mdbootstrap/2885115?view=side
