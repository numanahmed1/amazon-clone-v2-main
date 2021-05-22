import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  return (
    <div className="bg-amazon_blue pb-3">
      <div className="bg-amazon_blue-light text-center hover:bg-gray-700">
        <a className="text-white block py-3" href="#header">
          Back to top
        </a>
      </div>
      <main className="grid sm:grid-cols-1 md:grid-cols-4 max-w-screen-2xl mx-auto text-gray-200 p-4 ">
        <div className="mt-2">
          <h2 className="font-bold text-xl mb-3">Get to Know Us</h2>

          <div className="flex flex-col">
            <a className="link mb-1">Careers</a>
            <a className="link mb-1">Blog</a>
            <a className="link mb-1">About Amazon</a>
            <a className="link mb-1">Investor Relations</a>
            <a className="link mb-1">Amazon Devices</a>
            <a className="link mb-1">Amazon Tours</a>
          </div>
        </div>

        <div className="mt-2">
          <h2 className="font-bold text-xl mb-3">Make Money with Us</h2>

          <div className="flex flex-col">
            <a className="link mb-1">Sell products on Amazon</a>
            <a className="link mb-1">Sell on Amazon Business</a>
            <a className="link mb-1">Sell apps on Amazon</a>
            <a className="link mb-1">Become an Affiliate</a>
            <a className="link mb-1">Advertise Your Products</a>
            <a className="link mb-1">Self-Publish with Us</a>
            <a className="link mb-1">Host an Amazon Hub</a>
          </div>
        </div>

        <div className="mt-2">
          <h2 className="font-bold text-xl mb-3">Amazon Payment Products</h2>

          <div className="flex flex-col">
            <a className="link mb-1">Amazon Business Card</a>
            <a className="link mb-1">Shop with Points</a>
            <a className="link mb-1">Reload Your Balance</a>
            <a className="link mb-1">Amazon Currency Converter</a>
          </div>
        </div>

        <div className="mt-2">
          <h2 className="font-bold text-xl  mb-3">Let Us Help You</h2>

          <div className="flex flex-col">
            <a className="link mb-1">Amazon and COVID-19</a>
            <a className="link mb-1">Your Account</a>
            <a className="link mb-1">Your Orders</a>
            <a className="link mb-1">Shipping Rates & Policies</a>
            <a className="link mb-1">Returns & Replacements</a>
            <a className="link mb-1">Manage Your Content and Devices</a>
            <a className="link mb-1">Amazon Assistant Help</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Footer;
