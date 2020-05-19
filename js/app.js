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
        const clientsMenu = document.getElementById("clients");
        const clients = document.getElementById("clientSection");
        const naviRow = document.getElementById("naviRow");
        const aboutRow = document.getElementsByClassName("aboutgrid");
        const popup = document.getElementById("popup");
        const cloud = document.getElementById("cloud");
        const overlay = document.getElementById("overlay");

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
                    home.classList.remove("slide-out-bottom");
                    home.classList.add("slide-in-right");
                } else if (dir == "about") {
                    home.style.display = "none";
                    clients.style.display = "none";
                    about.style.display = "block";
                    about.classList.add("slide-in-left");
                    naviRow.classList.add("shadow");
                    logo.classList.remove("scale-out-center");
                    logo.classList.add("scale-in-center");
                } else if (dir == "clients") {
                    home.style.display = "none";
                    about.style.display = "none";
                    clients.style.display = "block";
                    clients.classList.add("slide-in-left");
                    naviRow.classList.add("shadow");
                    logo.classList.remove("scale-out-center");
                    logo.classList.add("scale-in-center");
                }
            }, 100);
        });

        function rowFade(row) {
            for (let i = 0; i < row.length; i++) {
                setTimeout(function timer() {
                    row[i].classList.add("slide-in-left");
                }, i * 100);
            }
            setTimeout(() => {
                for (let i = 0; i < row.length; i++) {
                    row[i].classList.remove("slide-in-left");
                }
            }, 800);
        }
        // document.getElementById("wifi").addEventListener("mouseover", () => {
        //     console.log("wifi");
        //     event.target.src = "./img/wifi.gif";
        // });
        function clickRow(row) {
            row.map((e) => {
                e.addEventListener("click", () => {
                    overlay.classList.remove("slide-out-left");
                    popup.style.display = "block";
                    popup.classList.remove("hideSide");
                    popup.classList.add("slide-in-right");
                    overlay.style.display = "block";
                    overlay.classList.add("show");

                    console.log(e.children[1].innerHTML);
                });
            });
        }

        overlay.addEventListener("click", () => {
            if (event.target != popup) {
                popup.classList.remove("slide-in-right");
                popup.classList.add("hideSide");
                overlay.classList.add("slide-out-left");
            }
        });

        document.body.addEventListener("click", () => {
            console.log(event.target);
        });

        clickRow(rowOne);
        clickRow(rowTwo);
        clickRow(rowThree);

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

                href = window.location.href;
                logo.classList.remove("scale-out-center");
                btnL.classList.add("heartbeat");
                setTimeout(() => {
                    home.classList.add("slide-out-bottom");
                    clients.classList.add("slide-out-right");
                    about.classList.add("slide-in-left");
                }, 100);
                setTimeout(() => {
                    home.style.display = "none";
                    clients.style.display = "none";

                    home.classList.remove("hMain");
                    logo.classList.add("scale-in-center");
                    // rowFade(rowOne);
                    // rowFade(rowTwo);
                    // rowFade(rowThree);
                    about.style.display = "block";
                }, 650);
                setTimeout(() => {
                    logo.classList.add("scale-in-center");
                    naviRow.classList.add("shadow");
                    clients.classList.remove("slide-out-right");
                }, 800);
                setTimeout(() => {
                    about.classList.remove("slide-in-left");
                }, 1500);
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
                    home.classList.add("slide-out-bottom");
                    about.classList.add("slide-out-left");
                }, 100);
                setTimeout(() => {
                    home.style.display = "none";
                    home.classList.remove("hMain");
                    // home.children[0].remove("hMain");
                    logo.classList.add("scale-in-center");
                    clients.style.display = "block";
                    clients.classList.add("slide-in-right");
                    about.style.display = "none";
                }, 650);
                setTimeout(() => {
                    logo.classList.add("scale-in-center");
                    naviRow.classList.add("shadow");
                    about.classList.remove("slide-out-left");
                }, 800);
            });
        }

        clientsT(btnR);
        clientsT(clientsMenu);

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
