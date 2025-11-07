import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p style={{ padding: 24 }}>Loading…</p>;

  return (
    <main style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
      <h1>NextAuth – GitHub Login (Pages Router)</h1>

      {!session ? (
        <>
          <p>You are not signed in.</p>
          <button onClick={() => signIn("github")} style={btnDark}>
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {session.user?.name || "No name available"}
          </p>
          <p>
            <strong>Email:</strong> {session.user?.email || "No email available"}
          </p>

          {session.user?.image && (
            <img
              src={session.user.image}
              alt="venky"
              width={80}
              height={80}
              style={{ borderRadius: "50%", marginTop: 10 }}
            />
          )}

          <div style={{ marginTop: 16 }}>
            <Link href="/dashboard">Go to Dashboard →</Link>
          </div>

          <div style={{ marginTop: 12 }}>
            <button onClick={() => signOut()} style={btnRed}>
              Sign out
            </button>
          </div>
        </>
      )}
    </main>
  );
}

const btnDark = {
  padding: "10px 16px",
  background: "#24292f",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
};

const btnRed = { ...btnDark, background: "crimson" };