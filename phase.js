// js/phase.js
let currentPhase = "Pre-Flight";

function updatePhase(newPhase) {
  currentPhase = newPhase;
  document.getElementById('current-phase').textContent = newPhase.toUpperCase();
}

