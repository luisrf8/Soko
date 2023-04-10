// import React from 'react'

// export default function Home() {
//   return (
//     <div>
//       <h1>
//         Home...
//       </h1>
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';
import './Home.scss';
import parallax from './parallax';
const designerExamples = [
  {
    id: 1,
    title: 'Ejemplo 1',
    image: 'https://via.placeholder.com/300x300.png?text=Ejemplo+1',
    description: 'Breve descripción del ejemplo 1.'
  },
  {
    id: 2,
    title: 'Ejemplo 2',
    image: 'https://via.placeholder.com/300x300.png?text=Ejemplo+2',
    description: 'Breve descripción del ejemplo 2.'
  },
  {
    id: 3,
    title: 'Ejemplo 3',
    image: 'https://via.placeholder.com/300x300.png?text=Ejemplo+3',
    description: 'Breve descripción del ejemplo 3.'
  },
  {
    id: 4,
    title: 'Ejemplo 4',
    image: 'https://via.placeholder.com/300x300.png?text=Ejemplo+4',
    description: 'Breve descripción del ejemplo 4.'
  },
  {
    id: 5,
    title: 'Ejemplo 5',
    image: 'https://via.placeholder.com/300x300.png?text=Ejemplo+5',
    description: 'Breve descripción del ejemplo 5.'
  }
];

export default function Home() {
  const [selectedExample, setSelectedExample] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const handleClickExample = (example) => {
    setSelectedExample(example);
  }
  useEffect(() => {
    // Llamamos la función "parallax" una vez que el componente se haya montado
    parallax();
  }, []);

  const handleCloseDetails = () => {
    setSelectedExample(null);
  }
  const handleDetailsClose = () => {
    setShowDetails(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Soko</h1>
        {/* <button className="cta-btn">Contacto</button> */}
      </header>

      <div className="presentation">
        <div className="presentation-content">
          {/* <h2>Ejemplares más importantes</h2> */}
          <p>Aquí puedes encontrar algunos de los ejemplares más destacados del diseñador.</p>
        </div>
        <div className="presentation-media">
          <img src="https://via.placeholder.com/500x300.png?text=Imagen+presentación" alt="Imagen de presentación" />
        </div>
      </div>

      <div className="examples">
        <h2>Ejemplos</h2>
        <div className="examples-grid">
          {designerExamples.map(example => (
            <div key={example.id} className="example" onClick={() => handleClickExample(example)}>
              <img src={example.image} alt={example.title} />
              <p>{example.title}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedExample && (
        <div className="example-details">
          <div className="example-details-content">
            <img src={selectedExample.image} alt={selectedExample.title} />
            <h3>{selectedExample.title}</h3>
            <p>{selectedExample.description}</p>
            <button className="close-btn" onClick={handleCloseDetails}>Cerrar</button>
          </div>
        </div>
      )}
{/* Visión y misión */}
      <section className="vision-mission">
        <div className="vision-mission-content">
          <h2>Visión y Misión</h2>
          <p>
            En [nombre de la marca], nuestra visión es [insertar visión], y
            nuestra misión es [insertar misión]. Nos esforzamos por ofrecer a
            nuestros clientes un diseño creativo y efectivo que satisfaga sus
            necesidades y supere sus expectativas.
          </p>
          <p>
            Nuestros valores principales son [insertar valores], y trabajamos
            para incorporarlos en todo lo que hacemos. Nos comprometemos a ser
            transparentes, éticos y responsables en todas nuestras interacciones
            con nuestros clientes, proveedores y la comunidad en general.
          </p>
        </div>
        <div className="brand-concepts">
          <h3>Conceptos de la marca</h3>
          <ul>
            <li>Concepto 1</li>
            <li>Concepto 2</li>
            <li>Concepto 3</li>
            <li>Concepto 4</li>
          </ul>
        </div>
      </section>

  {/* Detalles de ejemplo */}
      {showDetails && (
        <div className="example-details">
          <div className="example-details-content">
            <img src={showDetails.image} alt={showDetails.title} />
            <h3>{showDetails.title}</h3>
            <p>{showDetails.description}</p>
            <span
              className="example-details-close"
              onClick={handleDetailsClose}
            >
              &times;
            </span>
          </div>
        </div>
      )}
      <section class="parallax-section" id="parallax">
  <div class="parallax-bg" data-depth="0.4">
    <img src="ruta/a/imagen.jpg" alt=""/>
  </div>
  <div class="parallax-content" data-depth="0.6">
    <h2>Nuestro equipo</h2>
    <p>En [nombre de la empresa], contamos con un equipo de diseñadores y desarrolladores altamente calificados y apasionados por crear soluciones digitales excepcionales.</p>
    <a href="#contact" class="cta-btn">Contáctanos</a>
  </div>
</section>
<section class="how-we-work">
  <div class="container">
    <h2>Cómo trabajamos</h2>
    <p>En [nombre de la empresa], creemos en trabajar de manera colaborativa con nuestros clientes para crear soluciones personalizadas que cumplan con sus necesidades específicas. Nuestro proceso de trabajo incluye los siguientes pasos:</p>
    <ol>
      <li>Reunión inicial: Nos reunimos con el cliente para comprender sus necesidades y objetivos y establecer un calendario para el proyecto.</li>
      <li>Bocetos y conceptos: Crearemos varios bocetos y conceptos iniciales y los presentaremos al cliente para su revisión y retroalimentación.</li>
      <li>Desarrollo de prototipos: A partir de los bocetos aprobados, desarrollaremos prototipos interactivos y los presentaremos al cliente para su revisión y retroalimentación.</li>
      <li>Desarrollo y pruebas: Una vez que el cliente ha aprobado el prototipo, comenzaremos el desarrollo completo del proyecto y lo probaremos exhaustivamente antes de entregarlo al cliente.</li>
      <li>Entrega y soporte: Entregamos el proyecto al cliente y brindamos soporte continuo para garantizar que el proyecto cumpla con sus expectativas y necesidades en curso.</li>
    </ol>
    <h2>Nuestra interacción con los clientes</h2>
    <p>En [nombre de la empresa], creemos que una buena comunicación es clave para el éxito del proyecto. Mantenemos a nuestros clientes informados en cada etapa del proceso y trabajamos juntos para garantizar que el proyecto cumpla con sus necesidades y expectativas. Además, brindamos soporte continuo después de la entrega del proyecto para garantizar la satisfacción del cliente a largo plazo.</p>
  </div>
</section>
  {/* Pie de página */}
  <footer className="footer">
    <p>Derechos reservados &copy; {new Date().getFullYear()}</p>
  </footer>
    </div>
    
  );
}

// export default App;
