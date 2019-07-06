var admin = require("firebase-admin");
var serviceAccount = require("./security/FireKeyWeriklandia");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://weriklandia-da5ab.firebaseio.com"
});

var topic = "WeriklandiaNews";

var payload = {
    notification: {
        title: "FirebaseServer II",
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


admin.messaging().sendToTopic(topic, payload)
.then(function(response) {
    console.log("Successfully sent message by topic:", response);
})
.catch(function(error) {
    console.log("Error sending message:", error);
});