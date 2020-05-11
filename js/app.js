document.addEventListener(
    "DOMContentLoaded",
    function () {
        const hOneL = document.getElementById("h1L");
        const hOneR = document.getElementById("h1R");
        const btnL = document.getElementById("btnLeft");
        const btnR = document.getElementById("btnRight");
        const home = document.getElementById("home");
        const logo = document.getElementById("logo");
        const about = document.getElementById("about");
        const naviRow = document.getElementById("naviRow");
        const aboutRow = document.getElementsByClassName("aboutgrid");
        // GET ABOUT GRID
        let Obj1 = aboutRow[0].childNodes;
        let Obj2 = aboutRow[1].childNodes;
        let Obj3 = aboutRow[2].childNodes;
        let rowOne = Object.values(Obj1).filter((e) => e.nodeName != "#text");
        let rowTwo = Object.values(Obj2).filter((e) => e.nodeName != "#text");
        let rowThree = Object.values(Obj3).filter((e) => e.nodeName != "#text");
        console.log(rowOne);

        function rowFade(row) {
            for (let i = 0; i < row.length; i++) {
                setTimeout(function timer() {
                    row[i].classList.add("slide-in-left");
                }, i * 100);
            }
        }

        rowFade(rowOne);
        rowFade(rowTwo);
        rowFade(rowThree);

        console.log(Obj1[0]);
        // STart Animations delay
        setTimeout(() => {
            hOneL.classList.add("slide-in-left");
        }, 300);
        setTimeout(() => {
            hOneR.classList.add("slide-in-right");
        }, 400);

        // BTN EventHandling

        function aboutT(trigger) {
            trigger.addEventListener("click", () => {
                btnL.classList.add("heartbeat");
                setTimeout(() => {
                    home.classList.add("slide-out-blurred-bottom");
                }, 200);
                setTimeout(() => {
                    home.style.display = "none";
                    logo.classList.add("scale-in-center");
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
