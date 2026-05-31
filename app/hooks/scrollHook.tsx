import { useState, useEffect } from "react";

export function scrollHook(parentContainer:string, scrollableContainer:string) {
  const [containerTrack, setContainerTrack] = useState({
    offsetY: 0
  });

  const fadeInTransition = {
    animation: 'fadeIn .5s ease-in forwards'
  };

  const scrollAnimation = {
    transform: `translateY(${containerTrack.offsetY}px)`,
    transition: '.3s'
  };

  useEffect(()=>{
    const parentContainerId = document.getElementById(parentContainer);
    const scrollableContainerId = document.getElementById(scrollableContainer);
    
    if (!scrollableContainerId && !parentContainerId) return;

    function scrollEvent(event:WheelEvent) {
      const parentRect = parentContainerId?.getBoundingClientRect();
      const bottomLimit =  ((parentRect!.height * .60) - scrollableContainerId!.scrollHeight);

      if (event.deltaY > 0){ 
        // scroll down
        setContainerTrack(prev=>{
          if (prev.offsetY >= bottomLimit) {
            return {offsetY: prev.offsetY - 30}
          } else return {...prev}
        })
      } else { 
        // scroll up
        setContainerTrack(prev=>{
          if (prev.offsetY <= -30) {
            return {offsetY: prev.offsetY + 30}
          } else return {...prev}
        });
      }
    }

    parentContainerId!.addEventListener("wheel", scrollEvent);
    
    return () => {
      removeEventListener("wheel", scrollEvent);
    }
  }, []);

  return {fadeInTransition, scrollAnimation}
}