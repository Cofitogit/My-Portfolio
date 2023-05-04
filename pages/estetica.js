import { useEffect, useState } from 'react';
import { EsteticaComp } from '../components/EsteticaComp';
import Layout from '../components/Layout';

const estetica = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  useEffect(() => {
    setIsSpanish(localStorage.getItem('isSpanish') === 'true');
  }, []);
  return (
    <Layout language={isSpanish}>
      <EsteticaComp language={isSpanish} />
    </Layout>
  );
};

export default estetica;
