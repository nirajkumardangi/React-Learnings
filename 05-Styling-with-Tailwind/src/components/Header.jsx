import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-1 mb-8 md:mb-16">
      <img src={logo} alt="A canvas" className="object-contain w-44 h-44 mb-8" />
      <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
