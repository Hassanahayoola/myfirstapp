export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-indigo-600">Student Dashboard</h1>
        <p className="hidden text-sm text-gray-500 sm:block">
          Track your courses and assignments
        </p>
      </div>
    </header>
  );
}