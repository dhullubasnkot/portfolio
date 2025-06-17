export default function Navbar() {
  return (
    <nav className="w-full h-[66px] flex text-white font-bold text-[17px]">
      <div className="w-1/2 bg-[#f2f2f2]"></div>

      <div className="w-1/2 bg-black flex justify-end items-center px-12 gap-8">
        <a href="#about" className="hover:text-gray-400 transition">
          About me
        </a>
        <a href="#skills" className="hover:text-gray-400 transition">
          Skills
        </a>
        <a href="#portfolio" className="hover:text-gray-400 transition">
          Portfolio
        </a>
        <a
          href="#contact"
          className="bg-white text-black px-4 py-1 rounded-full text-xs font-semibold hover:bg-gray-200 transition"
        >
          CONTACT ME
        </a>
      </div>
    </nav>
  );
}
