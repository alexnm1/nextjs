useEffect(() => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    window.location.href = "https://apps.apple.com/br/app/sankhya-pessoas/id1317417474";
  } else if (/Android/i.test(userAgent)) {
    window.location.href = "https://play.google.com/store/apps/details?id=br.com.sankhya.labs.rh&hl=pt_BR";
  }
}, []);