"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /dashboard
    router.push('/dashboard');
  }, [router]);

  return null; // Return null as we are redirecting
}
