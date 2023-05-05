import Link from 'next/link';
import { Back } from './Back';

export function EsteticaComp({ language }) {

  return (
    <div
      className='d-grid justify-content-center p-3 rounded rounded-4 bg-black bg-opacity-75'
      id='mainPage'
    >
      <div className='mx-3'>
        <h1 className='fw-light text-success text-center bg-black bg-opacity-50 p-3 rounded rounded-4'>
          A.M Estética | Android App: Ionic, Angular, TypeScript, SASS, MySQL
        </h1>
      </div>
      <hr />

      <p className='text-center text-light my-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
        {language
          ? 'Este proyecto consiste en una aplicación de programación de citas para tratamientos estéticos desarrollada con Ionic y Angular, la cual ofrece a los usuarios una experiencia intuitiva y atractiva al permitirles seleccionar el tipo de tratamiento, elegir la fecha y hora de la cita y visualizar los horarios disponibles. La aplicación cuenta con una interfaz de usuario suave y agradable que facilita la realización de reservas de forma rápida y sencilla. He utilizado Capacitor para desplegar la aplicación en Android Studio.'
          : 'This project involves an appointment scheduling application for aesthetic treatments developed with Ionic and Angular, offering users an intuitive and attractive experience by allowing them to select the type of treatment, choose the appointment date and time, and view available time slots. The application features a smooth and pleasant user interface that makes booking quick and easy. I used Capacitor to deploy the application to Android Studio.'}
      </p>
      <hr />

      <p className='text-center text-light my-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
        {language
          ? 'Trabajo en implementar un historial de los tratamientos que haya recibido cada cliente, con información detallada de los productos utilizados, así como un formulario para recibir recomendaciones personalizadas de acuerdo con el tipo de piel, edad, y otros factores. '
          : 'I am working on implementing a treatment history for each client, with detailed information on the products used, as well as a form to receive personalized recommendations based on skin type, age, and other factors.'}
      </p>
      <hr />

      <p className='text-center text-light my-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
        {language
          ? 'Planeo seguir mejorando la aplicación incorporando características adicionales, como notificaciones de recordatorios de citas y la integración con un sistema de gestión de usuarios y reservas. Mi objetivo es continuar desarrollando una aplicación de alta calidad que proporcione a los usuarios una experiencia única y satisfactoria, manteniendo un trabajo cercano y colaborativo con mi cliente.'
          : 'My plan is to continue improving the application by adding additional features, such as appointment reminder notifications and integration with a user and reservation management system. My goal is to keep developing a high-quality application that provides users with a unique and satisfying experience, while maintaining close and collaborative work with my client.'}
      </p>
      <hr />

      <div
        className='col-md-4 mx-auto border border-dark rounded-4 rounded d-flex justify-content-center'
        style={{ overflow: 'hidden' }}
      >
        <video controls style={{ objectFit: 'fill', maxHeight: '600px' }}>
          <source
            src='https://cofitogit.github.io/My-Portfolio/videos/cosmetica.mp4'
            type='video/mp4'
          />
          {/* Puedes agregar más formatos de video aquí, como .webm o .ogg */}
          Tu navegador no admite la reproducción de videos.
        </video>
      </div>
      <hr />
      <button className='btn btn-dark w-50 mt-3 mx-auto rounded'>
        <Link
          href='https://github.com/Cofitogit/A.M-Estetica'
          className='nav-link text-light fw-bolder'
        >
          GitHub Pages
        </Link>
      </button>
      <Back language={language}/>
    </div>
  );
}
