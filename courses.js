// ===============================
// COURSE DATA
// ===============================
const courseData = [
    {
      name: "Full Stack Web Development",
      icon: "https://img.icons8.com/color/96/html-5--v1.png",
      description: "Learn to build responsive websites and web apps using HTML, CSS, JS, and backend technologies."
    },
    {
      name: "Python for Beginners",
      icon: "https://img.icons8.com/color/96/python--v1.png",
      description: "Start programming with Python. Ideal for beginners with no coding experience."
    },
    {
      name: "Data Structures",
      icon: "https://img.icons8.com/color/96/graph.png",
      description: "Learn the fundamentals of data structures and algorithms to build efficient software."
    },
    {
      name: "Java Programming",
      icon: "https://img.icons8.com/color/96/java-coffee-cup-logo.png",
      description: "Object-oriented programming, GUI development, and backend using Java."
    },
    {
      name: "Machine Learning",
      icon: "https://img.icons8.com/quill/100/artificial-intelligence.png",
      description: "Explore ML models, algorithms, and real-world projects with Python and libraries like Scikit-learn."
    },
    {
      name: "Artificial Intelligence",
      icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-artificial-intelligence-smart-technology-flaticons-lineal-color-flat-icons-2.png",
      description: "Dive into AI concepts including neural networks, NLP, and deep learning."
    },
    {
      name: "Data Science",
      icon: "https://img.icons8.com/external-becris-lineal-becris/64/external-data-science-data-science-becris-lineal-becris.png",
      description: "Analyze, visualize, and derive insights from data using tools like Pandas, NumPy, and Tableau."
    },
    {
      name: "Graphic Designing",
      icon: "https://img.icons8.com/color/96/adobe-photoshop.png",
      description: "Master tools like Photoshop and Illustrator to create stunning graphics and designs."
    },
    {
      name: "UI/UX Design",
      icon: "https://img.icons8.com/color/96/design.png",
      description: "Learn principles of user interface and experience design to craft user-friendly apps."
    },
    {
      name: "Cloud Computing",
      icon: "https://img.icons8.com/color/96/cloud.png",
      description: "Understand cloud services like AWS, Azure, and deploy scalable apps to the cloud."
    },
    {
      name: "C Programming",
      icon: "https://img.icons8.com/color/96/c-programming.png",
      description: "Get a strong foundation in programming with C language including memory management and pointers."
    }
  ];
  
  // ===============================
  // DOM ELEMENTS
  // ===============================
  const courseList = document.getElementById("courseList");
  const searchBox = document.getElementById("searchBox");
  const suggestionsBox = document.getElementById("suggestions");
  
  // ===============================
  // RENDER COURSES
  // ===============================
  function renderCourses(courses) {
    // Clear previous results
    courseList.innerHTML = "";
  
    // If no course matches
    if (courses.length === 0) {
      courseList.innerHTML = "<p style='text-align:center;'>No results found.</p>";
      return;
    }
  
    // Loop through courses and create course card
    courses.forEach(course => {
      const card = document.createElement("div");
      card.className = "course-card";
  
      // Dynamic link to static HTML page
      const linkName = course.name.toLowerCase().replace(/\s+/g, '') + ".html";
  
      // Create course card content
      card.innerHTML = `
        <img src="${course.icon}" alt="${course.name}" class="course-icon">
        <h3>${course.name}</h3>
        <p>${course.description}</p>
        <a href="${linkName}" class="enroll-btn">Enroll Now</a>
      `;
      courseList.appendChild(card);
    });
  }
  
  // ===============================
  // INITIAL LOAD
  // ===============================
  renderCourses(courseData);
  
  // ===============================
  // SEARCH INPUT EVENT
  // ===============================
  searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase();
  
    // Filter courses based on query
    const filteredCourses = courseData.filter(course =>
      course.name.toLowerCase().includes(query)
    );
  
    // Render matched courses
    renderCourses(filteredCourses);
  
    // Update search suggestions
    updateSuggestions(query);
  });
  
  // ===============================
  // UPDATE SEARCH SUGGESTIONS
  // ===============================
  function updateSuggestions(query) {
    suggestionsBox.innerHTML = "";
  
    // Hide if query is empty
    if (!query) {
      suggestionsBox.style.display = "none";
      return;
    }
  
    // Get matched courses
    const matched = courseData.filter(course =>
      course.name.toLowerCase().includes(query)
    );
  
    // Show suggestions if found
    if (matched.length > 0) {
      matched.forEach(course => {
        const item = document.createElement("div");
        item.className = "suggestion-item";
        item.innerHTML = `
          <img src="${course.icon}" alt="${course.name}" />
          <span>${course.name}</span>
        `;
  
        // On clicking a suggestion, set input and show course
        item.addEventListener("click", () => {
          searchBox.value = course.name;
          suggestionsBox.style.display = "none";
          renderCourses([course]);
        });
  
        suggestionsBox.appendChild(item);
      });
  
      suggestionsBox.style.display = "block";
    } else {
      suggestionsBox.style.display = "none";
    }
  }
  
  // ===============================
  // HIDE SUGGESTIONS WHEN INPUT BLURS
  // ===============================
  searchBox.addEventListener("blur", () => {
    setTimeout(() => {
      suggestionsBox.style.display = "none";
    }, 200); // small delay to allow click event
  });
  
  // ===============================
  // DISPLAY USERNAME
  // ===============================
  document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username") || "Guest";
  
    const userDisplay = document.createElement("div");
    userDisplay.className = "username";
    userDisplay.textContent = `Welcome ${username}`;
  
    document.querySelector(".profile-menu").appendChild(userDisplay);
  });
  
  // ===============================
  // LOGOUT FUNCTION
  // ===============================
  function logout() {
    localStorage.removeItem("username");
    document.querySelector(".username").textContent = "Welcome Guest";
  
    const coursesLink = document.getElementById("courses");
    const logoutBtn = document.getElementById("logout");
  
    if (coursesLink) coursesLink.remove();
    if (logoutBtn) logoutBtn.remove();
  }
  