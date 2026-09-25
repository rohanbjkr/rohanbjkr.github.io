/* =========================================================
   Revenue Tracking - Login
   ========================================================= */


/*
   =========================================================
   LOGIN DETAILS

   IMPORTANT:
   This is a CLIENT-SIDE login.

   It is NOT intended for confidential information.

   Anyone with access to the website source could technically
   inspect the JavaScript.

   Therefore use this only as an access gate.
   =========================================================
*/


const REVENUE_USERNAME = "admin";

const REVENUE_PASSWORD = "revenue2026";


/* =========================================================
   LOGIN PAGE
   ========================================================= */

const loginForm = document.getElementById("login-form");

const loginButton =
  document.getElementById("login-button");

const loginMessage =
  document.getElementById("login-message");


/* =========================================================
   PASSWORD VISIBILITY
   ========================================================= */

const passwordInput =
  document.getElementById("password");

const togglePassword =
  document.getElementById("toggle-password");


if (togglePassword) {

  togglePassword.addEventListener(
    "click",
    function () {

      if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "Hide";

      } else {

        passwordInput.type = "password";

        togglePassword.textContent = "Show";

      }

    }
  );

}


/* =========================================================
   LOGIN
   ========================================================= */

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


      loginMessage.textContent = "";

      loginMessage.className =
        "login-message";


      loginButton.disabled = true;

      loginButton.textContent =
        "Signing in...";


      /* Check credentials */

      if (
        username === REVENUE_USERNAME &&
        password === REVENUE_PASSWORD
      ) {

        /*
           Store login state in this browser.
        */

        sessionStorage.setItem(
          "revenue_logged_in",
          "true"
        );


        loginMessage.textContent =
          "Login successful. Redirecting...";

        loginMessage.className =
          "login-message success";


        setTimeout(function () {

          window.location.href =
            "{{ '/revenue/dashboard/' | relative_url }}";

        }, 300);


      } else {

        loginMessage.textContent =
          "Invalid username or password.";

        loginMessage.className =
          "login-message error";


        loginButton.disabled = false;

        loginButton.textContent =
          "Sign In";

      }

    }
  );

}
