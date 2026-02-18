import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  const colors = [
    { name: 'Red', value: '#FF0000' },
    { name: 'Blue', value: '#0000FF' },
    { name: 'Green', value: '#00FF00' },
    { name: 'Yellow', value: '#FFFF00' },
    { name: 'Purple', value: '#800080' },
    { name: 'Orange', value: '#FFA500' },
    { name: 'Pink', value: '#FFC0CB' },
    { name: 'Cyan', value: '#00FFFF' }
  ]

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100vh', margin: 0, padding: 0}}>
      {/* Background color area */}
      <div style={{
        backgroundColor: color,
        flex: 1,
        transition: 'background-color 0.3s ease'
      }}></div>

      {/* Buttons container - at bottom, horizontal alignment */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        padding: '20px',
        backgroundColor: '#0c0c0c',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {colors.map((btn, index) => (
          <button
            key={index}
            onClick={() => setColor(btn.value)}
            style={{
              backgroundColor: btn.value,
              color: btn.name === 'Yellow' ? '#000' : '#fff',
              border: 'none',
              padding: '12px 20px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              borderRadius: '5px',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            {btn.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
