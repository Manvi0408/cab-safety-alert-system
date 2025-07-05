import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Siren, Phone, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmergencyButton = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { toast } = useToast();

  const handleEmergencyActivation = () => {
    setIsActivated(true);
    setCountdown(5);
    
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          sendEmergencyAlert();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    toast({
      title: "Emergency Alert Activated",
      description: "Alert will be sent in 5 seconds. Tap 'Cancel' to stop.",
      variant: "destructive",
    });
  };

  const sendEmergencyAlert = () => {
    // In a real app, this would send alerts to emergency contacts
    toast({
      title: "Emergency Alert Sent",
      description: "Your emergency contacts have been notified with your location.",
    });
    
    setIsActivated(false);
  };

  const cancelEmergency = () => {
    setIsActivated(false);
    setCountdown(0);
    toast({
      title: "Emergency Alert Cancelled",
      description: "Alert has been cancelled successfully.",
    });
  };

  return (
    <Card className="p-6 text-center bg-gradient-hero border-emergency/20">
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <Siren className="h-16 w-16 text-emergency animate-pulse" />
            {isActivated && (
              <div className="absolute -inset-4 border-4 border-emergency/30 rounded-full animate-ping" />
            )}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">Emergency Alert</h2>
          <p className="text-muted-foreground">
            Press and hold to activate emergency alert system
          </p>
        </div>

        {isActivated ? (
          <div className="space-y-4">
            <Alert className="border-emergency bg-emergency/10">
              <AlertDescription className="text-center font-semibold">
                Sending alert in {countdown} seconds...
              </AlertDescription>
            </Alert>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={cancelEmergency}
              className="w-full text-foreground border-emergency hover:bg-emergency/10"
            >
              Cancel Alert
            </Button>
          </div>
        ) : (
          <Button 
            variant="emergency" 
            size="lg" 
            onClick={handleEmergencyActivation}
            className="w-full py-6 text-lg"
          >
            <Siren className="h-6 w-6" />
            EMERGENCY ALERT
          </Button>
        )}

        <div className="grid grid-cols-2 gap-3 pt-4 border-t">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Call 911
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Safe Mode
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default EmergencyButton;