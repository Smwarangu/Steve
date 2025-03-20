import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function StudyInUSA() {
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
          <h1 className="text-5xl font-bold mb-4">Study in USA</h1>
          <p className="max-w-2xl mb-6">
            The United States of America is home to some of the world's best universities and offers international
            students unparalleled educational opportunities and experiences.
          </p>
        </div>
      </section>

      {/* Location and Geography + Quick Points */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3 bg-white p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Location and Geography</h2>
              <p className="mb-4">
                The United States of America (also referred to as the United States, the U.S., the USA, or America) is a
                federal constitutional republic comprising fifty states and a federal district. The country is situated
                mostly in central North America, where its forty-eight contiguous states and Washington, D.C., the
                capital district, lie between the Pacific and Atlantic Oceans, bordered by Canada to the north and
                Mexico to the south.
              </p>
              <p className="mb-4">
                The state of Alaska is in the northwest of the continent, with Canada to the east and Russia to the west
                across the Bering Strait. The state of Hawaii is an archipelago in the mid-Pacific. The country also
                possesses several territories in the Pacific and Caribbean. At 3.79 million square miles (9.83 million
                km2) and with over 330 million people, the United States is the third- or fourth-largest country by
                total area, and the third most populous.
              </p>
              <div className="mt-8">
                <Image src="/placeholder.svg" alt="Map of USA" width={400} height={250} className="mx-auto" />
                <p className="text-center text-sm mt-2 text-gray-500">UNITED STATES OF AMERICA</p>
              </div>
            </div>
            <div className="md:w-1/3 bg-blue-500 p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Five Quick Points About the USA</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    1
                  </div>
                  <span>World-class universities with international reputations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    2
                  </div>
                  <span>Huge variety of educational institutions, programs, and locations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    3
                  </div>
                  <span>Cutting-edge technology, research, and techniques in all fields</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    4
                  </div>
                  <span>Vibrant campus life with countless clubs, sports, and activities</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    5
                  </div>
                  <span>Flexible education system that allows students to change majors and explore interests</span>
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
                With its large size and geographic variety, the United States includes most climate types. To the east
                of the 100th meridian, the climate ranges from humid continental in the north to humid subtropical in
                the south. The Great Plains west of the 100th meridian are semi-arid. Much of the Western mountains have
                an alpine climate. The climate is arid in the Great Basin, desert in the Southwest, Mediterranean in
                coastal California, and oceanic in coastal Oregon and Washington and southern Alaska.
              </p>
              <p className="mb-4">
                Most of the United States is temperate, but Alaska has Arctic tundra, and Hawaii and South Florida are
                tropical. Extreme weather is not uncommon—the states bordering the Gulf of Mexico are prone to
                hurricanes, and most of the world's tornadoes occur within the country, mainly in Tornado Alley areas in
                the Midwest and South.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="New York City Skyline with Central Park"
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
                The United States has a capitalist mixed economy, which is fueled by abundant natural resources, a
                well-developed infrastructure, and high productivity. According to the International Monetary Fund, the
                U.S. GDP of $22.7 trillion constitutes 24% of the gross world product at market exchange rates and over
                19% of the gross world product at purchasing power parity (PPP).
              </p>
              <p className="mb-4">
                The U.S. dollar is the world's primary reserve currency. The United States is the largest importer of
                goods and second-largest exporter, though exports per capita are relatively low. In 2010, the total U.S.
                trade deficit was $635 billion. Canada, China, Mexico, Japan, and Germany are its top trading partners.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="Stock Market" width={600} height={400} className="rounded-lg" />
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
                Living conditions in the United States vary by location, but generally offer a high standard of living.
                Major cities like New York, San Francisco, and Boston tend to have higher costs of living, while smaller
                cities and rural areas are more affordable. Housing is typically the largest expense, followed by
                transportation and food.
              </p>
              <p className="mb-4">
                International students should budget for accommodation, food, health insurance, transportation, and
                personal expenses. On-campus housing (dormitories) is common for undergraduate students, while graduate
                students often live off-campus. Many universities require first-year students to live on campus.
              </p>
              <p className="mb-4">
                The average cost of living for international students ranges from $10,000 to $25,000 per year, depending
                on the location and lifestyle. This is in addition to tuition fees, which vary widely between
                institutions.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="American Suburban Houses"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="University Campus" width={600} height={400} className="rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Structure</h2>
              <p className="mb-4">
                The U.S. higher education system offers a wide range of institutions, from large public research
                universities to small private liberal arts colleges. The system is decentralized, with each state
                overseeing its public institutions, while private institutions operate independently.
              </p>
              <p className="mb-4">
                Undergraduate degrees (Bachelor's) typically take four years to complete, while graduate degrees include
                Master's (1-2 years) and Doctoral degrees (3-7 years). Professional degrees in fields like medicine,
                law, and dentistry require additional years of study after completing a bachelor's degree.
              </p>
              <p className="mb-4">
                The academic year usually runs from August/September to May/June, with optional summer sessions. Most
                universities operate on either a semester system (two terms per year) or a quarter system (three terms
                per year).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Context Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Local Context</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="mb-4">
              To understand the American higher education landscape, it's important to recognize that the United States
              has over 4,000 accredited higher education institutions, ranging from community colleges to Ivy League
              universities. This diversity offers students tremendous choice but can also make the selection process
              challenging.
            </p>
            <p className="mb-4">
              American universities are known for their flexible curriculum, allowing students to explore different
              subjects before declaring a major. This contrasts with educational systems in many other countries where
              students must choose their field of study before entering university.
            </p>
            <p className="mb-4">
              Campus life is an integral part of the American college experience. Universities offer extensive
              extracurricular activities, including sports teams, student clubs, fraternities and sororities, and
              cultural events. Participation in these activities is encouraged and can enhance a student's educational
              experience.
            </p>
            <p className="mb-4">
              The relationship between professors and students is generally less formal than in many other countries.
              Students are encouraged to participate in class discussions, ask questions, and meet with professors
              during office hours. Critical thinking and independent research are highly valued.
            </p>
          </div>
        </div>
      </section>

      {/* Information for International Students */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Information Specific to International Students</h2>
          <div className="bg-white p-8 rounded-lg">
            <p className="mb-4">
              The U.S. is the top destination for international students, with over one million foreign students
              enrolled in American institutions.
            </p>
            <h3 className="text-xl font-bold mb-2">Visa Requirements</h3>
            <p className="mb-4">
              International students typically need an F-1 visa to study in the United States. To obtain this visa,
              students must first be accepted by a SEVP (Student and Exchange Visitor Program) approved school, receive
              an I-20 form, pay the SEVIS fee, and complete the visa application process, which includes an interview at
              a U.S. embassy or consulate.
            </p>
            <h3 className="text-xl font-bold mb-2">English Language Requirements</h3>
            <p className="mb-4">
              Most U.S. universities require international students to demonstrate English proficiency through
              standardized tests like TOEFL or IELTS. Some institutions offer conditional admission with English
              language programs for students who need to improve their language skills.
            </p>
            <h3 className="text-xl font-bold mb-2">Financial Considerations</h3>
            <p className="mb-4">
              International students must provide proof of financial resources to cover tuition and living expenses for
              at least the first year of study. While international students are generally not eligible for federal
              financial aid, many universities offer scholarships and assistantships specifically for international
              students.
            </p>
            <h3 className="text-xl font-bold mb-2">Work Opportunities</h3>
            <p className="mb-4">
              F-1 visa holders can work on-campus for up to 20 hours per week during the academic year and full-time
              during breaks. After completing one academic year, students may be eligible for Curricular Practical
              Training (CPT) and Optional Practical Training (OPT), which allow for off-campus employment related to
              their field of study.
            </p>
          </div>
        </div>
      </section>

      {/* List of Universities */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">List of Universities</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left">#</th>
                  <th className="py-2 px-4 border-b text-left">University Name</th>
                  <th className="py-2 px-4 border-b text-left">Location</th>
                  <th className="py-2 px-4 border-b text-left">Type</th>
                  <th className="py-2 px-4 border-b text-left">Ranking</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">Harvard University</td>
                  <td className="py-2 px-4 border-b">Cambridge, MA</td>
                  <td className="py-2 px-4 border-b">Private</td>
                  <td className="py-2 px-4 border-b">1</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">Stanford University</td>
                  <td className="py-2 px-4 border-b">Stanford, CA</td>
                  <td className="py-2 px-4 border-b">Private</td>
                  <td className="py-2 px-4 border-b">2</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">3</td>
                  <td className="py-2 px-4 border-b">Massachusetts Institute of Technology</td>
                  <td className="py-2 px-4 border-b">Cambridge, MA</td>
                  <td className="py-2 px-4 border-b">Private</td>
                  <td className="py-2 px-4 border-b">3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">4</td>
                  <td className="py-2 px-4 border-b">University of California, Berkeley</td>
                  <td className="py-2 px-4 border-b">Berkeley, CA</td>
                  <td className="py-2 px-4 border-b">Public</td>
                  <td className="py-2 px-4 border-b">4</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">5</td>
                  <td className="py-2 px-4 border-b">Yale University</td>
                  <td className="py-2 px-4 border-b">New Haven, CT</td>
                  <td className="py-2 px-4 border-b">Private</td>
                  <td className="py-2 px-4 border-b">5</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">6</td>
                  <td className="py-2 px-4 border-b">Princeton University</td>
                  <td className="py-2 px-4 border-b">Princeton, NJ</td>
                  <td className="py-2 px-4 border-b">Private</td>
                  <td className="py-2 px-4 border-b">6</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">7</td>
                  <td className="py-2 px-4 border-b">Columbia University</td>
                  <td className="py-2 px-4 border-b">New York, NY</td>
                  <td className="py-2 px-4 border-b">Private</td>
                  <td className="py-2 px-4 border-b">7</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">8</td>
                  <td className="py-2 px-4 border-b">University of Chicago</td>
                  <td className="py-2 px-4 border-b">Chicago, IL</td>
                  <td className="py-2 px-4 border-b">Private</td>
                  <td className="py-2 px-4 border-b">8</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">9</td>
                  <td className="py-2 px-4 border-b">University of Pennsylvania</td>
                  <td className="py-2 px-4 border-b">Philadelphia, PA</td>
                  <td className="py-2 px-4 border-b">Private</td>
                  <td className="py-2 px-4 border-b">9</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">10</td>
                  <td className="py-2 px-4 border-b">Cornell University</td>
                  <td className="py-2 px-4 border-b">Ithaca, NY</td>
                  <td className="py-2 px-4 border-b">Private</td>
                  <td className="py-2 px-4 border-b">10</td>
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

      {/* More Information */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">More Information</h2>
          <div className="bg-white p-8 rounded-lg">
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  U.S. Department of Education - Information for International Students
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  EducationUSA - Official Source on U.S. Higher Education
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Study in the USA - Comprehensive Guide for International Students
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  U.S. News & World Report - Best Colleges Rankings
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  College Board - College Search and Planning Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  U.S. Department of State - Student Visa Information
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  NAFSA: Association of International Educators
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Institute of International Education (IIE)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Common Application - Apply to Multiple Colleges with One Application
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  TOEFL - Test of English as a Foreign Language
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  IELTS - International English Language Testing System
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  SAT - College Admission Test
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  ACT - College Admission Test
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  GRE - Graduate Record Examination
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  GMAT - Graduate Management Admission Test
                </Link>
              </li>
            </ul>
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
            Contact ASFE today to start your application process for studying in the United States. Our experienced
            counselors will guide you every step of the way.
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

