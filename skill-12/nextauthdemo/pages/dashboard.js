import { getSession } from "next-auth/react";

export default function Dashboard({ user }) {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
      <h1>Dashboard</h1>

      <p>
        <strong>Name:</strong> {user.name || "No name available"}
      </p>
      <p>
        <strong>Email:</strong> {user.email || "No email available"}
      </p>

      {user.image && (
        <img
          src={user.image}
          alt="User "
          width={100}
          height={100}
          style={{ borderRadius: "50%", marginTop: 10 }}
        />
      )}
    </main>
  );
}

// Server-side authentication guard
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

  return { props: { user: session.user } };
}