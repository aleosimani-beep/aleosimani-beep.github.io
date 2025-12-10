importScripts("https://www.gstatic.com/firebasejs/11.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDfCeqv8Nls3NIog-oRCfFFb7_AnUn9TQE",
  authDomain: "acomoda-app2.firebaseapp.com",
  projectId: "acomoda-app2",
  storageBucket: "acomoda-app2.firebasestorage.app",
  messagingSenderId: "453109433788",
  appId: "1:453109433788:web:c41f4b5eedde59f63757b9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("[firebase-messaging-sw.js] Mensaje en segundo plano:", payload);

  const notificationTitle = payload.notification?.title || "Acomoda App";
  const notificationOptions = {
    body: payload.notification?.body || "Tienes una notificación.",
    icon: "/icon-192.png" // si no tenés ícono, podés borrarla
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
