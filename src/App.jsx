import img from "./imagenes/image-qr-code.png";

export const App = () => {
  return (
    <>
      <div className="qr-container">
        <div className="qr-code">
          <img src={img} alt="qr-code" />
          <h1>Improve your front-end skills by building projects</h1>
          <p className="parrafo">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <h6>
        Challenge by Frontend Mentor. Coded by{" "}
        <a href="https://personalportfoliogerman.netlify.app" target="_blank">
          Germán Pinto.
        </a>
      </h6>
    </>
  );
};
