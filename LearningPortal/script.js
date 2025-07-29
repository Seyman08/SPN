// // Simulate fake login for now
// document.addEventListener("DOMContentLoaded", () => {
//   const loginForm = document.getElementById("loginForm");
//   const isDashboard = window.location.pathname.includes("dashboard.html");

//   if (loginForm) {
//     loginForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const email = document.getElementById("email").value;
//       const password = document.getElementById("password").value;

//       // Fake login: just check if email & password are not empty
//       if (email && password) {
//         localStorage.setItem("userEmail", email);
//         window.location.href = "dashboard.html";
//       } else {
//         document.getElementById("error-msg").innerText = "Login failed.";
//       }
//     });
//   }

//   // If we're on dashboard.html
//   if (isDashboard) {
//     const userEmail = localStorage.getItem("userEmail");
//     if (!userEmail) {
//       alert("You must log in first.");
//       window.location.href = "login.html";
//       return;
//     }

//     // Display welcome message
//     document.getElementById("welcomeMessage").innerText = `Welcome back, ${userEmail}!`;

//     // Show some fake course cards
//     const courses = [
//       { title: "Healing from Addiction", description: "Start your recovery journey" },
//       { title: "Mentorship Training", description: "Learn how to support others" }
//     ];

//     const container = document.getElementById("coursesContainer");
//     courses.forEach((course) => {
//       const card = document.createElement("div");
//       card.className = "card";
//       card.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
//       container.appendChild(card);
//     });
//   }
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const isDashboard = window.location.pathname.includes("dashboard.html");

//   if (isDashboard) {
//     const userEmail = localStorage.getItem("userEmail") || "User";
//     document.getElementById("welcomeMessage").innerText = `Welcome back, ${userEmail}!`;

//     const courses = [
//       {
//         title: "Healing from Addiction",
//         description: "Learn steps to overcome addiction through biblical teaching."
//       },
//       {
//         title: "Mentorship Training",
//         description: "Prepare to guide and support others in purity."
//       },
//       {
//         title: "Purity Foundations",
//         description: "Build your walk from the ground up with core principles."
//       }
//     ];

//     const container = document.getElementById("coursesContainer");
//     courses.forEach((course, i) => {
//       const card = document.createElement("div");
//       card.className = "card";
//       card.style.animationDelay = `${i * 0.1}s`; // stagger animations
//       card.innerHTML = `
//         <h3>${course.title}</h3>
//         <p>${course.description}</p>
//       `;
//       container.appendChild(card);
//     });
//   }
// });



// document.addEventListener("DOMContentLoaded", () => {
//   const isDashboard = window.location.pathname.includes("dashboard.html");

//   if (isDashboard) {
//     const userEmail = localStorage.getItem("userEmail") || "User";
//     document.getElementById("welcomeMessage").innerText = `Welcome back, ${userEmail}!`;

//     // Sample course data with progress
//     const courses = [
//       {
//         title: "Healing from Addiction",
//         description: "Learn steps to overcome addiction through biblical teaching.",
//         progress: 80,
//       },
//       {
//         title: "Mentorship Training",
//         description: "Prepare to guide and support others in purity.",
//         progress: 45,
//       },
//       {
//         title: "Purity Foundations",
//         description: "Build your walk from the ground up with core principles.",
//         progress: 20,
//       }
//     ];

//     const container = document.getElementById("coursesContainer");
//     courses.forEach((course, i) => {
//       const card = document.createElement("div");
//       card.className = "card";
//       card.style.animationDelay = `${i * 0.1}s`;

//       card.innerHTML = `
//         <h3>${course.title}</h3>
//         <p>${course.description}</p>
//         <div class="progress-bar">
//           <div class="progress-fill" style="width: ${course.progress}%;"></div>
//         </div>
//       `;
//       container.appendChild(card);
//     });

//     // Handle logout
//     const logoutBtn = document.getElementById("logoutBtn");
//     logoutBtn.addEventListener("click", () => {
//       localStorage.removeItem("userEmail");
//       window.location.href = "login.html";
//     });
//   }
// });
