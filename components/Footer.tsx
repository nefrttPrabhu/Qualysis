import Link from "next/link";

export default function Footer() {
  return (
    <footer id="about" className="bg-black/[0.96] text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">© 2024 Qualisys. All rights reserved.</p>
        <nav className="flex space-x-4">
          <Link className="text-gray-400 hover:text-white transition-colors duration-300" href="#">
            Terms
          </Link>
          <Link className="text-gray-400 hover:text-white transition-colors duration-300" href="#">
            Privacy
          </Link>
          <Link className="text-gray-400 hover:text-white transition-colors duration-300" href="#">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}