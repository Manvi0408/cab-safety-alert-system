import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Phone, Bell, CircleAlert } from "lucide-react";

const SafetyResources = () => {
  const resources = [
    {
      title: "National Domestic Violence Hotline",
      description: "24/7 confidential support for domestic violence survivors",
      phone: "7827170170",
      type: "Hotline",
      icon: Phone,
      variant: "emergency" as const,
    },
    {
      title: "Mental Health Support",
      description: "Provide emotional support and resources for individuals struggling with mental health",
      phone: "+912225521111",
      type: "Mental Health",
      icon: Bell,
      variant: "warning" as const,
    },
    {
      title: "National Sexual Assault Number",
      description: "Support for sexual assault survivors and their loved ones",
      phone: "011-23379181",
      type: "Hotline",
      icon: Shield,
      variant: "success" as const,
    },
    {
      title: "National Suicide Prevention Lifeline",
      description: "Free and confidential emotional support 24/7",
      phone: "1800-599-0019",
      type: "Crisis Support",
      icon: CircleAlert,
      variant: "default" as const,
    },
  ];

  const safetyTips = [
    "Always trust your instincts - if something feels wrong, it probably is",
    "Share your location with trusted friends when going somewhere new",
    "Keep emergency contacts easily accessible in your phone",
    "Learn basic self-defense techniques and practice them regularly",
    "Carry a whistle or personal alarm for emergency situations",
    "Plan safe routes when walking alone, especially at night",
  ];

  return (
    <div className="space-y-6">
      <Card className="card-3d animate-float">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary animate-glow" />
            Emergency Resources
          </CardTitle>
          <CardDescription>
            Important hotlines and support services available 24/7
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {resources.map((resource, index) => (
             <div
               key={index}
               className="card-3d flex items-start justify-between p-4 rounded-lg border hover:shadow-glow transition-all duration-200"
             >
              <div className="flex items-start gap-3 flex-1">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <resource.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{resource.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {resource.phone}
                  </p>
                </div>
              </div>
              <Button
                variant={resource.variant}
                size="sm"
                className="ml-4"
              >
                <Phone className="h-4 w-4" />
                Call
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="card-3d animate-float" style={{animationDelay: '1s'}}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary animate-glow" />
            Safety Tips
          </CardTitle>
          <CardDescription>
            Essential safety guidelines to help keep you protected
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {safetyTips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-medium mt-0.5">
                  {index + 1}
                </div>
                <p className="text-sm text-foreground leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SafetyResources;