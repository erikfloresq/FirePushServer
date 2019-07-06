var admin = require("firebase-admin");
var serviceAccount = require("./security/FireKeyWeriklandia");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://weriklandia-da5ab.firebaseio.com"
});

var registrationToken = "fu_ZmjkcvVM:APA91bEm6JRtJh7KsHPQfuaoi2RZ-jY4tmw4oDDRf2rCLyc_PMHO365QEREpPjJv3zUchOoap3QAve5F2ftWV6F8_FqxOoNcYlJoKxfBAc3BU6UeVc8ZJzn0dDrFCH2BZwZyr3u4zVOc";

var payload = {
    notification: {
        title: "FirebaseServer III",
        subtitle: "Holy Fire!",
        body: "Firebase is a great platform!",
        content_available: "true",
        mutable_content: "true",
        priority :"high",
        click_action: "NEWS"
      },
      data: {
        "otherData": "Extra demo data",
        "attachment-url":"https://imgur.com/a/TPD7VBP"
      }
};

if (process.env.TOKEN) {
    admin.messaging().sendToDevice(process.env.TOKEN, payload)
    .then(function(response) {
      console.log("Successfully sent message by token:", response);
    })
    .catch(function(error) {
      console.log("Error sending message:", error);
    });

}

if (process.env.TOPIC) {
    admin.messaging().sendToTopic(process.env.TOPIC, payload)
    .then(function(response) {
      console.log("Successfully sent message by topic:", response);
    })
    .catch(function(error) {
      console.log("Error sending message:", error);
    });
}