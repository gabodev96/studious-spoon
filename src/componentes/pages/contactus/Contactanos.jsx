import React from "react";
import { AnimatedPage } from "../../../Animations/AnimatedPage";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

export const Contactanos = () => {
  const notify = () => toast.info("Enviado!");
  const notierror = () => toast.error("Error al enviar verifique su conexión!");
  function enviarEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailService",
        "template_2e834dv",
        e.target,
        "-82w2BuUBWVFNOWu3"
      )
      .then(
        (result) => {
          notify();
        },
        (error) => {
          notierror();
        }
      );
  }

  return (
    <>
      <AnimatedPage>
        <div className="flex min-h-screen items-center justify-start bg-gray-400">
          <div className="mx-auto w-full max-w-lg  border-2 p-5 bg-white border-gray-400">
            <h1 className="text-4xl font-baloo font-medium">Contactanos</h1>
            <p className="mt-3 font-baloo">
              Envia un email a contact@productos3n.com o contactanos mediante
              este formulario:
            </p>

            <form className="mt-10" onSubmit={enviarEmail}>
              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  name="subject"
                  className="hidden"
                  value="CORREO PAGINA WEB"
                  readOnly
                />
                <div className="relative z-0">
                  <input
                    type="text"
                    name="nombre"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute font-baloo top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Ingrese Nombre
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="text"
                    name="correo"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute font-baloo top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Ingrese Email
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="text"
                    name="phone"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute font-baloo top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Ingrese Telefono
                  </label>
                </div>
                <div className="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    rows="5"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute font-baloo top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Ingrese Mensaje
                  </label>
                </div>
              </div>
              <button className="mt-5 rounded-md bg-black px-10 py-2 text-white">
                Enviar
              </button>
              <ToastContainer limit={1} />
            </form>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};
