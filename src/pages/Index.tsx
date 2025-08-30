import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";
import { Rocket, Zap, Shield, Cloud } from "lucide-react";

const Index = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <header className="px-4 lg:px-6 h-14 flex items-center shadow-sm">
        <Link to="/" className="flex items-center justify-center">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-semibold">A2Z Company</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
            Product
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
            Researches
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
            Contact
          </Link>
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
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                src="/placeholder.svg"
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

export default Index;