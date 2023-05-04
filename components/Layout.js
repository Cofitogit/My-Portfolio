import { useEffect } from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/router';

const Layout = ({ children, language }) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => console.log(url));
  }, []);

  return (
    <>
      <Navbar language={language} />

      <main className='container py-4'>{children}</main>

      <footer className='bg-coffee text-light text-center'>
        <div className='container py-3'>
          <h3 className='fw-lighter'>&copy; cofitodev Portfolio</h3>
          <p>2022 - {new Date().getFullYear()}</p>
          <p>All rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
