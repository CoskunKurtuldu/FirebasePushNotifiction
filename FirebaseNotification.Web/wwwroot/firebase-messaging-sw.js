importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    'messagingSenderId': '324534114351'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	let obj = jQuery.parseJSON(payload.data.notification);
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = obj.title;
  const notificationOptions = {
    body: obj.body,
    icon: obj.icon,
  };
console.log(obj.icon)
  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
