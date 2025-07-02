import Link from 'next/link';

const socialIcons = [
  {
    name: 'Facebook',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'Instagram',
    icon: (
       <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.626c-3.142 0-3.488.012-4.706.068-2.61.119-3.793 1.3-3.912 3.912-.056 1.218-.067 1.564-.067 4.706s.011 3.488.067 4.706c.119 2.61 1.3 3.793 3.912 3.912.056 1.218.067 1.564.067 4.706s-.011 3.488-.067 4.706c-2.61-.119-3.793-1.3-3.912-3.912-.056-1.218-.067-1.564-.067-4.706s.011-3.488.067-4.706c.119-2.61 1.3-3.793 3.912-3.912C8.512 3.8 8.858 3.79 12 3.79zm0 2.882a5.338 5.338 0 100 10.676 5.338 5.338 0 000-10.676zm0 1.626a3.712 3.712 0 110 7.424 3.712 3.712 0 010-7.424zM16.965 6.57a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'Twitter',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    href: '#',
  },
];

const footerLinks = [
  { name: 'FAQ', href: '#' },
  { name: 'Help Center', href: '#' },
  { name: 'Account', href: '#' },
  { name: 'Media Center', href: '#' },
  { name: 'Investor Relations', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Ways to Watch', href: '#' },
  { name: 'Terms of Use', href: '#' },
  { name: 'Privacy', href: '#' },
  { name: 'Cookie Preferences', href: '#' },
  { name: 'Corporate Information', href: '#' },
  { name: 'Contact Us', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-background py-12 mt-16">
      <div className="container mx-auto px-4 text-muted-foreground">
        <div className="flex space-x-4 mb-8">
          {socialIcons.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-foreground transition-colors">
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
          {footerLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-foreground transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} Strimo, Inc.</p>
      </div>
    </footer>
  );
}
