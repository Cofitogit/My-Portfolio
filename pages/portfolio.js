import Layout from '../components/Layout';
import { Projects } from '../components/Projects';
import { Back } from '../components/Back';

const Portfolio = () => (
  <Layout>
    <div className='row'>
      <div className='col-md-12'>
        <div className='card card-body bg-dark'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='text-center text-light fw-lighter py-1'>
                Projets
              </h2>
            </div>

            <Projects />
          </div>
        </div>
      </div>
    </div>
    <Back />
  </Layout>
);

export default Portfolio;
