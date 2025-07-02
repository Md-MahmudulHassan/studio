'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth, firebaseConfigured } from '@/lib/firebase';
import { Code2 } from 'lucide-react';

type AuthContextType = {
  user: User | null;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

const FirebaseNotConfigured = () => (
    <div className="flex h-screen w-screen items-center justify-center bg-background p-4">
        <div className="w-full max-w-2xl rounded-lg border border-destructive/50 bg-card p-6 text-card-foreground shadow-lg md:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row">
                <div className="rounded-full bg-destructive/10 p-3">
                    <Code2 className="h-6 w-6 text-destructive" />
                </div>
                <div className="flex-1">
                    <h1 className="text-xl font-bold text-destructive md:text-2xl">Firebase Not Configured</h1>
                    <p className="mt-2 text-muted-foreground">
                        Your Firebase project credentials seem to be missing. To enable user sign-up and login, you need to connect this app to your own Firebase project.
                    </p>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-lg font-semibold">How to Fix This:</h2>
                <ol className="mt-2 list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                    <li>Go to the <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">Firebase Console</a> and select your project (or create a new one).</li>
                    <li>In your project, add a new Web App (it looks like this: <code className="text-lg font-bold">&lt;/&gt;</code>).</li>
                    <li>After registering the app, you will see a <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">firebaseConfig</code> object.</li>
                    <li>Copy the values from that object into the <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">.env</code> file located in your project's main directory.</li>
                </ol>
            </div>
             <p className="mt-6 text-xs text-center text-muted-foreground">
                Once you've added your credentials, this message will disappear, and the app will be fully functional.
            </p>
        </div>
    </div>
);


export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = { user, loading };

  if (!firebaseConfigured) {
      return <FirebaseNotConfigured />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
