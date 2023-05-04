import { useEffect, useState } from 'react';
import { DjangoComp } from '../components/DjangoComp';
import Layout from '../components/Layout';

const djangotask = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  useEffect(() => {
    setIsSpanish(localStorage.getItem('isSpanish') === 'true');
  }, []);
  return (
    <Layout language={isSpanish}>
      <DjangoComp language={isSpanish} />
    </Layout>
  );
};

export default djangotask;
