import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useContactForm, ContactFormData } from "../hooks/useContactForm";

const contactSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
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
    } = useForm<FormData>({
        resolver: zodResolver(contactSchema),
    });

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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <input
                        {...register("fullName")}
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-0 py-3 text-lg text-gray-700 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#0d4a8d] focus:outline-none transition-all duration-300 focus:scale-105"
                    />
                    {errors.fullName && (
                        <span className="text-red-500 text-sm mt-1 block">
                            {errors.fullName.message}
                        </span>
                    )}
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <input
                        {...register("serviceInterest")}
                        type="text"
                        placeholder="Service Interest"
                        className="w-full px-0 py-3 text-lg text-gray-700 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#0d4a8d] focus:outline-none transition-all duration-300 focus:scale-105"
                    />
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
                        className="w-full px-0 py-3 text-lg text-gray-700 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#0d4a8d] focus:outline-none transition-all duration-300 focus:scale-105"
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
                        placeholder="Phone No."
                        className="w-full px-0 py-3 text-lg text-gray-700 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#0d4a8d] focus:outline-none transition-all duration-300 focus:scale-105"
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
                        placeholder="Message....."
                        rows={4}
                        className="w-full px-4 py-3 text-lg text-gray-700 placeholder-gray-500 bg-white border-2 border-gray-300 rounded-lg focus:border-[#0d4a8d] focus:outline-none transition-all duration-300 resize-none focus:scale-105"
                    />
                    {errors.message && (
                        <span className="text-red-500 text-sm mt-1 block">
                            {errors.message.message}
                        </span>
                    )}
                </div>

                <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg transform ${isSubmitting
                            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                            : 'bg-[#0d4a8d] hover:bg-[#0099cd] text-white'
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