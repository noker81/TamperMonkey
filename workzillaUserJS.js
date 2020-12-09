// ==UserScript==
// @name workzillaUserJS
// @description Workzilla юзерскрипт
// @author Roman
// @license MIT
// @version 0.1
// @include https://client.work-zilla.com/Freelancer
// ==/UserScript==

//Конфирурация
var regexp = /\b(modx|json|php|модх|битрикс)\b/gi;
var audioMP3 = "https://noisefx.ru/noise_base/19/09107.mp3";
var speed = 10; //Каждые 10 секунд

var ids = new Array();
function change(){
    let elementList = document.querySelectorAll("div.order-in-list");
    let order;
    let a = 1;
    elementList.forEach((element) => {
        order = element.getAttribute('data-order-id') * 1;
        if (!ids.includes(order)) {
            ids.push(order);
            let h2Id = element.querySelector("h3.title")
            let textId = element.querySelector(".external-links-wrapper");

            let h2 = h2Id.textContent;
            let text = textId.textContent;
            if (h2.match(regexp) || text.match(regexp)) {
                h2 = h2.replace(regexp, "<span style='background:yellow;'>$&</span>");
                text = text.replace(regexp, "<span style='background:yellow;'>$&</span>");
                h2Id.innerHTML = h2;
                textId.innerHTML = text;
                element.style.border = "thick solid yellow"
                if (a == 1 && audioMP3!='') new Audio(audioMP3).play();
                a++;
            }
        }
    })
}

var delay_id = setInterval(change, 1000 * speed);
