import React from 'react'
import { useState } from 'react';

export default function Creatediv({ eke, setData, data }) {
  const [flag, setFlag] = useState(false)

  const handleClick = () => {
    console.log("clicked");

    const dlt = data.filter((ver) => {
      console.log(ver)
      console.log(eke)
      return eke !== ver
    })
    setData(dlt)
  }

  return (
    <div className="to_do">
      <h3>{eke}</h3>

      <button className="btn" onClick={handleClick}>dlt</button>

      {flag &&
        <button className="btn" onClick={() => {
          console.log(eke)
          setFlag(false)
        }}  >done</button>
      }
      {!flag && <button className="btn" onClick={() => {
        setFlag(true)
      }} >edit</button>

      }
      {console.log(flag)
      }

    </div>
  )
}
