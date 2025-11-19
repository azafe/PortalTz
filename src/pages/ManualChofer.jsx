// src/pages/ManualChofer.jsx

function ManualChofer() {
  return (
    <section className="section">
      <div className="container">

        <h2>Manual del Chofer · Transporte Zafe</h2>
        <p className="section-intro">
          Guía oficial para los choferes de Transporte Zafe.  
          Indica cómo operar de manera segura, profesional y alineada a los valores de la empresa.
        </p>

        <div className="badge-pill">Versión 1.0 · Uso interno</div>

        {/* OBJETIVO DEL ROL */}
        <div className="block">
          <h3>Objetivo del rol de chofer</h3>
          <p>
            El chofer de Transporte Zafe no solo conduce una unidad:  
            representa a la empresa, cuida los activos de la familia y garantiza un servicio seguro
            para los ingenios y clientes. Cada viaje debe reflejar profesionalismo, responsabilidad
            y actitud constructiva.
          </p>

          <ul className="key-points">
            <li>Cuidar la seguridad propia, de terceros y de la carga.</li>
            <li>Operar los camiones de forma responsable y profesional.</li>
            <li>Reportar fallas o incidentes de manera inmediata.</li>
            <li>Respetar rutas, tiempos y planificación de Operaciones.</li>
            <li>Tratar a clientes, personal de ingenios y compañeros con respeto.</li>
          </ul>
        </div>

        {/* A QUIÉN REPORTA */}
        <div className="block">
          <h3>A quién reporta el chofer</h3>

          <div className="two-cols">
            <div>
              <h4>Operaciones y Logística</h4>
              <p className="small">Responsable: Álvaro Zafe</p>
              <ul className="key-points">
                <li>Asignación de viajes.</li>
                <li>Indicaciones de carga y descarga.</li>
                <li>Coordinación con ingenios.</li>
                <li>Rendimiento y organización diaria.</li>
              </ul>
            </div>

            <div>
              <h4>Mantenimiento de Flota</h4>
              <p className="small">Responsable: José Omar Zafe</p>
              <ul className="key-points">
                <li>Fallas mecánicas.</li>
                <li>Ingreso a talleres.</li>
                <li>Repuestos y asistencia.</li>
                <li>Seguimiento de mantenimiento preventivo.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CHECKLISTS */}
        <div className="block">
          <h3>Checklists básicos</h3>
          <p className="section-intro">
            Estos controles simples evitan fallas costosas y aumentan la seguridad.  
            Todos los choferes deben realizarlos de manera rutinaria.
          </p>

          <div className="checklist-grid">

            <div className="checklist-card">
              <h4>Antes de salir</h4>
              <ul>
                <li>Revisar nivel de combustible asignado.</li>
                <li>Verificar luces: bajas, altas, freno, guiños y balizas.</li>
                <li>Control visual de presión de neumáticos.</li>
                <li>Comprobar que no haya pérdidas de fluidos.</li>
                <li>Confirmar presencia de documentación obligatoria.</li>
                <li>Reportar cualquier anomalía antes de arrancar.</li>
              </ul>
            </div>

            <div className="checklist-card">
              <h4>Durante el viaje</h4>
              <ul>
                <li>Respetar las normas de tránsito y velocidades.</li>
                <li>No usar el celular mientras se conduce.</li>
                <li>Transitar con cinturón de seguridad siempre.</li>
                <li>Reportar ruidos o comportamientos extraños del camión.</li>
                <li>Evitar maniobras bruscas o innecesarias.</li>
              </ul>
            </div>

            <div className="checklist-card">
              <h4>Al finalizar el viaje</h4>
              <ul>
                <li>Estacionar donde indique Operaciones.</li>
                <li>Hacer un chequeo visual del camión.</li>
                <li>Informar cualquier incidente o comportamiento anormal.</li>
                <li>Registrar consumo si corresponde.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* PROTOCOLOS */}
        <div className="block">
          <h3>Protocolos clave</h3>

          <div className="protocol-grid">

            <div className="protocol-card">
              <h4>1. Falla o problema mecánico</h4>
              <ol className="steps-list">
                <li>Detener el camión en un lugar seguro.</li>
                <li>Encender balizas y señalizar si es necesario.</li>
                <li>Contactar a Mantenimiento inmediatamente.</li>
                <li>Describir claramente el problema (ruidos, humo, temperatura, etc.).</li>
                <li>No continuar el viaje si el camión no está seguro.</li>
              </ol>
            </div>

            <div className="protocol-card">
              <h4>2. Accidente o incidente</h4>
              <ol className="steps-list">
                <li>Verificar estado de personas involucradas.</li>
                <li>Llamar a emergencias si corresponde.</li>
                <li>Contactar a Operaciones de inmediato.</li>
                <li>No admitir culpa ni discutir con terceros.</li>
                <li>Tomar fotos y registrar detalles si es seguro hacerlo.</li>
              </ol>
            </div>

            <div className="protocol-card">
              <h4>3. Comunicación con la empresa</h4>
              <ol className="steps-list">
                <li>Usar el canal oficial (WhatsApp de flota u otro definido).</li>
                <li>Enviar mensajes claros y breves.</li>
                <li>Operaciones = consultas operativas.</li>
                <li>Mantenimiento = fallas o dudas mecánicas.</li>
              </ol>
            </div>

          </div>
        </div>

        {/* CONDUCTA Y SEGURIDAD */}
        <div className="block">
          <h3>Conducta y seguridad</h3>
          <p className="section-intro">
            La forma en que los choferes se comportan impacta en la reputación de la empresa.
          </p>

          <div className="two-cols">
            <div>
              <h4>Conductas esperadas</h4>
              <ul className="key-points">
                <li>Respeto hacia el personal del ingenio y terceros.</li>
                <li>Cero alcohol o drogas durante el servicio.</li>
                <li>Manejo defensivo y responsable.</li>
                <li>Cuidar la imagen de Transporte Zafe en todo momento.</li>
              </ul>
            </div>

            <div>
              <h4>Conductas no aceptadas</h4>
              <ul className="key-points">
                <li>Conducción bajo efectos de alcohol o sustancias.</li>
                <li>Poner en riesgo el camión o la carga.</li>
                <li>Desobedecer indicaciones claras de Operaciones.</li>
                <li>Amenazar, insultar o generar conflictos con terceros.</li>
              </ul>
            </div>
          </div>

          <div className="warning-card">
            <strong>Importante:</strong> ante cualquier situación no contemplada en este manual,
            el chofer debe comunicarse con Operaciones antes de tomar una decisión que pueda poner
            en riesgo la seguridad, la unidad o la relación con el cliente.
          </div>
        </div>

        {/* CIERRE */}
        <div className="block">
          <h3>Compromiso del chofer</h3>
          <p>
            El chofer se compromete a respetar este manual y a operar de acuerdo a los valores de la
            empresa: responsabilidad, respeto, profesionalismo y unidad familiar.
          </p>
          <p className="small">
            Este documento puede ser actualizado por la Junta Directiva. La versión vigente siempre
            estará disponible en este portal interno.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ManualChofer;