function toPretty(seconds) {
    if (seconds <= 60) {
      if (seconds === 0) {
        return "just now";
      } else if (seconds === 1) {
        return "1 second ago";
      } else if (seconds < 60) {
        return seconds + " seconds ago";
      } else if (seconds === 60) {
        return "1 minute ago";
      }
    } else {
      let divisors = [60, 3600, 86400, 604800];
      let time = 0;
      let timeDivider = null;
  
      for (let i = 0; i < divisors.length; i++) {
        if (
          (seconds >= divisors[i] && seconds < divisors[i + 1]) ||
          divisors[i] === 604800
        ) {
          time = Math.floor(seconds / divisors[i]);
          timeDivider = divisors[i];
          break;
        }
      }
  
      if (timeDivider === 60) {
        return time + " minutes ago";
      } else if (timeDivider === 3600 && time === 1) {
        return time + " hour ago";
      } else if (timeDivider === 3600 && time > 1) {
        return time + " hours ago";
      } else if (timeDivider === 86400 && time === 1) {
        return time + " day ago";
      } else if (timeDivider === 86400 && time > 1) {
        return time + " days ago";
      } else if (timeDivider === 604800 && time === 1) {
        return time + " week ago";
      } else if (timeDivider === 604800 && time > 1) {
        return time + " weeks ago";
      }
    }
  }