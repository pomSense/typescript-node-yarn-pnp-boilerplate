function launchRocket() {
  // Start first loading bar
  const loadingInterval1 = setInterval(() => {
    process.stdout.write('💭')
  }, 200)

  // Wait for 2 seconds
  setTimeout(() => {
    clearInterval(loadingInterval1) // Stop first loading bar

    // Start second loading bar
    const loadingInterval2 = setInterval(() => {
      process.stdout.write('🔥')
    }, 300)

    // Wait for 2 seconds
    setTimeout(() => {
      clearInterval(loadingInterval2) // Stop second loading bar

      console.log('🚀')
      console.log('\nLaunched!')
    }, 2000)
  }, 2000)
}

launchRocket()
