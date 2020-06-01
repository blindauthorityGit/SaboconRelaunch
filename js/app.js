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
        const contactMenu = document.getElementById("contact");
        const clients = document.getElementById("clientSection");
        const naviRow = document.getElementById("naviRow");
        const aboutRow = document.getElementsByClassName("aboutgrid");
        const popup = document.getElementById("popup");
        const cloud = document.getElementById("cloud");
        const overlay = document.getElementById("overlay");
        const scroller = document.getElementsByClassName("scroller");
        const interdrinks = document.getElementById("interdrinks");
        const frontPathKreis = document.getElementById("frontPathKreis");
        const useCaseOne = Array.from(
            document.getElementsByClassName("useCaseOne")
        );
        const top = document.getElementById("top");
        const pathTop = Array.from(document.getElementsByClassName("pathTop"));
        const pathBottom = Array.from(
            document.getElementsByClassName("pathBottom")
        );
        const contact = document.getElementById("contactSection");
        const frontPathTablet = document.getElementById("frontPathTablet");
        const bgWhole = document.getElementById("bgWhole");
        const popupHeadline = document.getElementById("popupHeadline");
        const popupImg = document.getElementById("popupImg");

        const imgs = [
            "cloud.svg",
            "wifi.svg",
            "internet.svg",
            "store.svg",
            "crm.svg",
            "app.svg",
            "content.svg",
            "social.svg",
            "licence.svg",
            "design.svg",
            "media.svg",
            "sound.svg",
            "soundengine.svg",
            "musicians.svg",
            "events.svg",
        ];

        // Padding for Grid Icons

        Array.from(aboutRow[0].children).map((e) => {
            e.classList.add("pb-3");
        });

        // Responisve Width for SVG Topper and Bottom

        let intViewportWidth = window.innerWidth;
        let intViewportHeight = window.innerWidth / 6.9818181818181;
        let intViewportHeightBottom = intViewportWidth / 6.9818181818181;

        setInterval(() => {
            intViewportWidth = window.innerWidth;
            intViewportHeight = intViewportWidth / 6.9818181818181;
            intViewportHeightBottom = intViewportWidth / 6.9818181818181;

            Array.from(pathTop[0].children)[0].style.width = intViewportWidth;
            Array.from(pathTop[0].children)[0].style.height = intViewportHeight;

            Array.from(pathTop[1].children)[0].style.width = intViewportWidth;
            Array.from(pathTop[1].children)[0].style.height = intViewportHeight;

            // Array.from(pathTop[2].children)[0].style.width = intViewportWidth;
            // Array.from(pathTop[2].children)[0].style.height = intViewportHeight;

            Array.from(
                pathBottom[0].children
            )[0].style.width = intViewportWidth;
            Array.from(
                pathBottom[0].children
            )[0].style.height = intViewportHeightBottom;

            Array.from(
                pathBottom[1].children
            )[0].style.width = intViewportWidth;
            Array.from(
                pathBottom[1].children
            )[0].style.height = intViewportHeightBottom;
        }, 500);

        console.log(pathBottom);
        console.log(pathBottom);

        let widthers = pathTop[1].innerHTML;
        let re = /768/gi;

        Array.from(pathTop[0].children)[0].style.width = intViewportWidth;
        Array.from(pathTop[0].children)[0].style.height = intViewportHeight;

        Array.from(pathTop[1].children)[0].style.width = intViewportWidth;
        Array.from(pathTop[1].children)[0].style.height = intViewportHeight;

        Array.from(pathBottom[0].children)[0].style.width = intViewportWidth;
        Array.from(
            pathBottom[0].children
        )[0].style.height = intViewportHeightBottom;

        Array.from(pathBottom[1].children)[0].style.width = intViewportWidth;
        Array.from(
            pathBottom[1].children
        )[0].style.height = intViewportHeightBottom;

        window.addEventListener("scroll", () => {
            if ($(window).scrollTop() > 600) {
                console.log("geht");
            }
        });
        // GET ABOUT GRID
        let Obj1 = aboutRow[0].childNodes;
        // let Obj2 = aboutRow[1].childNodes;
        // let Obj3 = aboutRow[2].childNodes;
        let rowOne = Object.values(Obj1).filter((e) => e.nodeName != "#text");
        // let rowTwo = Object.values(Obj2).filter((e) => e.nodeName != "#text");
        // let rowThree = Object.values(Obj3).filter((e) => e.nodeName != "#text");

        // Get URL
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
                    home.classList.remove("animate__animated");
                    home.classList.remove("animate__bounceOutDown");
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

        var _getDistanceFromTop = function (selector) {
            var scrollTop = $(window).scrollTop(),
                elementOffset = selector.offset().top,
                distance = elementOffset - scrollTop;
            return distance;
        };

        clientsMenu.addEventListener("click", () => {
            window.scrollTo(0, 0);
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
                    overlay.classList.remove("fade-out");
                    popup.style.display = "block";
                    popup.classList.remove("hideSide");
                    popup.classList.add("animate__animated");
                    popup.classList.add("animate__bounceInRight");
                    // popup.classList.add("slide-in-right");
                    overlay.style.display = "block";
                    overlay.classList.add("show");

                    console.log(e.id);
                    popupHeadline.innerHTML = e.children[1].innerHTML;
                    popupImg.src = "./SaboconRelaunch/img/orange/" + imgs[e.id];
                });
            });
        }

        overlay.addEventListener("click", () => {
            if (event.target != popup) {
                popup.classList.remove("animate__animated");
                popup.classList.remove("animate__bounceInRight");
                popup.classList.remove("slide-in-right");
                popup.classList.add("hideSide");
                popup.classList.add("slide-out-right");
                overlay.classList.add("fade-out");
                setTimeout(() => {
                    overlay.style.display = "none";
                }, 450);
            }
        });

        clickRow(rowOne);
        // clickRow(rowTwo);
        // clickRow(rowThree);

        // STart Animations delay

        setTimeout(() => {
            hOneL.classList.add("slide-in-left");
        }, 300);
        setTimeout(() => {
            hOneR.classList.add("slide-in-right");
        }, 400);

        // BTN EventHandling ABOUT

        function aboutT(trigger) {
            trigger.addEventListener("click", () => {
                window.history.pushState("object or string", "About", "/about");

                href = window.location.href;
                Array.from(scroller).map((e) =>
                    e.classList.remove("scrollSnap")
                );
                logo.classList.remove("scale-out-center");
                btnL.classList.add("heartbeat");
                clients.classList.remove("slide-in-right");
                clients.classList.remove("slide-in-left");
                setTimeout(() => {
                    home.classList.add("animate__animated");
                    home.classList.add("animate__bounceOutDown");
                    // frontPathTablet.classList.add("animate__animated");
                    // frontPathTablet.classList.add("animate__bounceOutUp");
                    bgWhole.classList.add("animate__animated");
                    bgWhole.classList.add("animate__bounceOutUp");
                    clients.classList.add("slide-out-right");
                    contact.classList.add("slide-out-right");
                    about.classList.add("slide-in-left");
                }, 100);
                setTimeout(() => {
                    home.style.display = "none";
                    clients.style.display = "none";
                    contact.style.display = "none";
                    home.classList.remove("hMain");
                    logo.classList.add("scale-in-center");
                    // rowFade(rowOne);
                    // rowFade(rowTwo);
                    // rowFade(rowThree);
                    about.style.display = "block";
                    frontPathKreis.style.display = "none";
                }, 650);
                setTimeout(() => {
                    logo.classList.add("scale-in-center");
                    naviRow.classList.add("shadow");
                    clients.classList.remove("slide-out-right");
                    contact.classList.remove("slide-out-right");
                }, 700);
                setTimeout(() => {
                    about.classList.remove("slide-in-left");
                }, 1000);
            });
        }

        aboutT(btnL);
        aboutT(aboutMenu);

        // EVENTHANDLING CLIENTS

        let ampel = false;
        function clientsT(trigger) {
            trigger.addEventListener("click", () => {
                if (dir == "contact") {
                    ampel = true;
                }
                window.scrollTo(0, 0);
                window.history.pushState(
                    "object or string",
                    "Clients",
                    "/clients"
                );
                console.log(dir == "contact");
                logo.classList.remove("scale-out-center");
                btnR.classList.add("heartbeat");
                setTimeout(() => {
                    home.classList.add("animate__animated");
                    home.classList.add("animate__bounceOutDown");
                    about.classList.add("slide-out-left");
                    contact.classList.add("slide-out-right");
                }, 100);
                setTimeout(() => {
                    home.style.display = "none";
                    home.classList.remove("hMain");
                    // home.children[0].remove("hMain");
                    logo.classList.add("scale-in-center");
                    clients.style.display = "block";
                    if (ampel) {
                        clients.classList.add("slide-in-left");
                    } else {
                        clients.classList.add("slide-in-right");
                    }
                    about.style.display = "none";
                    contact.style.display = "none";
                    frontPathKreis.style.display = "none";
                }, 650);
                setTimeout(() => {
                    logo.classList.add("scale-in-center");
                    naviRow.classList.add("shadow");
                    about.classList.remove("slide-out-left");
                    contact.classList.remove("slide-out-right");

                    Array.from(scroller).map((e) =>
                        e.classList.add("scrollSnap")
                    );
                    ampel = false;
                }, 700);
            });
        }

        clientsT(btnR);
        clientsT(clientsMenu);

        // COONTACT BUTTON

        function contactsT(trigger) {
            trigger.addEventListener("click", () => {
                window.scrollTo(0, 0);
                window.history.pushState(
                    "object or string",
                    "Contact",
                    "/contact"
                );
                clients.classList.remove("slide-in-left");
                clients.classList.remove("slide-in-right");
                logo.classList.remove("scale-out-center");
                btnR.classList.add("heartbeat");
                setTimeout(() => {
                    home.classList.add("animate__animated");
                    home.classList.add("animate__bounceOutDown");
                    about.classList.add("slide-out-left");
                    clients.classList.add("slide-out-left");
                }, 100);
                setTimeout(() => {
                    home.style.display = "none";
                    home.classList.remove("hMain");
                    // home.children[0].remove("hMain");
                    logo.classList.add("scale-in-center");
                    clients.style.display = "none";
                    contact.style.display = "block";
                    contact.classList.add("slide-in-right");
                    about.style.display = "none";
                    frontPathKreis.style.display = "none";
                }, 650);
                setTimeout(() => {
                    logo.classList.add("scale-in-center");
                    naviRow.classList.add("shadow");
                    about.classList.remove("slide-out-left");
                    clients.classList.remove("slide-out-left");
                    Array.from(scroller).map((e) =>
                        e.classList.add("scrollSnap")
                    );
                }, 700);
            });
        }

        contactsT(contactMenu);
    },
    false
);
