$.ajax({
   url: "https://api.mybytesni.com/visitor",
   type: "POST",
  success: function(result) {
            console.log(result);
          },
  error: function(error) {
         console.log(error);
          }
        });
