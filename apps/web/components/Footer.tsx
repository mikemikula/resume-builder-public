'use client'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border mb-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Michael V. Mikula. All rights reserved.
          </p>
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <a 
                  href="/privacy" 
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
} 