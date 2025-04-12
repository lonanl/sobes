import { useState } from 'react'

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0)

  // 1. Починить секундомер и логи. 
  // 2. Сделать возможность сбрасывать таймер по той же кнопке. 
  //    При отключении таймера в App.ts, таймер также должен выключаться.

  const start = () => {
    setSeconds(0)
    setInterval(() => {
      setSeconds(seconds + 1)
      console.log(seconds)
    }, 1000)
  }


  return (
    <div>
      <br />
      <button onClick={start}>Начать</button>
      <code>Время: {seconds}</code>
    </div>
  )
}

export default Stopwatch