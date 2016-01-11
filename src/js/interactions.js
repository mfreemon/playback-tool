
// $(window).load(function () {
//   $(function() {
//     var iframe = document.getElementById('video');
//     var player = $f(iframe);
//     player.addEvent('ready', function() {
//       player.addEvent('finish', onFinish);
//     });
//     $('.playpause').click(function() {
//       player.api('paused', function(paused) {
//         if (!paused) {
//           player.api('pause');
//           $(".playpause").removeClass('pause');
//         } else {
//           player.api('play');
//           $(".playpause").addClass('pause');
//         }
//       });
//     });
//
//     function onFinish(id) {
//       $(".playpause").removeClass('pause');
//     }
