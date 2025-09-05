import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Shield, Zap, Crown, CreditCard, Lock, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for trying out our verification service",
      badge: null,
      features: [
        "5 document verifications per month",
        "Basic verification report",
        "PDF and image support",
        "Email support",
        "Basic security analysis"
      ],
      notIncluded: [
        "API access",
        "Blockchain verification",
        "Priority support",
        "Custom integrations"
      ],
      ctaText: "Get Started Free",
      ctaVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for small teams and growing businesses",
      badge: "Most Popular",
      features: [
        "500 document verifications per month",
        "Advanced AI verification",
        "Blockchain security records",
        "API access included",
        "Priority email support",
        "Detailed confidence metrics",
        "Bulk upload support",
        "Custom document types"
      ],
      notIncluded: [
        "White-label solution",
        "Dedicated account manager"
      ],
      ctaText: "Start Free Trial",
      ctaVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Advanced features for large organizations",
      badge: "Premium",
      features: [
        "Unlimited document verifications",
        "Advanced AI + ML verification",
        "Full blockchain integration",
        "Priority API access",
        "24/7 phone & chat support",
        "Custom integrations",
        "White-label solution",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom compliance features"
      ],
      notIncluded: [],
      ctaText: "Contact Sales",
      ctaVariant: "outline" as const,
      popular: false
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption and security measures"
    },
    {
      icon: Lock,
      title: "GDPR Compliant",
      description: "Full compliance with global data protection regulations"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "PCI DSS compliant payment processing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent
            <span className="hero-gradient bg-clip-text text-transparent block mt-2">
              Pricing Plans
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your document verification needs. 
            All plans include our core AI verification technology and security features.
          </p>
          <div className="security-badge">
            <Shield className="w-4 h-4" />
            14-day free trial • No credit card required
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`relative card-hover ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="security-badge">
                      <Crown className="w-3 h-3" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 opacity-50">
                        <div className="w-5 h-5 flex-shrink-0 mt-0.5 rounded-full border-2 border-muted" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={plan.ctaVariant} 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary-dark text-primary-foreground' : ''}`}
                    size="lg"
                  >
                    {plan.ctaText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              All Plans Include
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every Certify Hub plan comes with essential security and verification features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
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

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I change my plan anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate any billing adjustments.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What file formats do you support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We support PDF, JPEG, PNG, and TIFF files up to 10MB. Our AI can process both 
                  digital documents and scanned images with high accuracy.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is my data secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. We use bank-level encryption, are GDPR compliant, and delete uploaded 
                  documents after verification unless you choose to store them.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer API access?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, Professional and Enterprise plans include full API access with comprehensive 
                  documentation and SDKs for popular programming languages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start Verifying Documents Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations who trust Certify Hub for secure document verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                <Headphones className="w-5 h-5 mr-2" />
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;