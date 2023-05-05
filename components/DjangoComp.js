import { Back } from './Back';

export function DjangoComp({ language }) {
  return (
    <div
      className=' p-3 rounded rounded-4 bg-black bg-opacity-75'
      id='mainPage'
    >
      <div className='mx-3'>
        <h1 className='fw-light text-success text-center bg-black bg-opacity-50 p-3 rounded rounded-4'>
          {'< To Do APP >'}
        </h1>
      </div>
      <hr />
      <p className='text-center text-light my-3 card bg-coffee p-2 rounded'>
        {language
          ? 'Esta aplicación construida con Django ofrece una solución completa para la creación de usuarios y la gestión de tareas. Los usuarios pueden registrarse fácil y rápidamente, crear, actualizar y listar tareas a completar. Con una interfaz intuitiva, esta aplicación es perfecta para mejorar la productividad y organización en cualquier entorno de trabajo o proyecto. Este proyecto fue creado como un desafío para poner a prueba el funcionamiento de Django.'
          : 'This Django-based application offers a complete solution for user creation and task management. Users can easily and quickly register, create, update, and list tasks to be completed. With an intuitive interface, this application is perfect for improving productivity and organization in any work environment or project. This project was created as a challenge to test the functionality of Django.'}
      </p>
      <hr />
      <div
        className='col-md-10 mx-auto border border-dark rounded-4 rounded d-flex justify-content-center'
        style={{ overflow: 'hidden' }}
      >
        <video controls style={{ objectFit: 'fill', maxHeight: '600px' }}>
          <source
            src='https://cofitogit.github.io/My-Portfolio/videos/djangoapp.mp4'
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
