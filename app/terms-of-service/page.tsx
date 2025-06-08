"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MouseMoveEffect from "@/components/mouse-move-effect"

export default function TermsOfService() {
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
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">Last Updated: May 10, 2025</p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none animate-in fade-in slide-in-from-bottom duration-700 delay-100">

            <p>
              Welcome to Engagee Digital! These Terms of Service ("Terms", "ToS") govern your use of the website engageedigital.com (the "Site") and the digital marketing services (collectively, the "Services") offered by Engagee Digital ("Engagee Digital", "we", "us", or "our").
            </p>
            <p>
              By accessing our Site or engaging our Services, you, whether as an individual or on behalf of an entity ("Client", "You", "Your"), agree to be bound by these Terms and our Privacy Policy (available at <a href="/privacy-policy">this link</a>), which is incorporated herein by reference. If you do not agree to these Terms, you must not access the Site or use our Services.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and Engagee Digital.
            </p>

            <h2>1. Definitions</h2>
            <ul>
              <li><strong>"Services"</strong> refers to the digital marketing services provided by Engagee Digital, which may include but are not limited to search engine optimization (SEO), pay-per-click (PPC) advertising management, social media marketing (SMM), content creation, email marketing, web design and development, analytics, and consulting. The specific scope of Services for a Client will be detailed in a separate Service Agreement, Proposal, or Statement of Work ("SOW").</li>
              <li><strong>"Site"</strong> refers to the Engagee Digital website located at engageedigital.com and any subdomains thereof.</li>
              <li><strong>"Client Content"</strong> means all text, graphics, images, music, software, audio, video, information, data, and other materials provided by the Client to Engagee Digital for use in connection with the Services.</li>
              <li><strong>"Deliverables"</strong> means the specific work products created by Engagee Digital for the Client as part of the Services, as outlined in the applicable SOW.</li>
              <li><strong>"Intellectual Property Rights"</strong> means all patent rights, copyright rights, moral rights, rights of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights, and other intellectual property rights as may now exist or hereafter come into existence, and all applications therefore and registrations, renewals, and extensions thereof, under the laws of any state, country, territory or other jurisdiction.</li>
              <li><strong>"Confidential Information"</strong> means any non-public information disclosed by one party to the other, whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure.</li>
            </ul>

            <h2>2. Description of Services & Service Agreements</h2>
            <p>
              Engagee Digital provides a range of digital marketing Services. The precise nature, scope, duration, fees, and other specific terms of the Services to be provided to you will be outlined in a formal SOW or Service Agreement executed between you and Engagee Digital. These Terms of Service shall govern all SOWs and Service Agreements, unless explicitly stated otherwise in such an agreement. In case of any conflict between these Terms and a specific SOW/Service Agreement, the terms of the SOW/Service Agreement shall prevail for that specific engagement.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or without notice, provided that any such modification affecting ongoing, paid-for services will be communicated to the Client.
            </p>

            <h2>3. Client Accounts</h2>
            <p>
              To access certain Services, you may be required to provide information about yourself (such as identification or contact details) as part of a registration process or as part of your continued use of the Services. You agree that any registration information you give to Engagee Digital will always be accurate, correct, and up to date.
            </p>
            <p>
              If you are provided with user account credentials (e.g., for accessing client portals or third-party platforms managed by us), you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account or password.
            </p>

            <h2>4. Client Obligations and Responsibilities</h2>
            <p>As a Client, you agree to:</p>
            <ul>
              <li>Provide Engagee Digital with timely and accurate information, Client Content, and access to necessary resources (e.g., website backend, social media accounts, ad accounts) required for us to perform the Services.</li>
              <li>Cooperate fully with Engagee Digital and provide prompt feedback and approvals as needed for the execution of the Services. Delays on your part may impact service delivery timelines and outcomes.</li>
              <li>Ensure that all Client Content provided to us does not infringe upon the Intellectual Property Rights or any other rights of any third party and complies with all applicable laws and regulations.</li>
              <li>Be responsible for all technical aspects of your own website(s), servers, and other platforms, unless Engagee Digital is explicitly contracted to manage these under an SOW.</li>
              <li>Comply with all applicable laws, regulations, and industry standards concerning your business, your website, and your use of the Services (including data privacy and advertising laws).</li>
              <li>Secure all necessary rights, licenses, consents, and permissions for Engagee Digital to use Client Content in connection with the Services.</li>
            </ul>

            <h2>5. Fees, Payment, and Taxes</h2>
            <p>
              Fees for Services will be specified in the applicable SOW or Service Agreement. All fees are quoted in Indian Rupees (INR) or another mutually agreed currency.
            </p>
            <ul>
              <li><strong>Payment Terms:</strong> Payment terms (e.g., upfront payment, milestones, recurring payments) will be outlined in the SOW. Invoices are due upon receipt or as otherwise stated in the SOW.</li>
              <li><strong>Late Payments:</strong> Payments not received by the due date may incur a late fee of 1.5% per month on the outstanding balance, or the maximum rate permitted by law, whichever is lower. We reserve the right to suspend Services for overdue accounts.</li>
              <li><strong>Taxes:</strong> All fees are exclusive of applicable taxes, including Goods and Services Tax (GST) or other relevant taxes, which will be added to your invoice as required by law. You are responsible for paying all such taxes.</li>
              <li><strong>Expenses:</strong> Client shall reimburse Engagee Digital for pre-approved out-of-pocket expenses incurred in connection with the Services (e.g., third-party ad spend, stock photography licenses, specialized software).</li>
              <li><strong>Refunds:</strong> Fees paid for Services are generally non-refundable, except as may be explicitly agreed upon in an SOW or as required by applicable law. If a refund is issued, it will be processed according to the terms of the SOW or our then-current refund policy.</li>
              <li><strong>Disputed Charges:</strong> Any disputes regarding an invoice must be raised in writing within seven (7) days of the invoice date, otherwise the invoice will be deemed accepted.</li>
            </ul>

            <h2>6. Intellectual Property Rights</h2>
            <ul>
              <li><strong>Engagee Digital's IP:</strong> We retain all Intellectual Property Rights in and to our Site, our pre-existing materials, tools, software, methodologies, know-how, and any generic or non-Client-specific elements developed or used by us in providing the Services ("Engagee Digital IP"). Nothing in these Terms grants you any right, title, or interest in Engagee Digital IP, except for the limited right to receive the Services.</li>
              <li><strong>Client's IP:</strong> You retain all Intellectual Property Rights in and to your pre-existing Client Content. You grant Engagee Digital a worldwide, non-exclusive, royalty-free, sublicensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such Client Content solely to the extent necessary to provide the Services.</li>
              <li><strong>Deliverables:</strong> Upon full and final payment of all fees due for the relevant Services, and subject to the terms of the applicable SOW, Engagee Digital shall assign to the Client the Intellectual Property Rights in the unique and specific Deliverables created expressly for the Client as part of the Services. Notwithstanding the foregoing, Engagee Digital retains all rights to Engagee Digital IP, including any underlying tools, methods, or generic components used to create the Deliverables.</li>
              <li><strong>Portfolio Rights:</strong> Unless otherwise agreed in writing in an SOW, Engagee Digital shall have the right to use depictions of the Deliverables and a description of the Services provided to the Client in its portfolio, marketing materials, and case studies, provided that no Confidential Information of the Client is disclosed without prior consent.</li>
            </ul>

            <h2>7. Confidentiality</h2>
            <p>
              Each party (the "Receiving Party") agrees to keep confidential all Confidential Information disclosed to it by the other party (the "Disclosing Party") and not to use such Confidential Information for any purpose other than as necessary to perform its obligations or exercise its rights under these Terms or any SOW. The Receiving Party shall protect the Disclosing Party's Confidential Information with the same degree of care it uses to protect its own confidential information of like nature, but in no event less than reasonable care.
            </p>
            <p>Confidential Information does not include information that: (a) is or becomes publicly known through no wrongful act of the Receiving Party; (b) was in the Receiving Party's lawful possession prior to disclosure; (c) is lawfully disclosed to the Receiving Party by a third party without restriction on disclosure; or (d) is independently developed by the Receiving Party without use of or reference to the Disclosing Party's Confidential Information.</p>
            <p>A Receiving Party may disclose Confidential Information if required by law, provided that the Receiving Party gives the Disclosing Party prompt written notice of such requirement (if legally permissible) and assistance in obtaining an order protecting the information from public disclosure.</p>

            <h2>8. Term and Termination</h2>
            <ul>
              <li><strong>Term of These Terms:</strong> These Terms commence when you first access the Site or engage our Services and continue until terminated by either party.</li>
              <li><strong>Term of Service Engagements:</strong> The term for specific Services will be set forth in the applicable SOW.</li>
              <li><strong>Termination for Cause:</strong> Either party may terminate an SOW or these Terms if the other party:
                <ol>
                  <li>Materially breaches any provision of these Terms or the SOW and fails to cure such breach within thirty (30) days of written notice (or ten (10) days for non-payment);</li>
                  <li>Becomes insolvent, makes an assignment for the benefit of creditors, or files for bankruptcy.</li>
                </ol>
              </li>
              <li><strong>Termination for Convenience:</strong> Termination for convenience rights, if any, will be specified in the SOW.</li>
              <li><strong>Effect of Termination:</strong> Upon termination:
                <ol>
                  <li>Client shall pay Engagee Digital for all Services rendered and expenses incurred up to the effective date of termination.</li>
                  <li>Each party shall return or, at the Disclosing Party's request, destroy all Confidential Information of the other party in its possession.</li>
                  <li>Provisions of these Terms that by their nature should survive termination will survive (including, without limitation, provisions regarding Intellectual Property, Confidentiality, Disclaimers, Limitation of Liability, Indemnification, Governing Law, and Dispute Resolution).</li>
                </ol>
              </li>
              <li><strong>Suspension of Services:</strong> We may suspend Services immediately if you fail to make timely payments or if your use of Services poses a security risk or is otherwise in breach of these Terms.</li>
            </ul>

            <h2>9. Disclaimers</h2>
            <p>
              THE SITE AND THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
            </p>
            <p>
              ENGAGEE DIGITAL DOES NOT WARRANT THAT THE SITE OR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
            <p>
              WHILE WE STRIVE TO PROVIDE HIGH-QUALITY DIGITAL MARKETING SERVICES, ENGAGEE DIGITAL MAKES NO GUARANTEES REGARDING SPECIFIC OUTCOMES, RESULTS, OR PERFORMANCE FROM THE SERVICES. DIGITAL MARKETING RESULTS CAN VARY BASED ON NUMEROUS FACTORS BEYOND OUR DIRECT CONTROL, INCLUDING MARKET CONDITIONS, COMPETITOR ACTIONS, ALGORITHM CHANGES BY THIRD-PARTY PLATFORMS (E.G., SEARCH ENGINES, SOCIAL MEDIA SITES), AND CLIENT PARTICIPATION. ANY EXAMPLES OF PAST PERFORMANCE OR POTENTIAL RESULTS ARE ILLUSTRATIVE ONLY AND NOT A GUARANTEE OF FUTURE SUCCESS.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ENGAGEE DIGITAL, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF OR INABILITY TO USE THE SITE OR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              IN NO EVENT SHALL ENGAGEE DIGITAL'S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS, THE SITE, OR THE SERVICES EXCEED THE TOTAL AMOUNT OF FEES PAID BY YOU TO ENGAGEE DIGITAL FOR THE SPECIFIC SERVICES GIVING RISE TO THE CLAIM DURING THE SIX (6) MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO SUCH CLAIM, OR ONE HUNDRED US DOLLARS (USD $100.00) IF NO FEES HAVE BEEN PAID, WHICHEVER IS GREATER.
            </p>
            <p>
              THE LIMITATIONS IN THIS SECTION APPLY REGARDLESS OF THE LEGAL THEORY ON WHICH THE CLAIM IS BASED, WHETHER CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Engagee Digital, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from:
            </p>
            <ul>
              <li>Your use of and access to the Site or Services;</li>
              <li>Your violation of any term of these Terms or any applicable SOW;</li>
              <li>Your violation of any third-party right, including without limitation any Intellectual Property Right or privacy right, related to Client Content or your business operations;</li>
              <li>Any claim that Client Content caused damage to a third party; or</li>
              <li>Your willful misconduct or negligence.</li>
            </ul>

            <h2>12. Third-Party Services and Links</h2>
            <p>
              Our Services may involve the use of or integration with third-party services, platforms, tools, or websites (e.g., Google Ads, Facebook Business Manager, analytics tools, hosting providers). Your use of such third-party services is subject to their respective terms and conditions and privacy policies. Engagee Digital is not responsible for the operation, content, or practices of these third-party services.
            </p>
            <p>
              The Site may contain links to third-party websites. These links are provided for your convenience only. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites.
            </p>

            <h2>13. Prohibited Uses</h2>
            <p>You agree not to use the Site or Services for any purpose that is unlawful or prohibited by these Terms, including but not limited to:</p>
            <ul>
              <li>Engaging in any activity that infringes or misappropriates the Intellectual Property Rights of others or that is libelous, defamatory, obscene, pornographic, abusive, or otherwise offensive.</li>
              <li>Transmitting any viruses, worms, defects, Trojan horses, or any items of a destructive nature.</li>
              <li>Interfering with the proper working of the Site or Services or attempting to gain unauthorized access to any systems or networks.</li>
              <li>Using the Services to send unsolicited messages (spam) or engage in any deceptive marketing practices.</li>
              <li>Violating any applicable local, state, national, or international law or regulation.</li>
            </ul>

            <h2>14. Modifications to Terms of Service</h2>
            <p>
              Engagee Digital reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least thirty (30) days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. Notice may be provided by posting the updated Terms on the Site, by sending an email to the address associated with your account, or by other means we deem appropriate.
            </p>
            <p>
              By continuing to access or use our Site or Services after those revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new terms, you must stop using the Site and Services.
            </p>

            <h2>15. Governing Law and Dispute Resolution</h2>
            <ul>
              <li><strong>Governing Law:</strong> These Terms and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</li>
              <li><strong>Dispute Resolution:</strong> The parties agree to attempt to resolve any dispute, claim, or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation, or validity thereof, through good faith negotiation. If the parties are unable to resolve the dispute through negotiation within thirty (30) days, then either party may submit the dispute to the competent courts located in [Specify City, e.g., New Delhi, or another relevant city in India where Engagee Digital primarily operates or is registered, if applicable for legal purposes]. You hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to, venue and jurisdiction in such courts.</li>
            </ul>

            <h2>16. Electronic Communications</h2>
            <p>
              When you use the Site, use our Services, or send emails to us, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by email or by posting notices on the Site. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.
            </p>

            <h2>17. General Provisions</h2>
            <ul>
              <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy and any applicable SOWs or Service Agreements, constitute the entire agreement between you and Engagee Digital concerning your use of the Site and Services and supersede all prior or contemporaneous communications and proposals (whether oral, written, or electronic) between you and us.</li>
              <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect and enforceable.</li>
              <li><strong>Waiver:</strong> Our failure to enforce any part of these Terms shall not constitute a waiver of our right to later enforce that or any other part of these Terms. Waiver of compliance in any particular instance does not mean that we will waive compliance in the future.</li>
              <li><strong>Assignment:</strong> You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. Any attempt by you to assign or transfer these Terms, without such consent, will be null and void. We may assign or transfer these Terms, at our sole discretion, without restriction.</li>
              <li><strong>No Agency:</strong> No agency, partnership, joint venture, or employment relationship is created as a result of these Terms, and neither party has any authority of any kind to bind the other in any respect.</li>
              <li><strong>Force Majeure:</strong> Engagee Digital shall not be liable for any failure to perform its obligations hereunder where such failure results from any cause beyond our reasonable control, including, without limitation, mechanical, electronic or communications failure or degradation, acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation facilities, fuel, energy, labor or materials.</li>
              <li><strong>Headings:</strong> The section headings in these Terms are for convenience only and have no legal or contractual effect.</li>
            </ul>

            <h2>18. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p>
              <strong>Engagee Digital</strong><br />
              <strong>Email:</strong> <a href="mailto:engagee.business@gmail.com">engagee.business@gmail.com</a><br />
              <strong>Phone:</strong> +91-9273634782
            </p>
            <p>
              For formal legal notices, please direct communications to the email address above. A physical address for service of formal legal process will be provided upon specific written request, if legally required.
            </p>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
