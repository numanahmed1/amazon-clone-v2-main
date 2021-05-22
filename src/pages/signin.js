import { getProviders, signIn, getSession } from "next-auth/client";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function SignIn({ providers }) {
  return (
    <>
    <Header />
      {Object.values(providers).map((provider) => (
        <div
          className="h-96 flex items-center justify-center bg-gray-100"
          key={provider.name}
        >
          <button onClick={() => signIn(provider.id)} className="sign-btn focus:outline-none">
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
      <Footer />
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
