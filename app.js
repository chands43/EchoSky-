let currentRole = "atc";
let flightPlan = null;

document.querySelectorAll('.role-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentRole = btn.dataset.role;
    addToTranscript("System", `Switched to ${currentRole.toUpperCase()}`);
  });
});

document.getElementById('import-btn').addEventListener('click', () => {
  importSimBrief();
});

document.getElementById('debrief-btn').addEventListener('click', () => {
  addToTranscript("Aether Crew", "Flight complete. Excellent work today. Would you like your full debrief?");
});

function addToTranscript(speaker, text) {
  const transcript = document.getElementById('transcript');
  const entry = document.createElement('div');
  entry.innerHTML = `<strong>${speaker}:</strong> ${text}`;
  transcript.appendChild(entry);
  transcript.scrollTop = transcript.scrollHeight;
}

// Initial message
window.addEventListener('load', () => {
  addToTranscript("Aether", "Hello Captain. I'm ready when you are. Import your SimBrief plan to begin.");
});
