import { Back } from './Back';

export function EldeleitComp({ language }) {
  return (
    <div
      className='d-grid justify-content-center p-3 rounded rounded-4 bg-black bg-opacity-75'
      id='mainPage'
    >
      <div className='mx-3'>
        <h1 className='fw-light text-success text-center bg-black bg-opacity-50 p-3 rounded rounded-4'>
          El Deleit App | Next.js
        </h1>
      </div>
      <hr />
      <p className='text-center text-light my-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
        {language
          ? 'En este caso, se me pidió crear una herramienta eficiente y amigable para una empresa que desea administrar y llevar un registro preciso de los pagos pendientes de sus clientes. Con una interfaz de usuario intuitiva, esta aplicación proporciona una solución completa y automatizada para la gestión de pagos.'
          : 'In this case, I was asked to create an efficient and user-friendly tool for a business that wants to manage and keep accurate track of pending payments from their customers. With an intuitive user interface, this application provides a complete and automated solution for payment management.'}
      </p>
      <hr />
      <p className='text-center text-light my-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
        {language
          ? 'La aplicación utiliza Next.js, un marco de desarrollo web basado en React, lo que permite una carga rápida de páginas y una experiencia de usuario fluida y receptiva. Además, se integra con una base de datos MySQL para un almacenamiento seguro y escalable de los datos de los clientes y los pagos pendientes.'
          : 'The application utilizes Next.js, a React-based web development framework, enabling fast page loading and a smooth and responsive user experience. Additionally, it integrates with a MySQL database for secure and scalable storage of customer data and pending payments.'}
      </p>
      <hr />
      <p className='text-center text-light my-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
        {language
          ? 'La API de Next.js se implementa para manejar las funciones del backend, lo que permite una comunicación eficiente y segura entre el frontend y el servidor. Las principales características de la aplicación incluyen la creación y gestión de tickets para pagos pendientes, la generación de informes y estadísticas de pagos, y la capacidad de rastrear y actualizar el estado de los pagos pendientes.'
          : 'The Next.js API is implemented to handle backend functions, allowing efficient and secure communication between the frontend and server. The main features of the application include creation and management of tickets for pending payments, generation of reports and payment statistics, and the ability to track and update the status of pending payments.'}
      </p>
      <hr />
      <div
        className='col-md-4 mx-auto border border-dark rounded-4 rounded'
        style={{ overflow: 'hidden' }}
      >
        <video controls style={{ objectFit: 'cover', width: '100%' }}>
          <source
            src='https://cofitogit.github.io/My-Portfolio/videos/eldeleitapp.mp4'
            type='video/mp4'
          />
          {/* Puedes agregar más formatos de video aquí, como .webm o .ogg */}
          Tu navegador no admite la reproducción de videos.
        </video>
      </div>
      <hr />
      <Back language={language} />
    </div>
  );
}
