import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Payment from "./payment/Payment";

const BuyDetails = ({ setWebDetails,service }) => {
  const [details, setDetails] = useState(true);
  const [payment, setPayment] = useState(false);
  const [confirmdetails, setConfirmDetails] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    describe_project: "",
    timeline: "",
    packages: "",
    design_preferences: "",
    existing_content: "",
    other_information: "",
    how_heard: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitDetails = async (e) => {
    e.preventDefault();
    setDetails(false);
    setPayment(true);

    try {
      // Make a POST request to your API endpoint
      const response = await fetch(
        "https://webcraft-server.vercel.app/api/v1/sendmail/packeg-mail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log(response);
    } catch (error) {
      // Handle any unexpected errors
      console.error(error);
    }
  };



  return (
      <div>
        <div className="w-[80%] ml-auto">
          <ol className="flex items-center justify-center w-full mb-4 sm:mb-5">
            {details ? (
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 14"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                  </svg>
                </div>
              </li>
            ) : (
              <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                  </svg>
                </div>
              </li>
            )}

            {confirmdetails ? (
              <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z" />
                    <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z" />{" "}
                  </svg>
                </div>
              </li>
            ) : (
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 14"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z" />
                    <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z" />
                  </svg>
                </div>
              </li>
            )}

            {confirmdetails ? (
              <li className="flex items-center w-full">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 nodemailerdark:bg-blue-800 shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                  </svg>
                </div>
              </li>
            ) : (
              <li className="flex items-center w-full">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg
                    className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                  </svg>
                </div>
              </li>
            )}
          </ol>
        </div>

        {details && (
          <form className="sm:w-[50%] m-auto p-5">
            <h3 className="mb-4 text-lg font-medium leading-none text-white">
              Website details
            </h3>
            <br />
            <h1 className="font-bold">Contact Information</h1>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  onChange={handleInputChange}
                  value={formData.fullname}
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Jon Done"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="jondoen@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  onChange={handleInputChange}
                  value={formData.phone}
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="+9234393409"
                  required
                />
              </div>
            </div>

            <h1 className="font-bold">Company/Organization Details</h1>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  onChange={handleInputChange}
                  value={formData.company}
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Webcraft"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="industry"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Industry
                </label>
                <input
                  type="text"
                  name="industry"
                  id="industry"
                  onChange={handleInputChange}
                  value={formData.industry}
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="E-commerce"
                  required
                />
              </div>
            </div>

            <h1 className="font-bold">Project Details</h1>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-white capitalize"
                >
                  Briefly describe your project and its goals
                </label>
                <textarea
                  type="text"
                  name="describe_project"
                  id="describe_project"
                  onChange={handleInputChange}
                  value={formData.describe_project}
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Briefly describe your project and its goals"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-white capitalize"
                >
                  What is your preferred timeline for completing this project?
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  onChange={handleInputChange}
                  value={formData.company}
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="One Month"
                  required
                />
              </div>
            </div>

            <h1 className="font-bold">Preferred Package</h1>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="package"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Select A Package
                </label>
                <select
                  id="package"
                  name="package"
                  onChange={handleInputChange}
                  value={formData.package}
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Select A Package</option>
                  <option value="Informational Website ($530)">
                    Informational Website ($530)
                  </option>
                  <option value="Customized Business Website ($1520)">
                    Customized Business Website ($1520)
                  </option>
                  <option value="E-Commerce Solutions ($2600)">
                    E-Commerce Solutions ($2600)
                  </option>
                  <option value="Comprehensive Online Presence ($6200)">
                    Comprehensive Online Presence ($6200)
                  </option>
                </select>
              </div>
            </div>

            <h1 className="font-bold">Othres Information</h1>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-white capitalize"
                >
                  Are there any specific design preferences or existing branding
                  elements we should incorporate?
                </label>
                <input
                  type="text"
                  name="design_preferences"
                  id="design_preferences"
                  onChange={handleInputChange}
                  value={formData.design_preferences}
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="www.samplewebsite.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-white capitalize"
                >
                  Do you have existing content (text, images, videos, logo) that
                  you'd like to include on the website?
                </label>
                <input
                  type="text"
                  name="existing_content"
                  id="describe_project"
                  onChange={handleInputChange}
                  value={formData.existing_content}
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Share the google drive link"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-white capitalize"
                >
                  Please provide any other information or questions you have.
                </label>
                <textarea
                  type="text"
                  name="other_information"
                  id="describe_project"
                  onChange={handleInputChange}
                  value={formData.other_information}
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Share the google drive link"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-white capitalize"
                >
                  How did you hear about Webcraft?
                </label>
                <select
                  id="countries"
                  name="how_heard"
                  onChange={handleInputChange}
                  value={formData.how_heard}
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option disabled>Select A Option</option>
                  <option value="Referral">Referral</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Web Search">Web Search</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* ======= Payment ====== */}
            <div className="payment">
              <Payment service={service} />
            </div>
            {/* ======= Payment ======== */}

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={(e) => handleSubmitDetails(e)}
            >
              Next Step: Payment Info
            </button>
          </form>
        )}
      </div>
  );
};

export default BuyDetails;
