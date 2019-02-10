var userName = prompt('Please, enter login', '');
if (userName === 'User' || userName === 'Admin') {
  var userPass = prompt('Please, enter password', '');
  if (userPass === 'UserPass' || userPass === 'RootPass') {
    var currentHours = new Date().getHours();
    if (currentHours < 20) {
      alert('Good day, dear ' + userName + '!');
    } else if (currentHours >= 20) {
      alert('Good evening, dear ' + userName + '!');
    }
  } else if (userPass === null || userPass === '') {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }
} else if (userName === null || userName === '') {
  alert('Canceled');
} else if (userName.length < 4) {
  alert("I don't know any users having name length less than 4 symbols");
} else {
  alert("I don't know you");
}