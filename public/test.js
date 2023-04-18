let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frogger@scrimba.com",
    "03": "doti@scrimba.com",
    "04": "bill@scrimba.com",
    "05": "john@scrimba.com",
}
Object.values(scrimbaUsers).forEach(function(user) {
    const myUser = user;
    console.log(myUser);
    return myUser
});

let scrambaUserEmails = Object.values(scrimbaUsers);
console.log(scrambaUserEmails);

let scrambaUserNames = Object.keys(scrimbaUsers);
console.log(scrambaUserNames);

let scrambaUserEnteries = Object.entries(scrimbaUsers);
console.log(scrambaUserEnteries);



