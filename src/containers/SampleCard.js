import React from 'react'

const SampleCard = (props) => {
  return (
    <div>
        <img src={props.sample.image_url} alt={props.sample.sample_name}/>
        {props.sample.sample_name}
    </div>
  )
}

export default SampleCard