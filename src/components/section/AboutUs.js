import { CheckCircle, MapPin, Users, Award } from "lucide-react";
// import teamCollaboration from "@/assets/team-collaboration.jpg";

const About = () => {
  const achievements = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Satisfied Clients" },
    { number: "5+", label: "Years of Excellence" },
    { number: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We leverage cutting-edge technologies to create solutions that give you a competitive edge."
    },
    {
      title: "Quality Assured",
      description: "Every project undergoes rigorous testing and quality checks to ensure excellence."
    },
    {
      title: "Client-Centric",
      description: "Your success is our priority. We work closely with you to understand and exceed expectations."
    },
    {
      title: "Agile Delivery",
      description: "Fast, iterative development cycles ensure rapid deployment and continuous improvement."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MapPin className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary text-sm font-medium">Based in Ahmedabad, Serving Globally</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About
            <span className="gradient-text"> TechCraft</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and digital strategists 
            based in Ahmedabad, committed to delivering exceptional technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left content */}
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold mb-6">
              Transforming Ideas into 
              <span className="gradient-text"> Digital Reality</span>
            </h3>
            
            <p className="text-muted-foreground mb-8 text-lg">
              Founded in the heart of Gujarat's tech hub, TechCraft has emerged as a 
              leading technology partner for businesses looking to embrace digital transformation. 
              Our team combines deep technical expertise with creative problem-solving to 
              deliver solutions that drive real business value.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Expert team with 5+ years of combined experience",
                "Agile development methodology for faster delivery",
                "Post-launch support and maintenance included",
                "Transparent communication throughout the project"
              ].map((item) => (
                <div key={item} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.label} className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Team image */}
          <div className="relative animate-fade-in-right">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl"></div>
            <div className="relative glass-card p-4 rounded-3xl">
              <img
                src={"/service-img-2.svg"}
                alt="TechCraft Team"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl floating">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-sm font-semibold">Top Rated</div>
                  <div className="text-xs text-muted-foreground">Development Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="animate-fade-in-up">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Core <span className="gradient-text">Values</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-4">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;