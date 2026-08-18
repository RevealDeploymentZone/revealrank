export default function MapSection() {
  return (
    <section className="bg-gray-900 pt-12 pb-0">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-2">Our Location</p>
          <h2 className="text-white text-2xl font-bold">Find Us on the Map</h2>
        </div>
        <div className="rounded-2xl overflow-hidden border border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.797606525229!2d-75.5267290240507!3d39.15658477166989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7654c4e0becab%3A0x7b6dff889bfdaeea!2sReveal%20Rank!5e0!3m2!1sen!2sin!4v1787063585704!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Reveal Rank Location"
          />
        </div>
      </div>
    </section>
  );
}
