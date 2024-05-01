import SectionHeaders from "./SectionHeaders";

export default function OurLocation() {
  return (
    <div>
      <div className="text-center mt-8">
        <SectionHeaders mainHeader="Contact Us" />
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {/* Set the height of the map depending on the screen size */}
        <div className="our-location w-full sm:order-first md:order-last">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d758.0970835204054!2d55.39623124198159!3d25.333157185766314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1705230191296!5m2!1sen!2sae"
            // Responsive height: shorter on larger screens, taller on smaller screens
            width="100%"
            className="border-0 sm:h-64 md:h-64" // Adjusted heights
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact information */}
        <div>
          <div>
            <h2 className="text-4xl font-semibold text-orange-500">
              General Inquiries:
            </h2>
            <p>
              Email:{" "}
              <a href="mailto:abdussamada11d8@gmail.com">
                abdussamada11d8@gmail.com
              </a>
            </p>
            <p>
              Phone: <a href="tel:+97112345678">+971 123 456 78</a>
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-orange-500">
              Customer Support:
            </h2>
            <p>
              Email:{" "}
              <a href="mailto:as96ocd@bolton.ac.uk">as96ocd@bolton.ac.uk</a>
            </p>
            <p>
              Phone: <a href="tel:+97198765432">+971 987 654 32</a>
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-orange-500">Address:</h2>
            <p>
              Emirates Delight
              <br />
              Abu Shagara, Sharjah
              <br />
              United Arab Emirates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
