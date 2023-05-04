import { ReactMoviesComp } from '../components/ReactMoviesComp';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';

const vitetask = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  useEffect(() => {
    setIsSpanish(localStorage.getItem('isSpanish') === 'true');
  }, []);

  return (
    <Layout language={isSpanish}>
      <ReactMoviesComp language={isSpanish} />
    </Layout>
  );
};

export default vitetask;
