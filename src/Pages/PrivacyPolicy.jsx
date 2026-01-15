import {
  FaUserShield,
  FaLock,
  FaDatabase,
  FaUserCheck,
  FaHandshake,
} from "react-icons/fa";
import { MdPolicy } from "react-icons/md";

const PrivacyPolicy = () => {
  return (
    <section className="relative min-h-screen bg-base-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-red-100 text-red-600 shadow-md">
              <MdPolicy size={36} />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-primary tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-accent max-w-2xl mx-auto">
            Your privacy and data protection are extremely important to us at{" "}
            <span className="font-semibold text-red-600">Red Care</span>.
            This policy explains how we collect, use, and protect your
            information.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid gap-8">
          {/* Card */}
          <div className="policy-card bg-base-200 p-4 rounded-xl">
            <FaDatabase className="policy-icon" />
            <h3 className="policy-title font-bold">Information We Collect -</h3>
            <p className="policy-text text-accent">
              We collect personal details such as your name, email address,
              blood group, contact number, and location when you register or
              interact with our blood donation services.
            </p>
          </div>

          <div className="policy-card bg-base-200 p-4 rounded-xl">
            <FaUserCheck className="policy-icon" />
            <h3 className="policy-title font-bold">How We Use Your Information -</h3>
            <p className="policy-text text-accent">
              Your information is used solely to connect donors with recipients,
              improve our services, send important notifications, and ensure a
              safe and reliable blood donation experience.
            </p>
          </div>

          <div className="policy-card bg-base-200 p-4 rounded-xl">
            <FaLock className="policy-icon" />
            <h3 className="policy-title font-bold">Data Security -</h3>
            <p className="policy-text text-accent">
              We implement strong security measures to protect your personal
              data from unauthorized access, alteration, disclosure, or
              destruction.
            </p>
          </div>

          <div className="policy-card bg-base-200 p-4 rounded-xl">
            <FaHandshake className="policy-icon" />
            <h3 className="policy-title font-bold">Data Sharing -</h3>
            <p className="policy-text text-accent">
              We do not sell or trade your personal data. Information may only be
              shared with trusted parties when necessary to provide our blood
              donation services or when legally required.
            </p>
          </div>

          <div className="policy-card bg-base-200 p-4 rounded-xl">
            <FaUserShield className="policy-icon" />
            <h3 className="policy-title font-bold">Your Rights - </h3>
            <p className="policy-text text-accent">
              You have the right to access, update, or request deletion of your
              personal data at any time. Contact us if you have concerns about
              your privacy.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-sm text-accent">
          <p>
            By using <span className="font-medium text-red-600">Red Care</span>,
            you agree to this Privacy Policy. We may update this policy from time
            to time, so please review it periodically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
