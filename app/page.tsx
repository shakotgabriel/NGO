import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Support Refugee Mothers—Donate Today
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Forced displacement, sexual and gender-based violence leave deep scars on refugee
          mothers. With your support, we can provide therapy, counselling, and hope to help
          them rebuild their lives.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-12">
        <a
          href="https://gofund.me/de7ca1ca"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition"
        >
          Support Our GoFundMe
        </a>
        <a
          href="https://reframe.network/rlo/refugee-mental-health-network"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-md hover:bg-red-50 transition"
        >
          Donate Now
        </a>
      </div>

      {/* Image section - Replace src with actual image paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[400px]">
          <Image
            src="/images/support-1.jpg"
            alt="Refugee mothers receiving support"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[400px]">
          <Image
            src="/images/support-2.jpg"
            alt="Mental health support session"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
