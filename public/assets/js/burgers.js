$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
        console.log(newDevour)
      var newDevourState = {
        devour: newDevour
      };
      console.log(newDevourState);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
            console.log(newDevourState);
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#submit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      $(".list").css("display", "block");
      console.log("test");
      var newBurger = {
        name: $("#ca").val().trim(),
        devour: $("[name=devour]:checked").val().trim()
      };
      console.log(newBurger);
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  