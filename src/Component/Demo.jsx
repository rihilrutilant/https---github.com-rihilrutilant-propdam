import React from 'react'
import Select from 'react-select'
import data from "../data"

const Demo = () => {
  return (
    <Select
      isMulti
      name="colors"
      options={data}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  )
}

export default Demo