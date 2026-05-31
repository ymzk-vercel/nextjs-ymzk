import { useState, useEffect } from "react";

export function scrollHook() {
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
    const worksContainer = document.getElementById('works-container');
    const itemsContainer = document.getElementById('items-container');
    
    if (!itemsContainer && !worksContainer) return;

    function scrollEvent(event:WheelEvent) {
      const parentRect = worksContainer?.getBoundingClientRect();
      const bottomLimit =  ((parentRect!.height * .60) - itemsContainer!.scrollHeight);

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

    worksContainer!.addEventListener("wheel", scrollEvent);
    
    return () => {
      removeEventListener("wheel", scrollEvent);
    }
  }, []);

  return {fadeInTransition, scrollAnimation}
}