import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Portal Interno de Cultura y Organización</h1>
          <p>
            Este sitio resume cómo elegimos trabajar en Transporte Zafe: valores, propósito,
            organización y lineamientos para construir una empresa sólida, profesional y familiar.
          </p>
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => navigate("/valores")}
            >
              Ver valores de TZ
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate("/organigrama")}
            >
              Ver organigrama
            </button>
          </div>
          <p className="hero-note">
            Uso interno · Material estratégico de Transporte Zafe.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>¿Qué es este portal?</h2>
          <p className="section-intro">
            El objetivo de este portal es alinear a todos los integrantes de Transporte Zafe en una
            misma visión: cómo nos hablamos, cómo decidimos, qué buscamos construir y qué rol tiene
            cada uno dentro de la empresa.
          </p>
          <div className="block">
            <h3>Para qué lo usamos</h3>
            <ul className="key-points">
              <li>Dejar claros los valores y la cultura interna.</li>
              <li>Definir la estructura organizacional y las áreas.</li>
              <li>Centralizar manuales internos como el Manual del Chofer.</li>
              <li>Documentar la estrategia y la forma de trabajar.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;