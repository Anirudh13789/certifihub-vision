import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Upload, FileText, Shield, CheckCircle, AlertTriangle, Lock, Scan, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VerificationStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  icon: any;
}

const UploadPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [documentType, setDocumentType] = useState<string>("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationProgress, setVerificationProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();

  const verificationSteps: VerificationStep[] = [
    {
      id: '1',
      title: 'Document Analysis',
      description: 'Scanning document structure and metadata',
      status: 'pending',
      icon: Scan
    },
    {
      id: '2',
      title: 'Authenticity Check',
      description: 'AI-powered tampering detection',
      status: 'pending',
      icon: Shield
    },
    {
      id: '3',
      title: 'Blockchain Verification',
      description: 'Creating immutable verification record',
      status: 'pending',
      icon: Lock
    },
    {
      id: '4',
      title: 'Report Generation',
      description: 'Compiling comprehensive verification report',
      status: 'pending',
      icon: FileText
    }
  ];

  const [steps, setSteps] = useState(verificationSteps);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const simulateVerification = async () => {
    setIsVerifying(true);
    setVerificationProgress(0);
    setCurrentStep(0);

    const updatedSteps = [...steps];
    
    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      updatedSteps[i].status = 'processing';
      setSteps([...updatedSteps]);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      updatedSteps[i].status = 'completed';
      setSteps([...updatedSteps]);
      setVerificationProgress((i + 1) * 25);
    }

    setIsVerifying(false);
    toast({
      title: "Verification Complete",
      description: "Document verification completed successfully.",
    });
  };

  const resetVerification = () => {
    setFile(null);
    setDocumentType("");
    setIsVerifying(false);
    setVerificationProgress(0);
    setCurrentStep(0);
    const resetSteps = verificationSteps.map(step => ({ ...step, status: 'pending' as const }));
    setSteps(resetSteps);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Document Verification
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your document for instant AI-powered verification. We support PDFs, images, and scanned documents.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Document
              </CardTitle>
              <CardDescription>
                Drag and drop your document or click to browse
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div
                className={`upload-zone ${dragActive ? 'border-primary bg-primary/5' : ''} ${file ? 'bg-success-light border-success' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => document.getElementById('file-input')?.click()}
              >
                <input
                  id="file-input"
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                />
                
                {file ? (
                  <div className="space-y-2">
                    <CheckCircle className="w-12 h-12 text-success mx-auto" />
                    <p className="font-medium text-success">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                    <p className="font-medium">Drop your document here</p>
                    <p className="text-sm text-muted-foreground">
                      Or click to browse (PDF, JPG, PNG up to 10MB)
                    </p>
                  </div>
                )}
              </div>

              {file && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Document Type</label>
                    <Select value={documentType} onValueChange={setDocumentType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select document type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="id">Government ID</SelectItem>
                        <SelectItem value="certificate">Certificate</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="academic">Academic Document</SelectItem>
                        <SelectItem value="financial">Financial Document</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      onClick={simulateVerification}
                      disabled={!documentType || isVerifying}
                      className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground"
                    >
                      {isVerifying ? 'Verifying...' : 'Start Verification'}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={resetVerification}
                      disabled={isVerifying}
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Verification Status */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Verification Status
              </CardTitle>
              <CardDescription>
                Real-time verification progress and results
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {isVerifying && (
                <div className="space-y-4">
                  <Progress value={verificationProgress} className="w-full" />
                  <p className="text-sm text-muted-foreground">
                    {verificationProgress}% complete
                  </p>
                </div>
              )}

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="verification-step">
                    <div className={`p-2 rounded-full ${
                      step.status === 'completed' ? 'bg-success text-success-foreground' :
                      step.status === 'processing' ? 'bg-warning text-white' :
                      step.status === 'failed' ? 'bg-destructive text-destructive-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{step.title}</h4>
                        {step.status === 'completed' && (
                          <Badge className="security-badge text-xs">
                            <CheckCircle className="w-3 h-3" />
                            Complete
                          </Badge>
                        )}
                        {step.status === 'processing' && (
                          <Badge variant="secondary" className="text-xs">
                            Processing...
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {verificationProgress === 100 && (
                <div className="space-y-4 animate-bounce-in">
                  <Card className="border-success bg-success-light">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-success" />
                        <div>
                          <h4 className="font-medium text-success">Document Verified</h4>
                          <p className="text-sm text-success/80">
                            No tampering detected. Document is authentic.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Verification Report
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UploadPage;