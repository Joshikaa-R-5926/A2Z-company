import React from 'react';
import { useAuth } from '../context/AuthContext'; // Corrected import path
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MadeWithDyad } from '@/components/made-with-dyad';

const Dashboard = () => {
  const { userEmail, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl">Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Welcome, {userEmail || 'Guest'}! You are logged in.
          </p>
          <Button onClick={logout} className="w-full">
            Logout
          </Button>
        </CardContent>
      </Card>
      <div className="absolute bottom-4">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Dashboard;