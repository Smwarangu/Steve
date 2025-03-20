import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Bookmark, FileText, MapPin, User } from "lucide-react"

export default function ASFEWebsite() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
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
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">15 Years of Satisfied Customers! ✨</h1>
            <p className="mb-6 text-lg">
              AS Foreign Education Consultants is a trusted expert in overseas education for the UK, USA, Canada,
              Ireland, Australia, Singapore, New Zealand and Europe. We provide comprehensive, ethical, and professional
              services to students and parents.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-medium">APPLY NOW!</button>
          </div>
          <div className="md:w-1/2 relative flex justify-center">
            <div className="relative">
              {/* Blue diamond shapes with flags */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-400 rotate-45 flex items-center justify-center overflow-hidden z-10">
                <div className="rotate-[-45deg] w-16 h-16">
                  <Image src="/placeholder.svg" alt="UK Flag" width={64} height={64} className="object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-400 rotate-45 flex items-center justify-center overflow-hidden z-10">
                <div className="rotate-[-45deg] w-16 h-16">
                  <Image src="/placeholder.svg" alt="EU Flag" width={64} height={64} className="object-cover" />
                </div>
              </div>

              {/* Student image */}
              <Image
                src="/placeholder.svg"
                alt="Student with phone"
                width={400}
                height={500}
                className="relative z-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <div className="bg-red-600 text-white py-2 px-4 flex items-center justify-center">
        <div className="flex items-center text-center">
          <span className="mr-2">🔔</span>
          <p>
            Admissions Open! Explore premier study opportunities in the UK & Europe. Apply now to secure your future!
          </p>
          <ChevronRight className="ml-2 w-4 h-4" />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold">8000+ Successful</h3>
              <p>Applications</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold">12 Offices in Pakistan</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold">10 Offices in the UK</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold">British Council-Certified</h3>
              <p>Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="mb-2 text-blue-600 font-medium">WHO WE ARE</div>
              <h2 className="text-3xl font-bold mb-6">Your One-Stop Solution</h2>
              <p className="mb-4">
                AS Foreign Education Consultants has established itself as a leading consultancy for overseas education,
                catering to students and their parents. We provide quality education services for the UK, USA, Canada,
                Ireland, Australia, Singapore, New Zealand and Europe.
              </p>
              <p className="mb-6">
                When you choose AS Foreign Education Consultants, all your needs are professionally, efficiently, and
                ethically met.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-medium">DISCOVER MORE</button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-full">
                <Image
                  src="/placeholder.svg"
                  alt="Students"
                  width={500}
                  height={400}
                  className="object-cover rounded-lg"
                />
                <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 bg-white p-6 shadow-lg rounded-lg">
                  <div className="flex items-center mb-2">
                    <Bookmark className="text-blue-500 mr-2" />
                  </div>
                  <h3 className="text-xl font-bold text-center">15+ Years of History</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Destinations Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Study Destinations</h2>
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="w-full md:w-1/3 px-2">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Paris"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Germany"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold text-center">
                      Study In
                      <br />
                      Germany
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Netherlands"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10">
              <ChevronRight className="w-6 h-6 transform rotate-180" />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg"
                alt="Study Abroad Seminars"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center">Study Abroad Seminars</h3>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg"
                alt="ICEF Conferences"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center">ICEF Conferences</h3>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg"
                alt="WESA Agent Conferences"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center">WESA Agent Conferences</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute -top-20 -right-20 opacity-10">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0H0V50H50V0Z" fill="#4299E1" />
                <path d="M100 0H50V50H100V0Z" fill="#4299E1" />
                <path d="M50 50H0V100H50V50Z" fill="#4299E1" />
                <path d="M100 50H50V100H100V50Z" fill="#4299E1" />
                <path d="M150 0H100V50H150V0Z" fill="#4299E1" />
                <path d="M200 0H150V50H200V0Z" fill="#4299E1" />
                <path d="M150 50H100V100H150V50Z" fill="#4299E1" />
                <path d="M200 50H150V100H200V50Z" fill="#4299E1" />
                <path d="M50 100H0V150H50V100Z" fill="#4299E1" />
                <path d="M100 100H50V150H100V100Z" fill="#4299E1" />
                <path d="M50 150H0V200H50V150Z" fill="#4299E1" />
                <path d="M100 150H50V200H100V150Z" fill="#4299E1" />
                <path d="M150 100H100V150H150V100Z" fill="#4299E1" />
                <path d="M200 100H150V150H200V100Z" fill="#4299E1" />
                <path d="M150 150H100V200H150V150Z" fill="#4299E1" />
                <path d="M200 150H150V200H200V150Z" fill="#4299E1" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-center mb-10 relative z-10">
              What Clients Say About Us and
              <br />
              Our Services
            </h2>
            {/* Testimonials content would go here */}
          </div>
        </div>
      </section>
    </div>
  )
}

