import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext"; // Corrected import path

const Index = () => {
  const { isLoggedIn, userEmail } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">Welcome to Your App</h1>
        {isLoggedIn ? (
          <>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hello, {userEmail}! You are logged in.
            </p>
            <Link to="/dashboard">
              <Button size="lg">Go to Dashboard</Button>
            </Link>
          </>
        ) : (
          <>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Please login or register to continue.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/login">
                <Button size="lg">Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg">Register</Button>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="absolute bottom-4">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;