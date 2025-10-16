export default function Hero() {
  return (
    <div className="relative bg-indigo-600">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="m0,0l0,8l40,0l0,-8l0,0z M64,4l0,8l48,0l0,-4l0,-4l-48,0z M144,4l0,8l80,0l0,-4l0,-4l-80,0z" />
        </svg>
      </div>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Welcome to Oakwood Community
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
            Your premier homeowners association dedicated to maintaining our beautiful 
            community and enhancing property values for all residents.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/portal"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Resident Portal
            </a>
            <a
              href="/contact"
              className="text-sm font-semibold leading-6 text-white hover:text-indigo-200"
            >
              Contact Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}