// const signupForm = document.getElementById('signupForm');
// const loginForm = document.getElementById('loginForm');
// //const messageDiv = document.getElementById('message');
// if (signupForm) {

//   signupForm.reset();
//   signupForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const name = document.getElementById('signup-name').value.trim();
//     const email = document.getElementById('signup-email').value.trim();
//     const password = document.getElementById('signup-password').value;

//     const res = await fetch('/api/auth/signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name, email, password }),
//     });

//     const data = await res.json();
//     alert(data.message);
//     // if (!data.error) {

//     //   signupForm.reset();
//     //   window.location.href = "login.html";
//     // }
//     if (res.ok) {
//       alert("Signup successful!");
//       signupForm.reset(); // ✅ clears inputs
//       window.location.href = "login.html";
//     }


//   });
// }

// if (loginForm) {
//   loginForm.reset();
//   loginForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const email = document.getElementById('login-email').value.trim();
//     const password = document.getElementById('login-password').value;

//     const res = await fetch('/api/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();
//     if (data.token) {
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("userId", data.user.id);

//       window.location.href = "courses.html";
//     } else {
//       alert(data.message);
//     }

//   });
// }
// document.addEventListener("DOMContentLoaded", () => {
//   const token = localStorage.getItem("token");
//   const navLinks = document.getElementById("nav-links");
//   const loginLink = document.getElementById("loginLink");

//   if (token && navLinks && loginLink) {
//     // const myCoursesLink = document.createElement("a");
//     // myCoursesLink.href = "my-courses.html";
//     // myCoursesLink.textContent = "My Courses";

//     // navLinks.insertBefore(myCoursesLink, loginLink);

//     if (!document.getElementById("myCoursesLink")) {
//       const myCoursesLink = document.createElement("a");
//       myCoursesLink.id = "myCoursesLink";  // Give it an ID to prevent duplicates
//       myCoursesLink.href = "my-courses.html";
//       myCoursesLink.textContent = "My Courses";
//       navLinks.insertBefore(myCoursesLink, loginLink);
//     }

//     loginLink.textContent = "Logout";
//     loginLink.href = "#";
//     loginLink.addEventListener("click", (e) => {
//       e.preventDefault(); // prevent jumping to top
//       localStorage.removeItem("token");
//       localStorage.removeItem("userId");
//       location.href = "index.html";
//       //location.reload();
//     });
//   }
// });




const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      signupForm.reset();   // ✅ clears inputs after signup
      window.location.href = "login.html";
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user.id);

      loginForm.reset();   // ✅ clears inputs after login
      window.location.href = "courses.html";
    } else {
      alert(data.message);
    }
  });
}

// Navbar auth check
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  const navLinks = document.getElementById("nav-links");
  const loginLink = document.getElementById("loginLink");

  if (token && navLinks && loginLink) {
    if (!document.getElementById("myCoursesLink")) {
      const myCoursesLink = document.createElement("a");
      myCoursesLink.id = "myCoursesLink";
      myCoursesLink.href = "my-courses.html";
      myCoursesLink.textContent = "My Courses";
      navLinks.insertBefore(myCoursesLink, loginLink);
    }

    loginLink.textContent = "Logout";
    loginLink.href = "#";
    loginLink.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      location.href = "index.html";
    });
  }
});

