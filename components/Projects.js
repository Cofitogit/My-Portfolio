import { projects } from '../profile';
import Link from 'next/link';

export const Projects = ({language}) => (
  <>
    {projects.map(({ title, description, img, url }, i) => (
      <div className='col-md-4 p-2' key={i}>
        <Link href={url} className='text-decoration-none'>
          <div
            className='card h-100 bg-coffee text-light  rounded rounded-4'
            id='project'
          >
            <div className='overflow' style={{ height: '200px' }}>
              <img src={img} className='card-img-top' id='cardImg' />
            </div>
            <div className='card-body d-grid text-center'>
              <h3 className='fw-light text-light m-auto border-bottom border-light' style={{height: 'unset'}}>{title}</h3>
              <p className='card-text mt-2'>{language ? description[1] : description[0]}</p>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </>
);
