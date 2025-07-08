import HeaderContent from "@/components/HeaderContent";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <HeaderContent>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          className="relative pt-36 pb-16 md:pt-[220px] md:pb-[130px] w-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1600')` 
          }}
        >
          <div className="w-full max-w-[1238px] px-4 mx-auto relative flex flex-col justify-center">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full max-w-full px-4 text-center">
                <div className="mb-6 md:mb-8">
                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[60px] font-bold tracking-wide mb-4">
                    Contact Us
                  </h1>
                  <div className="max-w-3xl mx-auto">
                    <p className="text-white text-lg md:text-xl tracking-wide leading-6 md:leading-7 opacity-90">
                      Ready to explore Monument Valley? Get in touch with us to plan your unforgettable adventure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-[#fffaf3]">
          <div className="max-w-[1238px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Phone */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-[#fd0408] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-3">Ready to book? Call us now</p>
                <a href="tel:4352205727" className="text-[#fd0408] font-semibold hover:underline">
                  (435) 220-5727
                </a>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-[#22577a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm mb-3">Send us your questions</p>
                <a href="mailto:info@monumentvalleysafari.com" className="text-[#22577a] font-semibold hover:underline text-sm">
                  info@monumentvalleysafari.com
                </a>
              </div>

              {/* Location */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-[#7dd4ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#22577a]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm mb-3">Find us in Monument Valley</p>
                <p className="text-gray-700 font-medium text-sm">
                  Indian Route 42<br />
                  Monument Valley, AZ 84536
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-[#fd0408] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Open Hours</h3>
                <p className="text-gray-600 text-sm mb-3">We're here to help</p>
                <p className="text-gray-700 font-medium text-sm">
                  7:00 AM - 7:00 PM<br />
                  Daily
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1238px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Side - Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Let's Plan Your Adventure
                  </h2>
                  <div className="w-24 h-1 bg-[#fd0408] rounded-full mb-6"></div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Whether you're looking for a scenic tour, cultural experience, or photography adventure, 
                    we're here to help you create unforgettable memories in Monument Valley.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#fd0408] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Call for Immediate Booking</h3>
                      <p className="text-gray-600 mb-2">Speak directly with our tour specialists</p>
                      <a href="tel:4352205727" className="text-[#fd0408] font-semibold text-lg hover:underline">
                        (435) 220-5727
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#22577a] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email for Detailed Inquiries</h3>
                      <p className="text-gray-600 mb-2">Get comprehensive information about our tours</p>
                      <a href="mailto:info@monumentvalleysafari.com" className="text-[#22577a] font-semibold hover:underline">
                        info@monumentvalleysafari.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#7dd4ff] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-[#22577a]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Quick Response Guarantee</h3>
                      <p className="text-gray-600">We respond to all inquiries within 2 hours during business hours</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Monument Valley Safari?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#fd0408] rounded-full mr-3"></div>
                      <span className="text-gray-700">Navajo-owned and operated</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#fd0408] rounded-full mr-3"></div>
                      <span className="text-gray-700">15+ years of experience</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#fd0408] rounded-full mr-3"></div>
                      <span className="text-gray-700">TripAdvisor Top 5 Outdoor Activity</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#fd0408] rounded-full mr-3"></div>
                      <span className="text-gray-700">Custom tours available</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#fd0408] rounded-full mr-3"></div>
                      <span className="text-gray-700">Small group experiences</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1238px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Find Us in Monument Valley
              </h2>
              <div className="w-24 h-1 bg-[#fd0408] rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Monument Valley, we're perfectly positioned to show you the best of this iconic landscape.
              </p>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
                  <p className="text-gray-500 mb-4">Monument Valley, Arizona</p>
                  <a 
                    href="https://www.google.com/maps/place/Indian+Route+42,+Oljato-Monument+Valley,+AZ+84536"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#fd0408] text-white rounded-lg hover:bg-[#e00306] transition-colors duration-200"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-[#fd0408] rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Quick answers to help you plan your Monument Valley adventure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How do I book a tour?
                </h3>
                <p className="text-gray-600">
                  You can book by calling us at (435) 220-5727, filling out our contact form, or emailing us directly. We recommend booking in advance, especially during peak seasons.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What should I bring on a tour?
                </h3>
                <p className="text-gray-600">
                  Bring comfortable clothing, sun protection, water, and a camera. We provide specific packing lists based on your chosen tour when you book.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do you offer private tours?
                </h3>
                <p className="text-gray-600">
                  Yes! We specialize in private and custom tours tailored to your interests, whether it's photography, cultural experiences, or family adventures.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What's your cancellation policy?
                </h3>
                <p className="text-gray-600">
                  We offer flexible cancellation policies. Contact us for specific details about cancellations and rescheduling based on your tour type.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HeaderContent>
  );
}