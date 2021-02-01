$.ajax({
   url: "https://api.deborahoni.com/visitor",
   type: "POST",
  success: function(result) {
        $("#count").text(result.visits);
        $("#uv").text(result.unique_visits);

          },
  error: function(error) {
         console.log(error);
          }
        });
