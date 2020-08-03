import React from 'react'
import { Container, Row } from 'reactstrap'

import Track from './Track'

import SaturnImage from '../images/TheOwlAndMouse.jpg'
import SomewhereImage from '../images/TheLastKnight.jpg'

const Content = props => {
  return (
    <center>
      <Container>
        <h1 style={{ marginTop: '20px' }}>Works</h1>
        <Row style={{ marginTop: '50px' }}>
          <Track
            Title={'The Owl and Mouse'}
            Image={SaturnImage}
            Purpose={'Original Score'}
          />

          <Track
            Title={'The Last Knight'}
            Image={SomewhereImage}
            Purpose={'Original Score'}
          />
        </Row>
      </Container>
    </center>
  )
}

export default Content
