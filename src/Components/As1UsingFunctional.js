import React, { useState } from 'react';

function As1UsingFunctional() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count === 0) {
      alert("Should not be less than zero");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div  className="box func-comp">
      <h2 style={{ color: '#555', marginTop: '0' }}>Functional Component</h2>

      <div style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        margin: '20px 0',
        background: '#fff',
        display: 'inline-block',
        padding: '20px 40px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        {count}
      </div>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <button
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            fontSize: '1.5rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onClick={increase}
          onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
        >
          +
        </button>

        <button
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '10px 20px',
            fontSize: '1.5rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onClick={decrease}
          onMouseOver={(e) => e.target.style.backgroundColor = '#da190b'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default As1UsingFunctional;
