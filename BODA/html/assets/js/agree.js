window.onunload = function () {
  window.scrollTo(0, 0);
};

// 모두 체크하기
function selectAll(selectAll) {
  const checkboxes = document.getElementsByName("check_all");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}
