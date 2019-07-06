var admin = require("firebase-admin");
var serviceAccount = require("./security/FireKeyWeriklandia");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://weriklandia-da5ab.firebaseio.com"
});

var registrationToken = "fu_ZmjkcvVM:APA91bEm6JRtJh7KsHPQfuaoi2RZ-jY4tmw4oDDRf2rCLyc_PMHO365QEREpPjJv3zUchOoap3QAve5F2ftWV6F8_FqxOoNcYlJoKxfBAc3BU6UeVc8ZJzn0dDrFCH2BZwZyr3u4zVOc";

var payload = {
    token: registrationToken,
    notification: {
      title: "FirebaseServer I",
      body: "Firebase is a great platform!",
    },
    android :{
      ttl: "86400s",
      notification: {
        click_action: "OPEN_ACTIVITY_1"
      }
    },
    apns: {
      payload: {
        aps: {
          alert: {
            subtitle: "Holy Fire!"
          },
          badge: 0,
          mutableContent: 1,
        },
      },
    },
    webpush: {
      headers: {
        Urgency: "high"
      }
    },
    data: {
      "otherData": "Extra demo data",
      "attachment-url":"https://imgur.com/a/TPD7VBP"
    }
};

admin.messaging().send(payload)
  .then(function(response) {
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });