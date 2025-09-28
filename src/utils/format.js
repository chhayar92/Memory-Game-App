const formattedTime = (s) => {
  const min = Math.floor(s / 60)
  const sec = s % 60
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
}

export default formattedTime
