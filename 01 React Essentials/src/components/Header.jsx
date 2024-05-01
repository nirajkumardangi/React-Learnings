import reactImg from '../assets/react-core-concepts.png';
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../data.js';

const reactDescriptions = ["Fundamentals", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title} 
              description = {CORE_CONCEPTS[0].description}
              image = {CORE_CONCEPTS[0].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[1].title} 
              description = {CORE_CONCEPTS[1].description}
              image = {CORE_CONCEPTS[1].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[2].title} 
              description = {CORE_CONCEPTS[2].description}
              image = {CORE_CONCEPTS[2].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[3].title} 
              description = {CORE_CONCEPTS[3].description}
              image = {CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
      </main>
    </>
  );
}

export default Header;