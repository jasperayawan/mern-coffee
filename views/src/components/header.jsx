import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full z-50 bg-white fixed top-0 left-0">
      <nav className="max-w-5xl mx-auto flex justify-between items-center px-4 py-5">
        <div className="logo text-3xl">
          <span className="text-4xl text-stone-800 font-bold">C</span>offee{" "}
          <span className="text-4xl text-stone-800 font-bold">C</span>afe
        </div>

        <div className="flex justify-center items-center gap-4">
          <ul className="hidden md:flex justify-center items-center gap-3">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Menu</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>

          <Link to='/register' className="ring-1 ring-slate-950 px-4 py-2">Signup</Link>
          <button className="bg-slate-950 text-slate-500 px-4 py-2">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}
