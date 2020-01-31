var v = +prompt('Insert value in bits');
var K = 1024;
alert(v + 'b = ' + (v/8).toFixed(2) + 'B \n'
      + v + 'b = ' + (v/8/K).toFixed(2) + 'kB \n'
       + v + 'b = ' + (v/8/K/K).toFixed(2) + 'MB \n'
       + v + 'b = ' + (v/8/K/K/K).toFixed(2) + 'GB \n'
);
