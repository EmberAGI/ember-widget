import { useState, useEffect } from 'react'
import axios from 'axios'
import HeroBackground from './components/HeroBackground'
import teamImage from './assets/team.jpg'



interface CryptoData {
  id: string;
  symbol: string;
  current_price: number;
}

function App() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCryptoData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await axios.get<CryptoData[]>(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,arbitrum&order=market_cap_desc&sparkline=false'
        )
        setCryptoData(response.data)
      } catch (error) {
        console.error('Error fetching crypto data:', error)
        setError('Failed to fetch crypto data. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCryptoData()
    const interval = setInterval(fetchCryptoData, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Submitted email: ${email}`)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  const features = [
    { 
      title: "Secure Transactions", 
      description: "State-of-the-art encryption ensures the safety of all your crypto transactions. Our multi-layered security approach includes 2FA, cold storage, and regular security audits.",
      icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    },
    { 
      title: "Multi-Currency Support", 
      description: "Trade and manage a wide range of cryptocurrencies on our platform. We support major coins like Bitcoin and Ethereum, as well as promising altcoins and tokens.",
      icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    { 
      title: "Real-Time Analytics", 
      description: "Advanced tools for tracking and analyzing market trends. Our platform provides real-time charts, price alerts, and customizable dashboards to help you make informed decisions.",
      icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
    }
  ]

  const faqs = [
    { 
      question: "What is cryptocurrency?", 
      answer: "Cryptocurrency is a digital or virtual currency that uses cryptography for security. It operates independently of a central bank and can be transferred directly between individuals without intermediaries."
    },
    { 
      question: "How do I start trading on CryptoInnovate?", 
      answer: "To start trading on CryptoInnovate, create an account, complete the verification process, deposit funds, and you're ready to go. We offer a user-friendly interface for both beginners and experienced traders."
    },
    { 
      question: "Is my cryptocurrency safe on your platform?", 
      answer: "Yes, we prioritize the security of your assets. We use industry-leading security measures, including cold storage for the majority of funds, regular security audits, and insurance coverage for digital assets."
    }
  ]



  return (
    <div className="app">
        
      {/* Navbar */}
      <div className="navbar bg-base-100 sticky top-0 z-50">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">CryptoInnovate</a>
        </div>
        <div className="flex-none hidden sm:block">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Features</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="flex-none sm:hidden">
          <button className="btn btn-square btn-ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-base-100 p-4">
          <ul className="menu menu-vertical w-full">
            <li><a>Home</a></li>
            <li><a>Features</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      )}

      {/* Hero Section with background */}
      <div className="relative isolate overflow-hidden min-h-screen">
        <HeroBackground />
        <div className="hero min-h-screen relative z-10">
          <div className="hero-content text-center">
            <div className="max-w-2xl backdrop-blur-sm bg-base-300 bg-opacity-70 p-8 rounded-box shadow-xl">
              <h1 className="text-5xl font-bold mb-6 text-primary">CryptoInnovate</h1>
              <p className="text-2xl mb-8 text-base-content">Revolutionizing the future of finance with blockchain technology.</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {isLoading ? (
                  // Animated skeleton loading
                  <>
                    <div className="bg-base-100 p-4 rounded-box shadow-md animate-pulse">
                      <div className="h-4 bg-base-300 rounded w-16 mb-2"></div>
                      <div className="h-6 bg-base-300 rounded w-24"></div>
                    </div>
                    <div className="bg-base-100 p-4 rounded-box shadow-md animate-pulse">
                      <div className="h-4 bg-base-300 rounded w-16 mb-2"></div>
                      <div className="h-6 bg-base-300 rounded w-24"></div>
                    </div>
                    <div className="bg-base-100 p-4 rounded-box shadow-md animate-pulse">
                      <div className="h-4 bg-base-300 rounded w-16 mb-2"></div>
                      <div className="h-6 bg-base-300 rounded w-24"></div>
                    </div>
                  </>
                ) : error ? (
                  // Non-animated skeleton for error state
                  <>
                    <div className="bg-base-100 p-4 rounded-box shadow-md">
                      <div className="h-4 bg-base-300 rounded w-16 mb-2"></div>
                      <div className="h-6 bg-base-300 rounded w-24"></div>
                    </div>
                    <div className="bg-base-100 p-4 rounded-box shadow-md">
                      <div className="h-4 bg-base-300 rounded w-16 mb-2"></div>
                      <div className="h-6 bg-base-300 rounded w-24"></div>
                    </div>
                    <div className="bg-base-100 p-4 rounded-box shadow-md">
                      <div className="h-4 bg-base-300 rounded w-16 mb-2"></div>
                      <div className="h-6 bg-base-300 rounded w-24"></div>
                    </div>
                  </>
                ) : (
                  // Actual crypto data
                  cryptoData.map((crypto) => (
                    <div key={crypto.id} className="bg-base-100 p-4 rounded-box shadow-md">
                      <h3 className="font-bold text-primary">{crypto.symbol.toUpperCase()}</h3>
                      <p className="text-lg">${crypto.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                  ))
                )}
              </div>
              <button className="btn btn-primary btn-lg hover:bg-primary-focus transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-base-100">
        <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                </svg>
                <h2 className="card-title mb-4">{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-base-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="max-w-md">
              <p className="mb-4">
                CryptoInnovate is at the forefront of blockchain technology, 
                providing secure and innovative solutions for the future of finance.
              </p>
              <p className="mb-4">
                Our team of experts is dedicated to creating a seamless and 
                user-friendly platform for both novice and experienced crypto enthusiasts.
              </p>
              <p>
                With a focus on security, transparency, and user experience, 
                we're committed to making cryptocurrency accessible to everyone.
              </p>
            </div>
            <div className="max-w-sm">
              <img src={teamImage} alt="CryptoInnovate Team" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-base-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="collapse collapse-plus bg-base-100">
                <input 
                  type="radio" 
                  name="my-accordion-3" 
                  checked={activeFaq === index}
                  onChange={() => setActiveFaq(activeFaq === index ? null : index)}
                /> 
                <div className="collapse-title text-xl font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content"> 
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-20 bg-base-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="mb-6">Subscribe to our newsletter for the latest crypto news, market insights, and exclusive offers.</p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input input-bordered w-full max-w-xs" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
        </div> 
        <div>
          <p>Copyright © 2024 - All rights reserved by CryptoInnovate</p>
        </div>
      </footer>
    </div>
  )
}

export default App
