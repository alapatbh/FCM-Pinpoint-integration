importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyCq0Ksw6cSBw6nOLEfrFVjlKWRdPy_s3FM",
    authDomain: "fcm-pp.firebaseapp.com",
    databaseURL: "https://fcm-pp.firebaseio.com",
    projectId: "fcm-pp",
    storageBucket: "fcm-pp.appspot.com",
    messagingSenderId: "266609921915",
    appId: "1:266609921915:web:3ea5d7fb56c45c918fb7de",
    measurementId: "G-ZNPLCSKBKC"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END on_background_message]
