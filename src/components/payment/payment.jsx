import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context"; // Verifique o caminho correto

export const PaymentForm = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Estado para mensagem de sucesso
  const { getTotalWithDelivery } = useCart(); // Obtenha o total do carrinho
  const navigate = useNavigate(); // Para redirecionar o usuário

  useEffect(() => {
    setTotalPrice(getTotalWithDelivery()); // Atualize o total quando o carrinho mudar
  }, [getTotalWithDelivery]);

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para processar o pagamento aqui
    setPaymentSuccess(true);
    setTimeout(() => {
      navigate("/products"); // Redireciona para uma página de sucesso ou para a rota desejada
    }, 2000); // Aguarde 2 segundos para mostrar a mensagem antes de redirecionar
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

            <form className="lg:mt-16" onSubmit={handleSubmit}>
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

                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="card"
                      name="payment-method"
                      aria-labelledby="card-payment-method"
                      className="w-5 h-5 cursor-pointer"
                      checked={selectedPaymentMethod === "card"}
                      onChange={handlePaymentMethodChange}
                    />
                    <label
                      id="card-payment-method"
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
                      aria-labelledby="emola-payment-method"
                      className="w-5 h-5 cursor-pointer"
                      checked={selectedPaymentMethod === "emola"}
                      onChange={handlePaymentMethodChange}
                    />
                    <label
                      id="emola-payment-method"
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
                      aria-labelledby="mpesa-payment-method"
                      className="w-5 h-5 cursor-pointer"
                      checked={selectedPaymentMethod === "mpesa"}
                      onChange={handlePaymentMethodChange}
                    />
                    <label
                      id="mpesa-payment-method"
                      htmlFor="mpesa"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <img
                        src="M-pesa-logo.png"
                        className="w-12"
                        alt="M-Pesa"
                      />
                    </label>
                  </div>
                </div>
              </section>

              {/* Conditionally render forms based on the selected payment method */}
              {selectedPaymentMethod === "card" && (
                <section className="mt-16">
                  <h2 className="text-xl font-bold text-gray-800">
                    Card Payment
                  </h2>
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
                </section>
              )}

              {selectedPaymentMethod === "emola" && (
                <section className="mt-16">
                  <h2 className="text-xl font-bold text-gray-800">
                    Emola Payment
                  </h2>
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
                </section>
              )}

              {selectedPaymentMethod === "mpesa" && (
                <section className="mt-16">
                  <h2 className="text-xl font-bold text-gray-800">
                    M-Pesa Payment
                  </h2>
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
                </section>
              )}

              <div className="my-8 flex justify-between">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-xl font-bold text-gray-800">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="min-w-[150px] px-6 py-3.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Confirm payment ${totalPrice.toFixed(2)}
                </button>
                <NavLink
                  to="/products"
                  className="min-w-[150px] px-6 py-3.5 text-sm bg-white border-blue-600 border text-blue-600 rounded-lg hover:bg-slate-100 ml-8"
                >
                  Back
                </NavLink>
              </div>
            </form>

            {/* Message de sucesso */}
            {paymentSuccess && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold">Payment Successful</h2>
                  <p className="mt-2">
                    Your payment has been completed successfully.
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
