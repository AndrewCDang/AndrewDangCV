// Learned how to apply animation on scroll from and applying to REACT using hooks effects: 
// https://www.youtube.com/watch?v=T33NN_pPeNI&t=57s
// https://reactjs.org/docs/hooks-effect.html

import { useEffect } from "react";

const Animation = () => {

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
          if (entry.isIntersecting){
            entry.target.classList.add('show');
          } else {
            // entry.target.classList.remove('show');
          }
        });
      });
  
      const hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach((el) => observer.observe(el));
  
      // Cleanup function to remove the observer
      return () => {
        hiddenElements.forEach((el) => observer.unobserve(el));
      }
    }, []);
  
    return null;
  }
  
  export default Animation;