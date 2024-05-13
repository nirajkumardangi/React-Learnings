import logo from '../assets/logo.png';
import Classes from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={Classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
