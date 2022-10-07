import React from 'react'
import useMultiStepForm from './useMultiStepForm'

const Form = () => {
    const {steps, currentStepIndex} = useMultiStepForm([]);
    console.log("steps", steps);
  return (
    <div
    style={{
        position: "relative",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
    }}
    >
        <form>
            <div
                style={{position:"absolute", top:".5rem", right: ".5rem"}}
            >
                {/* {currentStepIndex + 1} / {steps.length} */}
            </div>
        </form>
    </div>
  )
}

export default Form