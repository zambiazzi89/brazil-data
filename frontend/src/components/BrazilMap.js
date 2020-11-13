import React from 'react'
import Brazil from '@svg-maps/brazil'
import { SVGMap } from 'react-svg-map'
import 'react-svg-map/lib/index.css'

function BrazilMap() {
  return <SVGMap map={Brazil} />
}

export default BrazilMap
