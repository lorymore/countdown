//Setup End Date for countdown
// getTime == time in  milleseconds
let launchDate = new Date('Jul 28, 2020 12:00:00').getTime();

//Setup Timer to tick every second

let timer = setInterval(tick, 1000);

function tick() {
  //Get current time
  let now = new Date().getTime();


  //Difference in time

  let t = launchDate - now;

  //Check if time is above 0

  if(t > 0) {
    //Setup Days, hours, seconds , minutes
    let  days = Math.floor(t / (1000 * 60 * 60 * 24));
    // 0 before days under 10
    if( days < 10) {
      days = "0" + days
    }

    let hours = Math.floor((t % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    if( hours < 10) {
      hours = "0" + hours
    }

    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if( mins < 10) {
      mins = "0" + mins
    }

    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if( secs < 10) {
      secs = "0" + secs
    }

    //Time String

    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    //Set time on document

    document.querySelector('.countdown').innerText = time;
  }
}