"use client"

const NotFoundPage = () => {
  return (
    <div className="section-gap-top section-gap-bottom h-screen bg-neutral-30">
      <div className="container grid-cols-12 h-full items-center md:grid">
        <div className="col-start-3 col-end-11 flex flex-col items-center text-bgColorOne">
          <h1 className="h1 text-9xl font-bold">404</h1>
          <h4 className="padding-t-60 text-center text-3xl font-semibold">
            Not Found
          </h4>
          <p className="lText pt-4 text-center text-bgColorOne">Not Found</p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
