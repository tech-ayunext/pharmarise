import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  message: z.string().optional(),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  serviceInterest: z.string().min(1, "Please select a service interest"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  newsletter: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    alert("Thank you for your message! We will get back to you soon.");
    reset();
  };

  const inputBaseClass =
    "w-full px-4 py-2.5 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-500";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {/* Form Fields Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div>
          <input
            {...register("fullName")}
            placeholder="Full Name"
            className={inputBaseClass}
          />
          {errors.fullName && (
            <span className="text-red-500 text-xs mt-1">
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
            className={inputBaseClass}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div>
          <input
            {...register("phone")}
            type="tel"
            placeholder="Phone No."
            className={inputBaseClass}
          />
          {errors.phone && (
            <span className="text-red-500 text-xs mt-1">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className="relative w-full">
          <select
            {...register("serviceInterest")}
            className={`${inputBaseClass} appearance-none w-full pr-8 cursor-pointer`}
            defaultValue=""
          >
            {/* Placeholder */}
            <option value="" disabled hidden>
              Service Interest
            </option>

            {/* Actual options */}
            <option value="product-development">Product Development</option>
            <option value="marketing">Marketing</option>
            <option value="consultation">Consultation</option>
            <option value="partnership">Partnership</option>
          </select>

          {/* SVG Arrow on the right */}
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
            >
              <path
                d="M4.35216 7.46338L8.45126 0.363532H0.25306L4.35216 7.46338Z"
                fill="#191A23"
              />
            </svg>
          </div>

          {errors.serviceInterest && (
            <span className="text-red-500 text-xs mt-1 block">
              {errors.serviceInterest.message}
            </span>
          )}
        </div>

        <div>
          <input
            {...register("address")}
            placeholder="Address"
            className={inputBaseClass}
          />
          {errors.address && (
            <span className="text-red-500 text-xs mt-1">
              {errors.address.message}
            </span>
          )}
        </div>

        <div>
          <input
            {...register("companyName")}
            placeholder="Company Name"
            className={inputBaseClass}
          />
          {errors.companyName && (
            <span className="text-red-500 text-xs mt-1">
              {errors.companyName.message}
            </span>
          )}
        </div>
      </div>

      {/* Newsletter and Submit */}
      <div className="flex flex-col items-center gap-4">
        <label className="flex items-center gap-2 text-gray-700">
          <input
            {...register("newsletter")}
            type="checkbox"
            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <span> Signup</span>
        </label>

        <button
          type="submit"
          className="px-6 sm:px-8 py-2 sm:py-2.5 bg-white text-[#0D4A8D] font-medium rounded-lg hover:bg-gray-50 transition-colors border border-[#0D4A8D]"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
