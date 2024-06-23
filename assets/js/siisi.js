/*!
=========================================================
* Ivan Siisi Tawiah's Portfolio
=========================================================

=========================================================

*/

// Upvote & Downvote 9

function disableAndHideu9() {
    var upvoteElementu9 = document.getElementById('upvote8');
    var downvoteElementu9 = document.getElementById('downvote8')

    // Disable click functionality
    upvoteElementu9.style.pointerEvents = 'none';
    downvoteElementu9.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementu9.style.display = 'none';
    downvoteElementu9.style.display = 'none';
  }

  function disableAndHided9() {
    var upvoteElementd9 = document.getElementById('upvote9');
    var downvoteElementd9 = document.getElementById('downvote9')

    // Disable click functionality
    upvoteElementd9.style.pointerEvents = 'none';
    downvoteElementd9.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementd9.style.display = 'none';
    downvoteElementd9.style.display = 'none';
  }





document.getElementById('upvote9').addEventListener('click', function() {
    var progressBaru9 = document.getElementById('progBar9');
    var currentWidthu9 = parseInt(progressBaru9.style.width);
    var newWidthu9 = currentWidthu9 + 5; // Increase by 10%
    
    if (newWidthu9 > 100) {
      newWidthu9 = 100; // Cap at 100%
    }

    progressBaru9.style.width = newWidthu9 + '%';
    progressBaru9.setAttribute('aria-valuenow', newWidthu9);


  });

  document.getElementById('downvote9').addEventListener('click', function() {
      var progressBard9 = document.getElementById('progBar9');
      var currentWidthd9 = parseInt(progressBard9.style.width);
      var newWidthd9 = currentWidthd9 - 3; // Decrease by 10%

      if (newWidthd9 < 0) {
          newWidthd9 = 0; // Cap at 0%
      }

      progressBard9.style.width = newWidthd9 + '%';
      progressBard9.setAttribute('aria-valuenow', newWidthd9);
  });
  

 
  var upvoteElementu9 = document.getElementById('upvote9');
var defaultColoru9 = window.getComputedStyle(upvoteElementu9).color; // Get default color in RGB format

function toggleColoru9(color) {
var currentColoru9 = upvoteElementu9.style.color;

// Convert hex color to RGB
var hexToRgbu9 = function(hex) {
var ru9 = parseInt(hex.substring(1, 3), 16);
var gu9 = parseInt(hex.substring(3, 5), 16);
var bu9 = parseInt(hex.substring(5, 7), 16);
return `rgb(${ru9}, ${gu9}, ${bu9})`;
};

var targetColoru9 = hexToRgbu9(color);

// Toggle color
if (currentColoru9 === 'rgb(0, 0, 0)' || currentColoru9 === '') {
upvoteElementu9.style.color = targetColoru9;
upvoteElementu9.style.fontSize = 20; // Set specified color
} else {
upvoteElementu9.style.color = defaultColoru9; // Set default color
}
}

var downvoteElementd9 = document.getElementById('downvote9');
var defaultColord9 = window.getComputedStyle(downvoteElementd9).color; // Get default color in RGB format

function toggleColord9(color) {
var currentColord9 = downvoteElementd9.style.color;

// Convert hex color to RGB
var hexToRgbd9 = function(hex) {
var rd9 = parseInt(hex.substring(1, 3), 16);
var gd9 = parseInt(hex.substring(3, 5), 16);
var bd9 = parseInt(hex.substring(5, 7), 16);
return `rgb(${rd9}, ${gd9}, ${bd9})`;
};

var targetColord9 = hexToRgbd9(color);

// Toggle color
if (currentColord9 === 'rgb(0, 0, 0)' || currentColord9 === '') {
downvoteElementd9.style.color = targetColord9; // Set specified color
} else {
downvoteElementd9.style.color = defaultColord9; // Set default color
}
}













//Upvote & Downvote 8

function disableAndHideu8() {
    var upvoteElementu8 = document.getElementById('upvote8');
    var downvoteElementu8 = document.getElementById('downvote8')

    // Disable click functionality
    upvoteElementu8.style.pointerEvents = 'none';
    downvoteElementu8.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementu8.style.display = 'none';
    downvoteElementu8.style.display = 'none';
  }

  function disableAndHided8() {
    var upvoteElementd8 = document.getElementById('upvote8');
    var downvoteElementd8 = document.getElementById('downvote8')

    // Disable click functionality
    upvoteElementd8.style.pointerEvents = 'none';
    downvoteElementd8.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementd8.style.display = 'none';
    downvoteElementd8.style.display = 'none';
  }





document.getElementById('upvote8').addEventListener('click', function() {
    var progressBaru8 = document.getElementById('progBar8');
    var currentWidthu8 = parseInt(progressBaru8.style.width);
    var newWidthu8 = currentWidthu8 + 5; // Increase by 10%
    
    if (newWidthu8 > 100) {
      newWidthu8 = 100; // Cap at 100%
    }

    progressBaru8.style.width = newWidthu8 + '%';
    progressBaru8.setAttribute('aria-valuenow', newWidthu8);


  });

  document.getElementById('downvote8').addEventListener('click', function() {
      var progressBard8 = document.getElementById('progBar8');
      var currentWidthd8 = parseInt(progressBard8.style.width);
      var newWidthd8 = currentWidthd8 - 3; // Decrease by 10%

      if (newWidthd8 < 0) {
          newWidthd8 = 0; // Cap at 0%
      }

      progressBard8.style.width = newWidthd8 + '%';
      progressBard8.setAttribute('aria-valuenow', newWidthd8);
  });
  

 
  var upvoteElementu8 = document.getElementById('upvote8');
var defaultColoru8 = window.getComputedStyle(upvoteElementu8).color; // Get default color in RGB format

function toggleColoru8(color) {
var currentColoru8 = upvoteElementu8.style.color;

// Convert hex color to RGB
var hexToRgbu8 = function(hex) {
var ru8 = parseInt(hex.substring(1, 3), 16);
var gu8 = parseInt(hex.substring(3, 5), 16);
var bu8 = parseInt(hex.substring(5, 7), 16);
return `rgb(${ru8}, ${gu8}, ${bu8})`;
};

var targetColoru8 = hexToRgbu8(color);

// Toggle color
if (currentColoru8 === 'rgb(0, 0, 0)' || currentColoru8 === '') {
upvoteElementu8.style.color = targetColoru8;
upvoteElementu8.style.fontSize = 20; // Set specified color
} else {
upvoteElementu8.style.color = defaultColoru8; // Set default color
}
}

var downvoteElementd8 = document.getElementById('downvote8');
var defaultColord8 = window.getComputedStyle(downvoteElementd8).color; // Get default color in RGB format

function toggleColord8(color) {
var currentColord8 = downvoteElementd8.style.color;

// Convert hex color to RGB
var hexToRgbd8 = function(hex) {
var rd8 = parseInt(hex.substring(1, 3), 16);
var gd8 = parseInt(hex.substring(3, 5), 16);
var bd8 = parseInt(hex.substring(5, 7), 16);
return `rgb(${rd8}, ${gd8}, ${bd8})`;
};

var targetColord8 = hexToRgbd8(color);

// Toggle color
if (currentColord8 === 'rgb(0, 0, 0)' || currentColord8 === '') {
downvoteElementd8.style.color = targetColord8; // Set specified color
} else {
downvoteElementd8.style.color = defaultColord8; // Set default color
}
}







// Upvote & Downvote 7

function disableAndHideu7() {
    var upvoteElementu7 = document.getElementById('upvote7');
    var downvoteElementu7 = document.getElementById('downvote7')

    // Disable click functionality
    upvoteElementu7.style.pointerEvents = 'none';
    downvoteElementu7.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementu7.style.display = 'none';
    downvoteElementu7.style.display = 'none';
  }

  function disableAndHided7() {
    var upvoteElementd7 = document.getElementById('upvote7');
    var downvoteElementd7 = document.getElementById('downvote7')

    // Disable click functionality
    upvoteElementd7.style.pointerEvents = 'none';
    downvoteElementd7.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementd7.style.display = 'none';
    downvoteElementd7.style.display = 'none';
  }





document.getElementById('upvote7').addEventListener('click', function() {
    var progressBaru7 = document.getElementById('progBar7');
    var currentWidthu7 = parseInt(progressBaru7.style.width);
    var newWidthu7 = currentWidthu7 + 5; // Increase by 10%
    
    if (newWidthu7 > 100) {
      newWidthu7 = 100; // Cap at 100%
    }

    progressBaru7.style.width = newWidthu7 + '%';
    progressBaru7.setAttribute('aria-valuenow', newWidthu7);


  });

  document.getElementById('downvote7').addEventListener('click', function() {
      var progressBard7 = document.getElementById('progBar7');
      var currentWidthd7 = parseInt(progressBard7.style.width);
      var newWidthd7 = currentWidthd7 - 3; // Decrease by 10%

      if (newWidthd7 < 0) {
          newWidthd7 = 0; // Cap at 0%
      }

      progressBard7.style.width = newWidthd7 + '%';
      progressBard7.setAttribute('aria-valuenow', newWidthd7);
  });
  

 
  var upvoteElementu7 = document.getElementById('upvote7');
var defaultColoru7 = window.getComputedStyle(upvoteElementu7).color; // Get default color in RGB format

function toggleColoru7(color) {
var currentColoru7 = upvoteElementu7.style.color;

// Convert hex color to RGB
var hexToRgbu7 = function(hex) {
var ru7 = parseInt(hex.substring(1, 3), 16);
var gu7 = parseInt(hex.substring(3, 5), 16);
var bu7 = parseInt(hex.substring(5, 7), 16);
return `rgb(${ru7}, ${gu7}, ${bu7})`;
};

var targetColoru7 = hexToRgbu7(color);

// Toggle color
if (currentColoru7 === 'rgb(0, 0, 0)' || currentColoru7 === '') {
upvoteElementu7.style.color = targetColoru7;
upvoteElementu7.style.fontSize = 20; // Set specified color
} else {
upvoteElementu7.style.color = defaultColoru7; // Set default color
}
}

var downvoteElementd7 = document.getElementById('downvote7');
var defaultColord7 = window.getComputedStyle(downvoteElementd7).color; // Get default color in RGB format

function toggleColord7(color) {
var currentColord7 = downvoteElementd7.style.color;

// Convert hex color to RGB
var hexToRgbd7 = function(hex) {
var rd7 = parseInt(hex.substring(1, 3), 16);
var gd7 = parseInt(hex.substring(3, 5), 16);
var bd7 = parseInt(hex.substring(5, 7), 16);
return `rgb(${rd7}, ${gd7}, ${bd7})`;
};

var targetColord7 = hexToRgbd7(color);

// Toggle color
if (currentColord7 === 'rgb(0, 0, 0)' || currentColord7 === '') {
downvoteElementd7.style.color = targetColord7; // Set specified color
} else {
downvoteElementd7.style.color = defaultColord7; // Set default color
}
}











//Upvote & Downvote 6

function disableAndHideu6() {
    var upvoteElementu6 = document.getElementById('upvote6');
    var downvoteElementu6 = document.getElementById('downvote6')

    // Disable click functionality
    upvoteElementu6.style.pointerEvents = 'none';
    downvoteElementu6.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementu6.style.display = 'none';
    downvoteElementu6.style.display = 'none';
  }

  function disableAndHided6() {
    var upvoteElementd6 = document.getElementById('upvote6');
    var downvoteElementd6 = document.getElementById('downvote6')

    // Disable click functionality
    upvoteElementd6.style.pointerEvents = 'none';
    downvoteElementd6.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementd6.style.display = 'none';
    downvoteElementd6.style.display = 'none';
  }





document.getElementById('upvote6').addEventListener('click', function() {
    var progressBaru6 = document.getElementById('progBar6');
    var currentWidthu6 = parseInt(progressBaru6.style.width);
    var newWidthu6 = currentWidthu6 + 5; // Increase by 10%
    
    if (newWidthu6 > 100) {
      newWidthu6 = 100; // Cap at 100%
    }

    progressBaru6.style.width = newWidthu6 + '%';
    progressBaru6.setAttribute('aria-valuenow', newWidthu6);


  });

  document.getElementById('downvote6').addEventListener('click', function() {
      var progressBard6 = document.getElementById('progBar6');
      var currentWidthd6 = parseInt(progressBard6.style.width);
      var newWidthd6 = currentWidthd6 - 3; // Decrease by 10%

      if (newWidthd6 < 0) {
          newWidthd6 = 0; // Cap at 0%
      }

      progressBard6.style.width = newWidthd6 + '%';
      progressBard6.setAttribute('aria-valuenow', newWidthd6);
  });
  

 
  var upvoteElementu6 = document.getElementById('upvote6');
var defaultColoru6 = window.getComputedStyle(upvoteElementu6).color; // Get default color in RGB format

function toggleColoru6(color) {
var currentColoru6 = upvoteElementu6.style.color;

// Convert hex color to RGB
var hexToRgbu6 = function(hex) {
var ru6 = parseInt(hex.substring(1, 3), 16);
var gu6 = parseInt(hex.substring(3, 5), 16);
var bu6 = parseInt(hex.substring(5, 7), 16);
return `rgb(${ru6}, ${gu6}, ${bu6})`;
};

var targetColoru6 = hexToRgbu6(color);

// Toggle color
if (currentColoru6 === 'rgb(0, 0, 0)' || currentColoru6 === '') {
upvoteElementu6.style.color = targetColoru6;
upvoteElementu6.style.fontSize = 20; // Set specified color
} else {
upvoteElementu6.style.color = defaultColoru6; // Set default color
}
}

var downvoteElementd6 = document.getElementById('downvote6');
var defaultColord6 = window.getComputedStyle(downvoteElementd6).color; // Get default color in RGB format

function toggleColord6(color) {
var currentColord6 = downvoteElementd6.style.color;

// Convert hex color to RGB
var hexToRgbd6 = function(hex) {
var rd6 = parseInt(hex.substring(1, 3), 16);
var gd6 = parseInt(hex.substring(3, 5), 16);
var bd6 = parseInt(hex.substring(5, 7), 16);
return `rgb(${rd6}, ${gd6}, ${bd6})`;
};

var targetColord6 = hexToRgbd6(color);

// Toggle color
if (currentColord6 === 'rgb(0, 0, 0)' || currentColord6 === '') {
downvoteElementd6.style.color = targetColord6; // Set specified color
} else {
downvoteElementd6.style.color = defaultColord6; // Set default color
}
}













//Upvote & Downvote 5

function disableAndHideu5() {
    var upvoteElementu5 = document.getElementById('upvote5');
    var downvoteElementu5 = document.getElementById('downvote5')

    // Disable click functionality
    upvoteElementu5.style.pointerEvents = 'none';
    downvoteElementu5.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementu5.style.display = 'none';
    downvoteElementu5.style.display = 'none';
  }

  function disableAndHided5() {
    var upvoteElementd5 = document.getElementById('upvote5');
    var downvoteElementd5 = document.getElementById('downvote5')

    // Disable click functionality
    upvoteElementd5.style.pointerEvents = 'none';
    downvoteElementd5.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementd5.style.display = 'none';
    downvoteElementd5.style.display = 'none';
  }





document.getElementById('upvote5').addEventListener('click', function() {
    var progressBaru5 = document.getElementById('progBar5');
    var currentWidthu5 = parseInt(progressBaru5.style.width);
    var newWidthu5 = currentWidthu5 + 5; // Increase by 10%
    
    if (newWidthu5 > 100) {
      newWidthu5 = 100; // Cap at 100%
    }

    progressBaru5.style.width = newWidthu5 + '%';
    progressBaru5.setAttribute('aria-valuenow', newWidthu5);


  });

  document.getElementById('downvote5').addEventListener('click', function() {
      var progressBard5 = document.getElementById('progBar5');
      var currentWidthd5 = parseInt(progressBard5.style.width);
      var newWidthd5 = currentWidthd5 - 3; // Decrease by 10%

      if (newWidthd5 < 0) {
          newWidthd5 = 0; // Cap at 0%
      }

      progressBard5.style.width = newWidthd5 + '%';
      progressBard5.setAttribute('aria-valuenow', newWidthd5);
  });
  

 
  var upvoteElementu5 = document.getElementById('upvote5');
var defaultColoru5 = window.getComputedStyle(upvoteElementu5).color; // Get default color in RGB format

function toggleColoru5(color) {
var currentColoru5 = upvoteElementu5.style.color;

// Convert hex color to RGB
var hexToRgbu5 = function(hex) {
var ru5 = parseInt(hex.substring(1, 3), 16);
var gu5 = parseInt(hex.substring(3, 5), 16);
var bu5 = parseInt(hex.substring(5, 7), 16);
return `rgb(${ru5}, ${gu5}, ${bu5})`;
};

var targetColoru5 = hexToRgbu5(color);

// Toggle color
if (currentColoru5 === 'rgb(0, 0, 0)' || currentColoru5 === '') {
upvoteElementu5.style.color = targetColoru5;
upvoteElementu5.style.fontSize = 20; // Set specified color
} else {
upvoteElementu5.style.color = defaultColoru5; // Set default color
}
}

var downvoteElementd5 = document.getElementById('downvote5');
var defaultColord5 = window.getComputedStyle(downvoteElementd5).color; // Get default color in RGB format

function toggleColord5(color) {
var currentColord5 = downvoteElementd5.style.color;

// Convert hex color to RGB
var hexToRgbd5 = function(hex) {
var rd5 = parseInt(hex.substring(1, 3), 16);
var gd5 = parseInt(hex.substring(3, 5), 16);
var bd5 = parseInt(hex.substring(5, 7), 16);
return `rgb(${rd5}, ${gd5}, ${bd5})`;
};

var targetColord5 = hexToRgbd5(color);

// Toggle color
if (currentColord5 === 'rgb(0, 0, 0)' || currentColord5 === '') {
downvoteElementd5.style.color = targetColord5; // Set specified color
} else {
downvoteElementd5.style.color = defaultColord5; // Set default color
}
}












//Upvote & Downvote 4

function disableAndHideu4() {
    var upvoteElementu4 = document.getElementById('upvote4');
    var downvoteElementu4 = document.getElementById('downvote4')

    // Disable click functionality
    upvoteElementu4.style.pointerEvents = 'none';
    downvoteElementu4.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementu4.style.display = 'none';
    downvoteElementu4.style.display = 'none';
  }

  function disableAndHided4() {
    var upvoteElementd4 = document.getElementById('upvote4');
    var downvoteElementd4 = document.getElementById('downvote4')

    // Disable click functionality
    upvoteElementd4.style.pointerEvents = 'none';
    downvoteElementd4.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementd4.style.display = 'none';
    downvoteElementd4.style.display = 'none';
  }





document.getElementById('upvote4').addEventListener('click', function() {
    var progressBaru4 = document.getElementById('progBar4');
    var currentWidthu4 = parseInt(progressBaru4.style.width);
    var newWidthu4 = currentWidthu4 + 5; // Increase by 10%
    
    if (newWidthu4 > 100) {
      newWidthu4 = 100; // Cap at 100%
    }

    progressBaru4.style.width = newWidthu4 + '%';
    progressBaru4.setAttribute('aria-valuenow', newWidthu4);


  });

  document.getElementById('downvote4').addEventListener('click', function() {
      var progressBard4 = document.getElementById('progBar4');
      var currentWidthd4 = parseInt(progressBard4.style.width);
      var newWidthd4 = currentWidthd4 - 3; // Decrease by 10%

      if (newWidthd4 < 0) {
          newWidthd4 = 0; // Cap at 0%
      }

      progressBard4.style.width = newWidthd4 + '%';
      progressBard4.setAttribute('aria-valuenow', newWidthd4);
  });
  

 
  var upvoteElementu4 = document.getElementById('upvote4');
var defaultColoru4 = window.getComputedStyle(upvoteElementu4).color; // Get default color in RGB format

function toggleColoru4(color) {
var currentColoru4 = upvoteElementu4.style.color;

// Convert hex color to RGB
var hexToRgbu4 = function(hex) {
var ru4 = parseInt(hex.substring(1, 3), 16);
var gu4 = parseInt(hex.substring(3, 5), 16);
var bu4 = parseInt(hex.substring(5, 7), 16);
return `rgb(${ru4}, ${gu4}, ${bu4})`;
};

var targetColoru4 = hexToRgbu4(color);

// Toggle color
if (currentColoru4 === 'rgb(0, 0, 0)' || currentColoru4 === '') {
upvoteElementu4.style.color = targetColoru4;
upvoteElementu4.style.fontSize = 20; // Set specified color
} else {
upvoteElementu4.style.color = defaultColoru4; // Set default color
}
}

var downvoteElementd4 = document.getElementById('downvote4');
var defaultColord4 = window.getComputedStyle(downvoteElementd4).color; // Get default color in RGB format

function toggleColord4(color) {
var currentColord4 = downvoteElementd4.style.color;

// Convert hex color to RGB
var hexToRgbd4 = function(hex) {
var rd4 = parseInt(hex.substring(1, 3), 16);
var gd4 = parseInt(hex.substring(3, 5), 16);
var bd4 = parseInt(hex.substring(5, 7), 16);
return `rgb(${rd4}, ${gd4}, ${bd4})`;
};

var targetColord4 = hexToRgbd4(color);

// Toggle color
if (currentColord4 === 'rgb(0, 0, 0)' || currentColord4 === '') {
downvoteElementd4.style.color = targetColord4; // Set specified color
} else {
downvoteElementd4.style.color = defaultColord4; // Set default color
}
}














//Upvote & Downvote 3

function disableAndHideu3() {
    var upvoteElementu3 = document.getElementById('upvote3');
    var downvoteElementu3 = document.getElementById('downvote3')

    // Disable click functionality
    upvoteElementu3.style.pointerEvents = 'none';
    downvoteElementu3.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementu3.style.display = 'none';
    downvoteElementu3.style.display = 'none';
  }

  function disableAndHided3() {
    var upvoteElementd3 = document.getElementById('upvote3');
    var downvoteElementd3 = document.getElementById('downvote3')

    // Disable click functionality
    upvoteElementd3.style.pointerEvents = 'none';
    downvoteElementd3.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementd3.style.display = 'none';
    downvoteElementd3.style.display = 'none';
  }





document.getElementById('upvote3').addEventListener('click', function() {
    var progressBaru3 = document.getElementById('progBar3');
    var currentWidthu3 = parseInt(progressBaru3.style.width);
    var newWidthu3 = currentWidthu3 + 5; // Increase by 10%
    
    if (newWidthu3 > 100) {
      newWidthu3 = 100; // Cap at 100%
    }

    progressBaru3.style.width = newWidthu3 + '%';
    progressBaru3.setAttribute('aria-valuenow', newWidthu3);


  });

  document.getElementById('downvote3').addEventListener('click', function() {
      var progressBard3 = document.getElementById('progBar3');
      var currentWidthd3 = parseInt(progressBard3.style.width);
      var newWidthd3 = currentWidthd3 - 3; // Decrease by 10%

      if (newWidthd3 < 0) {
          newWidthd3 = 0; // Cap at 0%
      }

      progressBard3.style.width = newWidthd3 + '%';
      progressBard3.setAttribute('aria-valuenow', newWidthd3);
  });
  

 
  var upvoteElementu3 = document.getElementById('upvote3');
var defaultColoru3 = window.getComputedStyle(upvoteElementu3).color; // Get default color in RGB format

function toggleColoru3(color) {
var currentColoru3 = upvoteElementu3.style.color;

// Convert hex color to RGB
var hexToRgbu3 = function(hex) {
var ru3 = parseInt(hex.substring(1, 3), 16);
var gu3 = parseInt(hex.substring(3, 5), 16);
var bu3 = parseInt(hex.substring(5, 7), 16);
return `rgb(${ru3}, ${gu3}, ${bu3})`;
};

var targetColoru3 = hexToRgbu3(color);

// Toggle color
if (currentColoru3 === 'rgb(0, 0, 0)' || currentColoru3 === '') {
upvoteElementu3.style.color = targetColoru3;
upvoteElementu3.style.fontSize = 20; // Set specified color
} else {
upvoteElementu3.style.color = defaultColoru3; // Set default color
}
}

var downvoteElementd3 = document.getElementById('downvote3');
var defaultColord3 = window.getComputedStyle(downvoteElementd3).color; // Get default color in RGB format

function toggleColord3(color) {
var currentColord3 = downvoteElementd3.style.color;

// Convert hex color to RGB
var hexToRgbd3 = function(hex) {
var rd3 = parseInt(hex.substring(1, 3), 16);
var gd3 = parseInt(hex.substring(3, 5), 16);
var bd3 = parseInt(hex.substring(5, 7), 16);
return `rgb(${rd3}, ${gd3}, ${bd3})`;
};

var targetColord3 = hexToRgbd3(color);

// Toggle color
if (currentColord3 === 'rgb(0, 0, 0)' || currentColord3 === '') {
downvoteElementd3.style.color = targetColord3; // Set specified color
} else {
downvoteElementd3.style.color = defaultColord3; // Set default color
}
}













//Upvote & Downvote 2

function disableAndHideu2() {
    var upvoteElementu2 = document.getElementById('upvote2');
    var downvoteElementu2 = document.getElementById('downvote2')

    // Disable click functionality
    upvoteElementu2.style.pointerEvents = 'none';
    downvoteElementu2.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementu2.style.display = 'none';
    downvoteElementu2.style.display = 'none';
  }

  function disableAndHided2() {
    var upvoteElementd2 = document.getElementById('upvote2');
    var downvoteElementd2 = document.getElementById('downvote2')

    // Disable click functionality
    upvoteElementd2.style.pointerEvents = 'none';
    downvoteElementd2.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElementd2.style.display = 'none';
    downvoteElementd2.style.display = 'none';
  }





document.getElementById('upvote2').addEventListener('click', function() {
    var progressBar2 = document.getElementById('progBar2');
    var currentWidth2 = parseInt(progressBar2.style.width);
    var newWidth2 = currentWidth2 + 5; // Increase by 10%
    
    if (newWidth2 > 100) {
      newWidth2 = 100; // Cap at 100%
    }

    progressBar2.style.width = newWidth2 + '%';
    progressBar2.setAttribute('aria-valuenow', newWidth2);


  });

  document.getElementById('downvote2').addEventListener('click', function() {
      var progressBar2 = document.getElementById('progBar2');
      var currentWidth2 = parseInt(progressBar2.style.width);
      var newWidth2 = currentWidth2 - 3; // Decrease by 10%

      if (newWidth2 < 0) {
          newWidth2 = 0; // Cap at 0%
      }

      progressBar2.style.width = newWidth2 + '%';
      progressBar2.setAttribute('aria-valuenow', newWidth2);
  });
  

 
  var upvoteElementu2 = document.getElementById('upvote2');
var defaultColoru2 = window.getComputedStyle(upvoteElementu2).color; // Get default color in RGB format

function toggleColoru2(color) {
var currentColoru2 = upvoteElementu2.style.color;

// Convert hex color to RGB
var hexToRgbu2 = function(hex) {
var ru2 = parseInt(hex.substring(1, 3), 16);
var gu2 = parseInt(hex.substring(3, 5), 16);
var bu2 = parseInt(hex.substring(5, 7), 16);
return `rgb(${ru2}, ${gu2}, ${bu2})`;
};

var targetColoru2 = hexToRgbu2(color);

// Toggle color
if (currentColoru2 === 'rgb(0, 0, 0)' || currentColoru2 === '') {
upvoteElementu2.style.color = targetColoru2;
upvoteElementu2.style.fontSize = 20; // Set specified color
} else {
upvoteElementu2.style.color = defaultColoru2; // Set default color
}
}

var downvoteElementd2 = document.getElementById('downvote2');
var defaultColord2 = window.getComputedStyle(downvoteElementd2).color; // Get default color in RGB format

function toggleColord2(color) {
var currentColord2 = downvoteElementd2.style.color;

// Convert hex color to RGB
var hexToRgbd2 = function(hex) {
var rd2 = parseInt(hex.substring(1, 3), 16);
var gd2 = parseInt(hex.substring(3, 5), 16);
var bd2 = parseInt(hex.substring(5, 7), 16);
return `rgb(${rd2}, ${gd2}, ${bd2})`;
};

var targetColord2 = hexToRgbd2(color);

// Toggle color
if (currentColord2 === 'rgb(0, 0, 0)' || currentColord2 === '') {
downvoteElementd2.style.color = targetColord2; // Set specified color
} else {
downvoteElementd2.style.color = defaultColord2; // Set default color
}
}

  










//Upvote & Downvote

function disableAndHide() {
    var upvoteElement = document.getElementById('upvote');
    var downvoteElement = document.getElementById('downvote')

    // Disable click functionality
    upvoteElement.style.pointerEvents = 'none';
    downvoteElement.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElement.style.display = 'none';
    downvoteElement.style.display = 'none';
  }

  function disableAndHide2() {
    var upvoteElement2 = document.getElementById('upvote');
    var downvoteElement2 = document.getElementById('downvote')

    // Disable click functionality
    upvoteElement2.style.pointerEvents = 'none';
    downvoteElement2.style.pointerEvents = 'none';

    // Hide the upvote text
    upvoteElement2.style.display = 'none';
    downvoteElement2.style.display = 'none';
  }





document.getElementById('upvote').addEventListener('click', function() {
    var progressBar = document.getElementById('progBar');
    var currentWidth = parseInt(progressBar.style.width);
    var newWidth = currentWidth + 5; // Increase by 10%
    
    if (newWidth > 100) {
      newWidth = 100; // Cap at 100%
    }

    progressBar.style.width = newWidth + '%';
    progressBar.setAttribute('aria-valuenow', newWidth);


  });

  document.getElementById('downvote').addEventListener('click', function() {
      var progressBar = document.getElementById('progBar');
      var currentWidth = parseInt(progressBar.style.width);
      var newWidth = currentWidth - 3; // Decrease by 10%

      if (newWidth < 0) {
          newWidth = 0; // Cap at 0%
      }

      progressBar.style.width = newWidth + '%';
      progressBar.setAttribute('aria-valuenow', newWidth);
  });
  


  var upvoteElement = document.getElementById('upvote');
var defaultColor = window.getComputedStyle(upvoteElement).color; // Get default color in RGB format

function toggleColor(color) {
var currentColor = upvoteElement.style.color;

// Convert hex color to RGB
var hexToRgb = function(hex) {
var r = parseInt(hex.substring(1, 3), 16);
var g = parseInt(hex.substring(3, 5), 16);
var b = parseInt(hex.substring(5, 7), 16);
return `rgb(${r}, ${g}, ${b})`;
};

var targetColor = hexToRgb(color);

// Toggle color
if (currentColor === 'rgb(0, 0, 0)' || currentColor === '') {
upvoteElement.style.color = targetColor;
upvoteElement.style.fontSize = 20; // Set specified color
} else {
upvoteElement.style.color = defaultColor; // Set default color
}
}

var downvoteElement = document.getElementById('downvote');
var defaultColor2 = window.getComputedStyle(downvoteElement).color; // Get default color in RGB format

function toggleColor2(color) {
var currentColor2 = downvoteElement.style.color;

// Convert hex color to RGB
var hexToRgb2 = function(hex) {
var r2 = parseInt(hex.substring(1, 3), 16);
var g2 = parseInt(hex.substring(3, 5), 16);
var b2 = parseInt(hex.substring(5, 7), 16);
return `rgb(${r2}, ${g2}, ${b2})`;
};

var targetColor2 = hexToRgb2(color);

// Toggle color
if (currentColor2 === 'rgb(0, 0, 0)' || currentColor2 === '') {
downvoteElement.style.color = targetColor2; // Set specified color
} else {
downvoteElement.style.color = defaultColor2; // Set default color
}
}














//Copy url code 3

function copyURLToClipboard() {
    var currentURL = window.location.href;

    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = currentURL;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('URL copied to clipboard: ' + currentURL);
  }
  document.getElementById('copyButton2').addEventListener('click', copyURLToClipboard);



//Contact me vial email code

function composeEmail() {
                                  
    var subject = document.getElementById('subject').value;
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;

   
    var emailBody = "Subject: " + subject + "\n\n";
    emailBody += "Name: " + name + "\n\n";
    emailBody += "Message:\n" + message;

   
    var mailtoLink = "mailto:tawiahivansiisi@gmail.com" +
                     "?subject= " + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(emailBody);

    
    window.location.href = mailtoLink;
  }




//Popup Modal3

var modal3 = document.getElementById("myModal");

var btn3 = document.getElementById("myBtnol3");

var span3 = document.getElementsByClassName("closeol")[0];

btn3.onclick = function () {
    modal3.style.display = "flex";
};

span3.onclick = function () {
    modal3.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
};







//Popup Modal2

var modal2 = document.getElementById("myModal");

var btn2 = document.getElementById("myBtnol2");

var span2 = document.getElementsByClassName("closeol")[0];

btn2.onclick = function () {
    modal2.style.display = "flex";
};

span2.onclick = function () {
    modal2.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
};




//Popup Modal 
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtnol");

var span = document.getElementsByClassName("closeol")[0];

btn.onclick = function () {
    modal.style.display = "flex";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};





// Paystck implementation

const paymentForm = document.getElementById('paymentForm');
const selectElement = document.getElementById('paymentPlanSelect');
        
paymentForm.addEventListener("submit", payWithPaystack, false);
    
function payWithPaystack(e) {
    e.preventDefault();

      
    let inputFieldog = document.getElementById('card-name').value;
    let processedValue = inputFieldog.replace(/\s+/g, '');
    
    let handler = PaystackPop.setup({
        key: 'pk_live_78f4689f62138e0e4ca10676ad3e05a7df40617f', // Replace with your public key
        email: document.getElementById("email-address").value,
        amount: document.getElementById("cvv").value * 100,
        ref: processedValue + ''+Math.floor((Math.random() * 1000) + 1) + document.getElementById('paymentPlanSelect').value,
        currency: 'GHS', // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        // label: "Optional string that replaces customer email"
        onClose: function(){
            alert('Window closed.');
        },
        callback: function(response){
            let message3 = 'Payment complete! Reference: ' + response.reference;
            alert(message);
        }
    });
    
    handler.openIframe();
}



// To change the button text dynamically with the amount chosen

const inputField = document.getElementById('cvv');
const dynamicButton = document.getElementById('planButton');

// Add an event listener to the input field to listen for input events
inputField.addEventListener('input', function() {
    // Change the button text to the value of the input field
    dynamicButton.textContent = 'Donate GHS ' + inputField.value + ' now';
});



//Prompt to check if project was selected 

document.addEventListener('DOMContentLoaded', (event) => {
    const selectElement = document.getElementById('paymentPlanSelect');
    const planButton = document.getElementById('planButton');
    const titleSelector = document.getElementById('titleol');

    const planDetails = {
        'supportProjectAeroSimApp': 'Aerospace Simulation App',
        'supportProjectAREngineer': 'Interactive Augmented Reality for Engineering Design',
        'supportProjectMartha': 'AI-Powered Personal Finance Assistant (Martha)'
    };

    selectElement.addEventListener('change', function() {
        const selectedValue = this.value;
        if (selectedValue && planDetails[selectedValue]) {
            titleSelector.textContent = '#' + selectedValue;
        } else {
            titleSelector.textContent = '#supportSiisi';
        }
    });

    planButton.addEventListener('click', function() {
        const selectedValue = selectElement.value;
        if (selectedValue == '0') {
            alert('Please select a Donation project');
        } else if (selectedValue && planDetails[selectedValue]) {
            console.log('You have selected the ' + planDetails[selectedValue] + '.');
        }
    });

});





// Hire me Code

function openURL() {
                  
    var urlToOpen = 'https://www.freelancer.com/u/tawiahivansiisi';

    // Open the URL in a new tab
    window.open(urlToOpen, '_blank');
  }

  // Attach the function to the button click event
  document.getElementById('openURLHIRE').addEventListener('click', openURL);



//Secret Congrats Page

document.addEventListener("DOMContentLoaded", function() {
    // Get the hash from the URL
    var hash = window.location.hash.substr(1);

    // If the hash is "congrats", remove the hidden class from the "congrats" section
    if (hash === "congrats") {
        var congratsSection = document.getElementById("congrats");
        if (congratsSection) {
            congratsSection.classList.remove("hidden");
        }
    }
});

document.getElementById('homeButton').addEventListener('click', function() {
window.location.href = 'index.html'; // Replace 'index.html' with your home page URL
});



//proPackage btn clicked

document.getElementById('proPackage').addEventListener('click', function() {
    var email = "tawiahivansiisi@gmail.com";
    var subject = "Pro Tutorial Package Equiry";
    var body = "I'd Like to enquire about the Pro package please ";

    var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;

    window.location.href = mailtoLink;
});




//exclusivePackage btn clicked

document.getElementById('exclusivePackage').addEventListener('click', function() {
    var email = "tawiahivansiisi@gmail.com";
    var subject = "Exclusive Tutorial Package Equiry";
    var body = "I'd Like to enquire about the Exclusive package please ";

    var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;

    window.location.href = mailtoLink;
});



//basicPackage btn clicked

document.getElementById('basicPackage').addEventListener('click', function() {
    var email = "tawiahivansiisi@gmail.com";
    var subject = "Basic Tutorial Package Equiry";
    var body = "I'd Like to enquire about the Basic package please ";

    var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;

    window.location.href = mailtoLink;
});



// freePackage btn clicked

document.getElementById('freePackage').addEventListener('click', function() {
    var email = "tawiahivansiisi@gmail.com";
    var subject = "Free Tutorial Package Enquiry";
    var body = "I'd Like to enquire about the free package please ";

    var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;

window.location.href = mailtoLink;
});

// Copy code

function copyURLToClipboard() {
    var currentURL = window.location.href;

    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = currentURL;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('URL copied to clipboard: ' + currentURL);
  }
  document.getElementById('copyButton1').addEventListener('click', copyURLToClipboard);



//CV Download Code

document.getElementById('downloadCV').addEventListener('click', function() {
    //Specifying document URL
    var documentURL = 'assets/CV.pdf';
    var fileName = 'ivan-siisi-tawiah-CV.pdf';
    //Creating an invisible element that would trigger the download
    var a = document.createElement('a');
    a.href = documentURL;
    a.download = fileName;
    //Trigger a click event
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});



// Resume download Code

document.getElementById('downloadResume').addEventListener('click', function() {
    //Specifying document URL
    var documentURL = 'assets/resume.pdf';
    var fileName = 'ivan-siisi-tawiah-resume.pdf';
    //Creating an invisible element that would trigger the download
    var a = document.createElement('a');
    a.href = documentURL;
    a.download = fileName;
    //Trigger a click event
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});



// Copy URL code

function copyURLToClipboard() {
    var currentURL = window.location.href;

    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = currentURL;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('URL copied to clipboard: ' + currentURL);
  }
  document.getElementById('copyButton').addEventListener('click', copyURLToClipboard);


// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
function initMap() {
    // Styles for a retro-themed map
    var retroStyles = [
        { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
        { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#c9b2a6' }] },
        { featureType: 'administrative.land_parcel', elementType: 'geometry.stroke', stylers: [{ color: '#dcd2be' }] },
        { featureType: 'administrative.land_parcel', elementType: 'labels.text.fill', stylers: [{ color: '#ae9e90' }] },
        { featureType: 'landscape.natural', elementType: 'geometry', stylers: [{ color: '#dfd2ae' }] },
        { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#dfd2ae' }] },
        { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#93817c' }] },
        { featureType: 'poi.park', elementType: 'geometry.fill', stylers: [{ color: '#a5b076' }] },
        { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#447530' }] },
        { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#f5f1e6' }] },
        { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#fdfcf8' }] },
        { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#f8c967' }] },
        { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#e9bc62' }] },
        { featureType: 'road.highway.controlled_access', elementType: 'geometry', stylers: [{ color: '#e98d58' }] },
        { featureType: 'road.highway.controlled_access', elementType: 'geometry.stroke', stylers: [{ color: '#db8555' }] },
        { featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{ color: '#806b63' }] },
        { featureType: 'transit.line', elementType: 'geometry', stylers: [{ color: '#dfd2ae' }] },
        { featureType: 'transit.line', elementType: 'labels.text.fill', stylers: [{ color: '#8f7d77' }] },
        { featureType: 'transit.line', elementType: 'labels.text.stroke', stylers: [{ color: '#ebe3cd' }] },
        { featureType: 'transit.station', elementType: 'geometry', stylers: [{ color: '#dfd2ae' }] },
        { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#b9d3c2' }] },
        { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#92998d' }] },
    ];

    // Create a new map with retro styles
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 5.6045708656311035, lng: -0.18717896938323975 },
        zoom: 14,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        styles: retroStyles
    });
}
