'use client';

import styles from "./navLine.module.css";

interface ContainerProperties {
  containerWidth: number,
  optionWidth: number,
  optionHeight: number,
  optionPosY: number
}

export default function NavLine({containerProperties} : {containerProperties : ContainerProperties}) {
  const {containerWidth, optionWidth, optionHeight, optionPosY} = containerProperties;
  
  const width = containerWidth - optionWidth;
  const posY = optionPosY + (optionHeight / 2);

  const styleContainer = {
    width: `${width}px`,
    top: `${posY}px`
  };

  return (
    <span style={styleContainer} className={styles['option-line-container']}>
      <span className={styles['option-line']}></span>
    </span>
  );
}
