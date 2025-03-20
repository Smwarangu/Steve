import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Check, ArrowRight } from "lucide-react"

export default function StudyInUK() {
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
          <h1 className="text-5xl font-bold mb-4">Study in UK</h1>
          <p className="max-w-2xl mb-6">
            The United Kingdom offers world-class education with globally recognized qualifications and a diverse,
            multicultural environment.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-medium">LEARN MORE</button>
        </div>
      </section>

      {/* Why Study in UK + Quick Points */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3 bg-white p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Why Study in UK?</h2>
              <p className="mb-4">
                The United Kingdom has a long-standing reputation for academic excellence, with some of the world's
                oldest and most prestigious universities. UK qualifications are recognized and respected worldwide,
                giving graduates a competitive edge in the global job market.
              </p>
              <p className="mb-4">
                The UK education system focuses on developing critical thinking, creativity, and independent learning
                skills. Students benefit from innovative teaching methods, state-of-the-art facilities, and
                opportunities to engage with leading academics and industry professionals.
              </p>
              <p className="mb-4">
                With shorter course durations compared to many other countries (typically 3 years for undergraduate and
                1 year for master's programs), studying in the UK can be more cost-effective while still providing a
                high-quality education.
              </p>
            </div>
            <div className="md:w-1/3 bg-blue-500 p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Five Quick Points About the UK</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    1
                  </div>
                  <span>World-class education with globally recognized qualifications</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    2
                  </div>
                  <span>Shorter course durations save time and money</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    3
                  </div>
                  <span>Diverse, multicultural environment</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    4
                  </div>
                  <span>Rich cultural heritage and vibrant student life</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    5
                  </div>
                  <span>Post-study work opportunities with the Graduate Route visa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UK Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">The United Kingdom</h2>
          <div className="max-w-3xl mx-auto">
            <Image
              src="/placeholder.svg"
              alt="Colorful Map of UK Regions"
              width={600}
              height={800}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Education System */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Education System</h2>
              <p className="mb-4">
                The UK education system is renowned for its quality and high standards. It consists of schools, further
                education colleges, and higher education institutions (universities). The higher education system
                includes undergraduate degrees (Bachelor's), postgraduate degrees (Master's and Doctoral), and various
                diplomas and certificates.
              </p>
              <p className="mb-4">
                Undergraduate programs typically last 3 years in England, Wales, and Northern Ireland, and 4 years in
                Scotland. Master's programs are usually 1 year in duration, while PhD programs can take 3-4 years to
                complete.
              </p>
              <p className="mb-4">
                The academic year usually runs from September to June, with three terms: Autumn (September-December),
                Spring (January-March), and Summer (April-June). Some universities operate on a semester system instead.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="UK Flag" width={600} height={400} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Required Tests */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="Student Taking Test" width={500} height={400} className="rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Required Tests</h2>
              <p className="mb-4">
                International students whose first language is not English will need to demonstrate their English
                language proficiency through standardized tests. The most commonly accepted tests are:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>IELTS Academic:</strong> Most universities require a minimum score of 6.0-6.5 overall, with
                    no component below 5.5-6.0.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>TOEFL iBT:</strong> Typically, a minimum score of 80-90 is required.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>PTE Academic:</strong> Most universities accept a score of 55-65.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Cambridge English:</strong> Advanced (CAE) or Proficiency (CPE) with a grade of C or above.
                  </span>
                </li>
              </ul>
              <p className="mb-4">
                Some courses, particularly in fields like medicine, law, or business, may require additional entrance
                exams or aptitude tests. These could include UKCAT, BMAT, LNAT, or GMAT, depending on the course and
                institution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Education */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Cost of Education</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left">Education Level</th>
                  <th className="py-2 px-4 border-b text-left">Tuition Fee Range (Per Year)</th>
                  <th className="py-2 px-4 border-b text-left">Additional Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Undergraduate Degrees</td>
                  <td className="py-2 px-4 border-b">£10,000 - £38,000</td>
                  <td className="py-2 px-4 border-b">
                    Varies by course and institution. Medical and laboratory-based courses tend to be more expensive.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">Postgraduate Taught (Master's)</td>
                  <td className="py-2 px-4 border-b">£11,000 - £32,000</td>
                  <td className="py-2 px-4 border-b">
                    MBA programs can cost significantly more, ranging from £15,000 to £57,000.
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Postgraduate Research (PhD)</td>
                  <td className="py-2 px-4 border-b">£15,000 - £35,000</td>
                  <td className="py-2 px-4 border-b">Various scholarships and research grants are available.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">Living Expenses</td>
                  <td className="py-2 px-4 border-b">£12,000 - £15,000</td>
                  <td className="py-2 px-4 border-b">
                    Higher in London and other major cities. Includes accommodation, food, transportation, and personal
                    expenses.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Note: These figures are approximate and subject to change. Always check with the specific institution for
            the most up-to-date information.
          </p>
        </div>
      </section>

      {/* Student Visa Process */}
      <section
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder.svg')",
        }}
      >
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Student Visa Process</h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-4">
              International students planning to study in the UK for more than 6 months will need to apply for a Student
              visa (formerly Tier 4). The application process involves several steps and requirements:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Confirmation of Acceptance for Studies (CAS) from a licensed sponsor</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Proof of sufficient funds for tuition and living expenses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>English language proficiency evidence</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Valid passport</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Tuberculosis test results (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span>ATAS certificate (for certain subjects)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Application Process</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                      1
                    </div>
                    <span>Receive CAS from your chosen institution</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                      2
                    </div>
                    <span>Complete the online application form</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                      3
                    </div>
                    <span>Pay the visa application fee and Immigration Health Surcharge</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                      4
                    </div>
                    <span>Book and attend a biometric appointment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                      5
                    </div>
                    <span>Submit required documents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                      6
                    </div>
                    <span>Wait for a decision (usually within 3 weeks)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For EU Students */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">For EU Students</h2>
              <p className="mb-4">
                Following the UK's exit from the European Union, EU, EEA, and Swiss citizens who were not living in the
                UK before December 31, 2020, now need to apply for a Student visa to study in the UK for courses longer
                than 6 months.
              </p>
              <p className="mb-4">
                EU students are now also classified as international students for tuition fee purposes, meaning they pay
                the same fees as non-EU international students. However, some universities offer scholarships and
                bursaries specifically for EU students to help offset these costs.
              </p>
              <p className="mb-4">
                EU students can still visit the UK for up to 6 months without a visa for short courses or research, but
                they cannot work or access public funds during this time.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="EU Graduate" width={500} height={400} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* For Non-EU Students */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="International Students"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">For Non-EU Students</h2>
              <p className="mb-4">
                Non-EU international students must apply for a Student visa to study in the UK for courses longer than 6
                months. The application process includes providing biometric information, paying the visa fee and
                Immigration Health Surcharge, and submitting required documents.
              </p>
              <p className="mb-4">
                Students from certain countries may also need to provide tuberculosis test results as part of their visa
                application. Additionally, those studying certain sensitive subjects may need to apply for an Academic
                Technology Approval Scheme (ATAS) certificate.
              </p>
              <p className="mb-4">
                Non-EU students can work part-time during term time (up to 20 hours per week) and full-time during
                vacations, providing valuable work experience and additional income to help with living expenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Documentation to submit with your application</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Valid passport</strong> with at least 6 months validity beyond your intended stay
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Confirmation of Acceptance for Studies (CAS)</strong> from your chosen institution
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Financial evidence</strong> showing you can pay your tuition fees and support yourself
                  (typically bank statements for the past 28 days)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>English language test results</strong> (IELTS, TOEFL, PTE, etc.) unless exempt
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Academic qualifications</strong> mentioned in your CAS (original documents)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>ATAS certificate</strong> (if required for your course)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Tuberculosis test results</strong> (if you're from a country where this is required)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Consent letter from parents</strong> (for students under 18)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Passport-sized photographs</strong> with a white background
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Note: All documents not in English must be accompanied by certified translations. Original documents
              should be provided along with photocopies.
            </p>
          </div>
        </div>
      </section>

      {/* Student Visa Doesn't Allow */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Student Visa Doesn't Allow</h2>
              <p className="mb-4">
                While the UK Student visa offers many benefits, there are certain restrictions that students should be
                aware of:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    ✕
                  </div>
                  <span>Access to public funds or benefits</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    ✕
                  </div>
                  <span>Working as a professional sportsperson or coach</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    ✕
                  </div>
                  <span>Working as a self-employed person or starting a business</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    ✕
                  </div>
                  <span>Studying at an academy or school that is not a licensed Student sponsor</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    ✕
                  </div>
                  <span>
                    Bringing dependents unless you're a postgraduate student on a course lasting 9 months or longer, or
                    a government-sponsored student on a course lasting 6 months or longer
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="Big Ben London" width={500} height={600} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Passport, visas, immigration and length of stay */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Passport, visas, immigration and length of stay</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="mb-4">
              The UK Student visa allows you to stay in the UK for the duration of your course plus a short period
              afterward. The exact length depends on your course level and duration:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <ArrowRight className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>For courses lasting 6 months or less: visa valid for the course duration plus 7 days</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>For courses lasting 6-12 months: visa valid for the course duration plus 2 months</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>For courses lasting more than 12 months: visa valid for the course duration plus 4 months</span>
              </li>
            </ul>
            <p className="mb-4">
              After completing your studies, you may be eligible for the Graduate Route visa, which allows you to stay
              in the UK for 2 years (3 years for PhD graduates) to work or look for work at any skill level. This
              provides an excellent opportunity to gain valuable work experience in the UK.
            </p>
            <p className="mb-4">
              Your passport must be valid for the entire duration of your stay in the UK. If your passport expires while
              you're in the UK, you'll need to renew it and update your visa information.
            </p>
          </div>
        </div>
      </section>

      {/* Steps to Apply */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Steps to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Research</h3>
              <p>Research UK universities and courses that match your academic interests, career goals, and budget.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Apply to Universities</h3>
              <p>
                Submit applications through UCAS for undergraduate courses or directly to universities for postgraduate
                programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Accept Offer</h3>
              <p>Once you receive offers, choose your preferred institution and accept the offer formally.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Arrange Finances</h3>
              <p>
                Secure funding for your studies through scholarships, loans, or personal funds and pay any required
                deposits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                5
              </div>
              <h3 className="text-xl font-bold mb-3">Apply for Visa</h3>
              <p>Once you have your CAS, apply for your Student visa with all required documentation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                6
              </div>
              <h3 className="text-xl font-bold mb-3">Pre-Departure</h3>
              <p>Arrange accommodation, book flights, and prepare for your journey to the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Resources */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Useful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">General UK Study Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    British Council - Study UK
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    UCAS (Universities and Colleges Admissions Service)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    UK Council for International Student Affairs (UKCISA)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Study in the UK - Official Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Complete University Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Times Higher Education World University Rankings
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Visa and Immigration</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    UK Visas and Immigration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Student Visa Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Immigration Health Surcharge
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Biometric Residence Permit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Graduate Route Visa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    ATAS Scheme
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UK Education and Training */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">UK Education and Training</h2>
          <div className="bg-white p-8 rounded-lg">
            <p className="mb-4">
              The UK is home to numerous world-renowned universities and educational institutions. Here are some of the
              top universities in the UK:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <h3 className="font-bold mb-2">England</h3>
                <ul className="space-y-1">
                  <li>University of Oxford</li>
                  <li>University of Cambridge</li>
                  <li>Imperial College London</li>
                  <li>University College London</li>
                  <li>London School of Economics</li>
                  <li>University of Manchester</li>
                  <li>King's College London</li>
                  <li>University of Bristol</li>
                  <li>University of Warwick</li>
                  <li>University of Durham</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Scotland</h3>
                <ul className="space-y-1">
                  <li>University of Edinburgh</li>
                  <li>University of Glasgow</li>
                  <li>University of St Andrews</li>
                  <li>University of Aberdeen</li>
                  <li>University of Strathclyde</li>
                </ul>
                <h3 className="font-bold mt-4 mb-2">Wales</h3>
                <ul className="space-y-1">
                  <li>Cardiff University</li>
                  <li>Swansea University</li>
                  <li>Aberystwyth University</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Northern Ireland</h3>
                <ul className="space-y-1">
                  <li>Queen's University Belfast</li>
                  <li>Ulster University</li>
                </ul>
                <h3 className="font-bold mt-4 mb-2">Popular Fields of Study</h3>
                <ul className="space-y-1">
                  <li>Business and Management</li>
                  <li>Engineering and Technology</li>
                  <li>Medicine and Health Sciences</li>
                  <li>Computer Science</li>
                  <li>Law</li>
                  <li>Arts and Humanities</li>
                  <li>Social Sciences</li>
                </ul>
              </div>
            </div>
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
            Contact ASFE today to start your application process for studying in the UK. Our experienced counselors will
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

