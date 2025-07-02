import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className=" pt-8 py-6 px-4 sm:px-6 ">
      <div className="container mx-auto border-t border-gray-100 pt-5">
        {/* Top section with logo and links */}
        {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-8"> */}
        <div className="flex items-center justify-between w-full">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              {/* <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm">
                U
              </div> */}
              {/* <span className="text-white font-medium">Untitled UI</span> */}
              <Image
                src="/images/logo/clair-ai.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Clair AI. All rights reserved.
          </div>

          <div className="col-span-1 hidden">
            <h3 className="text-sm font-semibold mb-4">Overview</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 hidden">
            <h3 className="text-sm font-semibold mb-4">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 hidden">
            <h3 className="text-sm font-semibold mb-4">Privacy</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="hidden border-t border-gray-800 pt-8  flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-0">
            &copy; {new Date().getFullYear()} Clair AI. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
