import { Experiences } from '../components/Experiences';
import Layout from '../components/Layout';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';

const Index = () => (
  <Layout>
    {/** header card */}
    <header className='row'>
      <div className='col-md-12'>
        <div className='card card-body bg-secondary text-light'>
          <div className='row'>
            <div className='col-md-4 d-grid align-items-center'>
              <hr />
              <img src='https://i.ibb.co/SVsvN4b/profile.jpg' alt='' className='img-fluid p-4' />
              <hr />
            </div>
            <div className='col-md-8 p-4 justify-content- d-grid'>
              <h1 className='fw-light'>Carlos Enrique Agüero</h1>
              <h3 className='fw-lighter'>Front-end developer</h3>
              <h3 className='fw-lighter text-success'> ReactJS | Vue.js | node</h3>
              <p className='align-self-end'>
                I am a frontend developer passionate about technology and web
                design. I have advanced skills in React JS, and I enjoy working
                in teams and learning from my colleagues. I am a proactive,
                responsible, and committed person to the projects I am involved
                in. Currently, I am looking for my first job challenge to keep
                growing and contribute with my experience in developing web
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** Second section */}

    <div className='row py-2'>
      <div className='col-md-4'>
        <div className='card bg-success h-100'>
          <div className='card-body text-center'>
            <h2 className='bg-dark rounded text-light fw-lighter py-2'>
              Skills
            </h2>

            <Skills />
          </div>
        </div>
      </div>
      <div className='col-md-8'>
        <div className='card bg-success h-100'>
          <div className='card-body'>
            <h2 className='text-center bg-dark rounded text-light fw-lighter py-2'>
              Info
            </h2>

            <Experiences />
          </div>
        </div>
      </div>
    </div>

    {/** Portfolio */}

    <div className='row'>
      <div className='col-md-12'>
        <div className='card card-body bg-dark'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='text-center text-light fw-lighter py-1'>
                Portfolio
              </h2>
            </div>

            <Projects />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
