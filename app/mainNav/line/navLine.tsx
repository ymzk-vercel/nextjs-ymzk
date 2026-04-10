'use client';

import styles from "./navLine.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface ContainerProperties {
  containerWidth: number,
  optionWidth: number,
  optionHeight: number,
  optionPosY: number
}

export default function NavLine({containerProperties} : {containerProperties : ContainerProperties}) {
  const [currentParams, setCurrentParams] = useState('/works');

  // Returns with /[slug].
  const params = usePathname(); 
  
  const {containerWidth, optionWidth, optionHeight, optionPosY} = containerProperties;
  const paddingLeft = 30;
  
  const width = containerWidth - optionWidth - paddingLeft;
  const posY = optionPosY + (optionHeight / 2);

  console.log(posY)

  const styleContainer = {
    width: `${width}px`,
    top: `${posY}px`
  };

  const styleLine = {
    width: `${width}px`,
    transform: `scaleX(1) translateY(${0}px)`
  };

  return (
    <span style={styleContainer} className={styles['option-line-container']}>
      <span style={styleLine} className={styles['option-line']}></span>
    </span>
  );
}
