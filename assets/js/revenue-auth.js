/* =====================================================
   REVENUE TRACKING
   LOGIN SYSTEM
   ===================================================== */


/* -----------------------------------------------------
   LOGIN CREDENTIALS

   IMPORTANT:

   This is a client-side login system.

   It is NOT suitable for confidential information.

   Anyone technically capable of inspecting the
   JavaScript source can discover/bypass it.

   It is being used here as an access gate for
   non-confidential revenue information.
   ----------------------------------------------------- */

const REVENUE_USERNAME = "admin";

const REVENUE_PASSWORD = "revenue2026";


/* =====================================================
   LOGIN PAGE
   ===================================================== */

const loginForm =
    document.getElementById("login-form");


const loginButton =
    document.getElementById("login-button");


const loginMessage =
    document.getElementById("login-message");


const passwordInput =
    document.getElementById("password");


const togglePassword =
    document.getElementById("toggle-password");


/* =====================================================
   PASSWORD SHOW / HIDE
   ===================================================== */

if (togglePassword) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (
                passwordInput.type ===
                "password"
            ) {

                passwordInput.type =
                    "text";

                togglePassword.textContent =
                    "Hide";

            }

            else {

                passwordInput.type =
                    "password";

                togglePassword.textContent =
                    "Show";

            }

        }
    );

}


/* =====================================================
   LOGIN
   ===================================================== */

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const username =
                document
                    .getElementById("username")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("password")
                    .value;


            /* Clear previous message */

            loginMessage.textContent = "";

            loginMessage.className =
                "login-message";


            /* Disable button */

            loginButton.disabled =
                true;

            loginButton.textContent =
                "Signing in...";


            /* -----------------------------------------
               CHECK LOGIN
               ----------------------------------------- */

            if (
                username ===
                    REVENUE_USERNAME
                &&
                password ===
                    REVENUE_PASSWORD
            ) {

                /*
                   Store login state only for
                   the current browser session.
                */

                sessionStorage.setItem(
                    "revenue_logged_in",
                    "true"
                );


                sessionStorage.setItem(
                    "revenue_username",
                    username
                );


                loginMessage.textContent =
                    "Login successful. Redirecting...";


                loginMessage.className =
                    "login-message success";


                /* Redirect */

                setTimeout(
                    function () {

                        window.location.href =
                            "/revenue/dashboard/";

                    },
                    300
                );

            }


            /* -----------------------------------------
               INVALID LOGIN
               ----------------------------------------- */

            else {

                loginMessage.textContent =
                    "Invalid username or password.";


                loginMessage.className =
                    "login-message error";


                loginButton.disabled =
                    false;


                loginButton.textContent =
                    "Sign In";

            }

        }
    );

}
