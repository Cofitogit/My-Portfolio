import { useEffect, useState } from 'react';
import { EldeleitComp } from '../components/EldeleitComp';
import Layout from '../components/Layout';

const eldeleit = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  useEffect(() => {
    setIsSpanish(localStorage.getItem('isSpanish') === 'true');
  }, []);
  return (
    <Layout language={isSpanish}>
      <EldeleitComp language={isSpanish} />
    </Layout>
  );
};

export default eldeleit;
