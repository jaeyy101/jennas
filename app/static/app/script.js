document.addEventListener("DOMContentLoaded", function () {
  // Start the raining hearts effect
  startRainingHearts();

  // Reveal the Valentine section with animated text when scrolled into view
  window.addEventListener("scroll", function () {
    const valentineSection = document.querySelector(".valentine-section");
    const sectionPosition = valentineSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (sectionPosition < screenHeight - 100) {
      valentineSection.classList.add("active");
    }
  });

  // Set up interactivity for Yes and No buttons
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const responseMessage = document.getElementById("response-message");

  yesBtn.addEventListener("click", function () {
    responseMessage.innerHTML = "";
    launchConfetti();
    showLoveMessage();
  });

  noBtn.addEventListener("click", function () {
    responseMessage.innerHTML =
      "Oh no! But that's okay, maybe next time. Keep shining! ✨";
  });
});

// Function to launch a confetti burst when “Yes” is clicked
function launchConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.classList.add("confetti-container");
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = Math.random() * -20 + "vh"; // start above the viewport
    confetti.style.background = getRandomColor();
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confettiContainer.appendChild(confetti);

    // Remove each confetti piece after its animation
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }

  // Remove the confetti container after all animations complete
  setTimeout(() => {
    confettiContainer.remove();
  }, 6000);
}

// Function to choose a random color for the confetti
function getRandomColor() {
  const colors = ["#ff4b5c", "#ff6a88", "#ff9a9e", "#fad0c4", "#fbc2eb"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to start raining hearts continuously in the background
function startRainingHearts() {
  const container = document.createElement("div");
  container.classList.add("raining-hearts-container");
  document.body.appendChild(container);

  setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("raining-heart");
    heart.innerHTML = "❤️";

    // Set a random horizontal position, size, and animation duration
    let leftPosition = Math.random() * 100;
    let size = Math.random() * 20 + 15; // size between 15px and 35px
    let duration = Math.random() * 3 + 3; // duration between 3s and 6s

    heart.style.left = leftPosition + "vw";
    heart.style.fontSize = size + "px";
    heart.style.animationDuration = duration + "s";

    container.appendChild(heart);

    // Remove the heart after its animation ends
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }, 300); // Create a new heart every 300ms
}

function showLoveMessage() {
  // Replace the text below with your actual long love message.
  const loveMessage = `Hiii love <br /><br /> I just wanted to take a moment to express how grateful I am for you. Your presence in my life has been a constant source of love and support, and I feel so lucky to have you by my side. <br /><br />Your unwavering support, guidance, and love mean the world to me. Your kindness, empathy, and generosity inspire me to be a better person. <br /><br /> I appreciate the things you do for me, the way you make me laugh, and the way you always know how to make me feel better when I'm down. But most of all, I appreciate the love and acceptance you show me every day. <br /><br /> Thank you for being you, for being my everything. Thanks so much for accepting to my valentine which you always be. I love you more than words can express.`;

  // Create the modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");

  // Create the modal content container
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Create a close button for the modal
  const closeButton = document.createElement("button");
  closeButton.classList.add("modal-close");
  closeButton.innerHTML = "&times;";

  // Append the close button and the message to the modal content
  modalContent.appendChild(closeButton);
  const messageParagraph = document.createElement("p");
  messageParagraph.innerHTML = loveMessage;
  modalContent.appendChild(messageParagraph);

  // Append modal content to the overlay
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  // Function to remove the modal
  const closeModal = () => {
    modalOverlay.remove();
  };

  // Close the modal when the close button is clicked
  closeButton.addEventListener("click", closeModal);

  // Also close the modal if the user clicks outside the modal content
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}
