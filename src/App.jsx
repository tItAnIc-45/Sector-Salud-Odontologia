
import './App.css'

const servicios = [
  {
    numero: '01',
    nombre: 'Limpieza dental',
    descripcion: 'Cuida tu sonrisa con una limpieza profesional y preventiva.',
  },
  {
    numero: '02',
    nombre: 'Blanqueamiento',
    descripcion: 'Mejora la apariencia de tu sonrisa con atención profesional.',
  },
  {
    numero: '03',
    nombre: 'Ortodoncia',
    descripcion: 'Opciones de tratamiento para alinear tus dientes.',
  },
  {
    numero: '04',
    nombre: 'Odontología general',
    descripcion: 'Revisiones y tratamientos para cuidar tu salud bucal.',
  },
]

function App() {
  return (
    <>
      <header className="encabezado">
        <a className="marca" href="#inicio">
          <span className="marca-icono">✳</span>
          Sonrisa Sana
        </a>

        <nav className="navegacion" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="boton boton-cabecera" href="#contacto">
          Agenda tu cita
        </a>
      </header>

      <main>
        <section className="portada" id="inicio">
          <div className="portada-contenido">
            <p className="etiqueta">TU SONRISA, NUESTRA PRIORIDAD</p>
            <h1>Una sonrisa saludable cambia todo.</h1>
            <p className="portada-texto">
              En Sonrisa Sana te acompañamos a cuidar tu salud bucal
              con atención cercana y profesional.
            </p>

            <div className="portada-acciones">
              <a className="boton" href="#contacto">
                Solicitar una cita ↗
              </a>
              <a className="enlace-secundario" href="#servicios">
                Conoce nuestros servicios
              </a>
            </div>

            <div className="portada-dato">
              <span className="dato-icono">✓</span>
              Atención cercana y personalizada
            </div>
          </div>

          <div className="portada-visual" aria-label="Ilustración dental">
            <div className="circulo-decorativo"></div>
            <div className="tarjeta-sonrisa">
              <span className="diente">☻</span>
              <p>Tu mejor versión comienza con una sonrisa.</p>
              <span className="estrellita">✳</span>
            </div>
            <span className="burbuja burbuja-uno">✦</span>
            <span className="burbuja burbuja-dos">+</span>
          </div>
        </section>

        <section className="servicios seccion" id="servicios">
          <div className="titulo-seccion">
            <p className="etiqueta">NUESTROS SERVICIOS</p>
            <h2>Cuidamos cada detalle de tu sonrisa</h2>
            <p>
              Encuentra la atención que necesitas en un solo lugar.
            </p>
          </div>

          <div className="servicios-grid">
            {servicios.map((servicio) => (
              <article className="servicio-card" key={servicio.numero}>
                <span className="servicio-numero">{servicio.numero}</span>
                <div className="servicio-simbolo">✳</div>
                <h3>{servicio.nombre}</h3>
                <p>{servicio.descripcion}</p>
                <a href="#contacto" aria-label={`Consultar por ${servicio.nombre}`}>
                  Consultar servicio ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="nosotros seccion" id="nosotros">
          <div className="nosotros-simbolo">✧</div>
          <div>
            <p className="etiqueta">SOBRE NOSOTROS</p>
            <h2>Tu tranquilidad también es parte del tratamiento.</h2>
            <p>
              Somos una plantilla de clínica odontológica pensada para
              presentar servicios, orientar a los pacientes y facilitar
              el contacto con el consultorio.
            </p>
          </div>
        </section>

        <section className="contacto seccion" id="contacto">
          <div>
            <p className="etiqueta">ESTAMOS PARA AYUDARTE</p>
            <h2>Tu próxima sonrisa comienza aquí.</h2>
            <p>
              Escríbenos para consultar sobre nuestros servicios
              y coordinar una cita.
            </p>
          </div>

          <div className="contacto-acciones">
            <a
              className="boton"
              href="https://wa.me/51999999999?text=Hola%2C%20quisiera%20consultar%20por%20una%20cita%20odontol%C3%B3gica."
              target="_blank"
              rel="noreferrer"
            >
              Contactar por WhatsApp ↗
            </a>
            <p>Reemplaza el número de ejemplo por el número autorizado de la clínica.</p>
          </div>
        </section>
      </main>

      <footer className="pie">
        <a className="marca" href="#inicio">
          <span className="marca-icono">✳</span>
          Sonrisa Sana
        </a>
        <p>Plantilla demostrativa TUPLUS · Odontología</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>

      <a
        className="whatsapp-flotante"
        href="https://wa.me/51999999999?text=Hola%2C%20quisiera%20informaci%C3%B3n."
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        WA
      </a>
    </>
  )
}

export default App
