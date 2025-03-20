import { Lock } from "lucide-react"

export default function SecurityWarning() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 p-4 rounded-full">
            <Lock className="w-12 h-12 text-gray-600" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-center text-xl font-medium text-gray-800 mb-6">
          www.asfeconsultants.com doesn&apos;t support a secure connection
        </h1>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="text-gray-700">
            <span className="font-medium">Attackers can see and change</span> information you send or receive from the
            site.
          </li>
          <li className="text-gray-700">
            <span className="font-medium">It&apos;s safest to visit this site later</span> if you&apos;re using a public
            network. There is less risk from a trusted network, like your home or work Wi-Fi.
          </li>
        </ul>

        <p className="text-gray-700 mb-2">
          You might also contact the site owner and suggest they upgrade to HTTPS.
          <a href="#" className="text-blue-600 hover:underline ml-1">
            Learn more about this warning
          </a>
        </p>

        <div className="flex justify-between mt-8">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200 transition-colors">
            Continue to site
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}

