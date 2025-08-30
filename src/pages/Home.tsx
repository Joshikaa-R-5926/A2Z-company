import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";
import { Rocket, Zap, Shield, Cloud, BarChart, Users, Bot, FileText, FlaskConical, Lightbulb, Check, MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <header className="px-4 lg:px-6 h-14 flex items-center shadow-sm sticky top-0 z-50 bg-white dark:bg-gray-950">
        <Link to="/" className="flex items-center justify-center">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-semibold">A2Z Company</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="/">
            Home
          </Link>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#product">
            Product
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#researches">
            Researches
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
          {isLoggedIn ? (
            <Link to="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-[#fde2f3] via-[#e9d8fd] to-[#dde7fd] dark:from-[#2c0b1f] dark:via-[#210f33] dark:to-[#0f172a]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
                    Build the Future, Faster
                  </h1>
                  <p className="max-w-[600px] text-gray-800 md:text-xl dark:text-gray-200">
                    Our next-generation platform empowers teams to build, innovate, and scale at unprecedented speeds.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/register">
                    <Button size="lg">Get Started</Button>
                  </Link>
                  <Link to="#">
                    <Button variant="outline" size="lg">Learn More</Button>
                  </Link>
                </div>
              </div>
              <img
                alt="Abstract futuristic background representing innovation"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                src="https://images.unsplash.com/photo-1550439062-609e15td-xl/relaxed dark:text-gray-400">
                  At A2Z Company, we believe in the power of technology to transform industries and shape the future. We are a passionate team of engineers, designers, and strategists dedicated to building tools that help businesses of all sizes achieve their full potential.
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform is the culmination of years of research and development, designed to be powerful yet intuitive, secure, and infinitely scalable. We're committed to providing our customers with the resources they need to succeed and innovate.
                </p>
              </div>
              <img
                alt="A diverse team collaborating in a modern office"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need to Scale
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform is packed with features designed to enhance collaboration, security, and efficiency.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1 text-center">
                <Zap className="h-8 w-8 mx-auto text-primary" />
                <h3 className="text-xl font-bold">Blazing Performance</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Experience unparalleled speed and performance with our optimized infrastructure.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <Shield className="h-8 w-8 mx-auto text-primary" />
                <h3 className="text-xl font-bold">Enterprise-Grade Security</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Your data is protected with state-of-the-art security and encryption.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <Cloud className="h-8 w-8 mx-auto text-primary" />
                <h3 className="text-xl font-bold">Infinitely Scalable</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Access your work from anywhere, on any device, with our fully-managed cloud solution.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="product" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Products
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover Our Innovative Product Suite
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Tools designed to streamline your workflow and boost productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-4 text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-950">
                <BarChart className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Gain real-time insights and make data-driven decisions with our powerful analytics platform.
                </p>
              </div>
              <div className="grid gap-4 text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-950">
                <Users className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-xl font-bold">Collaboration Hub</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Bring your team together with seamless communication and project management tools.
                </p>
              </div>
              <div className="grid gap-4 text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-950">
                <Bot className="h-10 w-10 mx-auto text-primary" />
                <h3 className="text-xl font-bold">Automation Engine</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Automate repetitive tasks and optimize your business processes with our intelligent engine.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="researches" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Research
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Pioneering the Future of Technology
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our latest findings, whitepapers, and breakthroughs that are pushing the boundaries of innovation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-4 text-left p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900">
                <FileText className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">AI in Modern Development</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A comprehensive whitepaper on the impact of artificial intelligence on software development lifecycles.
                </p>
                <a href="#" className="text-primary font-semibold hover:underline">Read More &rarr;</a>
              </div>
              <div className="grid gap-4 text-left p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900">
                <FlaskConical className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Quantum Computing Frontiers</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Exploring the potential and challenges of quantum computing in solving complex real-world problems.
                </p>
                <a href="#" className="text-primary font-semibold hover:underline">Read More &rarr;</a>
              </div>
              <div className="grid gap-4 text-left p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900">
                <Lightbulb className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">The Ethics of Automation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  An in-depth analysis of the ethical considerations and societal impact of widespread automation.
                </p>
                <a href="#" className="text-primary font-semibold hover:underline">Read More &rarr;</a>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Flexible Plans for Teams of All Sizes
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that's right for you and unlock the full potential of our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
              <div className="grid gap-6 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Basic</h3>
                  <p className="text-4xl font-bold">₹2,499<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span></p>
                  <p className="text-gray-500 dark:text-gray-400">For small teams and startups.</p>
                </div>
                <ul className="grid gap-4 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Up to 10 users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Core Features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Basic Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Community Support</span>
                  </li>
                </ul>
                <Button className="w-full">Choose Plan</Button>
              </div>
              <div className="grid gap-6 p-6 rounded-lg shadow-lg transition-shadow bg-white dark:bg-gray-950 border-2 border-primary relative">
                <div className="absolute top-0 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-4xl font-bold">₹6,999<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span></p>
                  <p className="text-gray-500 dark:text-gray-400">For growing businesses.</p>
                </div>
                <ul className="grid gap-4 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Up to 50 users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Advanced Features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Advanced Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Priority Support</span>
                  </li>
                </ul>
                <Button className="w-full">Choose Plan</Button>
              </div>
              <div className="grid gap-6 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-4xl font-bold">Custom</p>
                  <p className="text-gray-500 dark:text-gray-400">For large-scale organizations.</p>
                </div>
                <ul className="grid gap-4 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Unlimited users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>All Features Included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Dedicated Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Custom Integrations</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have a question or want to work together? We’d love to hear from you.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-12 grid items-start gap-12 lg:grid-cols-2">
              <div className="grid gap-8 text-left">
                <div className="flex items-start gap-4">
                  <MapPin className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Our Office</h3>
                    <p className="text-gray-500 dark:text-gray-400">123 Innovation Drive, Tech City, 560001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Phone</h3>
                    <p className="text-gray-500 dark:text-gray-400">(+91) 987-654-3210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">Email</h3>
                    <p className="text-gray-500 dark:text-gray-400">contact@a2zcompany.com</p>
                  </div>
                </div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 A2Z Company. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Home;