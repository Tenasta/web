"use client";

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`} 1;
`;
const FORM_ENDPOINT =
  "https://qdunx5lfck.execute-api.eu-west-2.amazonaws.com/dev/email/send"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const inputs = e.target.elements;

    const data: { [key: string]: any } = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        setSubmitted(true);
        setError(false);
      })
      .catch((err) => {
        setError(err.toString());
      });
  };

  if (submitted) {
    return (
      <FadeIn>
        <div className="flex flex-col h-full items-center pt-28">
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">We'll be in touch soon.</div>
        </div>
      </FadeIn>
    );
  }

  return (
    <form
      id="contact"
      action={FORM_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      className=""
    >
      {!!error && (
        <div className="bg-brand-orange/20 border-2  border-brand-orange text-white px-2 py-2 rounded-lg">
          {error}
        </div>
      )}
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium ">
            First name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="first_name"
              id="first-name"
              autoComplete="given-name"
              className="py-3 px-4 block w-full shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-brand-dark-blue"
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium ">
            Last name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="last_name"
              id="last-name"
              autoComplete="family-name"
              className="py-3 px-4 block w-full shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-brand-dark-blue"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium ">
            Email
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="py-3 px-4 block w-full shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-brand-dark-blue"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <label htmlFor="phone" className="block text-sm font-medium ">
              Phone
            </label>
            <span
              id="phone-optional"
              className="text-sm text-brand-sky-blue-100"
            >
              Optional
            </span>
          </div>
          <div className="mt-1">
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="py-3 px-4 block w-full shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-brand-dark-blue"
              aria-describedby="phone-optional"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="subject" className="block text-sm font-medium ">
            Subject
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="subject"
              id="subject"
              className="py-3 px-4 block w-full shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-brand-dark-blue"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between">
            <label htmlFor="message" className="block text-sm font-medium ">
              Message
            </label>
            <span id="message-max" className="text-sm text-brand-sky-blue-100">
              Max. 500 characters
            </span>
          </div>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="py-3 px-4 block w-full shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md text-brand-dark-blue"
              aria-describedby="message-max"
            ></textarea>
          </div>
        </div>
        <div className="sm:col-span-2 sm:flex sm:justify-end">
          <button
            type="submit"
            className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto "
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
