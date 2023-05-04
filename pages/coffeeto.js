import { useEffect, useState } from 'react';
import { CoffeetoComp } from '../components/CoffeetoComp';
import Layout from '../components/Layout';

const eldeleit = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  useEffect(() => {
    setIsSpanish(localStorage.getItem('isSpanish') === 'true');
  }, []);

  return (
    <Layout language={isSpanish}>
      <CoffeetoComp language={isSpanish} />
    </Layout>
  );
};

export default eldeleit;
