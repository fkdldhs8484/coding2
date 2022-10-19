const open = () => {
    document.querySelector(".alert").classList.remove("hidden");
}

const close = () => {
    document.querySelector(".alert").classList.add("hidden");
}

document.querySelector(".openBtn").addEventListener("click", open);
document.querySelector(".closeBtn").addEventListener("click", close);
document.querySelector(".bg").addEventListener("click", close);