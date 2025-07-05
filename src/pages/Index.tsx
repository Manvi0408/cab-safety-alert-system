import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import EmergencyButton from "@/components/EmergencyButton";
import EmergencyContacts from "@/components/EmergencyContacts";
import SafetyResources from "@/components/SafetyResources";
import { Shield, Users, Phone, Bell } from "lucide-react";
import heroImage from "@/assets/hero-safety.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-primary">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SafeGuard</h1>
                <p className="text-xs text-muted-foreground">Women's Safety Response System</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-success/10 text-success border-success/30">
              <div className="w-2 h-2 rounded-full bg-success mr-2 animate-pulse" />
              Online
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={heroImage} 
            alt="Women safety community" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Your Safety,{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Our Priority
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Empowering women with instant emergency response, trusted contacts, and safety resources
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full border">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">24/7 Protection</span>
              </div>
              <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full border">
                <Bell className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Instant Alerts</span>
              </div>
              <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full border">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Trusted Network</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="emergency" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-card/60 backdrop-blur-sm">
              <TabsTrigger value="emergency" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Emergency
              </TabsTrigger>
              <TabsTrigger value="contacts" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Contacts
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Resources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="emergency" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <EmergencyButton />
                <div className="space-y-4">
                  <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="hero" size="sm" className="w-full">
                        <Shield className="h-4 w-4" />
                        Safe Check-in
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Share Location
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Call Taxi
                      </Button>
                      <Button variant="success" size="sm" className="w-full">
                        I'm Safe
                      </Button>
                    </div>
                  </div>
                  <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Safety Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Last Check-in</span>
                        <Badge variant="outline" className="bg-success/10 text-success">
                          2 minutes ago
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Emergency Contacts</span>
                        <Badge variant="outline">2 Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Location Sharing</span>
                        <Badge variant="outline" className="bg-primary/10 text-primary">
                          Enabled
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contacts">
              <EmergencyContacts />
            </TabsContent>

            <TabsContent value="resources">
              <SafetyResources />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card/60 backdrop-blur-sm border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">SafeGuard</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Empowering women with comprehensive safety tools and emergency response systems. Your safety is our mission.
            </p>
            <div className="flex justify-center gap-4 text-xs text-muted-foreground">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;