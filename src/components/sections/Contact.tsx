import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-fade-up">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">your.email@example.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 animate-fade-up">
            <CardHeader>
              <CardTitle className="text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;