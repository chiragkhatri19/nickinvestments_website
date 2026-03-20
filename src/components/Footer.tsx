import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-[#002147]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-serif text-2xl text-white mb-2 tracking-tight">Nick Investments</h3>
            <p className="text-[#708ab5] text-sm mb-4">Registered Investment Advisor</p>
            <p className="text-white/50 text-sm leading-relaxed">
              Professional wealth management since 2009. SEBI Registered.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-white/50 text-sm hover:text-white transition-colors duration-200">Wealth Management</a></li>
              <li><a href="#services" className="text-white/50 text-sm hover:text-white transition-colors duration-200">Legacy Planning</a></li>
              <li><a href="#services" className="text-white/50 text-sm hover:text-white transition-colors duration-200">Investment Advisory</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#philosophy" className="text-white/50 text-sm hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#process" className="text-white/50 text-sm hover:text-white transition-colors duration-200">Our Process</a></li>
              <li><a href="#contact" className="text-white/50 text-sm hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-white/50 text-sm">
                <Phone size={13} className="text-white/30" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/50 text-sm">
                <Mail size={13} className="text-white/30" />
                <span>info@nickinvestments.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-white/50 text-sm">
                <MapPin size={13} className="text-white/30 mt-0.5" />
                <span>Mumbai, India</span>
              </li>
            </ul>
            
            <div className="flex gap-2.5 mt-5">
              <a href="#" className="w-8 h-8 bg-white/10 flex items-center justify-center text-white hover:bg-[#E67E22] hover:scale-110 transition-all duration-200 rounded" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 flex items-center justify-center text-white hover:bg-[#E67E22] hover:scale-110 transition-all duration-200 rounded" aria-label="Twitter">
                <Twitter size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs text-center md:text-left">
              © {new Date().getFullYear()} Nick Investments. All rights reserved.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors duration-200">Terms</a>
              <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors duration-200">Disclosures</a>
            </div>
          </div>
          <p className="text-white/20 text-[11px] text-center mt-6 max-w-3xl mx-auto leading-relaxed">
            Investment advisory services are provided by Nick Investments, a SEBI registered investment advisor. 
            Past performance does not guarantee future results. Investments involve risk. Please read all disclosure documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
}
