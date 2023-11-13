import styles from './TimerDisplay.module.css'

const TimerDisplay = ({ time }) => {
  return (
    <div className={styles.timerDisplay}>{time}</div>
  )
}

export default TimerDisplay