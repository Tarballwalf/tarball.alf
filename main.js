setInterval(() => {
    document.getElementById('time2').innerHTML = moment.tz('Europe/Bucharest').format('dddd, MMMM Do   HH:mm (hh:mm A) z')
}, 300)

var toggler = document.getElementsByClassName("caret");
          var i;
          
          for (i = 0; i < toggler.length; i++) {
            toggler[i].addEventListener("click", function() {
              this.parentElement.querySelector(".nested").classList.toggle("active");
              this.classList.toggle("caret-down");
            });
          }