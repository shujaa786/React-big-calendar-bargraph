import React from 'react';
import CalendarView from './components/CalendarView';
import './styles.css';

export default function App() {
  return (
    <div className="app">
      <header style={{ textAlign: 'center', margin: '16px 0' }}>
        <h1>CalendarBarGraphApp</h1>
        <p>Click a highlighted date to view the bar graph (or get alerted if no data).</p>
      </header>

      <main style={{ padding: '0 16px' }}>
        <CalendarView />
      </main>
    </div>
  );
}
