import {
  Monitor,
  Smartphone,
  Database,
  BarChart3,
  Cloud,
  Shield
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description:
        'Custom web applications built with modern frameworks like React, Next.js, and Node.js',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile apps for iOS and Android with seamless user experiences',
      features: ['Cross-Platform', 'Native Performance', 'App Store Ready']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description:
        'Scalable database architecture and optimization for your business data needs',
      features: ['MySQL/PostgreSQL', 'MongoDB', 'Data Migration']
    },
    {
      icon: BarChart3,
      title: 'Power BI & Analytics',
      description:
        'Transform your data into actionable insights with powerful business intelligence solutions',
      features: [
        'Custom Dashboards',
        'Real-time Analytics',
        'Data Visualization'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description:
        'Secure and scalable cloud infrastructure setup and management for your applications',
      features: ['AWS/Azure', 'DevOps', 'Auto Scaling']
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description:
        'Comprehensive security audits and ongoing maintenance to keep your systems safe',
      features: ['Security Audits', 'Regular Updates', '24/7 Monitoring']
    }
  ]

  return (
    <section id='services' className='py-20 relative'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section header */}
        <div className='text-center mb-16 animate-fade-in-up'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6'>
            <span className='text-primary text-sm font-medium'>
              Our Expertise
            </span>
          </div>
          <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
            Comprehensive
            <span className='gradient-text'> Tech Solutions</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            From concept to deployment, we provide end-to-end technology
            solutions that drive business growth and digital transformation.
          </p>
        </div>

        {/* Services overview image */}
        <div className='mb-16 animate-fade-in-up'>
          <div className='relative'>
            <div className='absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl'></div>
            <img
              src={
                '/service-img.svg'
              }
              alt='Our Services Overview'
              className='relative w-full max-w-4xl mx-auto rounded-3xl shadow-2xl'
            />
          </div>
        </div>

        {/* Services grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={service.title}
              className='feature-card group animate-fade-in-up'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <service.icon className='w-6 h-6 text-primary-foreground' />
              </div>

              <h3 className='text-xl font-semibold mb-4 text-foreground'>
                {service.title}
              </h3>

              <p className='text-muted-foreground mb-6'>
                {service.description}
              </p>

              <ul className='space-y-2'>
                {service.features.map(feature => (
                  <li
                    key={feature}
                    className='flex items-center text-sm text-muted-foreground'
                  >
                    <div className='w-1.5 h-1.5 bg-primary rounded-full mr-3'></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className='text-center mt-16 animate-fade-in-up'>
          <h3 className='text-2xl font-semibold mb-4'>
            Ready to Start Your Project?
          </h3>
          <p className='text-muted-foreground mb-8'>
            Let's discuss how we can help transform your business with the right
            technology solutions.
          </p>
          <button className='btn-hero'>Get Free Consultation</button>
        </div>
      </div>
    </section>
  )
}

export default Services
