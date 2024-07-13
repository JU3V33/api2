// script.js

function startStressTest(ipAddress, port) {
  const endpoint = `http://${ipAddress}:${port}/`; // Example endpoint to stress test

  console.log(`Starting stress test on ${endpoint}`);

  setInterval(() => {
    fetch(endpoint)
      .then(response => {
        if (response.ok) {
          console.log(`Request successful at ${new Date().toLocaleTimeString()}`);
        } else {
          console.error(`Failed to connect to ${endpoint} at ${new Date().toLocaleTimeString()}`);
        }
      })
      .catch(error => {
        console.error(`Error: ${error.message}`);
      });
  }, 100); // Adjust interval as needed for your testing
}

// Example usage
const ipAddress = '192.168.1.100'; // Replace with your target IP address
const port = 80; // Replace with your target port number

startStressTest(ipAddress, port);
