
// function getVals(){
//   // Get slider values
//   var parent = this.parentNode;
//   var slides = parent.getElementsByTagName("input");
//     // var slide1 = parseFloat( slides[0].value );
//     var slide2 = parseFloat( slides[1].value );
//     // console.log("this is slide1 " + slide1);
//     // console.log("this is slide2 " + slide2);
//
//
//   // Neither slider will clip the other, so make sure we determine which is larger
//   // if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
//
//   var displayElement = parent.getElementsByClassName("rangeValues")[0];
//       // displayElement.innerHTML = slide2;
// }


$(document).ready(function(){
  var val = $('#input1').val();
  console.log(val);
  $('#input2').attr('value', val);
  var val2 = $('#input2').val();
  $('#input2').on('change', function(e){
    console.log($('#input2').val());
    if ($('#input2').val()<= val){
      // document.getElementById('input2').readOnly = true;
      $('#input2').val(val);
      console.log("yo");
    }
  });

  var rangeValues = {
    "0.5": "10 kpbs",
    "1": "50 mbps",
    "1.5": "1 mbps",
    "2": "25 mbps",
    "2.5": "50 mbps",
    "3": "75 mpbs",
    "3.5": "100 mpbs",
    "4": "250 mpbs",
    "4.5": "500 mpbs",
    "5": "750 mpbs",
    "5.5": "1000 mpbs"
  }



  $('#input2').on('input change', function(){
      $('#rangeText').text(rangeValues[$(this).val()]);
    });


  var ticks = '<div class="sliderTickmarks "><span>10 kbps</span></div>';
      ticks += '<div class="sliderTickmarks "><span></span></div>';
      ticks += '<div class="sliderTickmarks "><span>1 mbps</span></div>';
      ticks += '<div class="sliderTickmarks "><span></span></div>';
      ticks += '<div class="sliderTickmarks "><span>50 mbps</span></div>';
      ticks += '<div class="sliderTickmarks "><span></span></div>';
      ticks += '<div class="sliderTickmarks "><span>100 mbps</span></div>';
      ticks += '<div class="sliderTickmarks "><span></span></div>';
      ticks += '<div class="sliderTickmarks "><span>500 mbps</span></div>';
      ticks += '<div class="sliderTickmarks "><span></span></div>';
      ticks += '<div class="sliderTickmarks "><span>1000 mbps</span></div>';
  $(".range-slider").append(ticks);


  var el, newPoint, newPlace, offset;

// Select all range inputs, watch for change
$("#input2").change(function() {
   el = $(this);

   // Measure width of range input
   width = el.width();

   // Figure out placement percentage between left and right of input
   newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));

    offset = -.5;

   // Prevent bubble from going beyond left or right (unsupported browsers)
   if (newPoint < 0) { newPlace = 0; }
   else if (newPoint > 1) { newPlace = width; }
   else { newPlace = width * newPoint + offset; offset -= newPoint; }

   // Move bubble
   $(".outputme")
     .css({
       left: newPlace,
       marginLeft: offset + "%"
     });
      //  .text(el.val());
   });
   // Fake a change to position bubble at page load
  //  .trigger('change');


});
