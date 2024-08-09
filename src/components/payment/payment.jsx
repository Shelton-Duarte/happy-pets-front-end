import React, { useState } from "react";

export const PaymentForm = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [totalPrice, setTotalPrice] = useState();
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.id);
  };

  return (
    <div className="font-sans bg-white">
      <div className="max-lg:max-w-xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
            <div className="text-center max-lg:hidden">
              <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">
                Checkout
              </h2>
            </div>

            <form className="lg:mt-16">
              <section>
                <h2 className="text-xl font-bold text-gray-800">
                  Delivery Information
                </h2>

                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Name"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="sr-only">
                      Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      placeholder="Location"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      required
                    />
                  </div>
                  {/* Additional fields... */}
                </div>
              </section>

              <section className="mt-16">
                <h2 className="text-xl font-bold text-gray-800">
                  Payment method
                </h2>

                <div>
                  {/* Botões de opção de pagamento */}
                  <div className="grid gap-4 sm:grid-cols-2 mt-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="card"
                        name="payment-method"
                        className="w-5 h-5 cursor-pointer"
                        checked={selectedPaymentMethod === "card"}
                        onChange={handlePaymentMethodChange}
                      />
                      <label
                        htmlFor="card"
                        className="ml-4 flex gap-2 cursor-pointer"
                      >
                        <img
                          src="https://readymadeui.com/images/visa.webp"
                          className="w-12"
                          alt="Visa"
                        />
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="emola"
                        name="payment-method"
                        className="w-5 h-5 cursor-pointer"
                        checked={selectedPaymentMethod === "emola"}
                        onChange={handlePaymentMethodChange}
                      />
                      <label
                        htmlFor="emola"
                        className="ml-4 flex gap-2 cursor-pointer"
                      >
                        <img src="emola.png" className="w-12" alt="Emola" />
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="mpesa"
                        name="payment-method"
                        className="w-5 h-5 cursor-pointer"
                        checked={selectedPaymentMethod === "mpesa"}
                        onChange={handlePaymentMethodChange}
                      />
                      <label
                        htmlFor="mpesa"
                        className="ml-4 flex gap-2 cursor-pointer"
                      >
                        <img
                          src="/M-pesa-logo.png"
                          className="w-12"
                          alt="M-Pesa"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Formulários para pagamento baseado no método selecionado */}
                  {selectedPaymentMethod === "card" && (
                    <div className="grid gap-8 mt-8">
                      <div>
                        <label htmlFor="cardholder-name" className="sr-only">
                          Cardholder's Name
                        </label>
                        <input
                          id="cardholder-name"
                          type="text"
                          placeholder="Cardholder's Name"
                          className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="card-number" className="sr-only">
                          Card Number
                        </label>
                        <input
                          id="card-number"
                          type="text"
                          placeholder="Card Number"
                          className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="expiration-date" className="sr-only">
                          Expiration Date
                        </label>
                        <input
                          id="expiration-date"
                          type="text"
                          placeholder="Expiration Date (MM/YY)"
                          className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="sr-only">
                          CVV
                        </label>
                        <input
                          id="cvv"
                          type="text"
                          placeholder="CVV"
                          className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {selectedPaymentMethod === "emola" && (
                    <div className="grid gap-8 mt-8">
                      <div>
                        <label htmlFor="emola-phone" className="sr-only">
                          Phone Number
                        </label>
                        <input
                          id="emola-phone"
                          type="text"
                          placeholder="Phone Number"
                          className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="emola-pin" className="sr-only">
                          PIN
                        </label>
                        <input
                          id="emola-pin"
                          type="text"
                          placeholder="PIN"
                          className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {selectedPaymentMethod === "mpesa" && (
                    <div className="grid gap-8 mt-8">
                      <div>
                        <label htmlFor="mpesa-phone" className="sr-only">
                          Phone Number
                        </label>
                        <input
                          id="mpesa-phone"
                          type="text"
                          placeholder="Phone Number"
                          className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="mpesa-pin" className="sr-only">
                          PIN
                        </label>
                        <input
                          id="mpesa-pin"
                          type="text"
                          placeholder="PIN"
                          className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                          required
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center mt-8">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    I accept the{" "}
                    <a
                      href="#"
                      className="text-blue-600 font-semibold hover:underline ml-1"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </section>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="min-w-[150px] px-6 py-3.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Confirm payment ${totalPrice}
                </button>
              </div>
            </form>
          </section>

          <aside className="bg-gray-100 lg:h-screen lg:sticky lg:top-0">
            <div className="relative h-full">
              <div className="p-6 overflow-auto max-lg:max-h-[400px] lg:h-[calc(100vh-60px)] max-lg:mb-8">
                <h2 className="text-xl font-bold text-gray-800">
                  Order Summary
                </h2>
                <div className="space-y-8 mt-8">
                  {/* Order summary items */}
                </div>
              </div>

              <div className="lg:absolute lg:left-0 lg:bottom-0 bg-gray-200 w-full p-4">
                <h4 className="flex flex-wrap gap-4 text-base text-gray-800 font-bold">
                  Total <span className="ml-auto">${totalPrice}.00</span>
                </h4>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
