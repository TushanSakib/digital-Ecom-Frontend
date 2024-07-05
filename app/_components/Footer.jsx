import React from 'react';

function Footer() {
  return (
    <footer>
      <div id='contact-us' className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Want us to email you with the latest products?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg mx-auto">
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />
              <button
                type="submit"
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet aut perferendis distinctio iusto repudiandae, provident velit earum?
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.633 7.997c.013.179.013.358.013.537 0 5.477-4.17 11.79-11.79 11.79-2.342 0-4.518-.688-6.34-1.862.337.04.662.054.998.054 1.947 0 3.73-.662 5.148-1.782-1.816-.04-3.346-1.23-3.872-2.878.256.04.525.067.795.067.385 0 .769-.054 1.13-.15-1.947-.392-3.413-2.107-3.413-4.165v-.054c.574.322 1.243.516 1.947.537a4.168 4.168 0 01-1.863-3.472c0-.79.202-1.518.564-2.151a11.837 11.837 0 008.605 4.36 4.702 4.702 0 01-.108-.954 4.162 4.162 0 014.163-4.163c1.2 0 2.285.503 3.045 1.303a8.151 8.151 0 002.64-.998 4.144 4.144 0 01-1.826 2.297 8.246 8.246 0 002.377-.643 8.781 8.781 0 01-2.08 2.139z" clipRule="evenodd" />
                </svg>
              </a>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.167 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.154-1.11-1.462-1.11-1.462-.907-.62.068-.607.068-.607 1.004.07 1.533 1.03 1.533 1.03.892 1.528 2.341 1.087 2.91.832.09-.647.35-1.087.635-1.337-2.22-.254-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.683-.103-.253-.447-1.272.098-2.65 0 0 .84-.268 2.75 1.024A9.562 9.562 0 0112 6.844c.85.004 1.705.115 2.504.337 1.908-1.292 2.747-1.024 2.747-1.024.546 1.378.202 2.397.1 2.65.64.7 1.03 1.592 1.03 2.683 0 3.842-2.338 4.685-4.566 4.933.358.309.678.918.678 1.851 0 1.335-.012 2.416-.012 2.743 0 .268.18.576.688.478A10.005 10.005 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, praesentium nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet aut perferendis distinctio iusto repudiandae, provident velit earum.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
