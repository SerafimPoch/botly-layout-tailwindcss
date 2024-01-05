import Image from "next/image";

export const Header = () => (
  <header className="flex justify-between items-end p-40px ">
    <div className="flex items-end gap-3 cursor-pointer">
      <a href="/" aria-label="Homepage">
        <Image width={38} height={38} src="logo.svg" alt="Botly logo" />
      </a>
      <h1 className="text-white text-2.5xl leading-9 font-lilita">Botly</h1>
    </div>
    <nav>
      <ul className="flex items-center gap-3 text-white text-lg font-monts">
        <li>
          <a href="/pricing" className="opacity-50 hover:opacity-100">
            Pricing
          </a>
        </li>
        <li>
          <a href="/changelog" className="opacity-50 hover:opacity-100">
            Changelog
          </a>
        </li>
        <li>
          <a href="/github" className="opacity-50 hover:opacity-100">
            Github
          </a>
        </li>
        <li>
          <a href="/pro" className="opacity-50 hover:opacity-100">
            Go Pro
          </a>
        </li>
      </ul>
    </nav>
    <button
      aria-label="Download the Botly app"
      className="w-147px h-48px flex items-center justify-center bg-purple-light rounded-xl hover:bg-purple-500"
      type="button"
    >
      <span className="text-creamy font-monts">Download</span>
    </button>
  </header>
);
