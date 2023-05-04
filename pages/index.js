import { Experiences } from '../components/Experiences';
import Layout from '../components/Layout';
import Skills from '../components/Skills';
import { Projects } from '../components/Projects';
import { useEffect, useState } from 'react';

const Index = () => {
  const [isSpanish, setIsSpanish] = useState(false);


  function handleSpanish() {
    localStorage.setItem('isSpanish', !isSpanish)
    setIsSpanish(!isSpanish);
  }

  useEffect(() => {
    setIsSpanish(localStorage.getItem("isSpanish") === "true" ? true : false )
    if(localStorage.getItem("isSpanish") !== "true") {
    localStorage.setItem('isSpanish', isSpanish);
      return
    }
  }, []);

  return (
    <Layout language={isSpanish}>
      {/** header card */}
      <header className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-coffee text-light rounded rounded-4'>
            <div className='row'>
              <div className='col-md-4 d-grid align-items-center'>
                <img
                  src='https://i.ibb.co/MS3Bknm/profilenew.jpg'
                  alt=''
                  className='img-fluid p-4'
                  id='profileImg'
                />
              </div>
              <div className='col-md-8 p-4 d-grid' id='profileStats'>
                <div
                  className='position-absolute'
                  style={{ top: '15px', right: '10px' }}
                >
                  <button
                    className='btn btn-light rounded'
                    onClick={handleSpanish}
                  >
                    {isSpanish ? 'Es' : 'En'}
                  </button>
                </div>
                <h1 className='fw-light'>Carlos Enrique Agüero</h1>
                <h3 className='fw-lighter'>Front-end developer</h3>
                <h3 className='fw-lighter text-success'>
                  {' '}
                  ReactJS | Vue.js | Ionic
                </h3>
                <p>
                  {isSpanish
                    ? 'Soy un desarrollador altamente motivado con amplia experiencia en trabajar con frameworks reactivos de frontend como ReactJS y Vue.js. Estoy comprometido a adherirme a las mejores prácticas y seguir las recomendaciones de la documentación para garantizar la creación de un código limpio, legible y de alta calidad. Tengo una gran capacidad para aprender y adaptarme rápidamente a entornos cambiantes, lo que me convierte en un desarrollador versátil y adaptable.'
                    : 'I am a highly motivated developer with extensive experience in working with reactive frontend frameworks such as ReactJS and Vue.js. I am committed to adhering to best practices and following documentation recommendations to ensure the creation of clean, readable, and high-quality code. I have a strong ability to quickly learn and adapt to changing environments, making me a versatile and adaptable developer.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/** Second section */}

      <div className='row py-2'>
        <div className='col-md-4'>
          <div
            className='card bg-coffee rounded rounded-4'
            style={{ height: '100%' }}
          >
            <div className='card-body text-center d-grid'>
              <h2
                className='bg-black rounded text-light fw-lighter py-2'
                style={{ height: 'fit-content' }}
              >
                {isSpanish ? 'Habilidades' : 'Skills'}
              </h2>
              <Skills language={isSpanish} />
            </div>
          </div>
        </div>
        <div className='col-md-8'>
          <div className='card bg-coffee h-100 rounded rounded-4'>
            <div className='card-body'>
              <h2 className='text-center bg-black rounded text-light fw-lighter py-2'>
                {isSpanish ? 'Experiencia' : 'Experience'}
              </h2>

              <Experiences language={isSpanish} />
            </div>
          </div>
        </div>
      </div>

      {/** Portfolio */}

      <div className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-coffee rounded rounded-4'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className='text-center text-light fw-lighter py-1'>
                  Portfolio
                </h2>
              </div>

              <Projects language={isSpanish} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
