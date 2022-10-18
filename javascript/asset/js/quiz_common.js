// 퀴즈 이펙트 페이지 소스보기를 제어하는 스크립트입니다.
// 모달
const modalBtn = document.querySelector(".modal__btn"); // 소스 보기 클릭
const modalCont = document.querySelector(".modal__cont");
const modalClose = document.querySelector(".modal__close");
const modalClose2 = document.querySelector(".title-bar .close");

modalBtn.addEventListener("click", () => {
    modalCont.classList.add("show"); // visible을 스타일로 주게되면 애니메이션이 안되서 클래스로 처리해줍니다.
    modalCont.classList.remove("hide");
});
modalClose.addEventListener("click", () => {
    modalCont.classList.add("hide");
});
modalClose2.addEventListener("click", () => {
    modalCont.classList.add("hide");
});

// 탭 메뉴
const tabBtn = document.querySelectorAll(".modal__box .menu-bar > span");
const tabCont = document.querySelectorAll(".modal__box .cont > div");

tabBtn.forEach((el, index) => {
    el.addEventListener("click", (event) => {
        event.preventDefault();

        // 클래스 active를 모두 제거함
        tabBtn.forEach((el) => {
            el.classList.remove("active");
        });
        // 내가 클릭한 버튼에 active를 추가함
        el.classList.add("active");

        // 버튼을 클릭하면 모든 자식 박스를 숨김
        tabCont.forEach((el) => {
            el.style.display = "none";
        });

        // 클릭한 버튼에 맞는 인덱스에 해당하는 컨텐츠를 보여준다.
        tabCont[index].style.display = "block";
    });
});
