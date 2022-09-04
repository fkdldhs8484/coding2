 // 모달
    const modalBtn = document.querySelector('.modal__btn'); // 소스 보기 클릭
    const modalCont = document.querySelector('.modal__cont');
    const modalClose = document.querySelector('.modal__close');
    const modalClose2 = document.querySelector('.title-bar .close');

    modalBtn.addEventListener('click', () => {
        modalCont.classList.add('show');
        modalCont.classList.remove('hide');
    });
    modalClose.addEventListener('click', () => {
        modalCont.classList.add('hide');
    });
    modalClose2.addEventListener('click', () => {
        modalCont.classList.add('hide');
    });

    // 탭 메뉴
    const tabBtn = document.querySelectorAll(".modal__box .menu-bar > span");
    const tabCont = document.querySelectorAll(".modal__box .cont > div");

    tabBtn.forEach((el, index) => {
        el.addEventListener('click', (event) => {
            event.preventDefault();

            tabBtn.forEach(el => {
                el.classList.remove('active');
            });

            el.classList.add('active');

            tabCont.forEach(el => {
                el.style.display = 'none';
            });

            tabCont[index].style.display = 'block';
        });
    });