function formatTime(minutes) {
  minutes = Number(minutes);
  var d = Math.floor(minutes / (60 * 24));
  var h = Math.floor(minutes % (60 * 24) / 60);
  var m = Math.floor(minutes % 60);
  return (d + " day(s) " + h + " hour(s) " + m + " minute(s)");
}

formatTime(120); 
formatTime(59); 
formatTime(3601); 