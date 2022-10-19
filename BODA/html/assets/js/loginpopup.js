const login = document.querySelector(".login__popup")
            const loginBtn = document.querySelector(".smallmenu li a:nth-child(1)");
            const loginClose = document.querySelector(".popup__close");

            loginBtn.addEventListener("click", () => {
                login.classList.remove("blind");
            })
            loginClose.addEventListener("click", () => {
                login.classList.add("blind");
            })