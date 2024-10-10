import { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const vendor = navigator.vendor;

      if (vendor.includes('Apple')) {
        // Se o vendor for Apple (Safari)
        window.location.href = 'https://apps.apple.com/br/app/sankhya-rh/id123456789';
      } else {
        // Se não for Apple, redireciona para Google Play
        window.location.href = 'https://play.google.com/store/apps/details?id=br.com.sankhya.labs.rh&hl=pt_BR';
      }
    }
  }, []);

  return (
    <div>
      <h1>Redirecionando...</h1>
    </div>
  );
};

export default Home;