const HeroBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-base-100 via-base-100/10 to-transparent z-10"></div>
    
    {/* Background content */}
    <div className="absolute inset-0 bg-gradient-to-br from-base-200 to-base-300">
      {/* Top layer - Most visible */}
      <svg
        className="absolute left-0 top-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
          <pattern
            id="wavy-pattern-top"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50 Q50 0, 100 50 T200 50"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.3"
              strokeWidth="2"
            />
            <path
              d="M0 150 Q50 100, 100 150 T200 150"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.3"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavy-pattern-top)" />
      </svg>
      
      {/* Middle layer - Less visible */}
      <svg
        className="absolute left-0 top-0 h-full w-full"
        aria-hidden="true"
        style={{ transform: 'translateY(10%)' }}
      >
        <defs>
          <pattern
            id="wavy-pattern-middle"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50 Q50 0, 100 50 T200 50"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.15"
              strokeWidth="1.5"
            />
            <path
              d="M0 150 Q50 100, 100 150 T200 150"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.15"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavy-pattern-middle)" />
        <circle cx="10%" cy="30%" r="50" fill="currentColor" fillOpacity="0.04" />
        <circle cx="80%" cy="60%" r="100" fill="currentColor" fillOpacity="0.03" />
      </svg>
      
      {/* Bottom layer - Least visible */}
      <svg
        className="absolute right-0 bottom-0 h-full w-full"
        aria-hidden="true"
        style={{ transform: 'translateY(20%)' }}
      >
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.04" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
          </linearGradient>
          <pattern
            id="wavy-pattern-bottom"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50 Q50 0, 100 50 T200 50"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.07"
              strokeWidth="1"
            />
            <path
              d="M0 150 Q50 100, 100 150 T200 150"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.07"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavy-pattern-bottom)" />
        <ellipse cx="30%" cy="70%" rx="100" ry="50" fill="currentColor" fillOpacity="0.01" />
      </svg>
    </div>
  </div>
)

export default HeroBackground