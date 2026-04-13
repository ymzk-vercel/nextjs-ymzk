'use client';

import styles from "./navLine.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface ContainerProperties {
  containerWidth: number,
  optionWidth: number,
  optionHeight: number,
  optionPosY: number
}

export default function NavLine({paramKey, containerProperties} : {paramKey:string, containerProperties : ContainerProperties}) {
  const [lineAnim, setLineAnim] = useState({animation: 'none'});
  const {containerWidth, optionWidth, optionHeight, optionPosY} = containerProperties;

  const params = usePathname(); 

  const width = containerWidth - optionWidth;
  const posY = optionPosY + (optionHeight / 2);

  const styleContainer = {
    width: `${width}px`,
    top: `${posY}px`
  };

  useEffect(()=>{
    if (params.slice(1) === paramKey) {
      setLineAnim({animation: 'lineGrow .6s cubic-bezier(0.075, 0, 0.165, .7) forwards'});
    }
    else {
      setLineAnim({animation: 'lineShrink .6s cubic-bezier(0.075, 0, 0.165, .7) forwards'});
    }
  }, [params])

  return (
    <span style={styleContainer} className={styles['option-line-container']}>
      <span style={lineAnim} className={styles['option-line']}></span>
    </span>
  );
}

  // animation: lineGrow .6s cubic-bezier(0.075, 0, 0.165, .7) forwards;
