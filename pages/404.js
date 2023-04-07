import Layout from '../components/Layout';
import Link from 'next/link';

const error404 = () => (
  <Layout>
    <div className='card text-center col-md-4 mx-auto py-4 bg-secondary text-light'>
      <h1 className='fw-lighter'>Error 404</h1>
      <p>Ooops, page not found</p>
      <button className='btn btn-danger'>
        <Link href='/' className='nav-link text-light'>
          BACK
        </Link>
      </button>
    </div>
  </Layout>
);

export default error404;
