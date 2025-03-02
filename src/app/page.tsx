export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-xl">
        <h1 className="text-5xl font-bold text-orange-500">¡Bienvenido a Gigawall!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Tu plataforma de compra y entrega expeditiva de materiales de construcción.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition">
          Explorar productos
        </button>
      </div>
    </div>
  );
}
