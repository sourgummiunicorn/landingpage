// Select all the boxes
const boxes = document.querySelectorAll(".box");

// Variable to store the currently playing audio
let currentAudio = null;

// Add click event listener to each box
boxes.forEach((box) => {
	box.addEventListener("click", () => {
		// Find the audio element within the clicked box
		const audio = box.querySelector("audio");

		// If the clicked audio is currently playing, pause it
		if (audio === currentAudio && !audio.paused) {
			audio.pause();
		} else {
			// Pause any other playing audio elements
			if (currentAudio) {
				currentAudio.pause();
				currentAudio.currentTime = 0; // Reset to the beginning
			}

			// Play the selected audio and set it as the current audio
			audio.play();
			currentAudio = audio;
		}
	});
});
