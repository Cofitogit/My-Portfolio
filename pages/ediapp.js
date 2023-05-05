import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Back } from '../components/Back';

const eldeleit = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  useEffect(() => {
    setIsSpanish(localStorage.getItem('isSpanish') === 'true');
  }, []);
  return (
    <Layout language={isSpanish}>
      <div
        className='d-grid justify-content-center p-3 rounded rounded-4 bg-black bg-opacity-75'
        id='mainPage'
      >
        <div className='mx-3'>
          <h1 className='fw-light text-success text-center bg-black bg-opacity-50 p-3 rounded rounded-4'>
            Jw buildings web
          </h1>
        </div>
        <hr />

        <p className='text-center text-light my-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
          {isSpanish
            ? 'Este proyecto consiste en el uso de Next.js para crear una aplicación web que ayude a gestionar y organizar visitas a unidades departamentales en edificios ubicados en diferentes territorios de una ciudad de Córdoba, Argentina. La aplicación utiliza Node.js como backend para interactuar con una base de datos MySQL, que almacena información como los datos de la unidad del departamento, la fecha y hora de la visita y la información del visitante. El sistema también ayuda a controlar aquellas unidades que aún no se han visitado o que no deberían visitarse en absoluto.'
            : "This project involves the use of Next.js to create a web application that helps manage and organize visits to department units in buildings located in different territories of a city in Córdoba, Argentina. The application utilizes Node.js as a backend to interact with a MySQL database, which stores information such as the department unit's data, date and time of the visit, and the visitor's information. The system also helps in controlling those units that are yet to be visited or should not be visited at all."}
        </p>
        <hr />

        <p className='text-center text-light my-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
          {isSpanish
            ? 'Desarrollé una interfaz fácil de usar y moderna que es cómoda y visualmente atractiva. Además, he incluido una función en la que los usuarios pueden agregar un nuevo tablero simplemente ingresando los detalles requeridos. La aplicación está diseñada teniendo en cuenta la escalabilidad y se puede ampliar fácilmente con funciones adicionales en el futuro.'
            : 'I developed a user-friendly and modern interface that is both comfortable and visually appealing. Additionally, I have included a feature where users can add a building board by simply entering the required details. The application is built with scalability in mind, and it can easily be expanded with additional features in the future.'}
        </p>
        <hr />

        <div
          className='col-md-4 mx-auto border border-dark rounded-4 rounded d-flex justify-content-center'
          style={{ overflow: 'hidden' }}
        >
          <video controls style={{ objectFit: 'fill', maxHeight: '600px' }}>
            <source
              src='https://cofitogit.github.io/My-Portfolio/videos/jwapp.mp4'
              type='video/mp4'
            />
            {/* Puedes agregar más formatos de video aquí, como .webm o .ogg */}
            Tu navegador no admite la reproducción de videos.
          </video>
        </div>
        <hr />
        <Back language={isSpanish} />
      </div>
    </Layout>
  );
};

export default eldeleit;
