"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MouseMoveEffect from "@/components/mouse-move-effect"

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">Last Updated: June 1, 2025</p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none animate-in fade-in slide-in-from-bottom duration-700 delay-100">

            <p>
              <strong>Company Name:</strong> Engagee Digital (hereinafter referred to as “Engagee Digital”, “we”, “us”, or “our”)<br />
              <strong>Contact Email:</strong> engagee.business@gmail.com<br />
              <strong>Contact Phone:</strong> +91-9273634782
            </p>

            <p>
              Engagee Digital respects your privacy and is steadfastly committed to protecting the Personal Data you entrust to us. This Privacy Policy outlines our practices concerning the collection, use, processing, disclosure, and safeguarding of your information when you visit our website (the "Site"), engage with our digital marketing services (the "Services"), or otherwise interact with us. We are committed to processing your data in accordance with applicable data protection laws, including the Digital Personal Data Protection Act, 2023 of India.
            </p>
            <p>
              Please read this Privacy Policy carefully. By using our Site or Services, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not access or use our Site or Services.
            </p>

            <h2>1. Definitions</h2>
            <p>For the purposes of this Privacy Policy:</p>
            <ul>
              <li><strong>Personal Data:</strong> Means any data about an individual who is identifiable by or in relation to such data. This includes, but is not limited to, information that can identify you directly or indirectly.</li>
              <li><strong>Data Principal:</strong> An individual to whom the Personal Data relates (equivalent to "You/User/Customer" in this policy).</li>
              <li><strong>Data Fiduciary:</strong> Engagee Digital, as we alone or in conjunction with others determine the purposes and means of the Processing of Personal Data.</li>
              <li><strong>Data Processor:</strong> Any person who processes Personal Data on behalf of the Data Fiduciary. These are typically third-party service providers.</li>
              <li><strong>Processing:</strong> In relation to Personal Data, means an operation or set of operations performed on Personal Data, and may include collection, recording, organisation, structuring, storage, adaptation, alteration, retrieval, use, alignment or combination, indexing, sharing, disclosure by transmission, dissemination or otherwise making available, restriction, erasure or destruction.</li>
              <li><strong>Consent:</strong> Any freely given, specific, informed, and unambiguous indication of the Data Principal’s wishes by which they, by a clear affirmative action, signify agreement to the Processing of their Personal Data for a specified purpose.</li>
              <li><strong>Data Breach:</strong> Any unauthorized Processing of Personal Data or accidental disclosure, acquisition, sharing, use, alteration, destruction of or loss of access to Personal Data, that compromises the confidentiality, integrity or availability of Personal Data.</li>
              <li><strong>Child:</strong> An individual who has not completed eighteen years of age.</li>
              <li><strong>DPDPA:</strong> The Digital Personal Data Protection Act, 2023 of India.</li>
              <li><strong>Supervisory Authority / Data Protection Board of India (DPBI):</strong> The regulatory body established under the DPDPA or other relevant data protection laws.</li>
              <li><strong>GDPR:</strong> The General Data Protection Regulation (EU) 2016/679.</li>
              <li><strong>EEA:</strong> European Economic Area.</li>
            </ul>

            <h2>2. Information We Collect</h2>
            <p>We collect Personal Data from you in a variety of ways, based on your interaction with our Site and Services. We are committed to data minimisation and collect only the Personal Data that is necessary for the specified purposes.</p>

            <h3>2.1 Personal Data You Provide to Us</h3>
            <p>We collect Personal Data that you voluntarily provide to us when you:</p>
            <ul>
              <li><strong>Register for an account or use our Services:</strong> Name, email address, phone number, postal address, organization name, job title. This information is used to create and manage your account, provide our Services, and communicate with you.</li>
              <li><strong>Make a payment:</strong> Payment details are collected by our third-party payment processors (e.g., Razorpay). We do not store your full credit card numbers or sensitive payment information on our servers. We receive transaction confirmations and related details necessary for order fulfillment and record-keeping.</li>
              <li><strong>Subscribe to our newsletters or marketing communications:</strong> Email address, name, and marketing preferences. This is used to send you information about our services, offers, and industry insights, based on your explicit consent.</li>
              <li><strong>Contact us for support or inquiries:</strong> Name, email address, phone number, and the content of your communication. This is used to address your queries and provide support.</li>
              <li><strong>Participate in surveys, contests, or promotional offers:</strong> Information as requested by the specific activity, which will be used for the purpose stated at the time of collection, with your consent.</li>
            </ul>

            <h3>2.2 Information We Collect Automatically</h3>
            <p>When you visit our Site or use our Services, we may automatically collect certain information primarily to ensure the security and operation of our Site and for internal analytics and reporting purposes:</p>
            <ul>
              <li><strong>Device and Connection Information:</strong> IP address, browser type and version, operating system, device identifiers (like MAC address), language preferences, referring URLs, and information about the timing, frequency, and pattern of your service use.</li>
              <li><strong>Usage Data:</strong> Information about how you use our Site and Services, such as pages viewed, links clicked, features used, time spent on pages, and other actions taken.</li>
              <li><strong>Log Data:</strong> Our servers automatically collect information when you access or use our Site and Services and record it in log files. This log data may include IP address, browser type, operating system, date/time stamps, and error data.</li>
            </ul>

            <h3>2.3 Cookies and Similar Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies (like web beacons and pixels) to collect and use Personal Data about you, including to understand and save your preferences for future visits and to compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We also use these technologies for interest-based advertising.
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Necessary for the Site to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</li>
              <li><strong>Performance and Analytics Cookies:</strong> Allow us to count visits and traffic sources so we can measure and improve the performance of our Site (e.g., Google Analytics, Hotjar). They help us to know which pages are the most and least popular and see how visitors move around the site.</li>
              <li><strong>Functional Cookies:</strong> Enable the Site to provide enhanced functionality and personalization (e.g., remembering your language or region).</li>
              <li><strong>Advertising/Targeting Cookies:</strong> May be set through our site by our advertising partners (e.g., Google Ads, Facebook Pixel). They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</li>
            </ul>
            <p><strong>Your Choices Regarding Cookies:</strong> You have the right to decide whether to accept or reject cookies (except essential cookies). You can exercise your cookie preferences by using our cookie consent banner/tool when you first visit our Site. You can also manage your cookie preferences by:
            </p>
            <ul>
              <li>Modifying your browser settings to refuse cookies or to alert you when cookies are being sent. Please refer to your browser's help section for instructions.</li>
              <li>Opting out of personalized advertising from third-party vendors by visiting their respective opt-out pages:
                <ul>
                  <li>Google: <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Ads Settings</a></li>
                  <li>Facebook: <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer">Ad Preferences</a></li>
                  <li>Network Advertising Initiative: <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">NAI Opt-Out Page</a></li>
                  <li>Digital Advertising Alliance: <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">DAA Opt-Out Page</a></li>
                </ul>
              </li>
            </ul>
            <p>If you choose to disable cookies, some features of our Site or Services may not operate as intended.</p>

            <h3>2.4 Information from Third-Party Sources</h3>
            <p>We may obtain information about you from other sources, such as public databases, joint marketing partners, social media platforms (e.g., LinkedIn, if you interact with our profiles), and other third parties. Examples include:</p>
            <ul>
              <li>Publicly available business information for lead generation and service personalization, provided we have a lawful basis.</li>
              <li>Information from marketing partners with whom we have verified consent-sharing agreements, in compliance with applicable laws.</li>
              <li>Government identification documents (e.g., PAN, GSTIN for businesses) only when strictly required by law for identity verification or Know Your Customer (KYC) purposes related to our services.</li>
            </ul>
            <p>We will ensure that any third-party data is obtained lawfully and, where required, with your consent.</p>

            <h2>3. How and Why We Use Your Information (Purposes of Processing)</h2>
            <p>We use your Personal Data for the following specified purposes, ensuring that each use is based on a valid legal ground:</p>
            <ul>
              <li><strong>To Provide and Manage Our Services:</strong>
                <ul>
                  <li>To create and manage your account, process transactions, and fulfill our contractual obligations to you.</li>
                  <li>To deliver, operate, and maintain our digital marketing campaigns and other services.</li>
                  <li>To analyze the performance of our services and provide you with reports and insights.</li>
                </ul>
              </li>
              <li><strong>To Communicate With You:</strong>
                <ul>
                  <li>To send administrative information, such as updates to our terms, conditions, and policies, and service-related announcements (e.g., order confirmations, service interruptions).</li>
                  <li>To respond to your inquiries, provide customer support, and resolve issues.</li>
                </ul>
              </li>
              <li><strong>For Marketing and Personalization (with your consent):</strong>
                <ul>
                  <li>To send you newsletters, promotional materials, and other information about our services, special offers, and events that may be of interest to you, where you have explicitly opted-in.</li>
                  <li>To tailor content, advertisements, and offers based on your preferences and interactions with our Services.</li>
                </ul>
              </li>
              <li><strong>For Business Operations and Improvement:</strong>
                <ul>
                  <li>To conduct data analysis, research, and audits to improve our Site, Services, marketing, and customer relationships.</li>
                  <li>To monitor and analyze trends, usage, and activities in connection with our Services to enhance user experience and service offerings.</li>
                </ul>
              </li>
              <li><strong>For Security and Fraud Prevention:</strong>
                <ul>
                  <li>To detect, prevent, and respond to fraud, abuse, security risks, and technical issues.</li>
                  <li>To protect the rights, property, or safety of Engagee Digital, our users, or the public as required or permitted by law.</li>
                  <li>To ensure the integrity and security of our IT systems and data.</li>
                </ul>
              </li>
              <li><strong>For Legal Compliance and Enforcement:</strong>
                <ul>
                  <li>To comply with applicable laws, regulations, legal processes (e.g., court orders, subpoenas), or governmental requests.</li>
                  <li>To enforce our terms and conditions, and to establish, exercise, or defend legal claims.</li>
                  <li>For tax, accounting, and other regulatory record-keeping purposes.</li>
                </ul>
              </li>
            </ul>
            <p>We will not use your Personal Data for any purpose incompatible with the purposes for which it was originally collected, unless we have obtained your prior consent or there is another lawful basis for such new processing.</p>

            <h2>4. Legal Bases for Processing Your Personal Data</h2>
            <p>Our legal basis for collecting and using the Personal Data described above will depend on the Personal Data concerned and the specific context in which we collect it.</p>
            <h3>4.1 Under the DPDPA (India):</h3>
            <ul>
              <li><strong>Consent:</strong> Primarily, we process your Personal Data based on your explicit consent, obtained for specified purposes before or at the time of collection. You have the right to withdraw this consent at any time.</li>
              <li><strong>Certain Legitimate Uses (Deemed Consent):</strong> In limited circumstances, we may process Personal Data where you voluntarily provide your data and it is reasonably expected you would provide it for that purpose, or for compliance with any law, judgment or order, for medical emergencies, or for employment purposes, as permitted under the DPDPA.</li>
            </ul>
            <h3>4.2 If you are in the EEA/UK (under GDPR):</h3>
            <p>If we process Personal Data of individuals in the EEA/UK, our legal bases include:</p>
            <ul>
              <li><strong>Contractual Necessity:</strong> Processing necessary to perform a contract with you or to take steps at your request before entering into a contract.</li>
              <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate interests (e.g., to provide and improve our Services, for fraud prevention, network security, direct marketing subject to opt-out), provided these interests are not overridden by your data protection rights and interests.</li>
              <li><strong>Consent:</strong> Where you have given us explicit consent to process your Personal Data for one or more specific purposes (e.g., marketing emails).</li>
              <li><strong>Legal Obligation:</strong> Processing necessary for compliance with a legal obligation to which we are subject (e.g., tax, accounting, data retention).</li>
            </ul>

            <h2>5. Consent and Your Right to Withdraw Consent</h2>
            <p>Where our processing of your Personal Data is based on your consent, we will ensure this consent is:</p>
            <ul>
              <li><strong>Freely Given:</strong> Your consent will not be bundled with other terms and conditions where inappropriate.</li>
              <li><strong>Specific:</strong> Consent will be sought for distinct processing purposes.</li>
              <li><strong>Informed:</strong> You will be provided with clear information about the processing activity for which consent is sought.</li>
              <li><strong>Unambiguous and Clear:</strong> Consent will be obtained through a clear affirmative act (e.g., ticking a non-pre-ticked box, clicking an "accept" button). We will not rely on silence or inactivity as consent.</li>
            </ul>
            <p><strong>Withdrawal of Consent:</strong> You have the right to withdraw your consent at any time for any processing of Personal Data that is based on your consent. Withdrawing your consent will not affect the lawfulness of any processing we conducted prior to your withdrawal, nor will it affect processing of your Personal Data conducted in reliance on other lawful processing grounds.</p>
            <p>To withdraw your consent, you can:</p>
            <ul>
              <li>Click the "unsubscribe" link in any marketing email you receive from us.</li>
              <li>Adjust your preferences in your account settings (if applicable).</li>
              <li>Email us at <a href="mailto:engagee.business@gmail.com">engagee.business@gmail.com</a> with the subject "Withdrawal of Consent."</li>
              <li>Call us at +91-9273634782.</li>
            </ul>
            <p>Upon receiving a request to withdraw consent, we will process it within a reasonable timeframe. Please note that if you withdraw consent for processing essential to providing our Services, we may no longer be able to provide some or all of those Services to you.</p>
            <p>We will maintain records of consents obtained from Data Principals.</p>

            <h2>6. Sharing and Disclosure of Your Personal Data</h2>
            <p>We do not sell your Personal Data. We may share or disclose your Personal Data only in the following limited circumstances and with appropriate safeguards:</p>
            <ul>
              <li><strong>Service Providers (Data Processors):</strong> We share Personal Data with trusted third-party service providers who perform services on our behalf, such as payment processing (e.g., Razorpay), cloud hosting and infrastructure (e.g., AWS), data analytics (e.g., Google Analytics), email delivery, customer support tools, and marketing automation. These providers are contractually obligated to protect your data, use it only for the specific purposes for which we disclose it to them, and process it in accordance with our instructions and applicable data protection laws.</li>
              <li><strong>Affiliates and Subsidiaries:</strong> We may share Personal Data with our affiliates and subsidiaries for internal business operations, service improvements, and to provide integrated services, subject to the terms of this Privacy Policy.</li>
              <li><strong>Professional Advisers:</strong> We may disclose Personal Data to our professional advisers, such as lawyers, auditors, bankers, and insurers, where necessary in the course of the professional services that they render to us and subject to confidentiality obligations.</li>
              <li><strong>Legal Requirements and Law Enforcement:</strong> We may disclose your Personal Data if required to do so by law or in the good faith belief that such action is necessary to: (a) comply with a legal obligation, subpoena, court order, or other governmental request; (b) protect and defend our rights or property; (c) prevent or investigate possible wrongdoing in connection with the Services; (d) protect the personal safety of users of the Services or the public; or (e) protect against legal liability.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, financing, reorganization, bankruptcy, receivership, sale of company assets, or transition of service to another provider, your Personal Data may be transferred as part of such a transaction, as permitted by law and/or contract. We will notify you of any such deal and outline your choices in that event.</li>
              <li><strong>With Your Consent:</strong> We may share your Personal Data with other third parties when we have your explicit consent to do so for a specified purpose.</li>
            </ul>
            <p>We will take all reasonable steps to ensure that any third party with whom we share your Personal Data is bound by contractual obligations to protect your data and use it only for the purposes for which it was disclosed.</p>

            <h2>7. International Data Transfers</h2>
            <p>
              Your Personal Data may be transferred to, stored, and processed in countries other than India, including the United States and other locations where our service providers or we maintain operations. These countries may have data protection laws that are different from the laws of India.
            </p>
            <p>
              When we transfer your Personal Data outside of India, we will ensure that such transfers comply with the requirements of the DPDPA and other applicable laws. This may include transferring data to countries that the Indian Central Government has determined to provide an adequate level of data protection, or by implementing appropriate safeguards such as:
            </p>
            <ul>
              <li>Standard Contractual Clauses (SCCs) or similar contractual arrangements approved by relevant authorities, ensuring the recipient is bound to protect your Personal Data to a standard comparable to that provided under Indian law.</li>
              <li>Other legally recognized transfer mechanisms that provide an adequate level of protection for your Personal Data.</li>
            </ul>
            <p>If we transfer Personal Data subject to GDPR outside the EEA, UK, or Switzerland, we rely on adequacy decisions by the European Commission, SCCs, or other appropriate legal mechanisms.</p>
            <p>By using our Services, you consent to the transfer of your Personal Data to countries outside India, subject to the safeguards mentioned above.</p>

            <h2>8. Data Retention</h2>
            <p>
              We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law. The criteria used to determine our retention periods include:
            </p>
            <ul>
              <li>The length of time we have an ongoing relationship with you and provide Services to you (e.g., as long as you have an account with us or keep using our Services).</li>
              <li>Whether there is a legal, contractual, or similar obligation to retain your data (e.g., for tax, accounting, or regulatory reporting requirements, typically up to 7 years or as mandated).</li>
              <li>Whether retention is advisable in light of our legal position (such as in regard to applicable statutes of limitations, litigation or regulatory investigations).</li>
              <li>The purposes for which the data was collected and whether those purposes have been fulfilled.</li>
              <li>Upon the withdrawal of your consent, if consent was the sole legal basis for processing, and there is no other legal ground for retention.</li>
            </ul>
            <p>
              When your Personal Data is no longer required for these purposes, we will securely delete or anonymize it. If deletion is not immediately possible (for example, because your Personal Data has been stored in backup archives), then we will securely store your Personal Data and isolate it from any further processing until deletion is possible.
            </p>

            <h2>9. Security Measures</h2>
            <p>
              We are committed to protecting the security of your Personal Data. We implement appropriate technical and organizational measures (TOMs) designed to protect your Personal Data from unauthorized access, use, alteration, disclosure, or destruction. These measures include, but are not limited to:
            </p>
            <ul>
              <li><strong>Encryption:</strong> Use of Transport Layer Security (TLS)/Secure Sockets Layer (SSL) encryption for data in transit. Encryption of sensitive data at rest where appropriate.</li>
              <li><strong>Access Controls:</strong> Implementation of role-based access controls (RBAC), strong password policies, and multi-factor authentication (MFA) for internal systems and access to Personal Data.</li>
              <li><strong>Network Security:</strong> Use of firewalls, intrusion detection and prevention systems (IDPS), and regular network vulnerability scanning.</li>
              <li><strong>Physical Security:</strong> Secure data centers with restricted access for our hosting providers. Secure office premises.</li>
              <li><strong>Data Minimization:</strong> Collecting only the Personal Data necessary for the specified purpose.</li>
              <li><strong>Regular Assessments:</strong> Conducting regular security assessments, penetration testing (where appropriate), and reviews of our information security policies and practices.</li>
              <li><strong>Employee Training:</strong> Providing data privacy and security training to our employees.</li>
              <li><strong>Incident Response Plan:</strong> Maintaining a data breach response plan to promptly address any security incidents.</li>
            </ul>
            <p>
              While we strive to use commercially acceptable means to protect your Personal Data, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security. We encourage you to take steps to protect yourself as well, such as choosing a strong password and keeping it confidential, and logging out of your account after use.
            </p>

            <h2>10. Your Rights as a Data Principal</h2>
            <p>Under the DPDPA and, if applicable, other data protection laws like GDPR, you have certain rights regarding your Personal Data. Subject to legal limitations and conditions, these rights may include:</p>
            <ul>
              <li><strong>Right to Access Information:</strong> You have the right to obtain confirmation as to whether or not your Personal Data is being processed, and, where that is the case, access to the Personal Data, a summary of the Personal Data being processed, the processing activities undertaken, and the identities of all Data Fiduciaries and Data Processors with whom your data has been shared, along with the categories of data shared.</li>
              <li><strong>Right to Correction and Erasure:</strong>
                <ul>
                  <li><strong>Correction:</strong> You have the right to request the correction of inaccurate or incomplete Personal Data.</li>
                  <li><strong>Erasure ("Right to be Forgotten"):</strong> You have the right to request the erasure of your Personal Data when it is no longer necessary for the purpose for which it was collected, you withdraw consent (and there's no other legal ground), the data has been unlawfully processed, or to comply with a legal obligation.</li>
                </ul>
              </li>
              <li><strong>Right to Restrict Processing (if applicable, e.g., under GDPR):</strong> You may have the right to request the restriction of processing of your Personal Data under certain circumstances (e.g., if you contest the accuracy of the data).</li>
              <li><strong>Right to Data Portability (if applicable, e.g., under GDPR):</strong> You may have the right to receive your Personal Data in a structured, commonly used, and machine-readable format and have the right to transmit that data to another controller, where processing is based on consent or contract and carried out by automated means.</li>
              <li><strong>Right to Object to Processing (if applicable, e.g., under GDPR):</strong> You may have the right to object to the processing of your Personal Data based on legitimate interests or for direct marketing purposes.</li>
              <li><strong>Right to Withdraw Consent:</strong> As detailed in Section 5, you can withdraw your consent at any time where processing is based on consent.</li>
              <li><strong>Right of Grievance Redressal:</strong> You have the right to lodge a complaint with our Grievance Officer (details in Section 16) if you are dissatisfied with our handling of your Personal Data. You also have the right to escalate your complaint to the Data Protection Board of India or other relevant Supervisory Authority.</li>
              <li><strong>Right to Nominate:</strong> You have the right to nominate any other individual who shall, in the event of your death or incapacity, exercise your rights under the DPDPA.</li>
            </ul>
            <p><strong>Exercising Your Rights:</strong> To exercise any of these rights, please contact our Grievance Officer using the contact details provided in Section 16. We will respond to your request in accordance with applicable law, typically within 30 days or as otherwise prescribed. We may need to verify your identity before processing your request, which may involve asking you to provide specific information.</p>
            <p><strong>Duties of Data Principals:</strong> Under the DPDPA, you have a duty not to impersonate another person while providing Personal Data, not to suppress any material information, and not to furnish any false particulars or make false claims. Compliance with these duties is essential for the effective exercise of your rights.</p>

            <h2>11. Cookies Policy Summary</h2>
            <p>
              This section provides a summary. For more detailed information on the cookies we use, their purposes, and how you can manage them, please refer to our separate <a href="/cookies-policy">Cookie Policy</a> page. In summary, we use:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Strictly necessary for the basic functionality of our Site (e.g., session management, security). These cannot be disabled.</li>
              <li><strong>Performance/Analytics Cookies:</strong> Help us understand how visitors interact with our Site by collecting and reporting information anonymously (e.g., Google Analytics).</li>
              <li><strong>Functional Cookies:</strong> Allow our Site to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features.</li>
              <li><strong>Targeting/Advertising Cookies:</strong> Used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. These can be managed via our cookie consent tool and third-party opt-out links.</li>
            </ul>
            <p>Your consent will be sought for the use of non-essential cookies through a clear and accessible cookie banner or management tool upon your first visit to our Site.</p>

            <h2>12. Children’s Privacy</h2>
            <p>
              Our Site and Services are not directed to, nor do we knowingly collect Personal Data from, children (individuals under the age of 18 years in India). If you are a parent or guardian and you are aware that your child has provided us with Personal Data without your verifiable consent, please contact us immediately.
            </p>
            <p>
              In compliance with the DPDPA, we will only process the Personal Data of a Child with verifiable consent from their parent or lawful guardian. We will not undertake processing of Personal Data that is likely to cause any detrimental effect on the well-being of a Child, nor will we undertake tracking or behavioral monitoring of children or targeted advertising directed at children.
            </p>
            <p>
              If we become aware that we have collected Personal Data from a Child without verifiable parental consent, we will take steps to delete that information from our servers as quickly as possible.
            </p>

            <h2>13. Data Breach Notification</h2>
            <p>
              In the event of a Personal Data Breach, Engagee Digital is committed to complying with all applicable laws regarding breach notification.
            </p>
            <p>
              Should a Personal Data Breach occur that is likely to result in harm to Data Principals, or as otherwise required by law, we will:
            </p>
            <ul>
              <li>Notify the Data Protection Board of India (DPBI) and any other relevant regulatory authorities in the form and manner prescribed under the DPDPA or other applicable laws.</li>
              <li>Notify the affected Data Principals about the breach in a timely and appropriate manner, providing information about the nature of the breach, the types of Personal Data involved, the potential consequences, the measures taken or proposed to be taken by us to address the breach, and recommendations for steps Data Principals can take to protect themselves.</li>
            </ul>
            <p>
              We maintain a Data Breach Response Plan to manage such incidents effectively and mitigate potential harm.
            </p>

            <h2>14. Third-Party Links and Embedded Content</h2>
            <p>
              Our Site and Services may contain links to other websites or services that are not operated by us (e.g., social media buttons, external articles). If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
            <p>
              Similarly, our Site may include embedded content (e.g., videos, images, articles) from other websites. Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content.
            </p>
            <p>
              We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. This Privacy Policy applies only to our Site and Services.
            </p>

            <h2>15. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or service offerings. When we make changes, we will revise the "Last Updated" date at the top of this Privacy Policy.
            </p>
            <p>
              If we make material changes to this Privacy Policy (such as changes that affect your rights or the way we process your Personal Data), we will provide you with prominent notice prior to the change becoming effective. This may include notification via email to your registered email address, a notice on our Site, or as otherwise required by applicable law.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our Site or Services after any changes or revisions to this Privacy Policy shall indicate your agreement with the terms of such revised Privacy Policy.
            </p>

            <h2>16. Grievance Redressal and Data Protection Officer</h2>
            <p>
              In accordance with the DPDPA and other applicable laws, we have appointed a Grievance Officer to address any concerns or grievances you may have regarding your Personal Data and our privacy practices.
            </p>
            <p>
              If you have any questions, comments, concerns about this Privacy Policy, or wish to exercise your rights, please contact our Grievance Officer:
            </p>
            <p>
              <strong>Name of Grievance Officer:</strong> [Insert Name of Grievance Officer Here] <br />
              <strong>Email:</strong> [Insert Grievance Officer's Email, e.g., privacy@engageedigital.com or use engagee.business@gmail.com if it's the same] <br />
              <strong>Phone:</strong> +91-9273634782 <br/>
              <strong>Address:</strong> [Insert Your Business Address for Correspondence]
            </p>
            <p>
              We will endeavor to resolve your grievances in a timely and effective manner, typically within 30 days of receipt, or as otherwise required by law.
            </p>
            <p>
              If you are not satisfied with the resolution provided by our Grievance Officer, you have the right to lodge a complaint with the Data Protection Board of India (once fully established and operational) or other competent supervisory authority in your jurisdiction.
            </p>

            <h2>17. Governing Law and Jurisdiction</h2>
            <p>
              This Privacy Policy and any disputes arising out of or in connection with it shall be governed by and construed in accordance with the laws of India.
            </p>
            <p>
              You agree that any legal action or proceeding arising out of or relating to this Privacy Policy shall be brought exclusively in the competent courts located in [Specify City, e.g., New Delhi, or the city of your primary business registration], India.
            </p>

            <h2>18. Contact Information</h2>
            <p>
              For general inquiries or if you have any questions or suggestions about our Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Engagee Digital</strong><br />
              <strong>Email:</strong> <a href="mailto:engagee.business@gmail.com">engagee.business@gmail.com</a><br />
              <strong>Phone:</strong> +91-9273634782<br />
            </p>

            <p>
              Thank you for trusting Engagee Digital. We are committed to protecting your privacy and using your data responsibly and transparently.
            </p>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
