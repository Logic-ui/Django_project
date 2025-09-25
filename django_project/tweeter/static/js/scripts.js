document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector("textarea");
  const tweetForm = document.querySelector("#tweet-form form");
  const likeButtons = document.querySelectorAll(".like-btn");

  // Auto-expand textarea
  textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  });

  // Prevent empty tweet
  tweetForm.addEventListener("submit", (e) => {
    if (textarea.value.trim() === "") {
      e.preventDefault();
      alert("Tweet cannot be empty!");
    }
  });

  // Like button functionality
  likeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const countSpan = btn.nextElementSibling;
      let count = parseInt(countSpan.textContent);

      if (btn.classList.contains("liked")) {
        // Unlike
        btn.classList.remove("liked");
        btn.textContent = "❤️ Like";
        countSpan.textContent = count - 1;
      } else {
        // Like
        btn.classList.add("liked");
        btn.textContent = "💖 Liked";
        countSpan.textContent = count + 1;
      }
    });
  });
});