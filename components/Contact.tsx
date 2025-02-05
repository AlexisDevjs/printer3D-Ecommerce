import FadeInSection from "./FadeInSection";
import FormTemplate from "./FormTemplate";

export default function Contact() {
  return (
    <section id="contacto" className="pb-20 pt-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInSection animation="fade-up">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1a5e9d]">
            Contáctanos
          </h2>
        </FadeInSection>
        <FormTemplate />
      </div>
    </section>
  );
}
