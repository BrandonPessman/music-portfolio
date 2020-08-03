import React from 'react'
import { Col } from 'reactstrap'

function Track ({ Image, Title, Purpose }) {
  return (
    <>
      <Col md='6' lg='4' xl='3'>
        <div className='outer'>
          <img
            src={Image}
            style={{ objectFit: 'cover', width: '100%', height: '400px' }}
          />
          <div className='overlay'>
            <p className='text'>Click to listen and watch!</p>
          </div>
        </div>
        <div
          style={{ marginTop: '25px', marginBottom: '25px', height: '150px' }}
        >
          <h5 style={{ fontWeight: '600', fontSize: '16px' }}>{Title}</h5>
          <h6 style={{ fontWeight: '300', fontSize: '14px' }}>{Purpose}</h6>
        </div>
      </Col>
    </>
  )
}

export default Track
