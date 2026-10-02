import React, { useState } from 'react';

function Counter() {
  // Initialize counter state with useState
  const [count, setCount] = useState(0);

  // Increment handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Decrement handler (prevents going below 0)
  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Reset handler
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>React Counter</h1>

      {/* Display the current count */}
      <div style={styles.countDisplay}>
        {count}
      </div>

      {/* Conditional message when count is 0 */}
      {count === 0 && (
        <p style={styles.message}>Minimum limit reached</p>
      )}

      {/* Buttons */}
      <div style={styles.buttonGroup}>
        <button
          onClick={handleIncrement}
          style={{ ...styles.button, ...styles.increment }}
        >
          Increment
        </button>

        <button
          onClick={handleDecrement}
          style={{ ...styles.button, ...styles.decrement }}
          disabled={count === 0}
        >
          Decrement
        </button>

        <button
          onClick={handleReset}
          style={{ ...styles.button, ...styles.reset }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

// Basic inline styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f4f8',
  },
  title: {
    color: '#1a365d',
    marginBottom: '20px',
  },
  countDisplay: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#2b6cb0',
    margin: '20px 0',
    minWidth: '100px',
    textAlign: 'center',
  },
  message: {
    color: '#c53030',
    fontWeight: '500',
    marginBottom: '15px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginTop: '10px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s, transform 0.1s',
  },
  increment: {
    backgroundColor: '#38a169',
    color: 'white',
  },
  decrement: {
    backgroundColor: '#e53e3e',
    color: 'white',
  },
  reset: {
    backgroundColor: '#718096',
    color: 'white',
  },
};

export default Counter;