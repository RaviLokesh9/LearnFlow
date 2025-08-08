document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username") || "Guest";
    document.querySelector(".username").textContent = `Welcome ${username}`;
  });
//logout
function logout() {
    localStorage.removeItem("username"); // Clear the stored username
    document.querySelector(".username").textContent = "Welcome Guest"; // Update the text
    document.getElementById("courses").remove();
    document.getElementById("logout").remove();
  }
  
const textList = ["POWERFUL", "FLEXIBLE", "PRACTICAL", "IN-DEMAND"];
let index = 0;
const dynamicText = document.getElementById("dynamic-text");

setInterval(() => {
  index = (index + 1) % textList.length;
  dynamicText.innerText = textList[index];
}, 2000);

//search 
const allCourses = [
    { name: "Full Stack Web Development", icon: "https://img.icons8.com/color/48/html-5--v1.png" },
    { name: "Python for Beginners", icon: "https://img.icons8.com/color/48/python--v1.png" },
    { name: "Data Science", icon: "https://img.icons8.com/color/48/artificial-intelligence.png" },
    { name: "Machine Learning", icon: "https://img.icons8.com/color/48/machine-learning.png" },
    { name: "Graphic Designing", icon: "https://img.icons8.com/color/48/adobe-photoshop.png" },
    { name: "UI/UX Design", icon: "https://img.icons8.com/color/48/design.png" },
    { name: "Cloud Computing", icon: "https://img.icons8.com/color/48/cloud.png" },
    { name: "C Programming", icon: "https://img.icons8.com/color/48/c-programming.png" },
    { name: "Java Programming", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" },
    { name: "Data Structures", icon: "https://img.icons8.com/color/48/data-configuration.png" },
  ];
  
  const searchBox = document.getElementById("searchBox");
  const suggestionsBox = document.getElementById("suggestions");
  const courseList = document.getElementById("courseList");
  
  // Show all courses initially
  function displayCourses(courses) {
    courseList.innerHTML = "";
    courses.forEach(course => {
      const courseCard = document.createElement("div");
      courseCard.className = "course-card";
      courseCard.innerHTML = `
        <img src="${course.icon}" alt="${course.name}" />
        <p>${course.name}</p>
      `;
      courseList.appendChild(courseCard);
    });
  }
  
  // Filter courses based on input
  searchBox.addEventListener("input", () => {
    const input = searchBox.value.toLowerCase();
    const filteredCourses = allCourses.filter(course =>
      course.name.toLowerCase().includes(input)
    );
  
    suggestionsBox.innerHTML = "";
  
    if (input === "") {
      suggestionsBox.style.display = "none";
      displayCourses(allCourses); // show all
      return;
    }
  
    filteredCourses.forEach(course => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      item.innerHTML = `<img src="${course.icon}" alt="${course.name}" /> ${course.name}`;
      item.onclick = () => {
        searchBox.value = course.name;
        suggestionsBox.style.display = "none";
        displayCourses([course]); // display only the selected course
      };
      suggestionsBox.appendChild(item);
    });
  
    suggestionsBox.style.display = filteredCourses.length ? "block" : "none";
    displayCourses(filteredCourses);
  });
  
  // On focus, show all suggestions
  searchBox.addEventListener("focus", () => {
    suggestionsBox.innerHTML = "";
    allCourses.forEach(course => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      item.innerHTML = `<img src="${course.icon}" alt="${course.name}" /> ${course.name}`;
      item.onclick = () => {
        searchBox.value = course.name;
        suggestionsBox.style.display = "none";
        displayCourses([course]);
      };
      suggestionsBox.appendChild(item);
    });
    suggestionsBox.style.display = "block";
  });
  
  // Hide suggestions on blur
  searchBox.addEventListener("blur", () => {
    setTimeout(() => suggestionsBox.style.display = "none", 200);
  });
  
  // Initially display all courses
  displayCourses(allCourses);
  
  // Logout function (optional logic)
  // function logout() {
  //   localStorage.removeItem("username");
  //   document.querySelector(".username").textContent = "Welcome";
  //   document.getElementById("courses")?.remove();
  // }
  

  