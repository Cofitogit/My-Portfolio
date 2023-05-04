import { Back } from './Back';

export function CoffeetoComp({ language }) {
  return (
    <div
      className='d-grid justify-content-center p-3 rounded rounded-4 bg-black bg-opacity-75'
      id='mainPage'
    >
      <div className='mx-3'>
        <h1 className='fw-light text-success text-center bg-black bg-opacity-50 p-3 rounded rounded-4'>
          CoffeeTo | social media
        </h1>
      </div>
      <hr />
      <p className='text-center text-light my-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
        {language
          ? 'Estoy trabajando en el desarrollo de una emocionante red social llamada CoffeeTo, que busca combinar las características más atractivas de mis aplicaciones favoritas. La aplicación contará con una variedad de funciones, como chats, la posibilidad de compartir contenido, misiones diarias y progreso a través de niveles, así como opciones de entretenimiento con inteligencia artificial y muchas más.'
          : 'I am working on the development of an exciting social network called CoffeeTo, which aims to combine the most attractive features of my favorite applications. The application will have a variety of functions, such as chats, the ability to share content, daily missions and progress through levels, as well as entertainment options with artificial intelligence and many more.'}
      </p>
      <hr />
      <p className='text-center text-light my-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
        {language
          ? 'Para la creación y autenticación de usuarios, estoy haciendo uso de JWT y Bcrypt. Para el servidor backend, utilizo Node.js y la base de datos es MySQL. Además, para el desarrollo de esta aplicación, estoy desarrollando la aplicación con Vue, una biblioteca de JavaScript para construir interfaces de usuario. También estoy haciendo uso de Express, Axios, Dotenv, Cors y otras tecnologías para implementar las funcionalidades de la aplicación.'
          : "For user creation and authentication, I am using JWT and Bcrypt. For the backend server, I am using Node.js and the database is MySQL. Additionally, for the development of this application, I am using Vue, a JavaScript library for building user interfaces. I am also using Express, Axios, Dotenv, Cors and other technologies to implement the application's features."}
      </p>
      <hr />
      <p className='text-center text-light my-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
        {language
          ? 'Este es un proyecto que acaba de comenzar, pero me encuentro muy entusiasmado con su potencial. Estoy comprometido en crear una aplicación de alta calidad, que proporcione a los usuarios una experiencia única y entretenida.'
          : 'This is a project that has just started, but I am very excited about its potential. I am committed to creating a high-quality application that provides users with a unique and entertaining experience.'}
      </p>
      <div
        className='col-md-4 mx-auto border mt-3 border-dark rounded-4 rounded'
        style={{ overflow: 'hidden' }}
      >
        <video controls style={{ objectFit: 'cover', width: '100%' }}>
          <source
            src='https://cofitogit.github.io/carlosaguero/videos/coffeeto.mp4'
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
