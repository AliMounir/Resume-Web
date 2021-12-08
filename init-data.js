
var jcontent =  {
  "name"        : "john",
  "job"         : "stribber",
  "address"     : "paris",
  "birthdate"   : "Apr 20 1969",
  "email"       : "xxx@hotmail.com",
  "phone"       : "011",
  "insta"       : "@ari",
  "github"      : "git/ali"
};

var newName = document.getElementById('name');
newName.innerHTML = "&nbsp;" + jcontent.name + "&nbsp;";

var newJob = document.getElementById('job');
newJob.innerHTML = jcontent.job;

var newAddress = document.getElementById('address');
newAddress.innerHTML = jcontent.address;

var newBirthdate = document.getElementById('birthdate');
newBirthdate.innerHTML = jcontent.birthdate;

var newEmail = document.getElementById('email');
newEmail.innerHTML = jcontent.email;

var newPhone = document.getElementById('phone');
newPhone.innerHTML = jcontent.phone;

var newInsta = document.getElementById('insta');
newInsta.innerHTML = jcontent.insta;

var newGithub = document.getElementById('github');
newGithub.innerHTML = jcontent.github;