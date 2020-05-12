document.addEventListener(
    "DOMContentLoaded",
    function () {
        const hOneL = document.getElementById("h1L");
        const hOneR = document.getElementById("h1R");
        const btnL = document.getElementById("btnLeft");
        const btnR = document.getElementById("btnRight");
        const home = document.getElementById("home");
        const logo = document.getElementById("logo");
        const about = document.getElementById("aboutSection");
        const naviRow = document.getElementById("naviRow");
        const aboutRow = document.getElementsByClassName("aboutgrid");
        const popup = document.getElementById("popup");

        // GET ABOUT GRID
        let Obj1 = aboutRow[0].childNodes;
        let Obj2 = aboutRow[1].childNodes;
        let Obj3 = aboutRow[2].childNodes;
        let rowOne = Object.values(Obj1).filter((e) => e.nodeName != "#text");
        let rowTwo = Object.values(Obj2).filter((e) => e.nodeName != "#text");
        let rowThree = Object.values(Obj3).filter((e) => e.nodeName != "#text");

        let Objects = {};

        function rowFade(row) {
            for (let i = 0; i < row.length; i++) {
                setTimeout(function timer() {
                    row[i].classList.add("slide-in-left");
                }, i * 100);
            }
        }

        document.getElementById("wifi").addEventListener("mouseover", () => {
            console.log("wifi");
            event.target.src = "./img/wifi.gif";
        });
        function clickRow(row) {
            row.map((e) => {
                e.addEventListener("click", () => {
                    // console.log(e.offsetTop + popup.style.width + "px");
                    // popup.style.top =
                    //     e.offsetTop + popup.offsetHeight / 1.7 + "px";
                    // popup.style.left = e.offsetLeft + popup.offsetWidth + "px";
                    popup.classList.add("slide-in-right");
                    console.log(e.children[1].innerHTML);
                });
            });
        }

        console.log(about);

        clickRow(rowOne);
        clickRow(rowTwo);
        clickRow(rowThree);

        rowFade(rowOne);
        rowFade(rowTwo);
        rowFade(rowThree);

        console.log(rowOne);
        // STart Animations delay
        setTimeout(() => {
            hOneL.classList.add("slide-in-left");
        }, 300);
        setTimeout(() => {
            hOneR.classList.add("slide-in-right");
        }, 400);

        console.log(home.children[0]);

        // BTN EventHandling

        function aboutT(trigger) {
            trigger.addEventListener("click", () => {
                btnL.classList.add("heartbeat");
                setTimeout(() => {
                    home.classList.add("slide-out-blurred-bottom");
                }, 200);
                setTimeout(() => {
                    home.style.display = "none";
                    home.classList.remove("hMain");
                    home.children[0].remove("hMain");
                    logo.classList.add("scale-in-center");
                    about.style.display = "block";
                }, 550);
                setTimeout(() => {
                    logo.classList.add("scale-in-center");
                    naviRow.classList.add("shadow");
                }, 800);
            });
        }

        aboutT(btnL);
        aboutT(about);

        console.log();

        // btnL.addEventListener("click", () => {
        //     console.log("gehts");
        //     btnL.classList.add("heartbeat");
        //     setTimeout(() => {
        //         home.classList.add("slide-out-blurred-bottom");
        //     }, 200);
        //     setTimeout(() => {
        //         home.style.display = "none";
        //         logo.classList.add("scale-in-center");
        //     }, 600);
        //     setTimeout(() => {
        //         logo.classList.add("scale-in-center");
        //     }, 800);
        // });
    },
    false
);
