// pages/dashboard.js
import { getSession } from "next-auth/react";

export default function Dashboard({ user }) {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
      <h1>Dashboard</h1>
      <p>Welcome, {user.name || user.email}!</p>
      {user.image && (
        <img
          src={user.image}
          alt="avatar"
          width={100}
          height={100}
          style={{ borderRadius: "50%" }}
        />
      )}
    </main>
  );
}

// Server-side auth guard
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }
  return { props: { user: session.user } };
}