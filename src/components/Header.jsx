import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header
      className="
          flex
          flex-col 
          items-center 
          md:mb-16 
          mb-8
          mt-8
        "
    >
      <img
        src={logo}
        alt="A canvas"
        className="mb-8 w-44 h-44 object-contain "
      />
      <h1
        className=" 
          md:text-4xl 
          text-2xl
          tracking-widest 
          font-semibold 
          uppercase 
          text-amber-800 
          font-title 
          "
      >
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
