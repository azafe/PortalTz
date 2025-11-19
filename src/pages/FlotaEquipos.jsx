import mb1620 from "/images/mb1620.jpg";
import atego from "/images/Atego1726.jpg";
import vw17280 from "/images/VW17280.jpg";
import acoplado from "/images/Acoplado-Canero.jpg";
import iveco17280 from "/images/Iveco17280.jpg";
import batea from "/images/batea.jpg"

function FlotaEquipos() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="page-title">Flota y Equipos</h1>
        <p className="page-intro">
          Visión general de los camiones y equipos con los que opera Transporte Zafe.
          Esta sección sirve como referencia interna para planificación, mantenimiento
          y decisiones de inversión.
        </p>

        {/* CAMIONES */}
        <h2 className="subsection-title">Camiones</h2>

        <div className="card-grid">

          {/* MB 1620 */}
          <article className="unit-card">
            <img src={mb1620} alt="MB1620" className="unit-photo" />
            <div className="unit-card-body">
              <div className="unit-card-header">
                <h3>Mercedes Benz 1620 (2006)</h3>
                <span className="unit-tag unit-tag--venta">Plan de venta</span>
              </div>
              <ul className="unit-list">
                <li><strong>Estado:</strong> Activo, previsto para vender antes de marzo 2026.</li>
                <li><strong>Valor estimado de venta:</strong> $45.000.000</li>
                <li><strong>Uso principal:</strong> Zafra azucarera con equipo cañero.</li>
                <li><strong>Notas:</strong> Su venta forma parte del plan de renovación de flota.</li>
              </ul>
            </div>
          </article>

          {/* Ford 1831 */}
          <article className="unit-card">
            <img src={atego} alt="Ford1831" className="unit-photo" />
            <div className="unit-card-body">
              <div className="unit-card-header">
                <h3>Ford 1831 (2007)</h3>
                <span className="unit-tag unit-tag--activo">Activo</span>
              </div>
              <ul className="unit-list">
                <li><strong>Estado:</strong> Operativo.</li>
                <li><strong>Uso principal:</strong> Zafra azucarera y cargas generales.</li>
                <li><strong>Notas:</strong> Parte de la flota base, clave para mantener volumen de viajes.</li>
              </ul>
            </div>
          </article>

          {/* Atego 1726 */}
          <article className="unit-card">
            <img src={atego} alt="Atego1726" className="unit-photo" />
            <div className="unit-card-body">
              <div className="unit-card-header">
                <h3>Mercedes Benz Atego 1726</h3>
                <span className="unit-tag unit-tag--activo">Activo</span>
              </div>
              <ul className="unit-list">
                <li><strong>Estado:</strong> Operativo.</li>
                <li>
                  <strong>Datos recientes:</strong> 29 viajes en mayo 2025.
                </li>
                <li><strong>Uso principal:</strong> Zafra azucarera y cargas fuera de zafra.</li>
              </ul>
            </div>
          </article>

          {/* VW 17.280 */}
          <article className="unit-card">
            <img src={vw17280} alt="VW17280" className="unit-photo" />
            <div className="unit-card-body">
              <div className="unit-card-header">
                <h3>VW 17.280</h3>
                <span className="unit-tag unit-tag--reparacion">Historial de siniestro</span>
              </div>
              <ul className="unit-list">
                <li><strong>Estado:</strong> Operativo, reparado tras accidente 2024.</li>
                <li><strong>Notas:</strong> Más de $3.000.000 en chapa. Juicio pendiente por resarcimiento.</li>
              </ul>
            </div>
          </article>

          {/* Iveco 17280 */}
          <article className="unit-card">
            <img src={iveco17280} alt="IVECO17280" className="unit-photo" />
            <div className="unit-card-body">
              <div className="unit-card-header">
                <h3>IVECO 17.280</h3>
                <span className="unit-tag unit-tag--activo">Activo</span>
              </div>
              <ul className="unit-list">
                <li><strong>Estado:</strong> Parte de la flota actual.</li>
                <li><strong>Uso principal:</strong> Cargas generales.</li>
                <li><strong>Notas:</strong> Unidad clave para sostener el plan a 5 camiones.</li>
              </ul>
            </div>
          </article>
        </div>

        {/* EQUIPOS */}
        <h2 className="subsection-title" style={{ marginTop: "2.5rem" }}>Equipos</h2>

        <div className="card-grid">
          {/* Semi */}
          <article className="unit-card">
            <img src={acoplado} alt="Semilargo" className="unit-photo" />
            <div className="unit-card-body">
              <div className="unit-card-header">
                <h3>Semirremolque 14,50 m</h3>
                <span className="unit-tag unit-tag--activo">Activo</span>
              </div>
              <ul className="unit-list">
                <li><strong>Tipo:</strong> Semilargo.</li>
                <li><strong>Uso principal:</strong> Cargas generales y pellet.</li>
              </ul>
            </div>
          </article>

          {/* Batea */}
          <article className="unit-card">
            <img src={batea} alt="Batea" className="unit-photo" />
            <div className="unit-card-body">
              <div className="unit-card-header">
                <h3>Batea 27 m³</h3>
                <span className="unit-tag unit-tag--nuevo">Nueva inversión</span>
              </div>
              <ul className="unit-list">
                <li><strong>Estado:</strong> Activa, recientemente adquirida.</li>
                <li><strong>Precio de compra:</strong> $50.000.000.</li>
              </ul>
            </div>
          </article>

          {/* Navatuc */}
          <article className="unit-card">
            <img src={acoplado} alt="Navatuc" className="unit-photo" />
            <div className="unit-card-body">
              <div className="unit-card-header">
                <h3>Equipo Cañero Navatuc</h3>
                <span className="unit-tag unit-tag--zafra">Zafra</span>
              </div>
              <ul className="unit-list">
                <li><strong>Tipo:</strong> Equipo cañero.</li>
                <li><strong>Uso principal:</strong> Transporte de caña.</li>
              </ul>
            </div>
          </article>

          {/* Acoplanoa */}
          <article className="unit-card">
            <img src={acoplado} alt="Acoplanoa" className="unit-photo" />
            <div className="unit-card-body">
              <div className="unit-card-header">
                <h3>Equipo Cañero Acoplanoa</h3>
                <span className="unit-tag unit-tag--zafra">Zafra</span>
              </div>
              <ul className="unit-list">
                <li><strong>Tipo:</strong> Equipo cañero.</li>
                <li><strong>Uso principal:</strong> Transporte de caña.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FlotaEquipos;