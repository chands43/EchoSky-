// js/simbrief.js
function importSimBrief() {
  // Mock import (in real version you can connect to SimBrief API)
  flightPlan = {
    callsign: "AAL123",
    departure: "KJFK",
    arrival: "EGLL",
    aircraft: "B77W"
  };
  
  document.getElementById('flight-info').innerHTML = `
    <strong>${flightPlan.callsign}</strong> • ${flightPlan.departure} → ${flightPlan.arrival}
  `;
  updatePhase("Boarding");
  addToTranscript("Dispatch", `Flight plan loaded. ${flightPlan.callsign} from ${flightPlan.departure} to ${flightPlan.arrival}. Ready for briefing?`);
}
