import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Phone, Users, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  relationship: string;
}

const EmergencyContacts = () => {
  const [contacts, setContacts] = useState<EmergencyContact[]>([
    { id: "1", name: "Khushi Sharma", phone: "9599722152", relationship: "Friend" },
    { id: "2", name: "Mom", phone: "9968502412", relationship: "Mother" },
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [newContact, setNewContact] = useState({ name: "", phone: "", relationship: "" });
  const { toast } = useToast();

  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      const contact: EmergencyContact = {
        id: Date.now().toString(),
        ...newContact
      };
      setContacts([...contacts, contact]);
      setNewContact({ name: "", phone: "", relationship: "" });
      setIsAdding(false);
      toast({
        title: "Contact Added",
        description: `${newContact.name} has been added to your emergency contacts.`,
      });
    }
  };

  const handleCall = (contact: EmergencyContact) => {
    // In a real app, this would initiate a phone call
    toast({
      title: "Calling...",
      description: `Calling ${contact.name} at ${contact.phone}`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Emergency Contacts
        </CardTitle>
        <CardDescription>
          Quick access to your trusted contacts who will be notified during emergencies
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground">{contact.name}</div>
                <div className="text-sm text-muted-foreground">{contact.phone}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {contact.relationship}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCall(contact)}
                className="hover:bg-success/10 hover:border-success"
              >
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {isAdding ? (
          <div className="space-y-3 p-4 border rounded-lg bg-card">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={newContact.name}
                onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                placeholder="Enter contact name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={newContact.phone}
                onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                placeholder="(+91) 99xxxxxxxx"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="relationship">Relationship</Label>
              <Input
                id="relationship"
                value={newContact.relationship}
                onChange={(e) => setNewContact({ ...newContact, relationship: e.target.value })}
                placeholder="e.g., Sister, Friend, Partner"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAddContact} size="sm" variant="hero">
                Add Contact
              </Button>
              <Button 
                onClick={() => setIsAdding(false)} 
                size="sm" 
                variant="outline"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <Button
            onClick={() => setIsAdding(true)}
            variant="outline"
            className="w-full border-dashed hover:bg-primary/5"
          >
            + Add Emergency Contact
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default EmergencyContacts;