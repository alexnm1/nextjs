import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Verifique as condições para o redirecionamento
    const shouldRedirect = true; // Sua lógica aqui

    if (shouldRedirect) {
      // Redirecionar para uma página específica
      router.push('/nova-pagina');
    }
  }, [router]);

  return (
    <div>
      <h1>Redirecionando...</h1>
    </div>
  );
};

export default Page;