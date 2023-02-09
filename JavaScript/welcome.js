console.log("Welcome to JS session");

let user = {
    name:"",
    email_addr:"",
    login:"",
    phone_nr:""
}

user.name = "Javascript Object";
user.email_addr = "java@oracle.com";
user.login = user.email_addr;
user.phone_nr="1234567890";

console.log(user);

let varlogin = "login";
user[varlogin] = "whoknows@whocares.com"

console.log(user)

let varcontainsfunction = function() {
    let varinfunction = "I'm in a function";
    console.log("hi there!",varinfunction);
}

varcontainsfunction();
