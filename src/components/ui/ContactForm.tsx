import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDetailedContactForm, DetailedContactFormData } from "../../hooks/useContactForm";

const contactSchema = z.object({
  message: z.string().optional(),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .length(10, "Phone number must be exactly 10 digits"),
  product: z.string().min(1, "Please select a product"),
  quantity: z.string().min(1, "Please enter quantity").refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Quantity must be a positive number"),
  address: z.string().min(5, "Address must be at least 5 characters"),
});

type FormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  useBmiTemplate?: boolean;
}

const ContactForm = ({ useBmiTemplate = false }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const [productOpen, setProductOpen] = useState(false);
  const productRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (event: MouseEvent) => {
      if (productRef.current && !productRef.current.contains(event.target as Node)) {
        setProductOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const selectedProduct = watch("product");

  const { submitForm, isSubmitting, submitStatus, clearStatus } = useDetailedContactForm(useBmiTemplate);

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
    "w-full px-4 py-3.5 bg-white border border-[#CBD5E1] rounded-xl text-[#0D4A8D] placeholder-[#7A8798] shadow-sm focus:border-[#0D4A8D] focus:ring-4 focus:ring-[#0D4A8D]/10 focus:outline-none transition-all duration-300";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8">
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
              placeholder="Phone Number"
              maxLength={10}
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                target.value = target.value.replace(/[^0-9]/g, '');
              }}
              className={inputBaseClass}
            />
            {errors.phone && (
              <span className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className={`relative w-full ${productOpen ? 'z-[80]' : 'z-10'}`} ref={productRef}>
            <input type="hidden" {...register("product")} />

            <button
              type="button"
              className={`${inputBaseClass} text-left flex items-center justify-between ${productOpen ? 'border-[#0D4A8D] ring-4 ring-[#0D4A8D]/10' : ''}`}
              onClick={() => setProductOpen((prev) => !prev)}
            >
              <span className={selectedProduct ? 'text-[#0D4A8D]' : 'text-[#7A8798]'}>
                {selectedProduct || 'Product'}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform duration-200 ${productOpen ? 'rotate-180' : ''}`}
              >
                <path d="M7 10l5 5 5-5" stroke="#5C6F8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {productOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-[90] rounded-xl border border-[#CBD5E1] bg-white shadow-xl overflow-hidden max-h-56 overflow-y-auto">
                {["GarciBIO", "CobalFine 6G"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="w-full px-4 py-3 text-left text-[#0D4A8D] hover:bg-[#EAF2FF] transition-colors"
                    onClick={() => {
                      setValue("product", option, { shouldValidate: true, shouldDirty: true });
                      setProductOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

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


          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-7 sm:px-9 py-3 font-semibold rounded-xl transition-all duration-300 border shadow-sm ${isSubmitting
              ? 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed'
              : 'bg-[#0D4A8D] text-white border-[#0D4A8D] hover:bg-[#0a3d73] hover:shadow-md hover:-translate-y-0.5'
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
