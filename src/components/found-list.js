import React from 'react';

import FoundListItem from './found-list-item';


const FoundList=(props)=>{
  const elements = props.itemsList.map((item)=>{
    const {id, ...itemProps} = item
    return(
        <FoundListItem key={item.id} {...itemProps}/>
    )
  })

  return(
    <ul className="found-list">
      {elements}
    </ul>
  )
}

export default FoundList;
