import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin, X, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image priority
              src="/logo.png"
              alt="Prospera Finance Limited"
              width={60}
              height={60}
              className="mb-4 h-10 w-auto"
            />
            <p className="text-sm text-background/80 leading-relaxed">
              Building Your Prosperity, One Smart Decision at a Time
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-background">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-background/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-background/80 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-background/80 hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-background/80 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-background/80 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-background/80 hover:text-primary transition-colors">
                  Legal & Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-background">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-background/80">0803 969 5299</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-background/80">enquiries@prosperagroup.co</span>
              </li>
              <li>
                <Link className="flex items-start gap-2 hover:underline" href={`/map?address=${encodeURIComponent("House 1, 52 Junction by 5th Avenue, Festac Town, Lagos")}`}>
                  <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-background/80">House 1, 52 Junction by 5th Avenue, Festac Town, Lagos</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-background">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://x.com/ProsperaFNL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors"
                aria-label="X"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>

              </a>
              <a
                href="https://instagram.com/prosperafinanceltd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61581047943087"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-background/20 pt-8 text-center text-sm text-background/80">
          <p>&copy; {new Date().getFullYear()} Prospera Finance Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
