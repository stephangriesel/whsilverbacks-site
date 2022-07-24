import React from 'react'
import FlexColumn from '../../UI/Layout/FlexColumn/FlexColumn'
import FlexRow from '../../UI/Layout/FlexRow/FlexRow'
import FullViewPort from '../../UI/FullViewPort/FullViewPort'

import './success.css'

const Success = () => {
  return (
    <FullViewPort>
      <FlexRow>
        <FlexColumn>
          <h1>Thank you!</h1>
          <h2>Your form has been submitted!</h2>
        </FlexColumn>
      </FlexRow>
    </FullViewPort>
  )
}

export default Success