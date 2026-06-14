let recognition = null;

const orb = document.getElementById('voiceOrb');
const orbStatus = document.getElementById('orb-status');

function initVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    addToTranscript("System", "Voice recognition not supported on this browser.");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    addToTranscript("You", text);
    handleVoiceCommand(text);
  };

  recognition.onerror = () => addToTranscript("System", "Voice error. Try again.");
}

orb.addEventListener('mousedown', () => {
  if (recognition) {
    recognition.start();
    orbStatus.textContent = "Listening...";
    orb.style.boxShadow = "0 0 100px #f472b6";
  }
});

orb.addEventListener('mouseup', () => {
  if (recognition) recognition.stop();
  orbStatus.textContent = "Hold to Talk";
  orb.style.boxShadow = "";
});

function handleVoiceCommand(text) {
  const lower = text.toLowerCase();
  const role = currentRole;

  if (lower.includes("pushback") || lower.includes("ready to push")) {
    addToTranscript(role === "ground" ? "Ground" : "Aether", "Pushback approved. Call when ready to taxi.");
  } else if (lower.includes("takeoff") || lower.includes("cleared for takeoff")) {
    addToTranscript("ATC", "Cleared for takeoff runway 27L, wind 250 at 8 knots. Have a good flight.");
  } else if (lower.includes("descent") || lower.includes("top of descent")) {
    addToTranscript("ATC", "Descend and maintain 8000 feet.");
  } else {
    addToTranscript("Aether", "Copy that, Captain. Standing by for your next instruction.");
  }
}

initVoice();
