import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    const isIOS = () => {
      // ... mesma função isIOS() de antes
    };

    const destination = isIOS()
      ? 'https://apps.apple.com/br/app/seu-app/id123456789'
      : 'https://play.google.com/store/apps/details?id=br.com.sankhya.labs.rh&hl=pt_BR';

    router.push(destination, undefined, { shallow: true });
  };

  // Chamar handleRedirect() ao carregar a página
  useEffect(() => {
    handleRedirect();
  }, []);

  return null; // Não renderizar nada, apenas o redirecionamento
}