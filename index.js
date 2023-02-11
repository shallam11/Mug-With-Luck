console.log("Hi")
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });


$(".btn").click(function(){
    $(".text").fadeOut().delay(400)
    $(".designs").fadeIn()
});