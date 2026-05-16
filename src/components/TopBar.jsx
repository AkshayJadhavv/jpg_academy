import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark py-2 px-4 z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-3 sm:gap-8">
        <a
          href="tel:8983664300"
          className="flex items-center gap-2 text-[#050505] font-sans font-semibold text-sm hover:opacity-70 transition-opacity"
        >
          <Phone size={14} strokeWidth={2.5} />
          <span>8983664300</span>
        </a>
        <a
          href="mailto:jbgbaramati@gmail.com"
          className="flex items-center gap-2 text-[#050505] font-sans font-semibold text-sm hover:opacity-70 transition-opacity"
        >
          <Mail size={14} strokeWidth={2.5} />
          <span>jbgbaramati@gmail.com</span>
        </a>
      </div>
    </div>
  );
}
