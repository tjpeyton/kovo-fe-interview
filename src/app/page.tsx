
'use client'

import { useState } from "react";
import styles from "./page.module.css";



export default function Home() {
  const [numRolls, setNumRolls] = useState(0)
  const [sevens, setSevens] = useState(0)

  const rollDice = () => {
    let sevens = 0
    for (let i = 0; i < numRolls; i++) {
      // should be 1 - 6
      const roll1 = Math.floor(Math.random() * 6) + 1
      const roll2 = Math.floor(Math.random() * 6) + 1
  
      if(roll1 + roll2 === 7) sevens++
    }
    setSevens(sevens)
  }

  return (
    <>
    <div className={styles.container}>
    <form onSubmit={(event) => {event.preventDefault(); rollDice()}} >
        <label>
          Number of Roles:
          <input onChange={(event) => {setNumRolls(Number(event?.target.value))}} type="number"></input>
        </label>
        <button type="submit">Roll</button>
      </form>
      <div>
        { numRolls > 0 ? 
          ((sevens / numRolls) * 100).toFixed(2)
          : <></>
        }
      </div>
    </div>
    </>
  )
}
