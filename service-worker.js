self.addEventListener("install", () => {
  console.log("Rainbow Balloons PWA installed");
});

self.addEventListener("fetch", event => {
  return fetch(event.request);
});
