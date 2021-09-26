const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  console.log("working on the registration");
  console.log(isLocalhost);

  // if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  //     const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
  //     if (publicUrl.origin !== window.location.origin) {
  //         console.log('it worked');
  //         return;
  //     } else {
  //         console.log('working on it');
  //     }
  //
  //     window.addEventListener('load', () => {
  //         const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  //         console.log(swUrl);
  //     })
  // }
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
