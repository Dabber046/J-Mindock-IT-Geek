import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <p>This is a React + TypeScript + Tailwind site.</p>
      </main>
      <Footer />
    </div>
  );
}
