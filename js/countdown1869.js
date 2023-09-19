// Set the date we're counting down to
var countDownDate = new Date("Jan 15, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  var timeCounterMesssage = '<p style="text-align: center;"><strong>Forms will be available in</strong></p>';
  const elem = document.getElementById("countdownTimer");
  if(elem)
  elem.innerHTML = timeCounterMesssage + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    var html = '<a class="btn btn-block btn-primary" href="https://gpsmuz.siddhantait.com/online-admission/index.php?apptype=admission">Apply for Admission</a><a class="btn btn-block btn-success" href="https://gpsmuz.siddhantait.com/online-admission/index.php?apptype=scholarship">Apply for Scholarship</a>';
    clearInterval(x);
    if(elem)
    document.getElementById("countdownTimer").innerHTML = html;
  }
}, 1000);