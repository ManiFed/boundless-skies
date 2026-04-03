import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setFormData({ name: "", email: "", role: "", message: "" });
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="mx-auto max-w-site text-center">
          <Mail className="mx-auto mb-4 h-10 w-10 text-accent" />
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">
            We'd love to hear from you. Reach out to learn more, get involved, or explore a partnership.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-site gap-12 md:grid-cols-5">
          {/* FORM */}
          <div className="md:col-span-3">
            <Card className="shadow-md">
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-foreground">
                      I am a…
                    </label>
                    <Select value={formData.role} onValueChange={(v) => setFormData({ ...formData, role: v })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select one (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual / Family</SelectItem>
                        <SelectItem value="organization">Organization / Partner</SelectItem>
                        <SelectItem value="sponsor">Supporter / Sponsor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help?"
                      rows={5}
                      maxLength={1000}
                    />
                  </div>
                  <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-gold-light w-full text-lg py-6">
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* SIDEBAR */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div className="rounded-lg bg-cream p-6">
                <h3 className="mb-3 font-semibold text-foreground">Get in Touch</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <span>info@boundlessskies.org</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span>New Rochelle, NY</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-cream p-6">
                <h3 className="mb-3 font-semibold text-foreground">Response Time</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We typically respond within 2–3 business days. For urgent inquiries, please mention it in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
