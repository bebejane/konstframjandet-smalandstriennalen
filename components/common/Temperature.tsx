import { useState, useEffect } from 'react'
import format from 'date-fns/format'

export default function Temperature() {

  const [temp, setTemp] = useState<number | undefined>()

  const refreshWeather = async () => {

    try {
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=65.58&longitude=22.15&hourly=temperature_2m&current_weather=true'
      const res = await fetch(url)
      const { current_weather: { temperature } } = await res.json()
      setTemp(temperature)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    refreshWeather()
    const i = setInterval(refreshWeather, 60 * 1000)
    return () => clearInterval(i)
  }, [])

  return (
    <span style={{ textTransform: 'capitalize' }}>
      {format(new Date(), 'dd MMMM')}, {temp > 0 ? '+' : ''}{temp}°C
    </span>
  )
}