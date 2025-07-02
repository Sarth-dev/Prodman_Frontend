import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/">
              <span className="text-2xl font-bold text-blue-600">ProdMan</span>
            </a>
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/Dashboard" className="text-gray-700 hover:text-blue-600 transition">Add Product</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}