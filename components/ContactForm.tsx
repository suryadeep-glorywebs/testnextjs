"use client";

import React, { useState } from 'react';
import { Send, CheckCircle, Calendar, Users, Camera, Mountain } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tourType: string;
  groupSize: string;
  preferredDate: string;
  message: string;
  budget: string;
  specialRequests: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tourType: '',
    groupSize: '',
    preferredDate: '',
    message: '',
    budget: '',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const tourTypes = [
    { value: 'monument-valley-tour', label: 'Monument Valley Tour', icon: Mountain },
    { value: 'hunts-mesa-tour', label: 'Hunts Mesa Tour', icon: Mountain },
    { value: 'photography-tour', label: 'Photography Tour', icon: Camera },
    { value: 'cultural-experience', label: 'Cultural Experience', icon: Users },
    { value: 'custom-tour', label: 'Custom Tour', icon: Calendar },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.tourType) {
      newErrors.tourType = 'Please select a tour type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
          <p className="text-gray-600 mb-6 text-lg">
            Your message has been sent successfully. We'll get back to you within 2 hours during business hours.
          </p>
          <div className="bg-[#fffaf3] p-4 rounded-lg mb-6">
            <p className="text-[#22577a] font-semibold">
              Need immediate assistance? Call us at (435) 220-5727
            </p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                tourType: '',
                groupSize: '',
                preferredDate: '',
                message: '',
                budget: '',
                specialRequests: ''
              });
            }}
            className="bg-[#fd0408] text-white px-8 py-3 rounded-lg hover:bg-[#e00306] transition-colors duration-200 font-medium"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Book Your Adventure</h2>
        <p className="text-gray-600">Fill out the form below and we'll help you plan the perfect Monument Valley experience.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#fd0408] focus:border-transparent transition-colors duration-200 ${
                errors.firstName ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#fd0408] focus:border-transparent transition-colors duration-200 ${
                errors.lastName ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#fd0408] focus:border-transparent transition-colors duration-200 ${
                errors.email ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#fd0408] focus:border-transparent transition-colors duration-200 ${
                errors.phone ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Tour Type Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Tour Type *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tourTypes.map((tour) => {
              const IconComponent = tour.icon;
              return (
                <label
                  key={tour.value}
                  className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-[#fd0408] ${
                    formData.tourType === tour.value
                      ? 'border-[#fd0408] bg-[#fffaf3]'
                      : 'border-gray-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="tourType"
                    value={tour.value}
                    checked={formData.tourType === tour.value}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <IconComponent className={`w-5 h-5 mr-3 ${
                    formData.tourType === tour.value ? 'text-[#fd0408]' : 'text-gray-400'
                  }`} />
                  <span className={`text-sm font-medium ${
                    formData.tourType === tour.value ? 'text-[#fd0408]' : 'text-gray-700'
                  }`}>
                    {tour.label}
                  </span>
                </label>
              );
            })}
          </div>
          {errors.tourType && (
            <p className="mt-1 text-sm text-red-600">{errors.tourType}</p>
          )}
        </div>

        {/* Tour Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="groupSize" className="block text-sm font-semibold text-gray-700 mb-2">
              Group Size
            </label>
            <select
              id="groupSize"
              name="groupSize"
              value={formData.groupSize}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#fd0408] focus:border-transparent transition-colors duration-200 hover:border-gray-300"
            >
              <option value="">Select group size</option>
              <option value="1">1 person</option>
              <option value="2">2 people</option>
              <option value="3-4">3-4 people</option>
              <option value="5-8">5-8 people</option>
              <option value="9-15">9-15 people</option>
              <option value="16+">16+ people</option>
            </select>
          </div>

          <div>
            <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#fd0408] focus:border-transparent transition-colors duration-200 hover:border-gray-300"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#fd0408] focus:border-transparent transition-colors duration-200 hover:border-gray-300"
            >
              <option value="">Select budget range</option>
              <option value="under-200">Under $200</option>
              <option value="200-500">$200 - $500</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="over-2000">Over $2,000</option>
            </select>
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Tell us about your ideal tour *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#fd0408] focus:border-transparent transition-colors duration-200 resize-vertical ${
              errors.message ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
            }`}
            placeholder="What are you most excited to see and experience in Monument Valley? Any special interests or requirements?"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            {formData.message.length}/500 characters
          </p>
        </div>

        {/* Special Requests */}
        <div>
          <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-700 mb-2">
            Special Requests or Accessibility Needs
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            rows={3}
            value={formData.specialRequests}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#fd0408] focus:border-transparent transition-colors duration-200 resize-vertical hover:border-gray-300"
            placeholder="Any dietary restrictions, mobility considerations, or special celebrations we should know about?"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#fd0408] text-white py-4 px-6 rounded-lg hover:bg-[#e00306] focus:ring-2 focus:ring-[#fd0408] focus:ring-offset-2 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                <span>Sending Your Request...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send My Tour Request</span>
              </>
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 p-4 bg-[#fffaf3] rounded-lg border border-[#fd0408]/20">
        <p className="text-sm text-gray-600 text-center">
          <strong>Need immediate assistance?</strong> Call us at{' '}
          <a href="tel:4352205727" className="text-[#fd0408] font-semibold hover:underline">
            (435) 220-5727
          </a>{' '}
          for instant booking and answers to your questions.
        </p>
      </div>
    </div>
  );
}