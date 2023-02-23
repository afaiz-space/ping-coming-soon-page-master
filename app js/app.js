var pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$";

      var email = document.getElementById("email");

      var error = document.getElementById("error");

      var button = document.getElementById("btn");
      button.addEventListener("click", check);
      function check() {
        if (email.value.match(pattern)) {
          
          email.style.border ="1px solid hsl(138, 50%, 66%)";
        } else {
          
          error.style.display = "inline";
          email.style.border ="1px solid hsl(354, 100%, 66%)";
        }
      }