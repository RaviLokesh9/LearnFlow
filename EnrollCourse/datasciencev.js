const videoData = [
    {
      title: "1. Introduction to Data Science",
      url: "https://www.youtube.com/embed/X3paOmcrTjQ",
      description: "This video gives an overview of what Data Science is and why it’s important."
    },
    {
      title: "2. Python for Data Science",
      url: "https://www.youtube.com/embed/_uQrJ0TkZlc",
      description: "Learn how Python is used in Data Science for data analysis and manipulation."
    },
    {
      title: "3. Data Wrangling",
      url: "https://www.youtube.com/embed/KDFvZ9T4Txo",
      description: "Clean and preprocess raw data for effective use."
    },
    {
      title: "4. Exploratory Data Analysis",
      url: "https://www.youtube.com/embed/Zmogno9U_zw",
      description: "Explore datasets to uncover trends, patterns, and insights."
    },
    {
      title: "5. Data Visualization",
      url: "https://www.youtube.com/embed/8pIe_7MbPbA",
      description: "Visualize data using Matplotlib, Seaborn, and more."
    },
    {
      title: "6. Probability & Statistics",
      url: "https://www.youtube.com/embed/xxpc-HPKN28",
      description: "Understand statistical techniques for data analysis."
    },
    {
      title: "7. Introduction to Machine Learning",
      url: "https://www.youtube.com/embed/GwIo3gDZCVQ",
      description: "What is ML and how it powers modern AI?"
    },
    {
      title: "8. Supervised Learning",
      url: "https://www.youtube.com/embed/JcI5Vnw0b2c",
      description: "Learn regression and classification algorithms."
    },
    {
      title: "9. Unsupervised Learning",
      url: "https://www.youtube.com/embed/9yl6-HEY7_s",
      description: "Explore clustering and dimensionality reduction."
    },
    {
      title: "10. Feature Engineering",
      url: "https://www.youtube.com/embed/2rZdj5UMgFQ",
      description: "Improve models with crafted input features."
    },
    {
      title: "11. Model Evaluation",
      url: "https://www.youtube.com/embed/jAa0c8A5L9s",
      description: "Evaluate model accuracy and performance."
    },
    {
      title: "12. Deep Learning Basics",
      url: "https://www.youtube.com/embed/aircAruvnKk",
      description: "Get started with neural networks."
    },
    {
      title: "13. NLP Basics",
      url: "https://www.youtube.com/embed/N6vnjGmLfFg",
      description: "Intro to Natural Language Processing."
    },
    {
      title: "14. Project Pipeline",
      url: "https://www.youtube.com/embed/wn3tdGHBQx4",
      description: "How to approach a data science project."
    },
    {
      title: "15. Capstone Overview",
      url: "https://www.youtube.com/embed/y8p6-T-L4kc",
      description: "Overview of capstone expectations and goals."
    }
  ];
  
  function loadVideo(index) {
    const video = videoData[index];
    document.getElementById('videoPlayer').src = video.url;
    document.getElementById('videoTitle').textContent = video.title;
    document.getElementById('videoDesc').textContent = video.description;
  
    const topics = document.querySelectorAll('.video-topic');
    topics.forEach((topic, i) => {
      topic.classList.toggle('active', i === index);
    });
  }
  
  function submitComment() {
    const textarea = document.querySelector('textarea');
    const commentList = document.getElementById('commentList');
  
    if (textarea.value.trim() !== "") {
      const li = document.createElement('li');
      li.textContent = textarea.value.trim();
      commentList.appendChild(li);
      textarea.value = "";
    }
  }
  