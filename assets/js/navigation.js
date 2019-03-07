$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });



   $(window).bind('scroll',function(e){
    parallaxScroll();
   });
  
  function parallaxScroll(){
      var scrolled = $(window).scrollTop();
      $('#parallax-lvl-0').css('top',(0-(scrolled*.25))+'px');
    $('#parallax-lvl-1').css('top',(0-(scrolled*.5))+'px');
      $('#parallax-lvl-2').css('top',(0-(scrolled*.75))+'px');
      $('#parallax-lvl-3').css('top',(0-(scrolled*.9))+'px');
  }







  function getRandomColor() {
    // Pick the colors. If you want more or less, adjust the number of colors in the next line of code.
    var colours = ["#FDF7EC", "#F9F1E5"];
    return colours[Math.floor(Math.random() * 4)]
  }
  
  
  // circleNum is the number of circles per color 
  // The higher the number, the slower the performance
  var circleNum = 15;
  var container = $("#container")
  var containerWidth = container.width();
  var containerHeight = (container.height() + 300);
  
  function generateLayer(layer, maxDiam) {
    for (var i = 0; i < circleNum; i++) {
      var newCircle = $("<div />")
      var d = Math.floor(Math.random() * maxDiam);
      newCircle.addClass("circle");
  
      newCircle.css({
        width: d,
        height: d,
        left: Math.random() * Math.max(containerWidth - d, 0),
        top: Math.random() * Math.max(containerHeight - d, 0),
        backgroundColor: getRandomColor()
      });
      layer.append(newCircle);
    }
  }
  
  // Change these numbers to adjust the max size of bubble each layer can produce
  $(document).ready(function() {
    generateLayer($("#parallax-layer-0"), 30);
    generateLayer($("#parallax-layer-1"), 50);
    generateLayer($("#parallax-layer-2"), 90);
    generateLayer($("#parallax-layer-3"), 130);
  });
  
  $(window).bind('scroll', function(e) {
    scrollSpeed();
  });
  
  // Adjust the scroll speed numbers to make the parallax more or less subtle
  function scrollSpeed() {
    var scrolled = $(window).scrollTop();
    $('#parallax-layer-0').css('top', (0 - (scrolled * .25)) + 'px');
    $('#parallax-layer-1').css('top', (0 - (scrolled * .5)) + 'px');
    $('#parallax-layer-2').css('top', (0 - (scrolled * .75)) + 'px');
    $('#parallax-layer-3').css('top', (0 - (scrolled * .9)) + 'px');
  };




  function getRandomColor() {
    // Pick the colors. If you want more or less, adjust the number of colors in the next line of code.
    var colours = ["#EAF7F4"];
    return colours[Math.floor(Math.random() * 4)]
  }
  
  
  // circleNum is the number of circles per color 
  // The higher the number, the slower the performance
  var circleNum = 15;
  var container = $("#container")
  var containerWidth = container.width();
  var containerHeight = (container.height() + 300);
  
  function generateLayer(layer, maxDiam) {
    for (var i = 0; i < circleNum; i++) {
      var newCircle = $("<div />")
      var d = Math.floor(Math.random() * maxDiam);
      newCircle.addClass("circle");
  
      newCircle.css({
        width: d,
        height: d,
        left: Math.random() * Math.max(containerWidth - d, 0),
        top: Math.random() * Math.max(containerHeight - d, 0),
        backgroundColor: getRandomColor()
      });
      layer.append(newCircle);
    }
  }
  
  // Change these numbers to adjust the max size of bubble each layer can produce
  $(document).ready(function() {
    generateLayer($("#parallax-layer-4"), 30);
    generateLayer($("#parallax-layer-5"), 50);
    generateLayer($("#parallax-layer-6"), 90);
    generateLayer($("#parallax-layer-7"), 130);
  });
  
  $(window).bind('scroll', function(e) {
    scrollSpeed();
  });
  
  // Adjust the scroll speed numbers to make the parallax more or less subtle
  function scrollSpeed() {
    var scrolled = $(window).scrollTop();
    $('#parallax-layer-4').css('top', (0 - (scrolled * .25)) + 'px');
    $('#parallax-layer-5').css('top', (0 - (scrolled * .5)) + 'px');
    $('#parallax-layer-6').css('top', (0 - (scrolled * .75)) + 'px');
    $('#parallax-layer-7').css('top', (0 - (scrolled * .9)) + 'px');
  };




  