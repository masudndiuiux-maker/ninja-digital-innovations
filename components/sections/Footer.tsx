import Link from 'next/link';

const footerLinks = {
  Services: ['Web Development', 'Mobile Apps', 'AI Automation', 'Cloud Engineering'],
  Company: ['About', 'Careers', 'Insights', 'Contact'],
  Contact: ['hello@ninjadigitalinnovations.com', '+1 (555) 010-2048', 'New York, USA']
};

export function Footer() {
  return (
    <footer className="bg-[#062B36] py-14 text-slate-200">
      <div className="section-container grid gap-8 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">Ninja Digital</p>
          <p className="mt-3 text-sm text-slate-300">Premium digital products for modern businesses.</p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-white">{title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {links.map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="section-container mt-10 border-t border-slate-600 pt-6 text-sm text-slate-400">
        © {new Date().getFullYear()} Ninja Digital Innovations. All rights reserved.
      </div>
    </footer>
  );
}
