self.addEventListener('fetch', function(event) {
  // TODO: only respond to requests with a
  // url ending in ".jpg"
  let url = event.request.url;
  let response = url.endsWith('.jpg');
  if (response)
  event.respondWith(
    fetch('/imgs/dr-evil.gif')
  );
});
