import { getProviders, signIn, getSession } from "next-auth/client";

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div
          className="h-screen flex items-center justify-center"
          key={provider.name}
        >
          <button onClick={() => signIn(provider.id)} className="sign-btn">
            <div className="g-logo-holder">
              <img
                loading="lazy"
                src="https://i.ibb.co/wLhHKh5/googlelogo.png"
                alt="Google"
              />
            </div>
            <div className="sign-text">Sign in with {provider.name}</div>
          </button>
        </div>
      ))}
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {

  const providers = await getProviders();
  return {
    props: { providers },
  };
}
