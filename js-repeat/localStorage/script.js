let numberDOM = document.querySelector(".number") // HTML Sayfasında gözüken sayı alındı
let num = 0 // işlem yapabilmek için sayı atandı.
let counter = localStorage.setItem("counter",0) // localStorage key value oluşturuldu
let upButton = document.querySelector(".increase").addEventListener("click",clickEvent) // Arttır butonu alındı
let downButton = document.querySelector(".decrease").addEventListener("click",clickEvent) // Azalt butonu alındı

function clickEvent() {
    this.classList == "increase" ? num +=1 : num -= 1; // this.classList ile birlikte class olarak alınmış 
    localStorage.setItem("counter",num)                // butonlara satır 2'de olan num değişkeni işlemi
    numberDOM.innerHTML = num                          // yaptırıldı. setItem sağlandı ve sayfaya yazıldı.
}