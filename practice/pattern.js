var a=4,n=0;
for (var i = a; i > 0; i--) {
        n = n + i;
    }
for (var i = 0; i < a ; i++) {
  for (var j = 0; j < a-i; j++) {
      console.log(n+"");
      n=n-1;
    }
  }

