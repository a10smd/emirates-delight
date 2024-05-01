import Image from "next/image";
import SectionHeaders from "../../components/layout/SectionHeaders";

export default function Contact() {
  return (
    <div className="mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader={"Contact Us"} />
      </div>
      <div>
        <div className="absolute left-0 right-0 w-full justify-start">
          <div className="absolute left-0 -top-[-120px] text-left -z-10 lg:block hidden">
            <Image
              src={"/Design2.png"}
              width={150}
              height={250}
              alt={"Design1"}
            />
          </div>
          <div className="absolute -top-[140px] right-0 -z-10 lg:block hidden">
            <Image
              src={"/Design1.png"}
              width={150}
              height={250}
              alt={"Design2"}
            />
          </div>
        </div>
      </div>
      <div className="our-location w-full mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d758.0970835204054!2d55.39623124198159!3d25.333157185766314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1705230191296!5m2!1sen!2sae"
          width="100%"
          height="400px"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
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
          <h2 className="text-4xl font-semibold text-orange-500">
            Operating Hours:
          </h2>
          <p>
            Monday - Friday: 9:00 AM - 11:00 PM
            <br />
            Saturday: 10:00 AM - 11:00 PM
            <br />
            Sunday: 11:00AM - 11:59PM
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
        <div>
          <h2 className="text-4xl font-semibold text-orange-500">Follow Us:</h2>
          <p>
            <a href="https://www.facebook.com/yourbusiness">Facebook</a>
            <br />
            <a href="https://www.instagram.com/yourbusiness">Instagram</a>
            <br />
            <a href="https://www.twitter.com/yourbusiness">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}
