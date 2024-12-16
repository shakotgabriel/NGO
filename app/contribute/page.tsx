import Link from 'next/link';

export default function Contribute() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Join Us in Restoring Hope and Rebuilding Lives
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Support Our Work</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-4">Donate</h3>
            <p className="mb-6">
              Help fund mental health programs for refugee mothers and young people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://gofundme.com/your-campaign-link" // Replace with actual GoFundMe link
                className="bg-[#00b964] text-white px-6 py-3 rounded-md text-center hover:bg-[#00a055] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate via GoFundMe
              </a>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Make a Direct Donation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Partner With Us</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-6">
            Collaborate to create lasting change. We welcome partnerships in various forms:
          </p>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li>Sponsoring mental health programs</li>
            <li>Providing funding or technical expertise</li>
            <li>Partnering on awareness campaigns or community initiatives</li>
          </ul>
          <Link 
            href="/contacts" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us to Partner
          </Link>
        </div>
      </section>
    </div>
  );
}
