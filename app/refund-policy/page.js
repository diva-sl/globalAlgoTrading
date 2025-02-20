
"use client"
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import React from 'react'

function page() {
  return (
    <Layout>
    <div className="nk-app-root has-mask">
        <div className="nk-mask bg-pattern-dot-white-sm" />
        <header className="nk-header has-shape">
          <div className="nk-shape bg-shape-blur-q mt-n20p ms-10p start-50 translate-middle-x" />
          <div className="nk-shape bg-shape-blur-r mt-n10p ms-n10p start-50 translate-middle-x" />
          <div className="nk-shape bg-shape-border-c mt-12 ms-n40p start-50 translate-middle-x" />
          <Header></Header>
        </header>
        <main className="nk-pages">
        <section className="section section-bottom-0 has-mask">
      <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
      <div className="container">
        <div className="section-content">
          <div className="row g-gs justify-content-center">
          <div className="elementor-widget-container">
  <div
    className="elementor-element elementor-element-748b9d0 elementor-widget elementor-widget-heading"
    data-id="748b9d0"
    data-element_type="widget"
    data-widget_type="heading.default"
  >
    <div className="elementor-widget-container">
      <h1 className="elementor-heading-title elementor-size-default">
        REFUND POLICY
      </h1>
    </div>
  </div>
  <div
    className="elementor-element elementor-element-f9ccd21 elementor-widget elementor-widget-text-editor"
    data-id="f9ccd21"
    data-element_type="widget"
    data-widget_type="text-editor.default"
  >
    <div className="elementor-widget-container">
      Refund is applicable only when the product is defective.
    </div>
  </div>
  <div
    className="elementor-element elementor-element-6fe2f5c elementor-widget elementor-widget-heading"
    data-id="6fe2f5c"
    data-element_type="widget"
    data-widget_type="heading.default"
  >
    <div className="elementor-widget-container">
      <h5 className="mt-4 elementor-heading-title elementor-size-default">
        Time Period
      </h5>
    </div>
  </div>
  <div
    className="elementor-element elementor-element-1276330 elementor-widget elementor-widget-text-editor"
    data-id={1276330}
    data-element_type="widget"
    data-widget_type="text-editor.default"
  >
    <div className="elementor-widget-container">
      From the time of signing up (after submitting the agreement), a maximum of
      48 to 72 working hours is allowed. If the service is not delivered for
      configuring your bot, you can request a refund. Refund is not applicable
      for losses, but compensation or required action will be taken to recover
      your loss. By becoming our client and accepting the terms and conditions,
      you certify that you are well aware and cease to file for a refund after
      purchase. If the product is defective and not functioning, a refund is
      applicable within a maximum of 15 days. Otherwise, no refund will be
      issued.
    </div>
  </div>
  <div
    className="elementor-element elementor-element-c5f7e2a elementor-widget elementor-widget-heading"
    data-id="c5f7e2a"
    data-element_type="widget"
    data-widget_type="heading.default"
  >
    <div className="elementor-widget-container">
      <h5 className="mt-4 elementor-heading-title elementor-size-default">
        Comprehensive Account History
      </h5>
    </div>
  </div>
  <div
    className="elementor-element elementor-element-6921a9d elementor-widget elementor-widget-text-editor"
    data-id="6921a9d"
    data-element_type="widget"
    data-widget_type="text-editor.default"
  >
    <div className="elementor-widget-container">
      If you would like to transfer your purchase or submit a refund request,
      please provide us with the client ID number, authorized user name, date of
      purchase, a complete account trading history, journal, and expert history
      exported from your MT4 platform in PDF or HTML extension for the
      particular account. Send the email to&nbsp;
      <a href="mailto:support@Elite Algo Trading.com.co">support@Elite Algo Trading.com.co</a>
      &nbsp;from the same email address provided in the expert coding form.
      Please allow up to 72 hours for our team to review your details and
      process your refund or transfer of license request, depending on the
      nature of the inquiry. Our support team will contact you to confirm that
      your refund/transfer has been processed or to ask for any additional
      information if needed. All refunds will be issued through the same mode of
      payment used at the time of purchase. Please allow 7-14 working days for
      processing your request and for the refund to be credited to your account.
      If you have any further questions or concerns, we are happy to assist you
      through our support desk.
    </div>
  </div>
  <div
    className="elementor-element elementor-element-95c1fc6 elementor-widget elementor-widget-heading"
    data-id="95c1fc6"
    data-element_type="widget"
    data-widget_type="heading.default"
  >
    <div className="elementor-widget-container">
      <h5 className="mt-4 elementor-heading-title elementor-size-default">
        Contact Information
      </h5>
    </div>
  </div>
  <div
    className="elementor-element elementor-element-51ee16f elementor-widget elementor-widget-text-editor"
    data-id="51ee16f"
    data-element_type="widget"
    data-widget_type="text-editor.default"
  >
    <div className="elementor-widget-container">
      Questions about the refund policy should be sent to us at&nbsp;
      <a href="mailto:support@Elite Algo Trading.com.co">support@Elite Algo Trading.com.co</a>.
    </div>
  </div>{" "}
</div>

    
          </div>
        </div>
      </div>
    </section>
    
        </main>
        {/*?php include 'footer'; ?*/}
      </div>
        </Layout>
  )
}

export default page