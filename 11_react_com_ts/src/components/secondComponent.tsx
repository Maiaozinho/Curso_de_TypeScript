import React from 'react'

type Props = {
    name:string
}

function secondComponent(props: Props) {
  return (
    <div>
        <p>Meu segundo componente</p>
        <p>O nome dele é {props.name}</p>
    </div>
  )
}

export default secondComponent