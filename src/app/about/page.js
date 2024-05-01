import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mt-8 max-w-3xl mx-auto justify-center">
      <div className="text-center">
        <SectionHeaders mainHeader={"About Us"} />
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
      <div className="flex justify-center mt-6">
        {" "}
        {/* Use flex and justify-center */}
        <Image src="/Logo.png" width={300} height={300} alt="Logo" />
      </div>

      <div className="mt-8 text-justify bg-gray-200 rounded-xl p-4 text-black">
        Emirates Delight was established in 2023, rooted in a university project
        that grew into a fully developed business. What started as a small group
        of students with a passion for sharing the beauty of the United Arab
        Emirates has now evolved into a leading platform for exploring the
        regions vibrant culture, food, and landscapes.
        <br /> <br /> Our journey from a university classroom to a thriving
        business is a testament to our commitment to excellence and our belief
        in the power of storytelling. We specialize in Pakistani cuisines and
        internationally known desserts, offering a unique fusion of flavors that
        delight the senses.
        <br /> <br /> At Emirates Delight, you can explore traditional dishes
        like biryani and seekh kebabs, as well as discover a variety of desserts
        that have gained worldwide fame. Our team is dedicated to providing a
        seamless experience, bringing together the best of the UAEs cultural
        heritage with our culinary expertise. Join us to indulge in a world of
        taste and tradition, where every dish is a celebration of the vibrant
        cultures that shape the Emirates.
      </div>
    </section>
  );
}
