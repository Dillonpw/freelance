import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/header";
export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <p>
            Thank you for visiting my freelance web development website. I take
            your privacy seriously and want to be transparent about my data
            practices.
          </p>

          <h2 className="text-2xl font-semibold">Data Collection</h2>
          <p>
            This website does not collect, store, or process any personal
            information about visitors. The only data I receive is what you
            voluntarily provide through the contact form when reaching out about
            services.
          </p>

          <h2 className="text-2xl font-semibold">Contact Form</h2>
          <p>
            When you use the contact form, you may provide:
            <ul className="list-disc pl-6">
              <li>Your name</li>
              <li>Email address</li>
              <li>Message content</li>
            </ul>
            This information is only used to respond to your inquiry and will
            not be shared with third parties or used for marketing purposes.
          </p>

          <h2 className="text-2xl font-semibold">Cookies & Tracking</h2>
          <p>
            This website does not use cookies or any tracking technologies to
            monitor visitor behavior.
          </p>

          <h2 className="text-2xl font-semibold">Third-Party Services</h2>
          <p>
            This website is hosted on Netlify, which may collect basic server
            logs for security and performance purposes. No personal information
            is included in these logs.
          </p>

          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>
            If you have any questions about this privacy policy, please contact
            me through the contact form on the main page.
          </p>
        </div>
      </main>

      <footer className="mt-auto border-t bg-white px-6 py-8">
        <div className="mx-auto max-w-4xl text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Dillon Walsh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
