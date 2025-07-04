import Form from './form/Form';
import Footer from './components/footer';
import Header from './components/header';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">My Next.js Form</h1>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}