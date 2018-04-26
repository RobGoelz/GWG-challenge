/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
    name: "Rob Goelz",
    friends: 108,
    messages: ["So long", "Farewell", "auf Wiedersehen", "adieu"],

    postMessage: function post(message) {
        facebookProfile.messages.push(message);
        return facebookProfile.messages;
    },
    deleteMessage: function del(index) {
        facebookProfile.messages.splice(index,1);
        return facebookProfile.messages;
    },
    addFriend: function(){
        facebookProfile.friends++;
        return facebookProfile.friends;
    },
    removeFriend: function(){
        facebookProfile.friends--;
        return facebookProfile.friends;
    },
}
