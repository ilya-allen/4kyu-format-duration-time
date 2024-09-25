function formatDuration (seconds) {
  if(seconds == 0) {
    return 'now'
  } 
  
  let timeArr = [0, 0, 0, 0, 0];
  let finalArr = [0, 0, 0, 0, 0];
  let divArr = [1, 60, 3600, 86400, 31556926];
  let timeName = ['seconds', 'minutes', 'hours', 'days', 'years']
  let finalName = [];
  let finalString = ''
  let timerCheck = true
  for (let i = 0; i < timeArr.length; i++) {
    timeArr[i] = seconds / divArr[i]
  }
  timeArr = timeArr.filter(function(curVal) {
    return curVal >= 1
  })
  if(timeArr.length > 1) {
      timeArr[timeArr.length - 1] = Math.trunc(seconds / divArr[timeArr.length - 1])
      timeArr[timeArr.length - 2] = seconds % divArr[timeArr.length - 1]
      for (let i = timeArr.length - 2; i > 0; i--) {
        timeArr[i] = Math.trunc(timeArr[i] / divArr[i])
        timeArr[i - 1] = seconds % divArr[i]
      }
  }

    for (let i = timeArr.length - 1; i > -1; i--) {
      if(timeArr[i] !== 0) {
        if (timeArr[i] > 1) {
          finalName.push(`${timeArr[i]} ${timeName[i]}`)
        } else if (timeArr[i] == 1) {
          finalName.push(`${timeArr[i]} ${timeName[i].slice(0, timeName[i].length - 1)}`)
        }
      }
    }
  if (finalName.length > 1) {
    for(let i = 0; i < finalName.length; i++) {
      if(i == finalName.length - 2) {
        finalString += `${finalName[i]} and `
      } else if (i == finalName.length - 1){
        finalString += `${finalName[i]}`
      } else {
        finalString += `${finalName[i]}, `
      }
    }      
  } else {
    finalString = finalName[0]
  }
  return finalString
}
