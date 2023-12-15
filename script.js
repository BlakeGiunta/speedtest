function startTest() {
  document.getElementById('results').innerHTML = 'Testing...';
  const startTime = (new Date()).getTime();

  fetch('/largefile')
      .then(response => response.blob())
      .then(data => {
          const endTime = (new Date()).getTime();
          const duration = (endTime - startTime) / 1000;
          const bitsLoaded = data.size * 8;
          const speedBps = (bitsLoaded / duration).toFixed(2);
          const speedKbps = (speedBps / 1024).toFixed(2);
          const speedMbps = (speedKbps / 1024).toFixed(2);

          document.getElementById('results').innerHTML = 
              `Your speed: ${speedMbps} Mbps (${speedKbps} Kbps)`;
      })
      .catch(error => {
          document.getElementById('results').innerHTML = 'Error in speed test';
      });
}
