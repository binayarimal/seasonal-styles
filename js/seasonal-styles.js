$("document").ready(function(){
   $('.seasons a').click(function(e){//find all a tags inside class of seasons
       e.preventDefault();//stop default submission
       var season = $(this).attr("href");//contents of href attribute of this element
       //alert(season);
       season = season.toLowerCase();
       switch(season){
         case "spring": 
            $("#logo").attr("src", "images/spring.gif");
            $("html").css("background-color", "#2B7129")
            $("#wear").attr("src", "images/spring-wear.jpg");
            $("div#seasonText").html("<p>Look at the flowers, yea that's cuz of spring.</p>");

         break;
         case "summer": 
             $("#logo").attr("src", "images/summer.gif");
             $("html").css("background-color", "#EBA52B");
             $("#wear").attr("src", "images/summer-wear.jpg");
             $("div#seasonText").html("<p>Look at the heat, yea that's cuz of summer.</p>");

         break;
         case "fall": 
             $("#logo").attr("src", "images/fall.gif");
             $("html").css("background-color", "#A81124");
             $("#wear").attr("src", "images/fall-wear.jpg");
             $("div#seasonText").html("<p>Look at the dead leaves, yea that's cuz of fall.</p>");

         break;
         case "winter": 
              $("#logo").attr("src", "images/winter.gif");
              $("html").css("background-color", "#005393");
              $("#wear").attr("src", "images/winter-wear.jpg");
              $("div#seasonText").html("<p>Look at the snow, yea that's cuz of winter.</p>");

         break;

         default:
            $("#logo").attr("src", "images/four-seasons.gif");
            $("html").css("background-color", "#ccc");
            $("#wear").attr("src", "images/300x400.png");
            $("div#seasonText").html("<p>In default weather we do default things, like defaulting over the default.</p>");

       }
   });
});

/*
let myPTags = document.querySelectorAll("div#myDiv p");
console.log(myPTags);
document.querySelector("div#myDiv").style.backgroundColor = "yellow";
document.querySelector("div#myDiv").innerHTML = "Testing query selectors";
*/