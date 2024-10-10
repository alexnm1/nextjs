module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        async has(req, res) {
          // Captura o user-agent do cabeçalho da requisição
          const userAgent = req.headers['user-agent'] || '';
          
          // Loga o user-agent para inspecionar no terminal
          console.log('User-Agent:', userAgent);

          // Lógica de redirecionamento com base no user-agent
          if (/iPhone|iPad|Macintosh|Mac OS X/.test(userAgent)) {
            return {
              destination: 'https://apps.apple.com/br/app/sankhya-pessoas/id1317417474',
              permanent: false,
            };
          }

          return {
            destination: 'https://play.google.com/store/apps/details?id=br.com.sankhya.labs.rh&hl=pt_BR',
            permanent: false,
          };
        },
        permanent: false,
      },
    ];
  },
};
