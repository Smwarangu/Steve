import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function StudyInGermany() {
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
                  Germany
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
          <h1 className="text-5xl font-bold mb-4">Study in Germany</h1>
          <p className="max-w-2xl mb-6">
            Germany offers world-class education with no or low tuition fees, making it an attractive destination for
            international students.
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
                Germany, officially the Federal Republic of Germany (Bundesrepublik Deutschland), is situated in central
                Europe, with coastal access to the North and Baltic Seas. It shares borders with Denmark to the north,
                Poland and the Czech Republic to the east, Austria and Switzerland to the south, France, Luxembourg,
                Belgium, and the Netherlands to the west.
              </p>
              <p className="mb-4">
                The country is divided into 16 federal states (Bundesländer), each with its own constitution,
                parliament, and government. The landscape is diverse, ranging from the lowlands in the north to the
                Bavarian Alps in the south.
              </p>
              <div className="mt-8">
                <Image src="/placeholder.svg" alt="Map of Germany" width={500} height={400} className="mx-auto" />
              </div>
            </div>
            <div className="md:w-1/3 bg-blue-500 p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Five Quick Points About Germany</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    1
                  </div>
                  <span>No tuition fees at public universities for all international students</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    2
                  </div>
                  <span>World-class education system with many international programs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    3
                  </div>
                  <span>Strong, environmentally-aware society</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    4
                  </div>
                  <span>Blend of modern and traditional culture</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    5
                  </div>
                  <span>Excellent work opportunities during and after studies</span>
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
                The climate of Germany is temperate and varies by region, with maritime influences in the north and
                continental conditions in the east and south. Winters are cool, with average January temperatures
                ranging from -3°C to 2°C, while summers are warm, with average July temperatures ranging from 16°C to
                20°C.
              </p>
              <p className="mb-4">
                Rainfall is distributed throughout the year, with slightly higher precipitation in the summer months.
                The country experiences four distinct seasons, each offering its own unique charm and activities.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Frankfurt Skyline at Sunset"
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
                Germany is the largest of the European economies and, by nominal GDP, the fourth largest economy in the
                world after the U.S., China, and Japan. It is a leading exporter of machinery, vehicles, chemicals, and
                household equipment and benefits from a highly skilled labor force. It is among the largest and most
                technologically advanced producers of iron, steel, coal, cement, chemicals, machinery, vehicles, machine
                tools, electronics, food and beverages, shipbuilding, and textiles.
              </p>
              <p className="mb-4">
                Some of the largest global companies are headquartered in Germany, including Volkswagen, Allianz,
                Siemens, and Bosch. The country is also home to numerous small and medium-sized enterprises
                (Mittelstand), which are considered the backbone of the German economy. The country is a founding member
                of the European Union and the Eurozone.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="German Economy" width={600} height={400} className="rounded-lg" />
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
                Germany offers a high standard of living with excellent infrastructure, healthcare, and public
                transportation. The country is known for its safety, cleanliness, and efficiency. Cities like Berlin,
                Munich, and Hamburg offer vibrant cultural scenes, while smaller university towns provide a more
                intimate and focused academic environment.
              </p>
              <p className="mb-4">
                The cost of living in Germany is moderate compared to other Western European countries. Students should
                budget between €850 and €1,000 per month for living expenses, including accommodation, food,
                transportation, health insurance, and personal expenses. Accommodation is typically the largest expense,
                with options including student dormitories, shared apartments, and private rentals.
              </p>
              <p className="mb-4">
                International students in Germany are allowed to work part-time (up to 120 full days or 240 half days
                per year) to help cover their living expenses. This can significantly reduce the financial burden while
                providing valuable work experience.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="Frankfurt Skyline" width={600} height={400} className="rounded-lg" />
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
              The German higher education system is renowned for its quality and is comprised of several types of
              institutions:
            </p>
            <h3 className="text-xl font-bold mb-2">Universities (Universitäten)</h3>
            <p className="mb-4">
              These institutions offer a wide range of academic subjects and have a strong theoretical and research
              orientation. They award bachelor's, master's, and doctoral degrees.
            </p>
            <h3 className="text-xl font-bold mb-2">Universities of Applied Sciences (Fachhochschulen)</h3>
            <p className="mb-4">
              These focus on applied sciences and offer practice-oriented education in fields such as engineering,
              business, social work, and design. They have strong connections with industry and typically include
              internships as part of their programs.
            </p>
            <h3 className="text-xl font-bold mb-2">Colleges of Art, Film, and Music</h3>
            <p className="mb-4">
              These specialized institutions offer programs in various artistic fields and usually require an entrance
              examination or portfolio.
            </p>
            <p className="mb-4">
              One of the most attractive aspects of studying in Germany is that public universities generally do not
              charge tuition fees for undergraduate and most graduate programs, regardless of nationality. Students only
              pay a semester fee (usually between €150 and €300) that covers administrative costs and often includes a
              public transportation ticket.
            </p>
          </div>
        </div>
      </section>

      {/* Programs and Universities */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Programs and Universities</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left">University</th>
                  <th className="py-2 px-4 border-b text-left">Location</th>
                  <th className="py-2 px-4 border-b text-left">Programs</th>
                  <th className="py-2 px-4 border-b text-left">Language</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Technical University of Munich</td>
                  <td className="py-2 px-4 border-b">Munich</td>
                  <td className="py-2 px-4 border-b">Engineering, Computer Science, Natural Sciences</td>
                  <td className="py-2 px-4 border-b">German/English</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">Heidelberg University</td>
                  <td className="py-2 px-4 border-b">Heidelberg</td>
                  <td className="py-2 px-4 border-b">Medicine, Law, Humanities</td>
                  <td className="py-2 px-4 border-b">German/English</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Humboldt University of Berlin</td>
                  <td className="py-2 px-4 border-b">Berlin</td>
                  <td className="py-2 px-4 border-b">Arts, Humanities, Social Sciences</td>
                  <td className="py-2 px-4 border-b">German/English</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">RWTH Aachen University</td>
                  <td className="py-2 px-4 border-b">Aachen</td>
                  <td className="py-2 px-4 border-b">Engineering, Technology</td>
                  <td className="py-2 px-4 border-b">German/English</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Ludwig Maximilian University of Munich</td>
                  <td className="py-2 px-4 border-b">Munich</td>
                  <td className="py-2 px-4 border-b">Medicine, Law, Business</td>
                  <td className="py-2 px-4 border-b">German/English</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
              Show All Universities
            </button>
          </div>
        </div>
      </section>

      {/* Information for International Students */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Information Specific to International Students</h2>
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Visa Requirements</h3>
            <p className="mb-4">
              Students from EU/EEA countries do not need a visa to study in Germany. Students from other countries
              typically need to apply for a student visa (Visum zu Studienzwecken) at the German embassy or consulate in
              their home country. Requirements include an acceptance letter from a German university, proof of financial
              resources (approximately €10,332 per year), and health insurance.
            </p>
            <h3 className="text-xl font-bold mb-2">Language Requirements</h3>
            <p className="mb-4">
              For programs taught in German, international students typically need to demonstrate German language
              proficiency through tests like the TestDaF or DSH. For English-taught programs, proficiency in English is
              required, usually through tests like TOEFL or IELTS. Many universities offer preparatory German language
              courses for international students.
            </p>
            <h3 className="text-xl font-bold mb-2">Work Opportunities</h3>
            <p className="mb-4">
              International students can work up to 120 full days or 240 half days per year without a work permit. After
              graduation, international students can apply for an 18-month residence permit to seek employment in
              Germany. If they find a job related to their studies, they can apply for a EU Blue Card or a residence
              permit for qualified professionals.
            </p>
            <h3 className="text-xl font-bold mb-2">Health Insurance</h3>
            <p className="mb-4">
              Health insurance is mandatory for all students in Germany. Students from EU/EEA countries can use their
              European Health Insurance Card (EHIC). Students from other countries need to purchase German health
              insurance, which costs approximately €110 per month.
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
            Contact ASFE today to start your application process for studying in Germany. Our experienced counselors
            will guide you every step of the way.
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
                    Study in Germany
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

