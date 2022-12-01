setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let daynumber = time.getDay();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();


    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"
        + min + ":" + sec + " " +  days[daynumber];

    document.getElementById("myClock")
        .innerHTML = currentTime;
}
showTime();


let name = document.querySelector("#myName")
let isim = prompt("LÜtfen adınızı giriniz.")
name.innerHTML = `${isim}`