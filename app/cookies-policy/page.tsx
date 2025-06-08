"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar" // Assuming these paths are correct
import Footer from "@/components/footer" // Assuming these paths are correct
import MouseMoveEffect from "@/components/mouse-move-effect" // Assuming these paths are correct

export default function CookiePolicy() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen">
      <MouseMoveEffect />

      <div className="relative z-10">
        <Navbar />

        <main className="container max-w-4xl py-16 md:py-24">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">Cookie Policy</h1>
            <p className="text-xl text-muted-foreground">Last Updated: June 1, 2025</p> {/* Update this date */}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none animate-in fade-in slide-in-from-bottom duration-700 delay-100">

            <p>
              <strong>Company Name:</strong> Engagee Digital (hereinafter referred to as “Engagee Digital”, “we”, “us”, or “our”)<br />
              <strong>Contact Email:</strong> engagee.business@gmail.com<br />
              <strong>Contact Phone:</strong> +91-9273634782
            </p>

            <p>
              This Cookie Policy explains how Engagee Digital uses cookies and similar tracking technologies on our website (the "Site") and in connection with our digital marketing services (the "Services"). It describes what these technologies are, why we use them, and your rights to control our use of them. This policy should be read in conjunction with our <a href="/privacy-policy">Privacy Policy</a>, which provides more detailed information about our data processing practices.
            </p>
            <p>
              By using our Site, you acknowledge that you have read, understood, and agree to the practices described in this Cookie Policy.
            </p>

            <h2>1. What Are Cookies and Similar Technologies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information.
            </p>
            <p>
              In addition to cookies, we may use other similar technologies, such as:
            </p>
            <ul>
              <li><strong>Web Beacons (or "pixels"):</strong> These are tiny graphics files that contain a unique identifier that enables us to recognize when someone has visited our Site or opened an email that we have sent them.</li>
              <li><strong>Scripts:</strong> These are small pieces of code embedded into our webpages that enable various functionalities.</li>
              <li><strong>Local Storage Objects (LSOs):</strong> Such as HTML5, are used to store content and preferences.</li>
            </ul>
            <p>
              For simplicity, in this policy, we refer to all such technologies as "cookies".
            </p>

            <h2>2. Why Do We Use Cookies?</h2>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons for our Site to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our Site and Services. Third parties serve cookies through our Site for advertising, analytics, and other purposes. This is described in more detail below.
            </p>

            <h2>3. Types of Cookies We Use</h2>
            <p>
              We use the following types of cookies on our Site:
            </p>

            <h3>3.1. Essential Cookies</h3>
            <p>
              These cookies are strictly necessary to provide you with services available through our Site and to use some of its features, such as access to secure areas, session management, and ensuring the security and integrity of our Site. Because these cookies are strictly necessary to deliver the Site to you, you cannot refuse them without impacting how our Site functions.
            </p>
            <ul>
              <li><strong>Purpose:</strong> Site operation, security, user authentication, session management, load balancing.</li>
              <li><strong>Consent:</strong> These cookies do not require your consent.</li>
            </ul>

            <h3>3.2. Performance and Analytics Cookies</h3>
            <p>
              These cookies collect information that is used either in aggregate form to help us understand how our Site is being used or how effective our marketing campaigns are, or to help us customize our Site for you. This helps us to improve our Site and your experience.
            </p>
            <ul>
              <li><strong>Purpose:</strong> To analyze user activity, identify trends, improve website functionality and user experience.</li>
              <li><strong>Data Collected:</strong> Typically anonymized and aggregated data such as pages visited, time spent on pages, links clicked, browser type, device type, and IP address (which may be anonymized).</li>
              <li><strong>Example:</strong> We use Google Analytics to help us analyze traffic and usage. Google Analytics uses cookies to collect information about your use of our Site. This information is used to compile reports and to help us improve the Site. The cookies collect information in an anonymous form, including the number of visitors to the Site, where visitors have come to the Site from, and the pages they visited.
                <ul>
                  <li>You can learn about Google’s practices by going to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.</li>
                  <li>You can opt out of Google Analytics by installing Google’s opt-out browser add-on, available at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.</li>
                </ul>
              </li>
              <li><strong>Consent:</strong> We will seek your consent for these cookies through our cookie consent banner.</li>
            </ul>

            <h3>3.3. Functional Cookies</h3>
            <p>
              These cookies allow our Site to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features. They can also be used to remember changes you have made to text size, fonts, and other parts of web pages that you can customize.
            </p>
            <ul>
              <li><strong>Purpose:</strong> To enhance user experience by remembering preferences and settings.</li>
              <li><strong>Examples:</strong> Remembering your login details (if applicable), language preferences, region, accessibility settings.</li>
              <li><strong>Consent:</strong> We will seek your consent for these cookies through our cookie consent banner.</li>
            </ul>

            <h3>3.4. Targeting and Advertising Cookies</h3>
            <p>
              These cookies are used to make advertising messages more relevant to you and your interests. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests. These cookies may be set through our Site by us or our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
            </p>
            <ul>
              <li><strong>Purpose:</strong> To deliver targeted advertising, measure the effectiveness of advertising campaigns, limit ad frequency, and build user profiles.</li>
              <li><strong>Data Collected:</strong> Browse history, interaction with ads, IP address, device information. These cookies can track your Prowsing activity across different websites.</li>
              <li><strong>Consent:</strong> We will seek your consent for these cookies through our cookie consent banner. You can also manage these cookies via third-party opt-out links as described in the "Managing Your Cookie Preferences" section.</li>
            </ul>

            <h2>4. Third-Party Cookies</h2>
            <p>
              In addition to the cookies we set (first-party cookies), some cookies on our Site may be set by third parties, such as analytics providers (e.g., Google Analytics), social media platforms (if we integrate social media widgets), and advertising networks. These third parties may use cookies to collect information about your online activities over time and across different websites when you use our Site.
            </p>
            <p>
              We do not control the setting of these third-party cookies, so we suggest you check the third-party websites for more information about their cookies and how to manage them. Their use of your information is governed by their own privacy policies and cookie policies.
            </p>

            <h2>5. How We Obtain Your Consent</h2>
            <p>
              In compliance with applicable laws, including the Digital Personal Data Protection Act, 2023 (DPDPA) of India, we will obtain your consent before placing non-essential cookies on your device.
            </p>
            <p>
              When you first visit our Site, you will see a cookie banner or be presented with a cookie management tool. This tool will provide you with clear information about the types of cookies we use and their purposes. You will have the option to:
            </p>
            <ul>
              <li>Accept all cookies.</li>
              <li>Reject all non-essential cookies.</li>
              <li>Customize your cookie preferences by selecting which categories of non-essential cookies you consent to.</li>
            </ul>
            <p>
              Your preferences will be saved for future visits, though you can change them at any time. Essential cookies, which are necessary for the basic functioning of the Site, do not require your consent and will be active by default.
            </p>

            <h2>6. Managing Your Cookie Preferences</h2>
            <p>
              You have the right to decide whether to accept or reject cookies (other than essential cookies). You can exercise your cookie preferences in the following ways:
            </p>
            <ul>
              <li><strong>Cookie Consent Tool:</strong> You can adjust your cookie preferences at any time through the cookie consent banner or a dedicated cookie settings link typically found in the footer of our Site.</li>
              <li><strong>Browser Settings:</strong> Most web browsers allow some control of most cookies through the browser settings. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this Site may become inaccessible or not function properly. To find out more about how to manage cookies on popular browsers, see:
                <ul>
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
                </ul>
              </li>
              <li><strong>Third-Party Opt-Outs for Advertising:</strong> For targeting and advertising cookies, you can often opt out of interest-based advertising from many ad networks by visiting:
                <ul>
                  <li>Network Advertising Initiative (NAI): <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer">https://www.networkadvertising.org/choices/</a></li>
                  <li>Digital Advertising Alliance (DAA): <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">https://www.aboutads.info/choices/</a></li>
                  <li>European Interactive Digital Advertising Alliance (EDAA): <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">https://www.youronlinechoices.eu/</a> (if applicable to your audience)</li>
                </ul>
                Opting out does not mean you will no longer receive advertising; it means you will no longer receive advertising that has been tailored to your interests.
              </li>
            </ul>
            <p>
              Please note that if you choose to block or delete cookies, certain features of our Site may not operate correctly.
            </p>

            <h2>7. Duration of Cookies</h2>
            <p>
              Cookies can remain on your device for different periods:
            </p>
            <ul>
              <li><strong>Session Cookies:</strong> These are temporary cookies that exist only for the time you are on the Site (or more strictly, until you close the browser after using the Site). Session cookies help our Site remember what you chose on the previous page, avoiding the need to re-enter information.</li>
              <li><strong>Persistent Cookies:</strong> These cookies remain on your device after you have visited our Site. These cookies help us identify you as a unique visitor but do not contain information that could be used to identify you to another person. The duration for which a persistent cookie will remain on your device will vary depending on the specific cookie. You can typically find information on specific cookie durations within your browser settings or our cookie consent tool.</li>
            </ul>

            <h2>8. Data Protection Rights</h2>
            <p>
              As cookies can involve the processing of Personal Data, your rights concerning such data are detailed in our <a href="/privacy-policy">Privacy Policy</a>. These rights may include the right to access, correct, delete, or restrict the processing of your Personal Data.
            </p>

            <h2>9. International Data Transfers</h2>
            <p>
              Information collected through cookies may be processed in countries outside of your country of residence, including India. For instance, third-party analytics or advertising partners may process data globally. We take steps to ensure that any such transfers comply with applicable data protection laws and that your Personal Data remains protected. For more details, please refer to our <a href="/privacy-policy">Privacy Policy</a>.
            </p>

            <h2>10. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we update our Cookie Policy, we will revise the "Last Updated" date at the top of this policy. If we make material changes, we will provide you with notice as appropriate under the circumstances, such as by posting a prominent notice on our Site or by sending you an email.
            </p>
            <p>
              We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and related technologies.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <p>
              Engagee Digital<br />
              Email: engagee.business@gmail.com<br />
              Phone: +91-9273634782
            </p>
            <p>
              For more information about how we handle your personal data, please review our <a href="/privacy-policy">Privacy Policy</a>.
            </p>

            <p>
              Thank you for visiting Engagee Digital.
            </p>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
