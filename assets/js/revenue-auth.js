/* =========================================================
   Revenue Tracking Authentication
   ========================================================= */

/*
   IMPORTANT:
   Replace these two values after creating your Supabase project.
*/

const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";


/* ---------------------------------------------------------
   Create Supabase client
   --------------------------------------------------------- */

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


/* ---------------------------------------------------------
   Elements
   --------------------------------------------------------- */

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");


/* ---------------------------------------------------------
   Show / hide password
   --------------------------------------------------------- */

if (togglePassword) {

  togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

      passwordInput.type = "text";
      togglePassword.textContent = "Hide";

    } else {

      passwordInput.type = "password";
      togglePassword.textContent = "Show";

    }

  });

}


/* ---------------------------------------------------------
   Check whether user is already logged in
   --------------------------------------------------------- */

async function checkExistingSession() {

  const {
    data: { session }
  } = await supabaseClient.auth.getSession();

  if (session) {

    /*
       Later this will check the user's role.

       For now, send authenticated users
       to the dashboard.
    */

    window.location.href =
      "{{ '/revenue/dashboard/' | relative_url }}";

  }

}


/* ---------------------------------------------------------
   Login
   --------------------------------------------------------- */

if (loginForm) {

  loginForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const email =
      document.getElementById("email").value.trim();

    const password =
      document.getElementById("password").value;

    loginMessage.textContent = "";
    loginMessage.className = "login-message";

    loginButton.disabled = true;
    loginButton.textContent = "Signing in...";


    try {

      const {
        data,
        error
      } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
      });


      if (error) {
        throw error;
      }


      if (!data.session) {
        throw new Error("Login was not completed.");
      }


      loginMessage.textContent =
        "Login successful. Redirecting...";

      loginMessage.className =
        "login-message success";


      window.location.href =
        "{{ '/revenue/dashboard/' | relative_url }}";


    } catch (error) {

      console.error(error);

      loginMessage.textContent =
        error.message || "Unable to sign in.";

      loginMessage.className =
        "login-message error";

      loginButton.disabled = false;
      loginButton.textContent = "Sign In";

    }

  });

}


/* ---------------------------------------------------------
   Start
   --------------------------------------------------------- */

checkExistingSession();
