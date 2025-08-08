const videos = [
    { title: "Intro to Web Dev", url: "https://www.youtube.com/embed/Zftx68K-1D4" },
    { title: "HTML Basics", url: "https://www.youtube.com/embed/UB1O30fR-EE" },
    { title: "CSS Styling", url: "https://www.youtube.com/embed/yfoY53QXEnI" },
    { title: "JavaScript for Beginners", url: "https://www.youtube.com/embed/hdI2bqOjy3c" },
    { title: "DOM Manipulation", url: "https://www.youtube.com/embed/0ik6X4DJKCc" },
    { title: "Git and GitHub", url: "https://www.youtube.com/embed/RGOj5yH7evk" },
    { title: "Responsive Design", url: "https://www.youtube.com/embed/srvUrASNj0s" },
    { title: "Bootstrap Overview", url: "https://www.youtube.com/embed/-qfEOE4vtxE" },
    { title: "Node.js Crash Course", url: "https://www.youtube.com/embed/fBNz5xF-Kx4" },
    { title: "Express.js Basics", url: "https://www.youtube.com/embed/L72fhGm1tfE" },
    { title: "MongoDB Introduction", url: "https://www.youtube.com/embed/-56x56UppqQ" },
    { title: "React Fundamentals", url: "https://www.youtube.com/embed/bMknfKXIFA8" },
    { title: "REST APIs", url: "https://www.youtube.com/embed/qwfE7fSVaZM" },
    { title: "JWT Authentication", url: "https://www.youtube.com/embed/2jqok-WgelI" },
    { title: "Deploy with Vercel & Render", url: "https://www.youtube.com/embed/GQywiTUgGvc" }
  ];
  
  const videoList = document.getElementById("videoList");
  const mainVideo = document.getElementById("mainVideo");
  
  videos.forEach((video, index) => {
    const li = document.createElement("li");
    li.textContent = video.title;
    li.addEventListener("click", () => {
      mainVideo.src = video.url;
    });
    if (index === 0) mainVideo.src = video.url;
    videoList.appendChild(li);
  });
  