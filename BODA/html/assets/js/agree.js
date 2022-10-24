window.onunload = function () {
    window.scrollTo(0, 0);
};

const form = document.querySelector("#form__wrap"); // 데이터 전송
const checkAll = document.querySelector(".terms__check__all input"); // 모두 동의
const checkBoxes = document.querySelectorAll(".input__check input"); // 모두 동의 제외
const submitButton = document.querySelector("button"); // 다음 버튼

const agreements = {
    termsOfService: false,
    privacyPolicy: false,
    allowPromotions: false,
};

checkBoxes.forEach((item) => item.addEventListener("input", toggleCheckbox));

function toggleCheckbox(e) {
    const { checked, id } = e.target;
    agreements[id] = checked;
    this.parentNode.classList.toggle("active");
    checkAllStatus();
    toggleSubmitButton();
}

function checkAllStatus() {
    const { termsOfService, privacyPolicy, allowPromotions } = agreements;
    if (termsOfService && privacyPolicy && allowPromotions) {
        checkAll.checked = true;
    } else {
        checkAll.checked = false;
    }
}

function toggleSubmitButton() {
    const { termsOfService, privacyPolicy, allowPromotions } = agreements;
    if (termsOfService && privacyPolicy && allowPromotions) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

checkAll.addEventListener("click", (e) => {
    const { checked } = e.target;
    if (checked) {
        checkBoxes.forEach((item) => {
            item.checked = true;
            agreements[item.id] = true;
            item.parentNode.classList.add("active");
        });
    } else {
        checkBoxes.forEach((item) => {
            item.checked = false;
            agreements[item.id] = false;
            item.parentNode.classList.remove("active");
        });
    }
    toggleSubmitButton();
});
