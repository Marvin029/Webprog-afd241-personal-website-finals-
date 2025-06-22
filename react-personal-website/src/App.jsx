import React, { useState } from 'react';
import './assets/App.css';

function App() {
  const [goal, setGoal] = useState('To graduate and work.');
  const [goalInput, setGoalInput] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [hobbies, setHobbies] = useState(['Biking', 'Running']);
  const [newHobby, setNewHobby] = useState('');
  const [introVisible, setIntroVisible] = useState(true);
  const [mainHeading, setMainHeading] = useState('Welcome to my Personal Profile Page!');

  const updateGoal = () => {
    if (goalInput.trim() !== '') {
      setGoal(goalInput);
      setGoalInput('');
    }
  };

  const showDateTime = () => {
    const now = new Date();
    setDateTime(now.toLocaleString());
  };

  const addHobby = () => {
    if (newHobby.trim() !== '') {
      setHobbies([...hobbies, newHobby.trim()]);
      setNewHobby('');
    }
  };

  const myFunction = () => {
    alert('Button clicked!');
  };

  const changeHeading = () => {
    setMainHeading('Heading Changed!');
  };

  const toggleIntro = () => {
    setIntroVisible(!introVisible);
  };

  return (
    <div className="App">
      <nav>
        <a href="#mainHeading">Home</a>
        <a href="#life">My Life</a>
        <a href="#education">Education</a>
        <a href="#course">Course</a>
        <a href="#experience">Experience</a>
        <a href="#goals">Goals</a>
        <a href="#hobbyList">Hobbies</a>
        {/* Dark Mode Switch placeholder */}
        <label htmlFor="darkModeToggle" className="dark-mode-label">🌙</label>
        <input type="checkbox" id="darkModeToggle" />
      </nav>

      <header className="page-header">
        <h1 id="mainHeading">{mainHeading}</h1>
        {introVisible && (
          <h2 id="intro">
            Hi, I'm John Marvin Sumalinog, a Computer Science student passionate about technology and innovation.
          </h2>
        )}
      </header>

      <main className="container">
        <section className="main-content">
          <h2>About Me</h2>

          <div id="life">
            <h3>1. My Life</h3>
            <p>To graduate and work in the tech industry.</p>
          </div>

          <div id="education">
            <h3>2. Education / Achievements</h3>
            <ul>
              <li>BS in Computer Science, Asia Pacific College</li>
            </ul>
          </div>

          <div id="course">
            <h3>3. Course</h3>
            <p>Exploring software development, web technologies, and cloud computing.</p>
          </div>

          <div id="experience">
            <h3>4. IT Experience</h3>
            <p>Internship & projects in web applications using modern tools.</p>
          </div>

          <div id="goals">
            <h3>5. Goals In Life / Dream</h3>
            <p id="goalText">{goal}</p>
            <input
              type="text"
              id="goalInput"
              placeholder="Enter your new goal"
              value={goalInput}
              onChange={(e) => setGoalInput(e.target.value)}
            />
            <button onClick={updateGoal}>Update Goal</button>
          </div>

          <div id="dateTimeSection">
            <h3>Current Date & Time</h3>
            <div id="dateTime">{dateTime}</div>
            <button onClick={showDateTime}>Show Date & Time</button>
          </div>
        </section>
        <aside className="sidebar">
          <h2>Hobbies & Interests</h2>
          <ul id="hobbyList">
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
          <input
            type="text"
            id="newHobby"
            placeholder="Add a hobby"
            value={newHobby}
            onChange={(e) => setNewHobby(e.target.value)}
          />
          <button onClick={addHobby}>Add Hobby</button>
        </aside>
      </main>

      <section className="extra-section">
        <h2>More Features</h2>
        <div className="glass-card">
          <div id="demo">A paragraph.</div>
          <div id="p1">Hello World p1!</div>
          <div id="p2">Hello World p2!</div>
          <button onClick={myFunction}>Click Me</button>
          <button onClick={changeHeading}>Change Heading</button>
          <button onClick={toggleIntro}>Toggle Intro Paragraph</button>
        </div>
      </section>

      <footer>
        <p>Picture Gallery Coming Soon!</p>
      </footer>
    </div>
  );
}

export default App;
