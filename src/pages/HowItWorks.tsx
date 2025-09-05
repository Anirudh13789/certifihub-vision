import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Upload, Scan, Shield, FileText, ArrowRight, CheckCircle, Lock, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Upload,
      title: "Upload Your Document",
      description: "Simply drag and drop or select your document. We support PDF, JPG, PNG, and scanned documents up to 10MB.",
      details: [
        "Secure SSL encryption during upload",
        "Support for multiple file formats",
        "Automatic file optimization",
        "GDPR compliant processing"
      ]
    },
    {
      step: 2,
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Our advanced machine learning algorithms analyze your document for authenticity markers and potential tampering.",
      details: [
        "Computer vision analysis",
        "Metadata examination",
        "Pattern recognition",
        "Digital signature validation"
      ]
    },
    {
      step: 3,
      icon: Shield,
      title: "Security Verification",
      description: "Multiple security layers check for digital alterations, ensuring the integrity of your document.",
      details: [
        "Tampering detection",
        "Watermark analysis",
        "Font consistency checks",
        "Image forensics"
      ]
    },
    {
      step: 4,
      icon: Lock,
      title: "Blockchain Recording",
      description: "A cryptographic hash of the verification is recorded on blockchain for immutable proof.",
      details: [
        "Immutable verification record",
        "Cryptographic security",
        "Timestamp verification",
        "Audit trail creation"
      ]
    },
    {
      step: 5,
      icon: FileText,
      title: "Instant Results",
      description: "Receive a comprehensive verification report with confidence scores and detailed analysis.",
      details: [
        "Detailed confidence metrics",
        "Visual authenticity indicators",
        "Downloadable PDF reports",
        "API response for integrations"
      ]
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "99.5% Accuracy",
      description: "Industry-leading accuracy in document verification powered by advanced AI algorithms."
    },
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption and security measures protect your sensitive documents."
    },
    {
      icon: Scan,
      title: "Multiple Formats",
      description: "Support for PDFs, images, and scanned documents with automatic format optimization."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            How Certify Hub
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Verifies Your Documents
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our advanced AI and blockchain technology work together to provide instant, 
            reliable document verification with unmatched accuracy and security.
          </p>
          <Link to="/upload">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3">
              Try It Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Verification Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to get your document verified securely and instantly.
            </p>
          </div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.step} className={`animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Step Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                        <step.icon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <Card className="flex-1 card-hover">
                    <CardHeader>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex items-center">
                      <ArrowRight className="w-8 h-8 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Our Verification Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technology and rigorous security measures ensure reliable results every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center card-hover">
                <CardHeader>
                  <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-success" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
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
            Ready to Verify Your Documents?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the fastest, most accurate document verification service available today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/upload">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                Start Verification
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;