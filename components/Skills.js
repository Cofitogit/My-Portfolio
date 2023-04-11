import { useState } from 'react';
import { skills } from '../profile';

export default function Skills() {
  const [aboutBack, setAboutBack] = useState(true);

  function handleAboutBack() {
    setAboutBack(!aboutBack);
  }

  return (
    <>
      <div
        style={{
          opacity: aboutBack ? '1' : '0.3',
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        {skills.map(({ skill, percentage }, i) => (
          <div className='px-4 text-light d-grid py-4 gap-3' key={i}>
            <h5 className='fw-light'>{skill}</h5>
            <div className='progress'>
              <div
                className='progress-bar bg-success'
                role='progressbar'
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div id='aboutBack'>
        <p
          className='text-center text-light align-self-center bg-black'
          style={{
            opacity: aboutBack ? '0' : '1',
            top: aboutBack ? '1000px' : '85px',
            transition: 'top 0.3s ease-in-out',
          }}
          id='aboutText'
        >
          I have experience in handling API testing and data persistence using
          technologies such as MySQL/MSSQL and the Django ORM. I also have
          skills in Node.js and Express for web application development. I am
          passionate about designing and implementing efficient and scalable
          solutions, utilizing best development practices and always seeking
          performance optimization. I am committed to continuous improvement and
          constant updating of my skills in the field of backend development.
        </p>
      </div>
      <button className='btn btn-outline-light mb-3 align-self-end w-75 position-relative rounded' style={{left: "50%", transform: "translateX(-50%)"}} onClick={handleAboutBack}>
        {aboutBack ? 'about backend' : 'hide'}
      </button>
    </>
  );
}
