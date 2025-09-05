import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Zap, Check, Star, Upload, Brain, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Homepage = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Verification",
      description: "Advanced machine learning algorithms detect tampering and validate document authenticity instantly."
    },
    {
      icon: Lock,
      title: "Blockchain Security",
      description: "Immutable verification records stored on blockchain ensure permanent proof of document integrity."
    },
    {
      icon: Zap,
      title: "Real-Time Results",
      description: "Get comprehensive verification reports in seconds, not hours or days."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "HR Director, TechCorp",
      content: "Certify Hub has revolutionized our document verification process. We now validate certificates instantly.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Legal Counsel",
      content: "The blockchain verification gives us the confidence we need for legal document authentication.",
      rating: 5
    },
    {
      name: "Dr. Amanda Foster",
      role: "Academic Administrator",
      content: "Perfect for verifying academic credentials. The AI detection is incredibly accurate.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <Badge className="security-badge mb-6">
              <Shield className="w-4 h-4" />
              Trusted by 10,000+ Organizations
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Verify Documents
              <span className="hero-gradient bg-clip-text text-transparent block mt-2">
                Securely and Instantly
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Upload any document and get AI-powered verification results in seconds. 
              Detect tampering, validate authenticity, and ensure document integrity with blockchain-secured reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div 
                className="upload-zone cursor-pointer hover:border-primary hover:bg-primary/5"
                onClick={() => document.getElementById('hero-file-input')?.click()}
              >
                <input
                  id="hero-file-input"
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      // Navigate to upload page with file
                      window.location.href = '/upload';
                    }
                  }}
                />
                <Upload className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="font-semibold text-primary mb-1">Upload Document</p>
                <p className="text-sm text-muted-foreground">Drag & drop or click to browse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Certify Hub?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets user-friendly design for the most reliable document verification platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-success" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Trusted by Professionals
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our customers say about their experience with Certify Hub.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Documents?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of organizations who trust Certify Hub for document verification.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;