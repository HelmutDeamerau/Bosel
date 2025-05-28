import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for seems to have wandered off into the digital wilderness.
          Don't worry, we can help you find your way back.
        </p>

        <div className="space-y-4">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              <Button variant="outline" className="w-full sm:w-auto">
                Browse Properties
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="mt-8 p-4 bg-muted rounded-lg">
            <h3 className="text-lg font-medium mb-2">Can't find what you're looking for?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Try using our search feature to find what you need
            </p>
            <Link href="/search">
              <Button variant="secondary" className="w-full sm:w-auto">
                <Search className="mr-2 h-4 w-4" />
                Search Properties
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 