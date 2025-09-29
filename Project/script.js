
document.addEventListener("DOMContentLoaded", function(){
  // เมนู toggle
  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");
  if(navToggle && navLinks) {
    navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      navLinks.classList.remove("open");
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // จัดการ login/logout
  const loginLink = document.getElementById("loginLink");
  const logoutLink = document.getElementById("logoutLink");
  const currentUser = localStorage.getItem("currentUser");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if(loginLink && logoutLink) {
    if(isLoggedIn === "true" && currentUser){
      loginLink.textContent = "👤 " + currentUser;
      loginLink.removeAttribute("href");
      logoutLink.style.display = "inline";
    } else {
      loginLink.textContent = "เข้าสู่ระบบ";
      loginLink.setAttribute("href", "ล็อคอิน.html");
      logoutLink.style.display = "none";
    }

    logoutLink.addEventListener("click", function(e){
      e.preventDefault();
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("currentUser");
      window.location.reload();
    });
  }

  // จัดการ admin link (ถ้ามี)
  const adminLink = document.getElementById("adminLink");
  if(adminLink) {
    if(localStorage.getItem("isAdmin") === "true") {
      adminLink.style.display = "inline";
    } else {
      adminLink.style.display = "none";
    }
  }
});
