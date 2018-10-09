if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function reg () {
      console.log(`Service Worker registration succeeded: ${reg.scope}`);
    })
    .catch(function (error) {
      console.log(error);
    });
}
