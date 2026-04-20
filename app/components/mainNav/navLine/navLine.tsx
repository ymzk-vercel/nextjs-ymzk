'use client';

import styles from "./navLine.module.css";
import { usePathname } from "next/navigation";
import { CSSProperties, useEffect, useState } from "react";

interface ContainerProperties {
  containerWidth: number,
  optionWidth: number,
  optionHeight: number,
  optionPosY: number
}

export default function NavLine({paramKey, containerProperties} : {paramKey:string, containerProperties : ContainerProperties}) {
  const [lineAnim, setLineAnim] = useState<CSSProperties>({visibility: 'hidden', animation: 'none'});
  const {containerWidth, optionWidth, optionHeight, optionPosY} = containerProperties;

  const params = usePathname(); 

  const width = containerWidth - optionWidth;
  const posY = optionPosY + (optionHeight / 2);

  const styleContainer = {
    width: `${width}px`,
    top: `${posY}px`
  };

  useEffect(()=>{
    function animate() {
      if (params.slice(1) === paramKey) {
        setLineAnim({visibility: 'visible', animation: 'lineGrow .6s cubic-bezier(0.075, 0, 0.165, .7) forwards'});
      }
      else {
        setLineAnim({visibility: 'hidden', animation: 'lineShrink .6s cubic-bezier(0.075, 0, 0.165, .7) forwards'});
      }
    }

    animate();

  }, [params])

  return (
    <span style={styleContainer} className={styles['option-line-container']}>
      <span style={lineAnim} className={styles['option-line']}></span>
    </span>
  );
}

  // animation: lineGrow .6s cubic-bezier(0.075, 0, 0.165, .7) forwards;
