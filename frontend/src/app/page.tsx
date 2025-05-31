import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen">
      {/* Left Side */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center min-h-[50vh]">
        <h1 className="text-6xl font-bold mb-12 leading-tight">
          Make Your Dream
        </h1>
        <hr className="border-gray-600 mb-4" />
        <p className="text-lg leading-relaxed">
          You can own shares in premium assets that generate regular income,
          such as real estate, all without any effort on your part. Professional
          management ensures sustainable returns of up to 30% annually!
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-white w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-center text-center min-h-[50vh]">
        <h1 className="text-4xl font-bold mb-2">Welcome To Gamma Assets</h1>
        <p className="mb-8 text-lg">Need to log your wallet address?</p>

        <Link
          href="/connection"
          className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-2 rounded hover:bg-gray-900 text-center p-3">
          <button className="">Connect Wallet</button>
        </Link>
      </div>
    </div>
  )
}
