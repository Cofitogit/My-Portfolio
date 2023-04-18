import Link from 'next/link';
import { portfolio } from '../profile';

export function EsteticaComp() {
  const descriptionEn = portfolio.estetica.description.en;

  return (
    <div
      className='d-grid justify-content-center p-3 rounded rounded-4 bg-black bg-opacity-75'
      id='mainPage'
    >
      <div className='mx-3'>
        <h1 className='fw-light text-success text-center bg-black bg-opacity-50 p-3 rounded rounded-4'>
          A.M Estética android app | Ionic, Angular, TypeScript, SASS, MySQL
        </h1>
      </div>
      <hr />

      {Object.entries(descriptionEn).map(([key, value]) => (
        <div key={key}>
          <p className='text-center text-light my-3 card bg-coffee p-2 rounded col-md-10 mx-auto'>
            {value}
          </p>
          <hr />
        </div>
      ))}

      <hr />
      <div
        className='col-md-4 mx-auto border border-dark rounded-4 rounded d-flex justify-content-center'
        style={{ overflow: 'hidden' }}
      >
        <video controls style={{ objectFit: 'fill', maxHeight: "600px" }}>
          <source
            src='https://cofitogit.github.io/carlosaguero/videos/cosmetica.mp4'
            type='video/mp4'
          />
          {/* Puedes agregar más formatos de video aquí, como .webm o .ogg */}
          Tu navegador no admite la reproducción de videos.
        </video>
      </div>
      <hr />
      <button className='btn btn-dark w-50 mt-3 mx-auto rounded'>
        <Link
          href='https://github.com/Cofitogit/angular-estetic-app'
          className='nav-link text-light fw-bolder'
        >
          GitHub Pages
        </Link>
      </button>
    </div>
  );
}
