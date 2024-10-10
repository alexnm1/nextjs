const isIOS = () => {
  // Função simples para detectar iOS (pode ser mais robusta em cenários reais)
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: isIOS()
          ? 'https://apps.apple.com/br/app/seu-app/id123456789' // Substitua por seu ID da App Store
          : 'https://play.google.com/store/apps/details?id=br.com.sankhya.labs.rh&hl=pt_BR',
        permanent: true,
      },
    ];
  },
};