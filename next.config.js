module.exports = {
  async middleware(req, res) {
    const userAgent = req.headers['user-agent'] || '';
    console.log('User-Agent:', userAgent); // Loga o user-agent no terminal

    // Condições para redirecionamento
    if (/iPhone|iPad|Mac OS X/.test(userAgent)) {
      return res.writeHead(302, { Location: 'https://apps.apple.com/br/app/sankhya-pessoas/id1317417474' }).end();
    }

    return res.writeHead(302, { Location: 'https://play.google.com/store/apps/details?id=br.com.sankhya.labs.rh&hl=pt_BR' }).end();
  },

  async redirects() {
    return [];
  },
};