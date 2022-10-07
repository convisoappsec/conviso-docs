import Image from '@theme/IdealImage'
import React from 'react'

export default function ImageDisplay ({ imagePath = '' }) {
  return (
    <div style={{ textAlign: 'center' }} >
      <Image img={imagePath} />
    </div>
  )
}
