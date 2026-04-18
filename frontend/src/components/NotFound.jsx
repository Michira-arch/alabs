import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: '"DM Mono", "IBM Plex Mono", monospace',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%'
      }}>
        <h1 style={{
          fontFamily: '"Syne", sans-serif',
          fontSize: '6rem',
          fontWeight: 700,
          margin: '0',
          background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1'
        }}>
          404
        </h1>
        <div style={{
          height: '1px',
          width: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          margin: '2rem 0'
        }}></div>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 400,
          marginBottom: '1rem',
          letterSpacing: '-0.02em'
        }}>
          Pathway Not Found
        </h2>
        <p style={{
          color: '#888888',
          fontSize: '1rem',
          marginBottom: '3rem',
          lineHeight: '1.6'
        }}>
          The molecular synthesis route or system coordinate you are looking for 
          does not exist within the current configuration architecture.
        </p>
        <Link 
          to="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            backgroundColor: '#ffffff',
            color: '#000000',
            textDecoration: 'none',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontSize: '0.9rem',
            borderRadius: '2px',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#e0e0e0';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
