var COUNT_START = 10 * 25 * 60; // tenths * seconds * hours
var count = COUNT_START;
var playing = false;
var i = 0;

playpause = document.getElementById("playpause");
reset = document.getElementById("reset");

playpause.onclick = function () {
  if (playing) {
    playing = false;
    console.log("Pause!");
    playpause.innerHTML = "Start";
    var audio = document.getElementById('audio23');
    audio.loop = 1;
    audio.volume = 0.05;
    audio.pause();

  } else if (!playing) {
    playing = true;
    console.log("Play!");
    playpause.innerHTML = "Pause";
    var audio = document.getElementById('audio23');
    audio.volume = 0.05;
    audio.play();
    audio.loop = 1;

  }
};

reset.onclick = function () {
  if (playing && document.getElementById("bruno").innerText === "Stay Focused!") {
    playing = false;
    playpause.innerHTML = "Start";
  console.log("Reset Timer!");
  count = COUNT_START;
}

else if (document.getElementById("bruno").innerText === "Stay Focused!") {
  playing = false;
  playpause.innerHTML = "Start";
console.log("Reset Timer!");
count = COUNT_START;
}

else {
  playing = false;
  playpause.innerHTML = "Start";
  console.log("Reset Timer 2!");
  count = 10 * 5 * 60;
 }
}

function countdown() {
  displayTime();
  if (count === 0 && document.getElementById("bruno").innerText === "Stay Focused!") {
        $('body').addClass('body0');
        $('H1').text('Relax!');
        $('p').eq(0).text('リラックス');
        count = 10 * 5 * 60;
        var tenths = count;
        var sec = Math.floor(tenths / 10);
        var hours = Math.floor(sec / 3600);
        sec -= hours * 3600;
        var mins = Math.floor(sec / 60);
        sec -= mins * 60;
        $('p').eq(1).text(LeadingZero(mins) + ":" + LeadingZero(sec));
        playpause.innerHTML = "Start";
        playing = false;
        setTimeout(countdown, 100);
        function increment(n){
          n++;
          return n;
        }
        i=increment(i);
        console.log(i);
        var x = $('#round').text(i);
        console.log('ALARME');
        var audio = new Audio('audios/alarm.mp3');
        audio.play();
        if (i === 4) {
            $(".container").fadeOut(1);
            $('.notification').addClass('box');
            $('.title').text('Congrats!');
            $('.message').text('You have completed a full pomodoro cycle. In case you need, take some additional 20-30 minutes to relax before starting your next cycle!')
            $('.boxb').addClass('boxbutton');
            $("#boxb").attr('value', 'Continue');


            $('input').eq(0).on("click",function(){
            $(".notification").fadeOut(1);
            $(".container").fadeIn(1) ;
          })

        } else if ( i === 8 || i === 12 || i === 16 || i === 20 || i === 24 || i === 28 || i === 32 || i === 36 || i === 40 || i === 44 || i === 48 || i === 52 || i === 56 || i === 60 || i === 64 || i === 68 || i === 72 || i === 76 || i === 80 || i === 84 || i === 88 || i === 92 || i === 96 || i === 100){
          $(".container").fadeOut(1);
          $('.notification').fadeIn(1);

        }



} else if (count === 0 && document.getElementById("bruno").innerText === "Relax!") {
  $('body').removeClass('body0');
  $('H1').text('Stay Focused!');
  $('p').eq(0).text('集中し続ける');
  count = 10 * 25 * 60;
  var tenths = count;
  var sec = Math.floor(tenths / 10);
  var hours = Math.floor(sec / 3600);
  sec -= hours * 3600;
  var mins = Math.floor(sec / 60);
  sec -= mins * 60;
  $('p').eq(1).text(LeadingZero(mins) + ":" + LeadingZero(sec));
  playpause.innerHTML = "Start";
  playing = false;
  setTimeout(countdown, 100);
  console.log('ALARME');
  var audio = new Audio('audios/alarm.mp3');
  audio.play();
}
    else if (playing) {
    setTimeout(countdown, 100);
    count--;
  }
  else {
    setTimeout(countdown, 100);
  }
}
countdown();

function displayTime() {
  var tenths = count;
  var sec = Math.floor(tenths / 10);
  var hours = Math.floor(sec / 3600);
  sec -= hours * 3600;
  var mins = Math.floor(sec / 60);
  sec -= mins * 60;

  if (hours < 1) {
    document.getElementById("time_left").innerHTML =
      LeadingZero(mins) + ":" + LeadingZero(sec);
  } else {
    document.getElementById("time_left").innerHTML =
      hours + ":" + LeadingZero(mins) + ":" + LeadingZero(sec);
  }
}

function LeadingZero(Time) {
  return Time < 10 ? "0" + Time : +Time;
}


$(document).ready(function() {
  var icon = $('.play');
  icon.click(function() {
     icon.toggleClass('active');
     return false;
  });
});

function play() {
       var audio = document.getElementById('audio');
       if (audio.paused) {
           audio.play();
           $('#play').removeClass('glyphicon-play-circle')
           $('#play').addClass('glyphicon-pause')
           audio.volume = 0.5;
       }else{
           audio.pause();
           audio.loop = 1;
           $('#play').addClass('glyphicon-play-circle')
           $('#play').removeClass('glyphicon-pause')
       }
   }

  function play1() {
        var audio = document.getElementById('audio1');
        if (audio.paused) {
              audio.play();
              $('#play').removeClass('glyphicon-play-circle')
              $('#play').addClass('glyphicon-pause')
              audio.volume = 0.5;
        }else{
              audio.pause();
              audio.loop = 1;
              $('#play').addClass('glyphicon-play-circle')
              $('#play').removeClass('glyphicon-pause')
          }
      }

      function play2() {
            var audio = document.getElementById('audio2');
            if (audio.paused) {
                  audio.play();
                  $('#play').removeClass('glyphicon-play-circle')
                  $('#play').addClass('glyphicon-pause')
                  audio.volume = 0.5;
            }else{
                  audio.pause();
                  audio.loop = 1;
                  $('#play').addClass('glyphicon-play-circle')
                  $('#play').removeClass('glyphicon-pause')
              }
          }

function play3() {
                var audio = document.getElementById('audio3');
                if (audio.paused) {
                      audio.play();
                      audio.volume = 0.5;
                      $('#play').removeClass('glyphicon-play-circle')
                      $('#play').addClass('glyphicon-pause')
                }else{
                      audio.pause();
                      audio.loop = 1;
                      $('#play').addClass('glyphicon-play-circle')
                      $('#play').removeClass('glyphicon-pause')
                  }
              }

function play4() {
  var audio = document.getElementById('audio4');
  if (audio.paused) {
    audio.play();
    audio.volume = 0.5;
      $('#play').removeClass('glyphicon-play-circle')
      $('#play').addClass('glyphicon-pause')
  } else{
    audio.pause();
    audio.loop = 1;
      $('#play').addClass('glyphicon-play-circle')
      $('#play').removeClass('glyphicon-pause')
}
}

function play5() {
var audio = document.getElementById('audio5');
if (audio.paused) {
audio.play();
audio.volume = 0.5;
  $('#play').removeClass('glyphicon-play-circle')
  $('#play').addClass('glyphicon-pause')
}else{
      audio.pause();
      audio.loop = 1;
      $('#play').addClass('glyphicon-play-circle')
      $('#play').removeClass('glyphicon-pause')
    }
  }

function play6() {
    var audio = document.getElementById('audio6');
    if (audio.paused) {
        audio.play();
        audio.volume = 0.5;
        $('#play').removeClass('glyphicon-play-circle')
        $('#play').addClass('glyphicon-pause')
} else{
        audio.pause();
        audio.loop = 1;
        $('#play').addClass('glyphicon-play-circle')
        $('#play').removeClass('glyphicon-pause')
  }
}

function play7() {
    var audio = document.getElementById('audio7');
    if (audio.paused) {
      audio.play();
      audio.volume = 0.5;
      $('#play').removeClass('glyphicon-play-circle')
      $('#play').addClass('glyphicon-pause')
} else{
      audio.pause();
      audio.loop = 1;
      $('#play').addClass('glyphicon-play-circle')
      $('#play').removeClass('glyphicon-pause')
  }
}

function play8() {
      var audio = document.getElementById('audio8');
      if (audio.paused) {
          audio.play();
          audio.volume = 0.5;
          $('#play').removeClass('glyphicon-play-circle')
          $('#play').addClass('glyphicon-pause')
}else{
          audio.pause();
          audio.loop = 1;
          $('#play').addClass('glyphicon-play-circle')
          $('#play').removeClass('glyphicon-pause')
          }
        }

function play9() {
          var audio = document.getElementById('audio9');
            if (audio.paused) {
            audio.play();
            audio.volume = 0.5;
            $('#play').removeClass('glyphicon-play-circle')
            $('#play').addClass('glyphicon-pause')
      }else{
            audio.pause();
            audio.loop = 1;
            $('#play').addClass('glyphicon-play-circle')
            $('#play').removeClass('glyphicon-pause')
          }
}




$('input').eq(1).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(1).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(1).removeClass('clicked').addClass('button');
  }
})

$('input').eq(2).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(2).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(2).removeClass('clicked').addClass('button');
  }
})

$('input').eq(3).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(3).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(3).removeClass('clicked').addClass('button');
  }
})

$('input').eq(4).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(4).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(4).removeClass('clicked').addClass('button');
  }
})

$('input').eq(5).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(5).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(5).removeClass('clicked').addClass('button');
  }
})

$('input').eq(6).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(6).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(6).removeClass('clicked').addClass('button');
  }
})

$('input').eq(7).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(7).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(7).removeClass('clicked').addClass('button');
  }
})

$('input').eq(8).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(8).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(8).removeClass('clicked').addClass('button');
  }
})
