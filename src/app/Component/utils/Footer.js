export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
      <p>
        &copy; {new Date().getFullYear()} Product Manager App. Built with 💻 by Sarthak Kale.
      </p>
      <div className="mt-2">
        <a href="https://github.com/sarthakkale03" target="_blank" className="underline hover:text-blue-600">
          GitHub
        </a>
        {" | "}
        <a href="mailto:sarthakkaleofficial@gmail.com" className="underline hover:text-blue-600">
          Contact
        </a>
      </div>
    </footer>
  );
}