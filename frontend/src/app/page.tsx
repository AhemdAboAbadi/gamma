import Link from "next/link"

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white w-1/2 p-16 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Make Your Dream
        </h1>
        <hr className="border-gray-600 mb-4" />
        <p className="text-sm leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing anLorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-white w-1/2 p-16 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-2">Welcome To Gamma Assets</h1>
        <p className="mb-8 text-lg">Need to log your wallet address?</p>

        <Link
          href="/home"
          className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-2 rounded hover:bg-gray-900 text-center p-3">
          <button className="">Connect Wallet</button>
        </Link>
      </div>
    </div>
  )
}
