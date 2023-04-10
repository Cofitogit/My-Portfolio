import { experiences } from '../profile';

export const Experiences = () => (
  <ul className='text-light py-3'>
    {experiences.map(({ title, description, from, to }, index) => (
      <li key={index}>
        <h3>{title}</h3>
        <div className='d-flex justify-content-start'>
          <h6 className='bg-light text-dark fw-bold px-1 rounded'>
          {from ? from : 'Finalizado'} - {from ? (to ? to : 'Actualidad') : ''}
          </h6>
        </div>
        <p className='text-light fw-lighter'>{description}</p>
        <hr />
      </li>
    ))}
  </ul>
);
