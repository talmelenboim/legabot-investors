import LegalPageLayout from "@/components/LegalPageLayout";

const CookiePolicy = () => {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="Last updated: May 13, 2026">
      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          1. What Are Cookies
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site. Cookies help us understand how you use our Platform and enable us to improve your experience.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          2. How We Use Cookies
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Lega.bot uses cookies for the following purposes: (a) <strong className="text-white">Essential Cookies</strong> — necessary for the Platform to function properly, including authentication and security; (b) <strong className="text-white">Analytics Cookies</strong> — help us understand how visitors interact with our Platform by collecting and reporting information anonymously; (c) <strong className="text-white">Preference Cookies</strong> — enable the Platform to remember your preferences and settings.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          3. Types of Cookies We Use
        </h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-white font-semibold mb-2">Strictly Necessary Cookies</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              These cookies are essential for the Platform to function and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms.
            </p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-white font-semibold mb-2">Performance Cookies</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Platform. They help us know which pages are the most and least popular.
            </p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            <h3 className="text-white font-semibold mb-2">Functional Cookies</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              These cookies enable the Platform to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          4. Managing Cookies
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. Please note that if you disable cookies, some features of the Platform may not function properly.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          5. Third-Party Cookies
        </h2>
        <p className="text-gray-300 leading-relaxed">
          In some cases, we may use third-party cookies from trusted partners for analytics and performance monitoring. These third parties have their own privacy policies and we encourage you to review them. We do not have control over third-party cookies.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          6. Updates to This Policy
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for the latest information on our cookie practices.
        </p>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          7. Contact
        </h2>
        <p className="text-gray-300 leading-relaxed">
          For questions about this Cookie Policy, please contact us at{" "}
          <a
            href="mailto:hello@lega.bot"
            className="text-[#635cff] hover:text-[#8b5cf6] transition-colors"
          >
            hello@lega.bot
          </a>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default CookiePolicy;