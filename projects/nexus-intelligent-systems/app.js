const descriptions = {
  AI: {
    title: "ARTIFICIAL INTELLIGENCE",
    text: "Exploring how intelligent capabilities can become part of practical software systems."
  },
  DATA: {
    title: "DATA",
    text: "Understanding how data moves through applications and becomes useful information."
  },
  API: {
    title: "APIS",
    text: "Studying interfaces that connect applications, services and system boundaries."
  },
  CLOUD: {
    title: "CLOUD",
    text: "Exploring infrastructure, deployment and the foundations of scalable platforms."
  }
};

const panelTitle = document.querySelector("#panelTitle");
const panelText = document.querySelector("#panelText");
const nodes = document.querySelectorAll("[data-topic]");
const cards = document.querySelectorAll("[data-topic-card]");

function selectTopic(topic) {
  const item = descriptions[topic];
  if (!item) return;
  panelTitle.textContent = item.title;
  panelText.textContent = item.text;

  nodes.forEach(node => node.classList.toggle("active", node.dataset.topic === topic));
  cards.forEach(card => card.classList.toggle("active", card.dataset.topicCard === topic));
}

nodes.forEach(node => {
  node.addEventListener("click", () => selectTopic(node.dataset.topic));
});

cards.forEach(card => {
  card.addEventListener("click", () => selectTopic(card.dataset.topicCard));
});

document.querySelectorAll(".experiment-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector("#experimentOutput").textContent = button.dataset.message;
  });
});

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.animate(
      [
        { opacity: 0, transform: "translateY(18px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 650, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards" }
    );
  }),
  { threshold: 0.12 }
);

document.querySelectorAll(".section, .statement, .experiment-card, .info-card").forEach(el => observer.observe(el));