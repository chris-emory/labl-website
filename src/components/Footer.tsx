export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50 py-8 text-center text-sm text-gray-600">
      <p>
        © {new Date().getFullYear()} Language Biomarker Lab · Emory University
      </p>
      <p className="mt-2">
        Designed and developed with ❤️ using{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Tailwind CSS
        </a>
        .
      </p>
    </footer>
  );
}
