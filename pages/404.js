import Link from 'next/link';
import { useEffect, useState } from 'react';

const error404 = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  useEffect(() => {
    setIsSpanish(localStorage.getItem('isSpanish') === 'true');
  }, []);
  return (
    <div className='card-body mx-auto bg-coffee text-center col-md-4 mx-auto py-4 rounded rounded-4 text-light position-fixed' style={{top: "300px", left: '50%', transform: "translateX(-50%)"}}>
      <h1 className='fw-lighter'>Error 404</h1>
      <p>{isSpanish ? 'Oops, pagina no encontrada' : 'Oops, page not found'}</p>
      <button className='btn btn-danger rounded'>
        <Link href='/' className='nav-link text-light'>
          {isSpanish ? 'VOLVER' : 'BACK'}
        </Link>
      </button>
    </div>
)};

export default error404;
