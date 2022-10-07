import { useState } from 'react'

const useMultiStepForm = (steps) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next(){
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) return i;
            return i + 1;
        })
    }
    function back(){
        setCurrentStepIndex(i => {
            if (i <= 0) return i;
            return i + 1;
        })
    }
    function goTo(index){
        setCurrentStepIndex(index);
    }

  return (
    currentStepIndex, 
    steps[currentStepIndex],
    goTo,
    next,
    back,
    steps
  )
}

export default useMultiStepForm