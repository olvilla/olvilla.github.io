function changePhoto(photoSrc) {
    document.getElementById('large-photo').src = photoSrc;
}

function showAbilityDetails(videoSrc, description, name, type) {
    const videoElement = document.getElementById('ability-video');
    videoElement.src = videoSrc;
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.controls = false; // Disable controls
    videoElement.loop = true; // Enable looping
    document.getElementById('ability-name').innerText = name;
    document.getElementById('ability-type').innerText = type;
    document.getElementById('ability-description').innerText = description;
}
