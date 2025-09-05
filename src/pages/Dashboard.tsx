import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  FileText, 
  Download, 
  RotateCcw, 
  Calendar, 
  CheckCircle, 
  AlertTriangle, 
  Clock,
  User,
  Settings,
  Key,
  BarChart3
} from "lucide-react";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("documents");

  // Mock data for verification history
  const verificationHistory = [
    {
      id: "1",
      fileName: "passport_scan.pdf",
      documentType: "Government ID",
      status: "verified",
      verifiedAt: "2024-01-15 14:30",
      confidence: 98.5
    },
    {
      id: "2",
      fileName: "degree_certificate.pdf",
      documentType: "Academic Document",
      status: "verified",
      verifiedAt: "2024-01-14 09:15",
      confidence: 97.2
    },
    {
      id: "3",
      fileName: "contract_signed.pdf",
      documentType: "Contract",
      status: "pending",
      verifiedAt: "2024-01-14 16:45",
      confidence: null
    },
    {
      id: "4",
      fileName: "bank_statement.pdf",
      documentType: "Financial Document",
      status: "failed",
      verifiedAt: "2024-01-13 11:20",
      confidence: 23.1
    }
  ];

  const getStatusBadge = (status: string, confidence?: number | null) => {
    switch (status) {
      case 'verified':
        return (
          <Badge className="security-badge">
            <CheckCircle className="w-3 h-3" />
            Verified ({confidence}%)
          </Badge>
        );
      case 'pending':
        return (
          <Badge variant="secondary">
            <Clock className="w-3 h-3" />
            Pending
          </Badge>
        );
      case 'failed':
        return (
          <Badge variant="destructive">
            <AlertTriangle className="w-3 h-3" />
            Failed ({confidence}%)
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Manage your document verifications and account settings
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8 animate-slide-up">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Verifications</p>
                  <p className="text-2xl font-bold text-foreground">124</p>
                </div>
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Verified Documents</p>
                  <p className="text-2xl font-bold text-success">118</p>
                </div>
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold text-success">95.2%</p>
                </div>
                <BarChart3 className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold text-foreground">23</p>
                </div>
                <Calendar className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Verification History
                  <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                    <FileText className="w-4 h-4 mr-2" />
                    New Verification
                  </Button>
                </CardTitle>
                <CardDescription>
                  View and manage your document verification history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Verified Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {verificationHistory.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-medium">{doc.fileName}</TableCell>
                        <TableCell>{doc.documentType}</TableCell>
                        <TableCell>
                          {getStatusBadge(doc.status, doc.confidence)}
                        </TableCell>
                        <TableCell>{doc.verifiedAt}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <RotateCcw className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profile Information
                </CardTitle>
                <CardDescription>
                  Manage your account details and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <div className="p-3 bg-muted rounded-md">John Doe</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <div className="p-3 bg-muted rounded-md">john.doe@example.com</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Organization</label>
                    <div className="p-3 bg-muted rounded-md">TechCorp Inc.</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Plan</label>
                    <div className="p-3 bg-success-light rounded-md text-success font-medium">
                      Professional Plan
                    </div>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Account Settings
                </CardTitle>
                <CardDescription>
                  Configure your account preferences and integrations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">API Integration</h3>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">API Key</span>
                      <Button variant="outline" size="sm">
                        <Key className="w-4 h-4 mr-2" />
                        Generate New Key
                      </Button>
                    </div>
                    <code className="text-sm text-muted-foreground">
                      ch_live_sk_**********************
                    </code>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Subscription Management</h3>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Professional Plan</p>
                        <p className="text-sm text-muted-foreground">
                          1,000 verifications/month • API Access • Priority Support
                        </p>
                      </div>
                      <Button variant="outline">
                        Manage Subscription
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;