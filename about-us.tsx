import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Check } from "lucide-react"

export default function AboutUs() {
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

      {/* Ethics Banner */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder.svg')",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Ethics</h1>
          <p className="max-w-2xl mx-auto">
            We uphold trust, accountability, and professionalism in our practice, ensuring the highest levels of
            integrity and excellence in student counseling.
          </p>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/4">
              <Image src="/placeholder.svg" alt="Director" width={300} height={400} className="rounded-lg" />
            </div>
            <div className="md:w-3/4">
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-500 pb-2 inline-block">
                Director's Message
              </h2>
              <p className="mb-4">
                ASFE is a premier overseas educational consultancy with a global footprint, representing students in the
                UK, USA, Canada, Ireland, Australia, Singapore, New Zealand and Europe. Our team of professionals is
                committed to providing honest, accurate and tailored range of advice. Our team of experienced
                professionals is committed to providing timely responses and accurate information to students and
                parents.
              </p>
              <p className="mb-4">
                Working internationally has only elevated academic knowledge but also cultivate independence and
                critical problem- solving skills, equipping students for successful global careers. At ASFE, we are
                passionate about helping students achieve their dreams of studying abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="mb-4">
                We offer independent support and solutions to educational entities, focusing on excellence and
                continuous study. Our professional staff will guide you through the process.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/placeholder.svg" alt="Student smiling" width={500} height={400} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <Image src="/placeholder.svg" alt="Students studying" width={500} height={400} className="rounded-lg" />
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="mb-4">
                Our vision is to create a leading consultancy known for client satisfaction. We strive for total
                customer satisfaction through teamwork, innovation, and excellence. We are committed to providing
                quality educational visa consultancy and services to students who wish to study abroad in the UK, USA,
                Canada, Ireland, Australia, Singapore, New Zealand and Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Services Include</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>Providing accurate information about global educational institutions</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>Guiding students with visa preparation (IELTS, TOEFL, GRE, SAT, GMAT)</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>Assisting with university applications and admissions</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span>Counseling students for foreign academic opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

