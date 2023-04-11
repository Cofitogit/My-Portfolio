import { projects } from '../profile';
import Link from 'next/link';

export const Projects = () => (
  <>
    {projects.map(({ title, description, img, url}, i) => (
      <div className='col-md-4 p-2' key={i}>
        <div className='card h-100 bg-coffee text-light  rounded-bottom' id='project'>
          <div className='overflow' style={{height: '250px'}}>
            <img src={img} className='card-img-top' id='cardImg'/>
          </div>
          <div className='card-body d-grid text-center'>
            <h3 className='fw-light text-light'>{title}</h3>
            <p>{description}</p>
            <Link href={url} className='btn btn-light mx-auto align-self-end '  style={{height: '35px'}} id="clickMe">
              click me
            </Link>
          </div>
        </div>
      </div>
    ))}
  </>
);
