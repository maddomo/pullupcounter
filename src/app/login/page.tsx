"use client";
import { supabase } from "../../supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setErrorMsg("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }
    const {data: {session }} = await supabase.auth.getSession();
    console.log(session);
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-4 max-w-sm mx-auto mt-24">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <input
        type="email"
        className="border p-2 rounded"
        placeholder="E-Mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-2 rounded"
        placeholder="Passwort"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {errorMsg && <p className="text-red-500">{errorMsg}</p>}

      <button
        onClick={handleLogin}
        disabled={loading}
        className="bg-blue-600 text-white py-2 rounded"
      >
        {loading ? "Einloggen..." : "Login"}
      </button>
    </div>
  );
}
