import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Check } from "lucide-react"

export default function StudyInAustralia() {
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
          <h1 className="text-5xl font-bold mb-4">Study in Australia</h1>
          <p className="max-w-2xl mb-6">
            Australia offers world-class education, incredible quality of life, and a welcoming multicultural society.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-medium">LEARN MORE</button>
        </div>
      </section>

      {/* About Australia + Quick Facts */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3 bg-white p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-4">About Australia</h2>
              <p className="mb-4">
                Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of
                the Australian continent, the island of Tasmania, and numerous smaller islands. It is the largest
                country in Oceania and the world's sixth-largest country by total area.
              </p>
              <p className="mb-4">
                Australia is known for its natural wonders, wide-open spaces, beaches, deserts, and "the bush". It is
                also known for its vibrant multicultural cities, remarkable wildlife, and friendly locals. The country
                is home to people from all over the world, with more than 200 different languages and dialects spoken.
              </p>
              <p className="mb-4">
                The Australian economy is one of the largest mixed market economies in the world, with a GDP of AUD$1.89
                trillion as of 2019. Australia's economy is dominated by its service sector, which comprises 62.7% of
                the GDP and employs 78.8% of the labour force.
              </p>
              <p className="mb-4">
                Australia has a federal parliamentary constitutional monarchy, with Queen Elizabeth II as the head of
                state, represented by the Governor-General at the federal level and by the Governors at the state level.
                The country is divided into six states and two major mainland territories.
              </p>
            </div>
            <div className="md:w-1/3 bg-blue-500 p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Five Quick Facts About Australia</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    1
                  </div>
                  <span>Population: 25.7 million</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    2
                  </div>
                  <span>Capital: Canberra</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    3
                  </div>
                  <span>Language: English</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    4
                  </div>
                  <span>Currency: Australian Dollar (AUD)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                    5
                  </div>
                  <span>World-class education system ranked 8th in the world</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Australia Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Image
              src="/placeholder.svg"
              alt="Map of Australia showing states and territories"
              width={600}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Study in Australia? */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Why Study in Australia?</h2>
              <p className="mb-4">
                Australia is currently the third most popular destination for international students in the
                English-speaking world, behind the United States and the UK. Many international students choose to study
                in Australia because of its friendly, laid-back nature, excellent education system, and high standard of
                living.
              </p>
              <p className="mb-4">
                Australian universities are known for their research and training capabilities, making them attractive
                to international students looking for outstanding academic achievement. The Australian education system
                is carefully regulated to maintain the highest standards of education for both domestic and
                international students.
              </p>
              <p className="mb-4">
                Australia offers a diverse range of study options for international students, with more than 1,200
                institutions and over 22,000 courses to choose from. Australia has a reputation for adopting new
                technologies at a faster rate than most other countries, and this technology is made available to
                students.
              </p>
              <p className="mb-4">
                Additionally, graduates from Australian schools are highly sought after due to the impressive
                international reputation of the Australian education system. This system is carefully regulated by the
                Australian government in order to maintain the high standards of education associated with the country.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Sydney Opera House and Skyline"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education System */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Australian University Campus"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Education System</h2>
              <p className="mb-4">
                The Australian education system is distinguished from many other countries by the Australian
                Qualifications Framework (AQF). The AQF was established in 1995 and is a national policy that covers
                qualifications from the tertiary education sector (higher education and vocational education and
                training) in addition to the school-leaving certificate; the Senior Secondary Certificate of Education.
              </p>
              <p className="mb-4">The education system in Australia consists of:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Higher Education:</strong> Bachelor's degrees, graduate certificates, graduate diplomas,
                    master's degrees, and doctoral degrees.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Vocational Education and Training (VET):</strong> Certificates I, II, III, and IV, Diploma,
                    and Advanced Diploma.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>English Language Courses:</strong> For international students who need to improve their
                    English skills before commencing their studies.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Schools:</strong> Primary and secondary education.
                  </span>
                </li>
              </ul>
              <p className="mb-4">
                The academic year in Australia typically runs from February to November, with major intakes in February
                and July. Some institutions also offer multiple start dates throughout the year, providing flexibility
                for international students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutes in Australia */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Institutes in Australia</h2>
          <div className="bg-white p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Group of Eight (Go8)</h3>
                <ul className="space-y-1">
                  <li>• The University of Melbourne</li>
                  <li>• The Australian National University</li>
                  <li>• The University of Sydney</li>
                  <li>• The University of Queensland</li>
                  <li>• The University of Western Australia</li>
                  <li>• The University of Adelaide</li>
                  <li>• Monash University</li>
                  <li>• UNSW Sydney</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">Australian Technology Network (ATN)</h3>
                <ul className="space-y-1">
                  <li>• Curtin University</li>
                  <li>• University of South Australia</li>
                  <li>• RMIT University</li>
                  <li>• University of Technology Sydney</li>
                  <li>• Queensland University of Technology</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">Innovative Research Universities (IRU)</h3>
                <ul className="space-y-1">
                  <li>• Charles Darwin University</li>
                  <li>• Flinders University</li>
                  <li>• Griffith University</li>
                  <li>• James Cook University</li>
                  <li>• La Trobe University</li>
                  <li>• Murdoch University</li>
                  <li>• Western Sydney University</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Other Notable Universities</h3>
                <ul className="space-y-1">
                  <li>• Macquarie University</li>
                  <li>• University of Newcastle</li>
                  <li>• University of Wollongong</li>
                  <li>• Deakin University</li>
                  <li>• Swinburne University of Technology</li>
                  <li>• University of Tasmania</li>
                  <li>• Bond University</li>
                  <li>• University of the Sunshine Coast</li>
                  <li>• Australian Catholic University</li>
                  <li>• Edith Cowan University</li>
                  <li>• Victoria University</li>
                  <li>• University of Canberra</li>
                  <li>• Southern Cross University</li>
                  <li>• Federation University Australia</li>
                  <li>• University of New England</li>
                  <li>• University of Southern Queensland</li>
                  <li>• Central Queensland University</li>
                  <li>• Charles Sturt University</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">TAFE Institutes</h3>
                <ul className="space-y-1">
                  <li>• TAFE NSW</li>
                  <li>• TAFE Queensland</li>
                  <li>• TAFE SA</li>
                  <li>• TAFE WA</li>
                  <li>• TAFE Victoria</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Tests */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Required Tests</h2>
              <p className="mb-4">
                To study in Australia, international students need to meet certain English language requirements. The
                most commonly accepted tests are:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>IELTS Academic:</strong> Most universities require a minimum score of 6.0-6.5 overall, with
                    no band less than 6.0.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>TOEFL iBT:</strong> Typically, a minimum score of 60-80 is required, depending on the
                    institution and program.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>PTE Academic:</strong> Most universities accept a score of 50-58.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Cambridge English Advanced (CAE):</strong> A score of 169-176 is typically required.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Occupational English Test (OET):</strong> For healthcare professionals, a minimum grade of B
                    is usually required.
                  </span>
                </li>
              </ul>
              <p className="mb-4">
                Some courses, particularly in fields like medicine, dentistry, or law, may require additional entrance
                exams or aptitude tests. These requirements vary by institution and program.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="Student Taking Test" width={500} height={400} className="rounded-lg" />
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
                  <th className="py-2 px-4 border-b text-left">Annual Tuition Fee (AUD)</th>
                  <th className="py-2 px-4 border-b text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Bachelor's Degree</td>
                  <td className="py-2 px-4 border-b">$20,000 - $45,000</td>
                  <td className="py-2 px-4 border-b">3-4 years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">Master's Degree</td>
                  <td className="py-2 px-4 border-b">$22,000 - $50,000</td>
                  <td className="py-2 px-4 border-b">1-2 years</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Doctoral Degree</td>
                  <td className="py-2 px-4 border-b">$18,000 - $42,000</td>
                  <td className="py-2 px-4 border-b">3-4 years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b">Vocational Education</td>
                  <td className="py-2 px-4 border-b">$4,000 - $22,000</td>
                  <td className="py-2 px-4 border-b">6 months - 2 years</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">English Language Courses</td>
                  <td className="py-2 px-4 border-b">$300 - $400 per week</td>
                  <td className="py-2 px-4 border-b">10-50 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-3">Living Expenses</h3>
            <p className="mb-4">
              The Australian Government suggests that international students budget around AUD $21,041 per year for
              living expenses. This includes accommodation, food, transportation, and other personal expenses. However,
              costs can vary significantly depending on the city and lifestyle.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Accommodation:</strong> AUD $150-$400 per week (shared accommodation to on-campus)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Food:</strong> AUD $80-$200 per week
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Transportation:</strong> AUD $30-$60 per week
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Utilities:</strong> AUD $20-$50 per week
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Entertainment:</strong> AUD $50-$100 per week
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Student Visa Process */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Student Visa Process</h2>
              <p className="mb-4">
                International students who wish to study in Australia need to apply for a Student visa (subclass 500).
                The visa application process involves several steps:
              </p>
              <ol className="space-y-2 mb-4 list-decimal pl-5">
                <li>
                  <strong>Receive an offer letter</strong> from an Australian educational institution.
                </li>
                <li>
                  <strong>Accept the offer</strong> and pay the required deposit to receive a Confirmation of Enrollment
                  (CoE).
                </li>
                <li>
                  <strong>Create an ImmiAccount</strong> on the Department of Home Affairs website.
                </li>
                <li>
                  <strong>Complete the visa application form</strong> and attach all required documents.
                </li>
                <li>
                  <strong>Pay the visa application fee</strong> (currently AUD $650).
                </li>
                <li>
                  <strong>Undergo health examinations</strong> if required.
                </li>
                <li>
                  <strong>Wait for a decision</strong> on your visa application.
                </li>
              </ol>
              <p className="mb-4">
                The processing time for a Student visa can vary, but it typically takes between 4 to 6 weeks. It's
                recommended to apply for your visa at least 3 months before your course starts.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="Passport and Visa" width={500} height={400} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Student Visa Processing and Application */}
      <section
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder.svg')",
        }}
      >
        <div className="container mx-auto px-4 text-white">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Student Visa Processing</h2>
              <p className="mb-4">
                The Australian government uses a risk-based approach to visa processing. This means that the level of
                assessment and documentation required depends on your country of citizenship and the education provider
                you're applying to.
              </p>
              <p className="mb-4">All student visa applicants must meet the following requirements:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Genuine Temporary Entrant (GTE) requirement</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Financial capacity requirement</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>English language proficiency requirement</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Health and character requirements</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Overseas Student Health Cover (OSHC)</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Application</h2>
              <p className="mb-4">
                You can apply for a Student visa online through the Department of Home Affairs website. You'll need to
                create an ImmiAccount, complete the application form, and upload all required documents.
              </p>
              <p className="mb-4">The key documents you'll need include:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Confirmation of Enrollment (CoE) from your education provider</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Proof of financial capacity (bank statements, scholarships, etc.)</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>English language test results</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Overseas Student Health Cover (OSHC) evidence</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Valid passport</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Passport-sized photograph</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Documentation to submit with your application:</h2>
          <div className="bg-white p-8 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Completed visa application form</strong> (online through ImmiAccount)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Confirmation of Enrollment (CoE)</strong> from your Australian education provider
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Valid passport</strong> with at least 6 months validity beyond your intended stay
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>English language test results</strong> (IELTS, TOEFL, PTE, etc.)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Financial documents</strong> showing you can support yourself during your stay (bank
                  statements, loan documents, scholarships, etc.)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Overseas Student Health Cover (OSHC)</strong> for the duration of your visa
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Statement of Purpose</strong> explaining why you want to study in Australia
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Academic documents</strong> including transcripts, certificates, and degrees
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Work experience documents</strong> (if applicable)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Character documents</strong> including police clearance certificates
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

      {/* Steps to Apply */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Steps to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Research & Choose</h3>
              <p>Research Australian institutions and courses that match your academic interests and career goals.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Apply to Institutions</h3>
              <p>Submit applications to your chosen institutions and wait for offer letters.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Get Your CoE</h3>
              <p>Accept your offer, pay any required fees, and receive your Confirmation of Enrollment (CoE).</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Visa Application</h3>
              <p>Apply for your Student visa (subclass 500) through the Department of Home Affairs website.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4">
                5
              </div>
              <h3 className="text-xl font-bold mb-3">Fly to Australia</h3>
              <p>Once your visa is approved, book your flights and prepare for your journey to Australia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fly to Australia */}
      <section
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder.svg')",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Fly to Australia</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact ASFE today to start your application process for studying in Australia. Our experienced counselors
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

