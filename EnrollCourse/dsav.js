// Array of 15 DSA video topics with YouTube embed links
const videoData = [
  { title: "Introduction to DSA", url: "https://www.youtube.com/embed/B31LgI4Y4DQ" },
  { title: "Arrays in DSA", url: "https://www.youtube.com/embed/Wb3Wv7CuDfY" },
  { title: "Linked Lists", url: "https://www.youtube.com/embed/NobHlGUjV3g" },
  { title: "Stacks", url: "https://www.youtube.com/embed/lJLcqDsmYfg" },
  { title: "Queues", url: "https://www.youtube.com/embed/zG4lZn2Ep6s" },
  { title: "Trees", url: "https://www.youtube.com/embed/_ANrF3FJm7I" },
  { title: "Graphs", url: "https://www.youtube.com/embed/M3_pLsDdeuU" },
  { title: "Searching Algorithms", url: "https://www.youtube.com/embed/W9cC5CTS9Eo" },
  { title: "Sorting Algorithms", url: "https://www.youtube.com/embed/hv-mJUs5mvU" },
  { title: "Recursion", url: "https://www.youtube.com/embed/jmy0LaGET1I" },
  { title: "Backtracking", url: "https://www.youtube.com/embed/d1x4vJLGF6c" },
  { title: "Dynamic Programming", url: "https://www.youtube.com/embed/nqowUJzG-iM" },
  { title: "Greedy Algorithms", url: "https://www.youtube.com/embed/arjppjL7sds" },
  { title: "Hash Tables", url: "https://www.youtube.com/embed/shs0KM3wKv8" },
  { title: "Graphs - Dijkstra’s Algo", url: "https://www.youtube.com/embed/GazC3A4OQTE" },
];

// Load video titles into sidebar
const videoList = document.getElementById("videoList");
const mainVideo = document.getElementById("mainVideo");

// Initial video load
mainVideo.src = videoData[0].url;

videoData.forEach((video, index) => {
  const li = document.createElement("li");
  li.textContent = video.title;
  li.addEventListener("click", () => {
    mainVideo.src = video.url;
  });
  videoList.appendChild(li);
});
