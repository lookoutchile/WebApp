export const formatDiff = (value) => {
    const date = new Date(value)
    const v = {
        hour: Math.round(value/1000/60/60),
        minutes: date.getMinutes() - new Date(0).getMinutes(),
        seconds: date.getSeconds() - new Date(0).getSeconds()
    }
    return `${v.hour}:${("00" + v.minutes).slice(-2)}:${("00" + v.seconds).slice(-2)}`
}