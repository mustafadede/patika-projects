function givemeyourname() {
    let userName = "";
    userName = prompt("Adınızı giriniz:");
    const $hello = document.querySelector(".hello");
  
    if (userName && userName.length) {
      $hello.innerHTML = `Merhaba, ${userName}!`;
    } else {
      $hello.innerHTML = `Merhaba, yabancı!`;
    }
  }

function getDays() {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let weeks = date.getDay();
    switch (true) {
        case weeks === 1:
            weeks = "Pazartesi";
            break;
        case weeks === 2:
            weeks = "Salı";
            break;
        case weeks === 3:
            weeks = "Çarşamba";
            break;
        case weeks === 4:
            weeks = "Perşembe";
            break;
        case weeks === 5:
            weeks = "Cuma";
            break;
        case weeks === 6:
            weeks = "Cumartesi";
            break;
        case weeks === 7:
            weeks = "Pazar";
            break;
        default:
            console.log("Hafta yok!");
    }
    sec = sec < 10 ? "0"+sec : sec;
    hours = hours < 10 ? "0"+hours : hours;
    min = min < 10 ? "0"+min : min;

    let time = hours + ":" + min + ":" + sec + " " + weeks;
    document.querySelector(".timeandday").innerHTML = time;
    setTimeout(getDays,1000);
}
getDays();
givemeyourname();