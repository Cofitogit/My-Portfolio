import Layout from '../components/Layout';
import { Projects } from '../components/Projects';
import { Back } from '../components/Back';
import { useEffect, useState } from 'react';

const portfolio = () => {

  const [isSpanish, setIsSpanish] = useState(false)
  
  useEffect(() => {
    setIsSpanish(localStorage.getItem('isSpanish') === 'true')
  }, [])
  

  return (
    <Layout language={isSpanish}>
      <div className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-coffee'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className='text-center text-light fw-lighter py-1'>
                  {isSpanish ? 'Proyectos' : 'Projects'}
                </h2>
              </div>

              <Projects language={isSpanish} />
            </div>
          </div>
        </div>
      </div>
      <Back />
    </Layout>
  );
};

export default portfolio;
