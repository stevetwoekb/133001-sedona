var block = document.querySelector(".show-form");
         var but = document.querySelector(".brown");   
            block.classList.add("show-form-none");

            but.addEventListener("click", function() {
               block.classList.remove("show-form-none")
            });