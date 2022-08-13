import React from 'react'

function LandingPage() {
  return (
    <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="w-full space-y-8">
            <header>
              <img className='m-auto' src='/assets/images/header.png' alt='Shadowgraphy' />
            </header>
            <div>
                <button className="btn btn-accent btn-lg">Start the Show</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LandingPage