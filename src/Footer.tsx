import { Heart, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                <Heart className="text-[#A71627]" size={22} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">Cardo</h2>
                <p className="text-sm text-slate-500">
                  Understanding the heart, one beat at a time.
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Cardo is an educational platform designed to help students explore
              cardiac anatomy, physiology, ECG interpretation, and
              cardiovascular diseases through interactive learning experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Navigation</h3>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-[#A71627] transition-colors">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#anatomy"
                  className="hover:text-[#A71627] transition-colors"
                >
                  Anatomy
                </a>
              </li>

              <li>
                <a
                  href="#physiology"
                  className="hover:text-[#A71627] transition-colors"
                >
                  Physiology
                </a>
              </li>

              <li>
                <a
                  href="#game"
                  className="hover:text-[#A71627] transition-colors"
                >
                  Game
                </a>
              </li>

              <li>
                <a
                  href="#cases"
                  className="hover:text-[#A71627] transition-colors"
                >
                  Cases
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-[#A71627] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#A71627] transition-colors"
                >
                  Learning Materials
                  <ExternalLink size={14} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#A71627] transition-colors"
                >
                  References
                  <ExternalLink size={14} />
                </a>
              </li>

              <li>
                <a
                  href="mailto:example@email.com"
                  className="flex items-center gap-2 hover:text-[#A71627] transition-colors"
                >
                  <Mail size={16} />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} CardioLearn. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-[#A71627] transition-colors">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#A71627] transition-colors">
              Terms of Service
            </a>

            <a href="#" className="hover:text-[#A71627] transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
