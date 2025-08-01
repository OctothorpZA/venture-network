import React from 'react';

/**
 * Renders the Contact Us page with a form and direct contact information.
 * Note: The form is for visual purposes only in this sprint.
 */
export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[--color-oxford-blue] text-[--color-brand-platinum] py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-[--color-brand-platinum]/80 max-w-3xl mx-auto">
            We&apos;re here to answer your questions and discuss how we can help you achieve your goals. Reach out to us directly or use the form below.
          </p>
        </div>
      </section>

      {/* Main Content: Form and Info */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[--color-oxford-blue] font-bold mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-brand-tangerine]"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[--color-oxford-blue] font-bold mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-brand-tangerine]"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[--color-oxford-blue] font-bold mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-brand-tangerine]"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-[--color-brand-tangerine] text-[--color-oxford-blue] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors w-full"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Direct Contact Info */}
            <div className="md:pl-8">
              <h3 className="text-2xl font-bold text-[--color-oxford-blue] mb-4">Contact Information</h3>
              <p className="text-[--color-shadow-blue] mb-4">
                Prefer to reach out directly? We&apos;d love to hear from you.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[--color-oxford-blue]">Email</h4>
                  <a href="mailto:hello@venturenetwork.example" className="text-[--color-shadow-blue] hover:text-[--color-brand-tangerine] transition-colors">
                    hello@venturenetwork.example
                  </a>
                </div>
                <div>
                  <h4 className="font-bold text-[--color-oxford-blue]">Business Hours</h4>
                  <p className="text-[--color-shadow-blue]">Monday - Friday: 9am - 5pm</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
