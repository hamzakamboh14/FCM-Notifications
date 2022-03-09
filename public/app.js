

    var firebaseConfig = {
        apiKey: "AIzaSyBuPERg_3_O5diFPm1UGes7JFlA-j21oOc",
        authDomain: "push-notifications-e168e.firebaseapp.com",
        projectId: "push-notifications-e168e",
        storageBucket: "push-notifications-e168e.appspot.com",
        messagingSenderId: "78264488481",
        appId: "1:78264488481:web:57eb79ac1c2addee9a8960",
        measurementId: "G-T5WYN2QS7D"
    };
    

    
    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging()

    // messaging.onMessage((payload) => {
    //     console.log('Message received. ', payload);
    //     // ...
    //   });
      messaging.onBackgroundMessage((payload) => {
        console.log('[firebase-messaging-sw.js] Received background message ', payload);
        // Customize notification here
        const notificationTitle = 'Background Message Title';
        const notificationOptions = {
          body: 'Background Message body.',
          icon: '/firebase-logo.png'
        };
      
        self.registration.showNotification(notificationTitle,
          notificationOptions);
      });
      

    // messaging.requestPermission()
    // .then(function(){
    //     console.log('have permission')
    //     return messaging.getToken()
    // }).then(function(token){
    //     console.log(token)
    // })
    // .catch(function(err){
    //     console.log('error occured')
    // })
    // messaging.onMessage(function(payload){
    //     console.log('onMessage',payload)
    // })

    