// Sample Python video data
const pythonVideos = [
    { title: "Python Introduction", url: "https://www.youtube.com/embed/rfscVS0vtbw" },
    { title: "Variables and Data Types", url: "https://www.youtube.com/embed/ohCDWZgNIU0" },
    { title: "Conditional Statements", url: "https://www.youtube.com/embed/f4KOjWS_KZs" },
    { title: "Loops in Python", url: "https://www.youtube.com/embed/6iF8Xb7Z3wQ" },
    { title: "Functions in Python", url: "https://www.youtube.com/embed/NSbOtYzIQI0" },
    { title: "Lists and Tuples", url: "https://www.youtube.com/embed/W8KRzm-HUcc" },
    { title: "Dictionaries and Sets", url: "https://www.youtube.com/embed/daefaLgNkw0" },
    { title: "String Manipulation", url: "https://www.youtube.com/embed/k9TUPpGqYTo" },
    { title: "Object Oriented Programming", url: "https://www.youtube.com/embed/JeznW_7DlB0" },
    { title: "File Handling in Python", url: "https://www.youtube.com/embed/Uh2ebFW8OYM" },
    { title: "Exception Handling", url: "https://www.youtube.com/embed/NIWwJbo-9_8" },
    { title: "Modules and Packages", url: "https://www.youtube.com/embed/CqvZ3vGoGs0" },
    { title: "Python Libraries Overview", url: "https://www.youtube.com/embed/eCqFJYI7p54" },
    { title: "Working with APIs", url: "https://www.youtube.com/embed/QpAhX-gsHMs" },
    { title: "Final Project Walkthrough", url: "https://www.youtube.com/embed/D1twn9kLmYg" },
  ];
  
  // Load video list
  const videoList = document.getElementById("videoList");
  const mainVideo = document.getElementById("mainVideo");
  
  // Populate the sidebar with video titles
  pythonVideos.forEach((video, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${video.title}`;
    li.addEventListener("click", () => {
      mainVideo.src = video.url;
    });
    videoList.appendChild(li);
  });
  
  // Load the first video by default
  mainVideo.src = pythonVideos[0].url;
  
  // Star rating
  const stars = document.querySelectorAll(".rating span");
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      stars.forEach((s, i) => {
        s.classList.toggle("active", i <= index);
      });
    });
  });
  
  // Comment submission
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", () => {
    const textarea = document.querySelector("textarea");
    const commentText = textarea.value.trim();
    if (commentText) {
      const commentList = document.getElementById("commentList") || createCommentList();
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");
      commentDiv.textContent = commentText;
      commentList.appendChild(commentDiv);
      textarea.value = "";
    }
  });
  
  // Helper: create comment list container
  function createCommentList() {
    const commentList = document.createElement("div");
    commentList.id = "commentList";
    document.querySelector(".rating-comments").appendChild(commentList);
    return commentList;
  }
  