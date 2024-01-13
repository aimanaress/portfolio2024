import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function Connect() {
  useEffect(() => emailjs.init("9lb_lw_y2hZL4RVSc"), []);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [loading, setLoading] = useState(false);

  async function handleClick(event) {
    event.preventDefault();

    const serviceId = "service_vjgiuto";
    const templateId = "template_cmp91mv";

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      });
      alert("Message successfully sent");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mb-10 md:px-12 pt-12 pb-36">
      <div className="flex flex-col items-center">
        <div className="pt-2 pb-5 flex flex-col items-center">
          <h2 className="font-bebas text-4xl font-bold">Connect</h2>
          <p className="text-gray-200">Dummy text</p>
        </div>
        <div className="w-full xl:w-2/3">
          <form className="">
            <div className="grid gap-2 mb-2 md:grid-cols-2">
              <div>
                <input
                  name="name"
                  placeholder="Name"
                  ref={nameRef}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5"
                />
              </div>
              <div>
                <input
                  name="email"
                  placeholder="Email"
                  ref={emailRef}
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5"
                />
              </div>
            </div>
            <div className="mb-2">
              <textarea
                name="message"
                placeholder="Message"
                ref={messageRef}
                type="text"
                className="resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5"
              />
            </div>
            <button
              onClick={handleClick}
              type="submit"
              className="text-[#494949] bg-[#dfff00] hover:bg-[#494949] hover:text-[#dfff00] hover:outline hover:outline-2 hover:outline-[#dfff00] font-medium rounded-md text-sm w-full sm:w-full px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connect;
