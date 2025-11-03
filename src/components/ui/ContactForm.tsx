import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDetailedContactForm, DetailedContactFormData } from "../../hooks/useContactForm";

const contactSchema = z.object({
  message: z.string().optional(),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  product: z.string().min(1, "Please select a product"),
  quantity: z.string().min(1, "Please enter quantity").refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Quantity must be a positive number"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  newsletter: z.boolean().optional(),
});

type FormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const { submitForm, isSubmitting, submitStatus, clearStatus } = useDetailedContactForm();

  const onSubmit = async (data: FormData) => {
    // Transform the form data to match DetailedContactFormData interface
    const contactData: DetailedContactFormData = {
      fullName: data.fullName || '',
      email: data.email || '',
      phone: data.phone || '',
      serviceInterest: data.product || '', // Map product to serviceInterest for backend compatibility
      address: data.address || '',
      companyName: data.quantity || '', // Map quantity to companyName for backend compatibility
      message: data.message,
      newsletter: data.newsletter,
    };

    const success = await submitForm(contactData);
    if (success) {
      reset();
      // Clear status after 5 seconds
      setTimeout(() => {
        clearStatus();
      }, 5000);
    }
  };

  const inputBaseClass =
    "w-full px-4 py-2.5 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-500";

  return (
    <div className="w-full">
      {/* Status Message */}
      {submitStatus.type && (
        <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success'
            ? 'bg-green-100 border border-green-400 text-green-700'
            : 'bg-red-100 border border-red-400 text-red-700'
          }`}>
          {submitStatus.message}
        </div>
      )}

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
              {...register("product")}
              className={`${inputBaseClass} appearance-none w-full pr-8 cursor-pointer`}
              defaultValue=""
            >
              {/* Placeholder */}
              <option value="" disabled hidden>
                Product
              </option>

              {/* Actual options */}
              <option value="CobalFine 6G">GarciBIO</option>
              <option value="GarciBIO">CobalFine 6G</option>
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

            {errors.product && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.product.message}
              </span>
            )}
          </div>

          <div>
            <input
              {...register("quantity")}
              type="number"
              min="1"
              step="1"
              placeholder="Quantity"
              className={inputBaseClass}
            />
            {errors.quantity && (
              <span className="text-red-500 text-xs mt-1">
                {errors.quantity.message}
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
        </div>

        {/* Newsletter and Submit */}
        <div className="flex flex-col items-center gap-4">
          {/* <label className="flex items-center gap-2 text-gray-700">
          <input
            {...register("newsletter")}
            type="checkbox"
            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <span> Signup</span>
        </label> */}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 sm:px-8 py-2 sm:py-2.5 font-medium rounded-lg transition-colors border ${isSubmitting
                ? 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed'
                : 'bg-white text-[#0D4A8D] border-[#0D4A8D] hover:bg-gray-50'
              }`}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
