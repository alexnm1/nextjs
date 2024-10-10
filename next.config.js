module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        has: [
          {
            type: 'header',
            key: 'user-agent',
            value: '(iPhone|iPad|Mac OS X)', // Regex para detectar iOS
          },
        ],
        destination: 'https://apps.apple.com/br/app/sankhya-pessoas/id1317417474',
        permanent: true,
      },
      {
        source: '/',
        destination: 'https://play.google.com/store/apps/details?id=br.com.sankhya.labs.rh&hl=pt_BR',
        permanent: true,
      },
    ];
  },
};