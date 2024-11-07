import ContactIMG from "../assets/images/Contact-Us-Banner-Image.jpeg";
import ContactFormField from "./contactFormFields";
const ContactUsFormSM = () => {
  return (
    <main className="overflow-x-hidden px-3 block md:hidden">
      <div className="mt-10">
        {/* Banner Image */}
        <img src={ContactIMG} alt="" />
        <p className="text-[#f06c00] font-EB font-bold text-xl mt-4">
          Contact us
        </p>
        <p className=" font-EB   mt-4">
          We are always happy to hear from you. Please feel free to contact us
          with any questions, comments, or inquiries.
        </p>
      </div>
      <ContactFormField />
    </main>
  );
};

export default ContactUsFormSM;
