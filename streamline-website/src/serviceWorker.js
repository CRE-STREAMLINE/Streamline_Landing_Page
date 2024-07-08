// This optional code is used to register a service worker.
// register() is not called by default.

// To learn more about the benefits of this model and instructions on how to opt-in, read https://bit.ly/CRA-PWA

export function register(config) {
  // This function is intentionally left blank to disable the service worker.
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}
