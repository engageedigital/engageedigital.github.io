"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar" // Assuming these paths are correct
import Footer from "@/components/footer" // Assuming these paths are correct
import MouseMoveEffect from "@/components/mouse-move-effect" // Assuming these paths are correct

export default function EarningsDisclaimer() {
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
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">Earnings and Results Disclaimer</h1>
            <p className="text-xl text-muted-foreground">Last Updated: June 1, 2025</p> {/* Update this date as needed */}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none animate-in fade-in slide-in-from-bottom duration-700 delay-100">

            <p>
              <strong>Company Name:</strong> Engagee Digital (hereinafter referred to as “Engagee Digital”, “we”, “us”, or “our”)<br />
              <strong>Contact Email:</strong> engagee.business@gmail.com<br />
              <strong>Contact Phone:</strong> +91-9273634782
            </p>

            <p>
              This Earnings and Results Disclaimer applies to all information, services, products, and materials provided by Engagee Digital, including but not limited to our website (the "Site"), consultations, marketing campaigns, reports, and any other communications. By engaging with our services or utilizing information provided by us, you acknowledge and agree to the terms of this disclaimer.
            </p>

            <h2>1. No Guarantees of Specific Earnings or Results</h2>
            <p>
              Engagee Digital is committed to providing high-quality digital marketing services. However, we make no guarantees, representations, or warranties, express or implied, regarding specific earnings, profits, sales, business growth, audience engagement, lead generation, conversion rates, or any other particular outcome or result from the use of our services or information.
            </p>
            <p>
              The success of any digital marketing effort is subject to numerous factors beyond our direct control, including but not limited to: market conditions, the client's industry, product/service quality, pricing, competition, brand reputation, economic climate, and the client's own efforts, commitment, skills, and business decisions.
            </p>
            <p>
              Therefore, you understand and agree that Engagee Digital cannot and does not promise or guarantee any level of financial success or specific business results. Any statements about potential outcomes are expressions of opinion and possibility, not guarantees.
            </p>

            <h2>2. Individual Responsibility and Assumption of Risk</h2>
            <p>
              You are solely responsible for your business decisions, actions, and the results you achieve. Your success depends on your individual capacity, business experience, expertise, dedication, resources, and follow-through. Engaging our services does not absolve you of this responsibility.
            </p>
            <p>
              All business ventures, including those utilizing digital marketing strategies, carry inherent risks. There is no assurance that any prior successes or past results regarding earnings or performance can be used as an indication of your future success or results. You agree to assume all risks associated with your business and marketing activities.
            </p>

            <h2>3. Testimonials, Examples, and Case Studies</h2>
            <p>
              Any testimonials, examples, case studies, or success stories shared by Engagee Digital on our Site, in marketing materials, or through other communications are illustrative of what some clients may have achieved. These are provided for informational purposes only and are not intended to represent or guarantee that current or future clients will achieve the same or similar results.
            </p>
            <p>
              The results depicted in testimonials or case studies are not typical. Your individual results will vary significantly. We do not claim that these results are representative of all clients. We may not have independently verified the claims made in all testimonials.
            </p>

            <h2>4. Forward-Looking Statements</h2>
            <p>
              Materials provided by Engagee Digital may contain information that includes or is based upon forward-looking statements within the meaning of applicable securities legislation. Forward-looking statements give our expectations or forecasts of future events. You can identify these statements by the fact that they do not relate strictly to historical or current facts. They use words such as “anticipate,” “estimate,” “expect,” “project,” “intend,” “plan,” “believe,” and other words and terms of similar meaning in connection with a description of potential earnings, financial performance, or business outcomes.
            </p>
            <p>
              Any and all forward-looking statements here or on any of our sales material are intended to express our opinion of earnings potential. Many factors will be important in determining your actual results and no guarantees are made that you will achieve results similar to ours or anybody else’s; in fact, no guarantees are made that you will achieve any results from our ideas and techniques in our material.
            </p>

            <h2>5. For Informational and Educational Purposes Only</h2>
            <p>
              The information provided by Engagee Digital, whether on our Site, through consultations, or in any other format, is for general informational and educational purposes only. It is not intended as, and shall not be understood or construed as, professional financial, investment, legal, tax, or other specialized advice.
            </p>
            <p>
              While we strive to provide accurate and up-to-date information, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information provided.
            </p>

            <h2>6. Due Diligence Required</h2>
            <p>
              You are advised to conduct your own due diligence when it comes to making business decisions and should use caution and seek the advice of qualified professionals. You should check with your accountant, lawyer, or professional advisor, before acting on this or any information. You may not consider any examples, documents, or other content on the website or otherwise provided by us to be the equivalent of professional advice.
            </p>

            <h2>7. No Professional-Client Relationship</h2>
            <p>
              Your use of our Site or consumption of information provided by us does not create a professional-client relationship between you and Engagee Digital, except where a formal service agreement has been executed.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law in India, Engagee Digital, its directors, employees, partners, and affiliates will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use our services or information; (ii.G) any conduct or content of any third party on the services; (iii) any content obtained from the services; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
             <p>Our liability, and the liability of our affiliates, is limited to the fullest extent permitted by law.</p>


            <h2>9. Updates to This Disclaimer</h2>
            <p>
              Engagee Digital reserves the right to modify or update this Earnings and Results Disclaimer at any time without prior notice. When we update this disclaimer, we will revise the "Last Updated" date at the top of this page. We encourage you to review this disclaimer periodically to stay informed about our policies regarding earnings and results. Your continued use of our Site or services after any modifications constitutes your acceptance of the revised disclaimer.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Earnings and Results Disclaimer, please contact us at:
            </p>
            <p>
              Engagee Digital<br />
              Email: engagee.business@gmail.com<br />
              Phone: +91-9273634782
            </p>

            <p>
              By engaging our services or using information from Engagee Digital, you acknowledge that you have read, understood, and agree to be bound by this Earnings and Results Disclaimer.
            </p>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
