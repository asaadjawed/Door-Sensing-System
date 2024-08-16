document.addEventListener('DOMContentLoaded', (event) => {
    const statusElement = document.getElementById('status');
    const statusText = document.getElementById('statusText');
    const doorImage = document.getElementById('doorImage');
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');

    function updateDoorStatus(isDoorOpen) {
        console.log(isDoorOpen, "<=========== isDoorOpen value");

        if (isDoorOpen === 'Open') {
            statusText.textContent = 'Door Open';
            document.getElementById("doorImage").src = 'open-door.png';
            console.log(doorImage.src, "<=========== closed image path"); 
            statusElement.style.backgroundColor = '#4CAF50';
            header.style.backgroundColor = '#4CAF50';
            footer.style.backgroundColor = '#4CAF50';
        } else {
            statusText.textContent = 'Door Closed';
            document.getElementById("doorImage").src = 'closed-door.png';
            console.log(doorImage.src, "<=========== open image path");
            statusElement.style.backgroundColor = '#f44336';
            header.style.backgroundColor = '#f44336';
            footer.style.backgroundColor = '#f44336';
             
        }
    }

    // Fetch status from server and update UI every second
    setInterval(function () {
        fetch('/status')
            .then(response => response.json())
            .then(data => {
                console.log('status', data.status);
                updateDoorStatus(data.status);
            })
            .catch(error => {
                console.error('Error fetching status:', error);
            });
    }, 1000);

    // Initial status update
    updateDoorStatus('Closed');
});
