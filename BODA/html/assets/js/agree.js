window.onunload = function () { window.scrollTo(0, 0); }

//id 중복체크
function idCheck() {
    //새창 만들기
    window.open("idCheckForm.jsp", "idwin", "width=400, height=350");
}

// 모두 체크하기
function selectAll(selectAll) {
    const checkboxes
        = document.getElementsByName('check_all');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
}