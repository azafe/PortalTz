function Organigrama() {
  return (
    <section className="section">
      <div className="container">
        <h2>Organigrama de Transporte Zafe</h2>
        <p className="section-intro">
          Estructura formal de trabajo de Transporte Zafe: una Junta Directiva y tres áreas principales que
          operan en paralelo
        </p>

        <div className="org-card board-clean">
          <h3>Junta Directiva</h3>
          <p className="org-desc">
            Máxima autoridad de Transporte Zafe. Define el rumbo general, aprueba inversiones y establece las
            políticas estratégicas.
          </p>
        </div>

        <h3 className="subsection-title">Áreas principales</h3>

        <div className="area-grid">
          {/* OPERACIONES */}
          <div className="org-card">
            <h4 className="area-title">Operaciones y Logística</h4>
            <div className="leader">
              <img src="/images/alvaro.jpg" alt="Álvaro Zafe" />
              <div>
                <p className="name">Álvaro Zafe</p>
                <p className="role">Responsable de Operaciones</p>
              </div>
            </div>
            <p className="area-desc">
              Planificación de viajes, coordinación con ingenios, control de rendimiento y supervisión general de choferes.
            </p>

            <h5 className="sub">Choferes</h5>
            <div className="org-people">
              <div className="person">
                <img src="/images/gustavo.jpg" alt="Gustavo Córdoba" />
                <p className="name">Gustavo Córdoba</p>
                <p className="role">Chofer</p>
              </div>
              <div className="person">
                <img src="/images/exequiel.jpg" alt="Exequiel Chirino" />
                <p className="name">Exequiel Chirino</p>
                <p className="role">Chofer</p>
              </div>
              <div className="person">
                <img src="/images/VW17280.jpg" alt="Facundo Herrera" />
                <p className="name">Facundo Herrera</p>
                <p className="role">Chofer</p>
              </div>
              <div className="person">
                <img src="/images/Atego1726.jpg" alt="Gabriel Jiménez" />
                <p className="name">Gabriel Jiménez</p>
                <p className="role">Chofer</p>
              </div>
            </div>
          </div>

          {/* MANTENIMIENTO */}
          <div className="org-card">
            <h4 className="area-title">Mantenimiento de Flota</h4>
            <div className="leader">
              <img src="/images/jose.jpg" alt="José Omar Zafe" />
              <div>
                <p className="name">José Omar Zafe</p>
                <p className="role">Responsable de Mantenimiento</p>
              </div>
            </div>
            <p className="area-desc">
              Mantenimiento preventivo y correctivo. Gestión de talleres, repuestos y asistencia a choferes.
            </p>
            <h5 className="sub">Funciones</h5>
            <ul className="key-points">
              <li>Mantenimiento semanal.</li>
              <li>Correctivo y emergencias.</li>
              <li>Gestión de neumáticos y frenos.</li>
              <li>Coordinación con talleres.</li>
            </ul>
          </div>

          {/* ADMINISTRACIÓN */}
          <div className="org-card">
            <h4 className="area-title">Administración y Finanzas</h4>
            <div className="leader">
              <img src="/images/alicia.jpg" alt="María Alicia Ledesma" />
              <div>
                <p className="name">María Alicia Ledesma</p>
                <p className="role">Responsable de Administración</p>
              </div>
            </div>
            <p className="area-desc">
              Control económico, pagos, seguros, documentación y soporte administrativo a la operación.
            </p>
            <h5 className="sub">Funciones</h5>
            <ul className="key-points">
              <li>Costos y sueldos.</li>
              <li>Cheques y proveedores.</li>
              <li>Documentación y seguros.</li>
              <li>Registro contable.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Organigrama;