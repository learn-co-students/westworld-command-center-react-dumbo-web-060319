import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = props => {
  let {id, firstName, lastName, active, imageUrl, gender, area, authorized} = props.hostData
  return(
    <Card
      className="host selected"
      image={imageUrl}
      raised
    />
  )
}

export default Host
