import styles from './LapList.module.css'

const LapList = ({laps}) => {
  return (
    <div className={styles.timerLaps}>
      <h3>Voltas:</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Volta {index + 1}: {lap}</li>
        ))}
      </ul>
    </div>
  )
}

export default LapList