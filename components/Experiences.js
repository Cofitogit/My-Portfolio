import { experiences } from '../profile';

export const Experiences = () => (
  <ul className='text-light py-3'>
    {experiences.map(({ title, description, from, to }, index) => (
      <li key={index}>
        <h3  className='fw-light'>{title}</h3>
        <h5>
          {from ? from : 'Finalizado'} - {from ? (to ? to : 'Actualidad') : ''}
        </h5>
        <p>{description}</p>
        <hr className='py-3'/>
      </li>
    ))}
  </ul>
);
