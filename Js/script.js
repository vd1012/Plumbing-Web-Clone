// Navbar Js Start
function toggleNav() {
  var nav = document.getElementById("nav-links");

  if (!nav) {
    return 1; 
  }

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

  return 0; 
}


let currentIndex = 0;
const images = document.querySelectorAll(".slider-img");
const totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });
}

document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
});

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
});

// Optional: Auto-slide functionality
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}, 4000);

// Function to toggle the visibility of content sections
function toggleContent(buttonId, contentId) {
  const button = document.getElementById(buttonId);
  const content = document.getElementById(contentId);

  button.addEventListener("click", function () {
    // Toggle the hidden class on the content
    content.classList.toggle("hidden");

    // Toggle the arrow direction (down or up)
    if (content.classList.contains("hidden")) {
      button.innerHTML = button.innerHTML.replace("⮝", "⮟");
    } else {
      button.innerHTML = button.innerHTML.replace("⮟", "⮝");
    }
  });
}

// Call the function for each button-content pair
toggleContent("toggleButton1", "content1");
toggleContent("toggleButton2", "content2");
toggleContent("toggleButton3", "content3");
toggleContent("toggleButton4", "content4");
toggleContent("toggleButton5", "content5");
toggleContent("toggleButton6", "content6");
toggleContent("toggleButton7", "content7");


function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const plumbingOption = document.getElementById('plumbingOption').value;
  const message = document.getElementById('message').value;

  if (name === "" || email === "" || number === "" || plumbingOption === "" || message === "") {
      alert("All fields must be filled out.");
      return false;
  }
  
  if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
  }
  
  return true;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
