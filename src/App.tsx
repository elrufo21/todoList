import "./App.css";
import Header from "./ui/components/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
        <Header />
      </header>
      <div className="flex flex-1">
        <aside className="hidden md:block md:w-64 bg-white border-r p-4">
        </aside>
        <main className="flex-1 p-6">
          {/* Aquí va el contenido principal */}
        </main>
      </div>
    </div>
  );
}

export default App;