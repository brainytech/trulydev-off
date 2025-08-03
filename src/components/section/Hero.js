import { ArrowRight, Play } from 'lucide-react'
import { Button } from '../ui/button'
const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-bg opacity-90'></div>

      {/* Animated background particles */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse'></div>
        <div className='absolute top-40 right-20 w-1 h-1 bg-primary-glow rounded-full animate-ping'></div>
        <div className='absolute bottom-40 left-20 w-3 h-3 bg-primary/50 rounded-full floating'></div>
        <div className='absolute top-60 right-40 w-1.5 h-1.5 bg-primary-glow/70 rounded-full animate-pulse'></div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left content */}
          <div className='text-center lg:text-left animate-fade-in-left'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6'>
              <span className='text-primary text-sm font-medium'>
                🚀 Leading Tech Solutions in Ahmedabad
              </span>
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
              Empowering
              <span className='gradient-text'> Digital Innovation</span>
              <br />
              in Gujarat
            </h1>

            <p className='text-xl text-muted-foreground mb-8 max-w-2xl'>
              Transform your business with cutting-edge web development, mobile
              applications, database solutions, and Power BI analytics. Built by
              experts in Ahmedabad, for businesses worldwide.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <Button variant='hero' size='xl' className='group'>
                Start Your Project
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </Button>
              <Button variant='glass' size='xl' className='group'>
                <Play className='w-5 h-5 mr-2' />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10'>
              <div className='text-center lg:text-left'>
                <div className='text-2xl font-bold text-primary'>150+</div>
                <div className='text-sm text-muted-foreground'>
                  Projects Delivered
                </div>
              </div>
              <div className='text-center lg:text-left'>
                <div className='text-2xl font-bold text-primary'>50+</div>
                <div className='text-sm text-muted-foreground'>
                  Happy Clients
                </div>
              </div>
              <div className='text-center lg:text-left'>
                <div className='text-2xl font-bold text-primary'>5+</div>
                <div className='text-sm text-muted-foreground'>
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard mockup */}
          <div className='relative animate-fade-in-right'>
            <div className='relative'>
              {/* Glow effect behind image */}
              <div className='absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl'></div>

              {/* Main dashboard image */}
              <div className='relative glass-card p-4 rounded-3xl floating'>
                <img
                  src={'/dashboard.svg'}
                  alt='TechCraft Dashboard'
                  className='w-full h-auto rounded-2xl shadow-2xl'
                />
              </div>

              {/* Floating elements */}
              <div
                className='absolute -top-6 -left-6 glass-card p-4 rounded-xl floating'
                style={{ animationDelay: '1s' }}
              >
                <div className='text-2xl font-bold text-primary'>99.9%</div>
                <div className='text-xs text-muted-foreground'>Uptime</div>
              </div>

              <div
                className='absolute -bottom-6 -right-6 glass-card p-4 rounded-xl floating'
                style={{ animationDelay: '2s' }}
              >
                <div className='text-2xl font-bold text-primary'>24/7</div>
                <div className='text-xs text-muted-foreground'>Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
