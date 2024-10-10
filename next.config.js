module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'header',
            key: 'user-agent',
            value: '.*Safari.*(Macintosh|iPhone|iPad).*', // Exclui Chrome (CriOS) no iOS e foca apenas no Safari
          }
        ],
        destination: 'https://apps.apple.com/br/app/sankhya-rh/id123456789', // Link para Apple Store
        permanent: true,
      },
      {
        source: '/',
        destination: 'https://play.google.com/store/apps/details?id=br.com.sankhya.labs.rh&hl=pt_BR', // Link para Google Play
        permanent: true,
      },
    ];
  },
};