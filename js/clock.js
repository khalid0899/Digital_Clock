
const digitalClock = document.querySelector('.digital-clock')


function currentTime() {
      
      const date = new Date()

      let hours = date.getHours()
      let minute = date.getMinutes()
      let seconds = date.getSeconds()
      hours = hours > 12 ? hours - 12 : hours
      formattedHous = hours >= 10 ? hours : '0' + hours
      formattedMinute = minute >= 10 ? minute : '0' + minute
      formattedSeconds = seconds >= 10 ? seconds : '0' + seconds
      
      const getTime = formattedHous + ':' + formattedMinute + ':'+formattedSeconds
      digitalClock.textContent = getTime
            
}
const setProcess = setInterval(() => {
      currentTime()
},1000)