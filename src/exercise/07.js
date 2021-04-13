// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  {id: 1, value: '🍎 apple'},
  {id: 2, value: '🍊 orange'},
  {id: 3, value: '🍇 grape'},
  {id: 4, value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)

  function addItem() {
    setItems([
      ...items,
      allItems.find(i => !items.map(({id}) => id).includes(i.id)),
    ])
  }

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map((item, index) => (
          // 🐨 add a key prop to the <li> below. Set it to item.id
          <li key={index}>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${index}-input`}>{item.value}</label>{' '}
            <input id={`${index}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
