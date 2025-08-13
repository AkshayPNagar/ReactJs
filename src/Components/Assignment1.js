import React from 'react';
import As1UsingFunctional from './As1UsingFunctional';

class Assignment1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }

  increase() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrease() {
    if (this.state.count === 0) {
      alert("Should not be less than Zero");
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
  }

render() {
  return (
    <div>
      <h1 style={{ color: '#333', marginBottom: '5px' }}>Assignment1 - Counter Application</h1>
<div className="box class-comp">

      <h2 style={{ color: '#555', marginTop: '0' }}>Class Component</h2>

      {/* Flex container for side-by-side layout */}
      <div  >
        
        {/* Left side: current counter UI */}
        <div >
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
            {this.state.count}
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
              onClick={() => this.increase()}
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
              onClick={() => this.decrease()}
              onMouseOver={(e) => e.target.style.backgroundColor = '#da190b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
            >
              -
            </button>
          </div>
        </div>

        {/* Right side: Functional component */}
      


      </div>
</div>
    </div>
  );

  }
}

export default Assignment1;
