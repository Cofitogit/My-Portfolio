import { Experiences } from '../components/Experiences';
import Layout from '../components/Layout';
import Skills from '../components/Skills';
import { Projects } from '../components/Projects';
import { useState } from 'react';


const Index = () => {
  const [readMore, setReadMore] = useState(false);

  function handleReadMore() {
    setReadMore(!readMore);
  }

  return (
    <Layout>
      {/** header card */}
      <header className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-coffee text-light rounded rounded-4'>
            <div className='row'>
              <div className='col-md-4 d-grid align-items-center'>
                <img
                  src='https://i.ibb.co/SVsvN4b/profile.jpg'
                  alt=''
                  className='img-fluid p-4'
                  id='profileImg'
                />
              </div>
              <div className='col-md-8 p-4 d-grid' id='profileStats'>
                    <h1 className='fw-light'>Carlos Enrique Agüero</h1>
                    <h3 className='fw-lighter'>Front-end developer</h3>
                    <h3 className='fw-lighter text-success'>
                      {' '}
                      ReactJS | Vue.js | Node.js
                    </h3>
                <p>
                  I am a highly motivated developer with extensive experience in
                  working with reactive frontend frameworks such as ReactJS and
                  Vue.js. I am committed to adhering to best practices and
                  following documentation recommendations to ensure the creation
                  of clean, readable, and high-quality code I have a strong
                  ability to quickly learn and adapt to changing environments,
                  making me a versatile and adaptable developer.
                </p>
              </div>
              <div className='col-md-12 px-4 text-center'>
                <p>
                  One of my noteworthy projects is a real-time social media
                  application inspired by Instagram and Reddit, where I focus on
                  implementing a content sharing platform among users. I
                  utilized technologies such as Bootstrap 5, MySQL for the
                  database, and Express as the server for the REST API. I'm
                  currently working on features such as user registration,
                  login, creation and management of posts, comments, user
                  tracking, and content voting system.
                </p>
                <div
                  className={`readMoreContent ${readMore ? 'expanded' : ''}`}
                  style={{
                    maxHeight: readMore ? '1000px' : '0',
                  }} /* establecer la altura máxima en 0 o 1000px dependiendo del estado de readMore */
                >
                  <p>
                    In addition, I am currently working on finalizing a virtual
                    assistant using the OpenAI API, which allows users to
                    interact with an intelligent chatbot to get answers to
                    common questions, receive content recommendations, and get
                    help with application navigation.
                  </p>
                  <p>
                    In this project, I demonstrated skills in library and
                    framework integration, database management, state
                    manipulation, designing attractive and responsive user
                    interfaces, as well as implementing artificial intelligence
                    technologies to enhance the user experience. I also worked
                    closely with colleagues in development roles and received
                    constant support from them to ensure a high-quality outcome.
                  </p>
                  <p>
                    This project was initiated in April 2023, and I take pride
                    in creating a functional and scalable application that
                    delivers a unique social media experience to users.
                    Additionally, I have incorporated a virtual assistant based
                    on the OpenAI API to enhance the overall user experience. I
                    am enthusiastic about continuing to explore new technologies
                    and exciting challenges in web development and artificial
                    intelligence in my future projects!
                  </p>
                </div>
                <button className='btn text-success' onClick={handleReadMore}>
                  {readMore ? 'read less' : 'read more...'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/** Second section */}

      <div className='row py-2'>
        <div className='col-md-4'>
          <div className='card bg-coffee rounded rounded-4' style={{ height: '100%' }}>
            <div className='card-body text-center d-grid'>
              <h2
                className='bg-black rounded text-light fw-lighter py-2'
                style={{ height: 'fit-content' }}
              >
                Skills
              </h2>
              <Skills />
            </div>
          </div>
        </div>
        <div className='col-md-8'>
          <div className='card bg-coffee h-100 rounded rounded-4'>
            <div className='card-body'>
              <h2 className='text-center bg-black rounded text-light fw-lighter py-2'>
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
          <div className='card card-body bg-coffee rounded rounded-4'>
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
};

export default Index;
