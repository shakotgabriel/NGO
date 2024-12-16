export default function Programs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Our Programs and Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-bold text-gray-900 mb-4">1. Needs Assessment</h2>
          <p className="text-gray-600">
            Carrying out focus group discussions and key informant interviews with refugee
            communities to understand priority mental health needs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-bold text-gray-900 mb-4">2. Therapy and Counseling</h2>
          <p className="text-gray-600">
            Providing trauma-informed and culturally sensitive one-on-one and group counseling.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-bold text-gray-900 mb-4">3. Support Groups</h2>
          <p className="text-gray-600">
            Creating safe spaces for refugees to connect, share, and heal together.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-bold text-gray-900 mb-4">4. Mental Health Education</h2>
          <p className="text-gray-600">
            Offering workshops and seminars focused on coping mechanisms, self-care, and
            mental health awareness.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border md:col-span-2">
          <h2 className="text-xl font-bold text-gray-900 mb-4">5. Community Outreach</h2>
          <p className="text-gray-600">
            Advocacy and initiatives to destigmatize mental health within refugee communities.
          </p>
        </div>
      </div>
    </div>
  );
} 