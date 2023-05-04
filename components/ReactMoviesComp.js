import { Back } from './Back';

export function ReactMoviesComp({ language }) {
  return (
    <div
      className='d-grid justify-content-center bg-black bg-opacity-75 p-3 rounded rounded-4'
      id='mainPage'
    >
      <div className='mx-3'>
        <h1 className='fw-light text-success text-center bg-black bg-opacity-50 p-3 rounded rounded-4'>
          React movies TMDb API
        </h1>
      </div>
      <hr />
      <p className='text-center text-light card bg-coffee p-2 rounded col-md-10 mx-auto'>
        {language
          ? 'El proyecto consiste en un pequeño desafío para la creación de una web de películas, en el cual se consume la API de TMDb. Se utilizó la biblioteca de ReactJS y se implementó el uso de CSS modules para una mayor organización y legibilidad del código.'
          : 'The project consists of a small challenge for creating a movie web application, in which the TMDb API is consumed. The ReactJS library was used, and CSS modules were implemented for better code organization and readability.'}
      </p>
      <div className='col-md-8 mx-auto'>
        <img
          src='https://i.ibb.co/q5sFJzJ/moviesreact1.png'
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          className='rounded border border-dark rounded-4'
        />
      </div>
      <hr />
      <p className='text-center text-light mt-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
        {language
          ? 'Además, se incorporó un sistema de Scroll Infinito que permite cargar más películas a medida que el usuario desplaza la página, proporcionando una experiencia de usuario más fluida y cómoda.'
          : 'Additionally, an Infinite Scroll system was incorporated, which allows loading more movies as the user scrolls down the page, providing a smoother and more comfortable user experience.'}
      </p>
      <div className='col-md-8 mt-3 mx-auto'>
        <img
          src='https://i.ibb.co/qWCRx5n/moviesreact3.png'
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          className='rounded border border-dark rounded-4'
        />
      </div>

      <hr />
      <p className='text-center text-light mt-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
        {language
          ? 'Asimismo, se añadió un sistema de búsqueda similar al de Netflix, en el que el usuario puede escribir el título de la película en un input y obtener resultados de forma automática, todo esto gracias a la implementación de un useDebounce.'
          : 'Furthermore, a Netflix-style search system was added, in which the user can type the movie title in an input and get results automatically. This was made possible thanks to the implementation of a useDebounce hook.'}
      </p>
      <div className='col-md-8 mx-auto'>
        <img
          src='https://i.ibb.co/Qrb4xVc/moviesreact4.png'
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          className='rounded border border-dark rounded-4'
        />
      </div>
      <hr />
      <p className='text-center text-light my-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
        {' '}
        {language
          ? 'Este desafío representó una oportunidad para poner en práctica los primeros pasos en React y consolidar conocimientos en programación, así como también para desarrollar habilidades en la creación de aplicaciones web dinámicas y atractivas visualmente.'
          : 'This challenge represented an opportunity to put into practice the first steps in React and consolidate programming knowledge, as well as to develop skills in creating visually appealing and dynamic web applications.'}
      </p>
      <div className='col-md-8 mx-auto'>
        <img
          src='https://i.ibb.co/hBFnvK0/moviesreact2.png'
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          className='rounded border border-dark rounded-4'
        />
      </div>
      <hr />
      <Back language={language} />
    </div>
  );
}
