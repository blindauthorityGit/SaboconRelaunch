<?php include('form_process.php'); ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
            rel="stylesheet"
        />

        <link rel="stylesheet" href="./css/main.css" />
        <link rel="stylesheet" href="./css/responsive.css" />
        <link rel="stylesheet" href="./css/form.css" />
        <link
            rel="stylesheet"
            href="./node_modules/animate.css/animate.min.css"
        />
        <script src="./js/app.js"></script>

        <script
            src="https://kit.fontawesome.com/a7b6339581.js"
            crossorigin="anonymous"
        ></script>
        <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
            crossorigin="anonymous"
        ></script>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
        />
    

        <title>Sabocon GmbH</title>
    </head>
    <body>
        <section class="" id="contactSection" style="display: block!important">
            <div class="container-fluid">
                <div class="row">
                    <div class="container vh100Container">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <h2><span>Write</span><span> us</span></h2>
                                <div class="formWrapper">
                                    <form id="contactForm" action= <?= $_SERVER["PHP_SELF"]; ?> method="post" name="contact"> 
                                    <fieldset>
                                        <label for="name">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your name"
                                            form="contactForm"
                                            value="<?= $name ?>"
                                        />
                                        <span class="error"><?= $name_error ?></span>
                                        </fieldset>
                                        <fieldset>
                                        <label for="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            form="contactForm"
                                            value="<?= $email ?>"
                                        />
                                        <span class="error"><?= $email_error ?></span>
                                        </fieldset>
                                        <fieldset>
                                        <label for="phone">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Your phone number"
                                            form="contactForm"
                                            value="<?= $phone ?>"
                                        />  
                                        <span class="error"><?= $phone_error ?></span>
                                        </fieldset>
                                        
                                  
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12" id="contactRight">
                            <fieldset>
                                <label for="message">Message</label>
                                <textarea
                                    placeholder="Write your message here"
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    form="contactForm"
                                    value="<?= $message ?>"
                                ></textarea>
                                </fieldset>

                                <div class="row">
                                    <div class="col-8 pb-3">
                                    <fieldset>
                                        <label for="captcha"
                                            >Lorem ipsum dolor sit amet cetur
                                            adipisicing elit.</label
                                        >
                                    </div>
                                    <div class="col">
                                        <input
                                            class="checkbox"
                                            type="checkbox"
                                            name="captcha"
                                            form="contactForm"

                                        />
                                        </fieldset>
                                    </div>
                                </div>
                                <fieldset>
                                <button form="contactForm" name="submit" type="submit" id="contactSubmit" data-submit="...Sending">send</button>  
                                </fieldset>
                                <span class="success"><?= $success ?></span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.608799005755!2d8.71278131557464!3d49.999943427604265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd72956356f097%3A0xf9c200b8c5da4da3!2sAlte%20Bogengasse%2025%2C%2063303%20Dreieich%2C%20Deutschland!5e0!3m2!1sde!2sat!4v1590532182233!5m2!1sde!2sat"
                        width="100%"
                        height="350"
                        frameborder="0"
                        style="border: 0;"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                    ></iframe>
                </div>
                <!-- <iframe
                    src="https://www.google.com/maps/d/drive?state=%7B%22ids%22%3A%5B%221Oro4kFtCJYm20PlpwaOIldICYA46dDSa%22%5D%2C%22action%22%3A%22open%22%2C%22userId%22%3A%22117220506716741473608%22%7D&usp=sharing"
                    frameborder="0"
                    width="600"
                    height="400"
                ></iframe> -->
                <div class="row bgDark pt-8 pb-8">
                    <div class="container">
                        <div class="row">
                            <div class="col-3">
                                <img
                                    id="logoContact"
                                    src="./img/logo_menu.svg"
                                    alt=""
                                />
                            </div>
                            <div class="col">
                                <h4>Sabocon GmbH</h4>
                                <p>
                                    Alte Bogengasse 25<br />
                                    63303 Dreieich
                                </p>
                                <p>Germany</p>
                            </div>
                            <div class="col">
                                <div class="wrapper">
                                    <span class="icon"
                                        ><i class="fas fa-mobile-alt"></i
                                    ></span>
                                    <span class="bold">0049-6103-9849-37</span>
                                </div>
                                <div class="wrapper">
                                    <span class="icon"
                                        ><i class="fas fa-mobile-alt"></i
                                    ></span>
                                    <span class="bold"> 0049-6103-9849-38</span>
                                </div>
                                <div class="wrapper">
                                    <span class="icon"
                                        ><i class="far fa-envelope"></i>
                                    </span>
                                    <span class="bold"
                                        >contact[at]sabocon.com</span
                                    >
                                </div>
                                <div class="row">
                                    <div class="col pt-4">
                                        <img
                                            class="contrast"
                                            src="./img/facebook.svg"
                                            alt=""
                                        />
                                        <img
                                            class="contrast"
                                            src="./img/instagram.svg"
                                            alt=""
                                        />
                                        <img
                                            class="contrast"
                                            src="./img/twitter.svg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.10/lottie.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
    </body>
</html>
