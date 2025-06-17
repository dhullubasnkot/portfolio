import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c3el9qh",
        "template_gmrgr0d",
        form.current,
        "Glu8LQYAT10LwVj6x"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
        }
      );
  };
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-gray-200 py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest border-y-4 inline-block py-2 px-6 mb-12">
          CONTACT
        </h2>
        {sent && (
          <p className="text-green-600 mt-4 font-semibold">
            Message sent successfully!
          </p>
        )}
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center space-y-6 max-w-xl mx-auto"
      >
        <div className="w-full">
          <label className="block mb-1 text-sm font-semibold">Name</label>
          <input
            name="user_name"
            className="w-full h-[40px] border-b-2 border-l-2 px-3"
            type="text"
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div className="w-full">
          <label className="block mb-1 text-sm font-semibold">Email</label>
          <input
            name="user_email"
            className="w-full h-[40px] border-b-2 border-l-2 px-3"
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div className="w-full">
          <label className="block mb-1 text-sm font-semibold">Phone</label>
          <input
            name="user_phone"
            className="w-full h-[40px] border-b-2 border-l-2 px-3"
            type="text"
            placeholder="Phone No"
          />
        </div>

        <div className="w-full">
          <label className="block mb-1 text-sm font-semibold">Message</label>
          <textarea
            name="user_message"
            className="w-full h-[100px] border-b-2 border-l-2 px-3 py-2 resize-none"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 mt-4 rounded hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
