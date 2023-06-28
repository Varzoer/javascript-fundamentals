function greeting(username) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greetingMessage;

  if (currentHour < 12) {
    greetingMessage = "Good morning, " + username + "!";
  } else if (currentHour < 18) {
    greetingMessage = "Good day, " + username + "!";
  } else if (currentHour < 23) {
    greetingMessage = "Good afternoon, " + username + "!";
  } else if (currentHour < 6) {
    greetingMessage = "Good night, " + username + "!";
  }

  return greetingMessage;
}

module.exports = {
  greeting: greeting,
};
