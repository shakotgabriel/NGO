export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Who We Are
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Refugee Mental Health Network is a refugee-led grassroots nonprofit providing mental health
            support, education, and awareness to refugee communities especially refugee women and
            young people facing challenges such as post-traumatic stress disorder (PTSD), depression,
            and anxiety due to forced displacement, sexual violence, and gender-based violence.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Work Includes:</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li>Group therapy sessions</li>
            <li>One-on-one counseling</li>
            <li>Community engagements</li>
            <li>Mental health education and training</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mission Statement</h3>
            <p className="text-gray-600">
              To provide comprehensive mental health support and education to refugee women and young people,
              helping them overcome the trauma of displacement, sexual violence, and gender-based violence,
              with the goal of reaching 1 million refugees across Africa by 2030.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-600 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Vision Statement</h3>
            <p className="text-gray-600">
              A world where refugees are empowered to overcome mental health challenges, break barriers,
              and build resilient communities where everyone can flourish and reach their full potential.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2025 Goals:</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Train 66 refugee mental health counselors.</li>
            <li>Establish a culturally sensitive mental health facility where refugees can seek support
                without fear.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
