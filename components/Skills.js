import { useState } from 'react';
import { skills } from '../profile';

export default function Skills() {
  const [specialty, setSpecialty] = useState('frontend');
  const specialties = {
    frontend: 'Front-end',
    backend: 'Back-end',
    database: 'Databases',
    other: 'Others'
  }
  const nextSpecialties = {
    frontend: 'Back-end',
    backend: 'Databases',
    database: 'Others',
    other: 'Front-end'
  }

  function handleClick(e) {
    switch (e.target.value) {
      case 'frontend':
        setSpecialty('backend');
        break;
      case 'backend':
        setSpecialty('database');
        break;
      case 'database':
        setSpecialty('other');
        break;
      case 'other':
        setSpecialty('frontend');
        break;
    }
  }

  return (
    <>
      <div>
        <div className='px-4 text-light d-grid py-4 gap-3'>
          <h5 className='fw-light p-2 bg-light text-black'>{specialties[specialty]}</h5>
          {skills[0][specialty].map((value) => (
            <h6 key={value}>{value}</h6>
          ))}
        </div>
      </div>
      <button
        value={specialty}
        className='btn btn-outline-light mb-3 align-self-end w-75 position-relative rounded'
        style={{ left: '50%', transform: 'translateX(-50%)' }}
        onClick={handleClick}
      >
        {nextSpecialties[specialty]}
      </button>
    </>
  );
}
