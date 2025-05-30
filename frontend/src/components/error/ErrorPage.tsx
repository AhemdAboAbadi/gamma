const ErrorPage = () => {
  return (
    <div className="section-gap-top section-gap-bottom h-screen bg-neutral-30">
      <div className="container grid-cols-12 h-full items-center md:grid">
        <div className="col-start-3 col-end-11 flex flex-col items-center text-bgColorOne">
          <h1 className="h1 text-9xl font-bold">500</h1>
          <h4 className="padding-t-60 text-center text-3xl font-semibold">
            Error
          </h4>
          <p className="lText pt-4 text-center text-bgColorOne">Error</p>
          <div className="padding-t-40">
            {/* <Link
              href="/"
              className="py group theme-transition-3 flex w-fit items-center justify-center gap-2 rounded-32px bg-blue-500 px-4 py-3 text-base font-semibold capitalize text-white shadow-five hover:bg-black hover:shadow-five-theme lg:px-6 lg:py-3"
            >
              <span className="block shrink-0">Home</span>{" "}
              <ArrowUpRight className="theme-transition-3 shrink-0 group-hover:rotate-45" />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
