import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useContactForm, ContactFormData } from "../hooks/useContactForm";

const contactSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string()
        .regex(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .length(10, "Phone number must be exactly 10 digits"),
    serviceInterest: z.string().min(1, "Please specify your service interest"),
    message: z.string().optional(),
});

type FormData = z.infer<typeof contactSchema>;

const ContactPageForm = () => {
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

    const [serviceOpen, setServiceOpen] = useState(false);
    const serviceRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const onDocClick = (event: MouseEvent) => {
            if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) {
                setServiceOpen(false);
            }
        };

        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    const selectedService = watch("serviceInterest");

    const { submitForm, isSubmitting, submitStatus, clearStatus } = useContactForm();

    const onSubmit = async (data: FormData) => {
        // Transform the form data to match ContactFormData interface
        const contactData: ContactFormData = {
            fullName: data.fullName || '',
            email: data.email || '',
            phone: data.phone || '',
            serviceInterest: data.serviceInterest || '',
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <input
                        {...register("fullName")}
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3.5 text-base text-[#0D4A8D] placeholder-[#7A8798] bg-white border border-[#CBD5E1] rounded-xl shadow-sm focus:border-[#0D4A8D] focus:ring-4 focus:ring-[#0D4A8D]/10 focus:outline-none transition-all duration-300"
                    />
                    {errors.fullName && (
                        <span className="text-red-500 text-sm mt-1 block">
                            {errors.fullName.message}
                        </span>
                    )}
                </div>

                <div
                    className={`animate-fade-in-up relative ${serviceOpen ? 'z-[80]' : 'z-10'}`}
                    style={{ animationDelay: '0.6s' }}
                    ref={serviceRef}
                >
                    <input type="hidden" {...register("serviceInterest")} />

                    <button
                        type="button"
                        className={`w-full px-4 py-3.5 text-base bg-white border border-[#CBD5E1] rounded-xl shadow-sm focus:outline-none transition-all duration-300 text-left flex items-center justify-between ${serviceOpen ? 'border-[#0D4A8D] ring-4 ring-[#0D4A8D]/10' : ''}`}
                        onClick={() => setServiceOpen((prev) => !prev)}
                    >
                        <span className={selectedService ? 'text-[#0D4A8D]' : 'text-[#7A8798]'}>
                            {selectedService || 'Service Interest'}
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={`transition-transform duration-200 ${serviceOpen ? 'rotate-180' : ''}`}
                        >
                            <path d="M7 10l5 5 5-5" stroke="#5C6F8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {serviceOpen && (
                        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-[90] rounded-xl border border-[#CBD5E1] bg-white shadow-xl overflow-hidden max-h-56 overflow-y-auto">
                            {["Product Development", "Marketing", "Consultation", "Partnership"].map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    className="w-full px-4 py-3 text-left text-[#0D4A8D] hover:bg-[#EAF2FF] transition-colors"
                                    onClick={() => {
                                        setValue("serviceInterest", option, { shouldValidate: true, shouldDirty: true });
                                        setServiceOpen(false);
                                    }}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}
                    
                    {errors.serviceInterest && (
                        <span className="text-red-500 text-sm mt-1 block">
                            {errors.serviceInterest.message}
                        </span>
                    )}
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3.5 text-base text-[#0D4A8D] placeholder-[#7A8798] bg-white border border-[#CBD5E1] rounded-xl shadow-sm focus:border-[#0D4A8D] focus:ring-4 focus:ring-[#0D4A8D]/10 focus:outline-none transition-all duration-300"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm mt-1 block">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <input
                        {...register("phone")}
                        type="tel"
                        placeholder="Phone Number"
                        maxLength={10}
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.value = target.value.replace(/[^0-9]/g, '');
                        }}
                        className="w-full px-4 py-3.5 text-base text-[#0D4A8D] placeholder-[#7A8798] bg-white border border-[#CBD5E1] rounded-xl shadow-sm focus:border-[#0D4A8D] focus:ring-4 focus:ring-[#0D4A8D]/10 focus:outline-none transition-all duration-300"
                    />
                    {errors.phone && (
                        <span className="text-red-500 text-sm mt-1 block">
                            {errors.phone.message}
                        </span>
                    )}
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                    <textarea
                        {...register("message")}
                        placeholder="Message..."
                        rows={4}
                        className="w-full px-4 py-3.5 text-base text-[#0D4A8D] placeholder-[#7A8798] bg-white border border-[#CBD5E1] rounded-xl shadow-sm focus:border-[#0D4A8D] focus:ring-4 focus:ring-[#0D4A8D]/10 focus:outline-none transition-all duration-300 resize-none"
                    />
                    {errors.message && (
                        <span className="text-red-500 text-sm mt-1 block">
                            {errors.message.message}
                        </span>
                    )}
                </div>

                <div className="pt-3 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`font-semibold py-3 px-8 rounded-xl transition-all duration-300 text-base hover:shadow-lg transform ${isSubmitting
                            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                            : 'bg-[#0d4a8d] hover:bg-[#0a3d73] text-white hover:-translate-y-0.5'
                            }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                </div>
            </form>
        </div>
    );
};
export default ContactPageForm;