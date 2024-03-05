'use client'
import React from 'react'
import { Card } from '../ui/Card'
import styles from './wizardHouse.module.css'
import { IHouse } from '../types'
import { extractColorsFromString } from '../utils/helpers'

interface IWizardHouse {
  house: IHouse
}

export const WizardHouse = ({ house: { name, founder, animal, houseColours }}: IWizardHouse) => {
  const [firstColor, secondColor] = extractColorsFromString(houseColours)
  const gradientStyle = {
    background: `linear-gradient(to right, ${firstColor}, ${secondColor})`    
  }


  return (
    <Card>
      <div className={styles.cardContainer}>
        <div className={styles.cardTitleContainer}>
          <h2>{name}</h2>
          <h3>{animal}</h3>
        </div>
        <div 
          className={styles.cardGradient}
          style={gradientStyle}
          ></div>
        <div className={styles.cardDescription}>Founder: <span>{founder}</span></div>
      </div>
    </Card>
  )
}