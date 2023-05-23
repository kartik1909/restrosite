     var count = 0;
     var interval = setInterval(function() {
         count++;
         $("#counter").html(count);   
         if (count == 100) {
             clearInterval(interval);
         }
     }, 30);

    //  c2
         
    var count2 = 0;
    var interval1 = setInterval(function() {
        count2++;
        $("#counteer").html(count2);   
        if (count2 == 255) {
            clearInterval(interval1);
        }
    }, 10)
    // c3
    var count3 = 0;
    var interval2 = setInterval(function() {
        count3++;
        $("#countr").html(count3);   
        if (count3 == 30) {
            clearInterval(interval2);
        }
    }, 100)

    // c4
    var count4 = 0;
    var interval3 = setInterval(function() {
        count4++;
        $("#countre").html(count4);   
        if (count4 == 10) {
            clearInterval(interval3);
        }
    }, 200)


    window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



