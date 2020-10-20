import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div style={headerStyle}>
            <header>
                <h1>TodoList</h1>
                <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            </header>
        </div>
    )
    
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}