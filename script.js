function startTest() {
  document.getElementById('results').innerHTML = 'Testing...'
  let numberOfTests = 3 // Number of tests to average
  let completedTests = 0
  let totalSpeed = 0

  function testDownload() {
    const startTime = new Date().getTime()

    fetch('/largefile.dat')
      .then((response) => response.blob())
      .then((data) => {
        const endTime = new Date().getTime()
        const duration = (endTime - startTime) / 1000 // Duration in seconds
        const bitsLoaded = data.size * 8 // Total bits loaded
        const speedBps = bitsLoaded / duration // Speed in bits per second
        totalSpeed += speedBps
        completedTests++

        if (completedTests < numberOfTests) {
          testDownload() // Run next test
        } else {
          const averageSpeedBps = totalSpeed / numberOfTests
          const averageSpeedMbps = (averageSpeedBps / (1024 * 1024)).toFixed(2) // Convert to Mbps

          document.getElementById('results').innerHTML = `Average speed: ${averageSpeedMbps} Mbps`
        }
      })
      .catch((error) => {
        document.getElementById('results').innerHTML = 'Error in speed test'
      })
  }

  testDownload()
}
