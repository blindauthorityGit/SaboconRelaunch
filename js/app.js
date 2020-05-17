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
        const aboutMenu = document.getElementById("about");
        const clients = document.getElementById("clientSection");
        const naviRow = document.getElementById("naviRow");
        const aboutRow = document.getElementsByClassName("aboutgrid");
        const popup = document.getElementById("popup");
        const cloud = document.getElementById("cloud");

        const useCaseOne = document.getElementsByClassName("useCaseOne");
        console.log(useCaseOne[0]);

        // GET ABOUT GRID
        let Obj1 = aboutRow[0].childNodes;
        let Obj2 = aboutRow[1].childNodes;
        let Obj3 = aboutRow[2].childNodes;
        let rowOne = Object.values(Obj1).filter((e) => e.nodeName != "#text");
        let rowTwo = Object.values(Obj2).filter((e) => e.nodeName != "#text");
        let rowThree = Object.values(Obj3).filter((e) => e.nodeName != "#text");

        let href = window.location.href;
        let dir = href.split("/")[href.split("/").length - 1];

        setInterval(() => {
            href = window.location.href;
            dir = href.split("/")[href.split("/").length - 1];
        }, 50);

        document.addEventListener("click", () => {
            console.log(dir);
        });

        // BACK BTN HANDLING

        window.addEventListener("popstate", function (event) {
            console.log(dir);
            setTimeout(() => {
                if (dir == "index.html") {
                    about.style.display = "none";
                    clients.style.display = "none";
                    home.style.display = "block";
                    logo.classList.add("scale-out-center");
                    logo.classList.remove("scale-in-center");
                    btnL.classList.remove("heartbeat");
                    btnR.classList.remove("heartbeat");
                    naviRow.classList.remove("shadow");
                    home.classList.remove("slide-out-blurred-bottom");
                    home.classList.add("slide-in-right");
                } else if (dir == "about") {
                    home.style.display = "none";
                    about.style.display = "block";
                    about.classList.add("slide-in-left");
                    naviRow.classList.add("shadow");
                    logo.classList.remove("scale-out-center");
                    logo.classList.add("scale-in-center");
                }
            }, 100);
        });

        // var controller = new ScrollMagic.Controller();
        // new ScrollMagic.Scene({
        //     duration: 800, // the scene should last for a scroll distance of 100px
        //     offset: 50, // start this scene after scrolling for 50px
        //     triggerElement: ".useCaseOne",
        // })
        //     .setClassToggle(".useCaseOne", "show")
        //     .setPin("body") // pins the element for the the scene's duration
        //     .addTo(controller); // assign the scene to the controller

        // SCROLL ANIMATION

        // var robotAnimWindow = document.getElementById("robotLottie"),
        //     robotAnimData = {
        //         wrapper: robotAnimWindow,
        //         animType: "svg",
        //         loop: false,
        //         prerender: true,
        //         autoplay: false,
        //         path: "./animation/data.json",
        //     };

        // var robotAnim = bodymovin.loadAnimation(robotAnimData);
        // robotAnim.addEventListener("DOMLoaded", onRobotDOMLoaded);

        // -------------------------------

        function rowFade(row) {
            for (let i = 0; i < row.length; i++) {
                setTimeout(function timer() {
                    row[i].classList.add("slide-in-left");
                }, i * 100);
            }
        }
        // document.getElementById("wifi").addEventListener("mouseover", () => {
        //     console.log("wifi");
        //     event.target.src = "./img/wifi.gif";
        // });
        function clickRow(row) {
            row.map((e) => {
                e.addEventListener("click", () => {
                    // console.log(e.offsetTop + popup.style.width + "px");
                    // popup.style.top =
                    //     e.offsetTop + popup.offsetHeight / 1.7 + "px";
                    // popup.style.left = e.offsetLeft + popup.offsetWidth + "px";
                    popup.classList.add("slide-in-right");
                    popup.style.left = e.viewportOffset.left + "px";
                    console.log(e.children[1].innerHTML);
                });
            });
        }

        console.log(about);

        clickRow(rowOne);
        clickRow(rowTwo);
        clickRow(rowThree);

        console.log(rowOne);
        // STart Animations delay
        setTimeout(() => {
            hOneL.classList.add("slide-in-left");
        }, 300);
        setTimeout(() => {
            hOneR.classList.add("slide-in-right");
        }, 400);

        console.log(home.children[0]);

        // BTN EventHandling ABOUT

        function aboutT(trigger) {
            trigger.addEventListener("click", () => {
                window.history.pushState("object or string", "About", "/about");
                clients.style.display = "none";
                href = window.location.href;
                logo.classList.remove("scale-out-center");
                btnL.classList.add("heartbeat");
                setTimeout(() => {
                    home.classList.add("slide-out-blurred-bottom");
                }, 200);
                setTimeout(() => {
                    home.style.display = "none";
                    home.classList.remove("hMain");
                    logo.classList.add("scale-in-center");
                    rowFade(rowOne);
                    rowFade(rowTwo);
                    rowFade(rowThree);
                    about.style.display = "block";
                }, 550);
                setTimeout(() => {
                    logo.classList.add("scale-in-center");
                    naviRow.classList.add("shadow");
                }, 800);
            });
        }

        aboutT(btnL);
        aboutT(aboutMenu);

        // EVENTHANDLING CLIENTS

        function clientsT(trigger) {
            trigger.addEventListener("click", () => {
                window.history.pushState(
                    "object or string",
                    "Clients",
                    "/clients"
                );
                logo.classList.remove("scale-out-center");
                btnR.classList.add("heartbeat");
                setTimeout(() => {
                    home.classList.add("slide-out-blurred-bottom");
                }, 200);
                setTimeout(() => {
                    home.style.display = "none";
                    home.classList.remove("hMain");
                    // home.children[0].remove("hMain");
                    logo.classList.add("scale-in-center");
                    clients.style.display = "block";
                }, 550);
                setTimeout(() => {
                    logo.classList.add("scale-in-center");
                    naviRow.classList.add("shadow");
                }, 800);
            });
        }

        clientsT(btnR);

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
