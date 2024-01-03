import React, { useState } from 'react';
import styles from './App.module.css';
import { PROJECTS, PROJECTS_MAX_INDEX } from './constants';

const App = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const prevHandle = () => setProjectIndex((prev) => (prev > 0 ? prev - 1 : 0));
  const nextHandle = () =>
    setProjectIndex((prev) => (prev < PROJECTS_MAX_INDEX ? prev + 1 : prev));

  return (
    <div>
      <nav className={styles.mainNavigation}>
        <ul className={styles.list}>
          <li onClick={prevHandle}>Left</li>
          <li onClick={nextHandle}>Right</li>
        </ul>
      </nav>
      {PROJECTS[projectIndex]}
    </div>
  );
};

export default App;
