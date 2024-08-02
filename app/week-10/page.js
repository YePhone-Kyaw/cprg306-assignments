"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center bg-gray-800/60 justify-center p-5 rounded-lg space-y-3">
        <header>
          <h1 className="text-3xl text-green-500">
            <b>Shopping List App</b>
          </h1>
        </header>

        {user ? (
          <div className="space-y-3">
            <div className="flex space-x-5 items-center justify-center ">
              <img className="w-12 h-12 rounded-full border-2 border-green-500" src={user.photoURL} />

              <h3 className="text-lg text-green-500">Welcome! {user.displayName}</h3>
            </div>

            <p className="text-green-500">Signed in with {user.email}</p>
            <div className="flex flex-col space-y-3">
              <Link href="/week-10/shopping-list" className="bg-green-400 hover:bg-green-500 p-1 rounded-md text-center">Continue to your Shopping List</Link>

              <button
                onClick={handleSignOut}
                className="bg-green-400 hover:bg-green-500 p-1 rounded-md"
              >
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <button onClick={handleSignIn} className="w-full bg-green-400 hover:bg-green-500 p-1 rounded-md">Sign in with GitHub</button>
        )}
      </div>
    </main>
  );
}
