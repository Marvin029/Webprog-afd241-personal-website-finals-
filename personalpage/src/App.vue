<template>
  <div class="App">
    <nav>
      <a href="#mainHeading">Home</a>
      <a href="#life">My Life</a>
      <a href="#education">Education</a>
      <a href="#course">Course</a>
      <a href="#experience">Experience</a>
      <a href="#goals">Goals</a>
      <a href="#hobbyList">Hobbies</a>
      <label for="darkModeToggle" class="dark-mode-label">🌙</label>
      <input type="checkbox" id="darkModeToggle" />
    </nav>

    <header class="page-header">
      <h1 id="mainHeading">{{ mainHeading }}</h1>
      <h2 v-if="introVisible" id="intro">
        Hi, I'm John Marvin Sumalinog, a Computer Science student passionate about technology and innovation.
      </h2>
    </header>

    <main class="container">
      <section class="main-content">
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
          <p id="goalText">{{ goal }}</p>
          <input
            type="text"
            id="goalInput"
            placeholder="Enter your new goal"
            v-model="goalInput"
          />
          <button @click="updateGoal">Update Goal</button>
        </div>

        <div id="dateTimeSection">
          <h3>Current Date & Time</h3>
          <div id="dateTime">{{ dateTime }}</div>
          <button @click="showDateTime">Show Date & Time</button>
        </div>
      </section>
      <aside class="sidebar">
        <h2>Hobbies & Interests</h2>
        <ul id="hobbyList">
          <li v-for="(hobby, index) in hobbies" :key="index">{{ hobby }}</li>
        </ul>
        <input
          type="text"
          id="newHobby"
          placeholder="Add a hobby"
          v-model="newHobby"
        />
        <button @click="addHobby">Add Hobby</button>
      </aside>
    </main>

    <section class="extra-section">
      <h2>More Features</h2>
      <div class="glass-card">
        <div id="demo">A paragraph.</div>
        <div id="p1">Hello World p1!</div>
        <div id="p2">Hello World p2!</div>
        <button @click="myFunction">Click Me</button>
        <button @click="changeHeading">Change Heading</button>
        <button @click="toggleIntro">Toggle Intro Paragraph</button>
      </div>
    </section>

    <footer>
      <p>Picture Gallery Coming Soon!</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      goal: 'To graduate and work.',
      goalInput: '',
      dateTime: '',
      hobbies: ['Biking', 'Running'],
      newHobby: '',
      introVisible: true,
      mainHeading: 'Welcome to my Personal Profile Page!',
    };
  },
  methods: {
    updateGoal() {
      if (this.goalInput.trim() !== '') {
        this.goal = this.goalInput;
        this.goalInput = '';
      }
    },
    showDateTime() {
      const now = new Date();
      this.dateTime = now.toLocaleString();
    },
    addHobby() {
      if (this.newHobby.trim() !== '') {
        this.hobbies.push(this.newHobby.trim());
        this.newHobby = '';
      }
    },
    myFunction() {
      alert('Button clicked!');
    },
    changeHeading() {
      this.mainHeading = 'Heading Changed!';
    },
    toggleIntro() {
      this.introVisible = !this.introVisible;
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here or import external CSS */
</style>
