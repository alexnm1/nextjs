import { useRouter } from 'next/router';
import { useEffect } from 'react';

const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const destination = isIOS()
      ? 'https://apps.apple.com/br/app/seu-app/id123456789'
      : 'https://play.google.com/store/apps/details?id=br.com.sankhya.labs.rh&hl=pt_BR';

    router.push(destination, undefined, { shallow: true });
  }, []);

  return null; // Não renderizar nada, apenas o redirecionamento
}