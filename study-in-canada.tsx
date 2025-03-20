import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function StudyInCanada() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar - Same as main page */}
      <header className="bg-black bg-opacity-80 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="py-3 px-4">
            <Image src="/placeholder.svg" alt="ASFE Logo" width={120} height={40} className="bg-white p-1" />
          </div>
          <nav className="hidden md:flex items-center">
            <Link href="#" className="px-4 py-4 hover:text-blue-300 transition-colors">
              HOME
            </Link>
            <div className="group relative px-4 py-4 flex items-center hover:text-blue-300 transition-colors cursor-pointer">
              ABOUT US <ChevronDown className="ml-1 w-4 h-4" />
              <div className="absolute hidden group-hover:block top-full left-0 bg-black bg-opacity-90 min-w-40 z-10">
                <Link href="#" className="block px-4 py-2 hover:bg-blue-900">
                  Our Story
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-blue-900">
                  Team
                </Link>
              </div>
            </div>
            <div className="group relative px-4 py-4 flex items-center hover:text-blue-300 transition-colors cursor-pointer">
              STUDY GLOBAL <ChevronDown className="ml-1 w-4 h-4" />
              <div className="absolute hidden group-hover:block top-full left-0 bg-black bg-opacity-90 min-w-40 z-10">
                <Link href="#" className="block px-4 py-2 hover:bg-blue-900">
                  UK
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-blue-900">
                  USA
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-blue-900">
                  Canada
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-blue-900">
                  Australia
                </Link>
              </div>
            </div>
            <div className="group relative px-4 py-4 flex items-center hover:text-blue-300 transition-colors cursor-pointer">
              SERVICES <ChevronDown className="ml-1 w-4 h-4" />
              <div className="absolute hidden group-hover:block top-full left-0 bg-black bg-opacity-90 min-w-40 z-10">
                <Link href="#" className="block px-4 py-2 hover:bg-blue-900">
                  Admissions
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-blue-900">
                  Visa Assistance
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-blue-900">
                  Test Preparation
                </Link>
              </div>
            </div>
            <Link href="#" className="px-4 py-4 hover:text-blue-300 transition-colors">
              CONTACT US
            </Link>
          </nav>
          <div className="pr-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm font-medium">
              APPLY NOW
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder.svg')",
        }}
      >
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">Study in Canada</h1>
          <p className="max-w-2xl mb-6">
            Canada is known for its excellent education system, diverse culture, stunning landscapes, and welcoming
            environment for international students.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-medium">LEARN MORE</button>
        </div>
      </section>

      {/* Location and Geography + Quick Points */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3 bg-white p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Location and Geography</h2>
              <p className="mb-4">
                Canada is the second largest country in the world by total area. Located in the northern part of North
                America, it extends from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98
                million square kilometers. Canada shares land borders with the United States to the south and northwest
                (Alaska).
              </p>
              <p className="mb-4">
                The country is divided into ten provinces and three territories. The provinces are Alberta, British
                Columbia, Manitoba, New Brunswick, Newfoundland and Labrador, Nova Scotia, Ontario, Prince Edward
                Island, Quebec, and Saskatchewan. The three territories are Northwest Territories, Nunavut, and Yukon.
              </p>
              <div className="mt-8">
                <Image src="/placeholder.svg" alt="Map of Canada" width={500} height={300} className="mx-auto" />
              </div>
            </div>
            <div className="md:w-1/3 bg-blue-500 p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Five Quick Points About the Canada</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    1
                  </div>
                  <span>High-quality education system with affordable tuition fees</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    2
                  </div>
                  <span>Diverse and multicultural environment</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    3
                  </div>
                  <span>Excellent work opportunities during and after studies</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    4
                  </div>
                  <span>Safe environment with high standard of living</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    5
                  </div>
                  <span>Pathway to permanent residency and citizenship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Climate</h2>
              <p className="mb-4">
                Because of its large size, Canada's climate varies considerably. The northern regions experience arctic
                and subarctic conditions, with long, cold winters and short, cool summers. The central and southern
                parts have four distinct seasons, with warm summers and cold winters.
              </p>
              <p className="mb-4">
                The west coast, particularly Vancouver, has a moderate oceanic climate with mild, rainy winters and
                warm, dry summers. The east coast experiences a maritime climate, with cold winters and warm, humid
                summers.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Canadian Park in Autumn"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Economy Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Economy</h2>
              <p className="mb-4">
                Canada has a highly developed mixed economy and is one of the largest economies in the world. It is a
                member of the G7, G20, OECD, and many other international economic organizations. The country's economy
                is dominated by the service industry, which employs about three-quarters of Canadians.
              </p>
              <p className="mb-4">
                Canada is also rich in natural resources, including oil, gas, timber, and minerals. It has the
                third-largest oil reserves in the world after Venezuela and Saudi Arabia. The country is a significant
                exporter of energy, food, and minerals. Canada's largest trading partner is the United States, with whom
                it has a free trade agreement (USMCA, formerly NAFTA).
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="Canadian Economy" width={600} height={400} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Living Conditions Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Living Conditions and Cost of Living</h2>
              <p className="mb-4">
                Canada consistently ranks among the top countries in the world for quality of life. It offers a high
                standard of living, excellent healthcare, and a safe environment. The country is known for its
                multiculturalism and tolerance, making it welcoming for international students.
              </p>
              <p className="mb-4">
                The cost of living varies depending on the location. Major cities like Toronto and Vancouver tend to be
                more expensive, particularly for housing. However, other cities and towns offer more affordable options.
                On average, international students should budget between CAD 10,000 and CAD 20,000 per year for living
                expenses, including accommodation, food, transportation, and personal expenses.
              </p>
              <p className="mb-4">
                Many universities offer on-campus housing options, which can be more affordable and convenient for
                international students. Off-campus housing options include shared apartments, homestays, and private
                rentals.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="Vancouver Harbor" width={600} height={400} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Education System */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Education System</h2>
          <div className="bg-white p-8 rounded-lg">
            <p className="mb-4">
              In Canada, education is under the jurisdiction of the provincial and territorial governments, which means
              there are some variations in the education systems across the country. However, standards are consistently
              high throughout Canada, and diplomas and degrees from Canadian institutions are recognized worldwide.
            </p>
            <p className="mb-4">
              The Canadian education system includes both publicly funded and private schools, from kindergarten through
              to university. Education is compulsory up to the age of 16 in every province in Canada, except for
              Manitoba, Ontario, and New Brunswick, where the compulsory age is 18.
            </p>
            <p className="mb-4">
              Post-secondary education in Canada is provided by universities (research-focused institutions offering
              bachelor's, master's, and doctoral degrees) and colleges (institutions offering diplomas, certificates,
              associate's degrees, and in some cases, bachelor's degrees).
            </p>
            <p className="mb-4">
              A significant characteristic of the Canadian education system is its strong emphasis on research and
              development. The government and private sector heavily fund R&D in medical, agricultural, computer, and
              industrial technology fields.
            </p>
          </div>
        </div>
      </section>

      {/* University and College */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">University</h2>
              <p className="mb-4">
                Canadian universities offer a wide variety of courses and degrees and tend to be quite comprehensive.
                They are focused on academic and professional programs and typically offer both undergraduate and
                graduate degrees.
              </p>
              <p className="mb-4">
                Universities in Canada are largely publicly funded but maintain a considerable degree of autonomy with
                respect to academic matters and policies.
              </p>
              <p className="mb-4">
                To be admitted to a university in Canada, students must have completed secondary school with the
                required academic prerequisites. International students must also demonstrate proficiency in either
                English or French, depending on the language of instruction at the university.
              </p>
              <p className="mb-4">
                Some of the top universities in Canada include the University of Toronto, University of British
                Columbia, McGill University, and the University of Alberta.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">College</h2>
              <p className="mb-4">
                In Canada, the term "college" is generally used to refer to a post-secondary institution that offers
                vocational, technical, or career training. Colleges typically offer diplomas and certificates, although
                some also offer bachelor's degrees.
              </p>
              <p className="mb-4">
                Canadian colleges often have strong connections to industry, which can provide students with practical
                experience and job opportunities. Many college programs include co-op or internship components to give
                students hands-on experience in their field.
              </p>
              <p className="mb-4">
                Admission to a college in Canada typically requires completion of secondary school. Some programs may
                have specific prerequisites or require a portfolio, interview, or audition.
              </p>
              <p className="mb-4">
                Colleges are found across Canada and offer a wide range of programs, from business and technology to
                healthcare and the arts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information for International Students */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Information Specific to International Students</h2>
          <div className="bg-white p-8 rounded-lg">
            <p className="mb-4">
              Canada is one of the most popular destinations for international students, with over 600,000 international
              students choosing to study in Canada each year.
            </p>
            <h3 className="text-xl font-bold mb-2">Study Permits</h3>
            <p className="mb-4">
              Most international students need a study permit to study in Canada. To apply for a study permit, you need
              an acceptance letter from a designated learning institution (DLI), proof of financial support, and a clean
              criminal record. The application process can be done online through the Immigration, Refugees and
              Citizenship Canada (IRCC) website.
            </p>
            <h3 className="text-xl font-bold mb-2">Work Opportunities</h3>
            <p className="mb-4">
              International students in Canada can work part-time (up to 20 hours per week) during regular academic
              sessions and full-time during scheduled breaks without a work permit. After graduation, international
              students may be eligible for a Post-Graduation Work Permit (PGWP), which allows them to work in Canada for
              up to three years.
            </p>
            <h3 className="text-xl font-bold mb-2">Healthcare</h3>
            <p className="mb-4">
              International students in Canada are typically required to have health insurance. Some provinces provide
              health coverage for international students, while others require students to purchase private health
              insurance.
            </p>
            <h3 className="text-xl font-bold mb-2">Pathway to Permanent Residency</h3>
            <p className="mb-4">
              Canada offers several pathways for international students to become permanent residents after graduation.
              Programs like the Canadian Experience Class, Provincial Nominee Programs, and Express Entry can help
              international graduates transition to permanent residency.
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Begin Your Journey */}
      <section
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder.svg')",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact ASFE today to start your application process for studying in Canada. Our experienced counselors will
            guide you every step of the way.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium">
            APPLY NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Study Abroad</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Study in UK
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Study in USA
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Study in Canada
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Study in Australia
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Study in New Zealand
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Study in Europe
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    University Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Visa Assistance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Test Preparation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Career Counseling
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Accommodation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-300">
                    Pre-Departure Briefing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>123 Education Street</li>
                <li>London, UK</li>
                <li>Phone: +44 123 456 7890</li>
                <li>Email: info@asfeconsultants.com</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="hover:text-blue-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-blue-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-blue-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© {new Date().getFullYear()} ASFE Consultants. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

