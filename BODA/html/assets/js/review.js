const OpenBtn = document.querySelectorAll(".board__table table tbody tr td .open");
const CloseBtn = document.querySelectorAll(".board__table table tbody tr td .close");
const content = document.querySelectorAll(".board__table table tbody tr td.content");

for(let i=0; i<content.length; i++){
    OpenBtn[i].addEventListener("click", () => {
        content[i].classList.remove("blind");
        OpenBtn[i].classList.add("blind");
        CloseBtn[i].classList.remove("blind");
    })
    CloseBtn[i].addEventListener("click", () => {
        content[i].classList.add("blind");
        OpenBtn[i].classList.remove("blind");
        CloseBtn[i].classList.add("blind");
    })
}


const OpenBtn2 = document.querySelectorAll(".board__table2 table tbody tr td .open");
const CloseBtn2 = document.querySelectorAll(".board__table2 table tbody tr td .close");
const content2 = document.querySelectorAll(".board__table2 table tbody tr td.content");

for(let i=0; i < content2.length; i++){
    OpenBtn2[i].addEventListener("click", () => {
        content2[i].classList.remove("blind");
        OpenBtn2[i].classList.add("blind");
        CloseBtn2[i].classList.remove("blind");
    })
    CloseBtn2[i].addEventListener("click", () => {
        content2[i].classList.add("blind");
        OpenBtn2[i].classList.remove("blind");
        CloseBtn2[i].classList.add("blind");
    })
}