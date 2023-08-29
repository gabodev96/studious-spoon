import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

import { logo } from "../../Data/favicon";

export const Whatsapp = () => {
  return (
    <>
      {logo.map((profilep) => (
        <div key={profilep.key}>
          <WhatsAppWidget
            phoneNo="584126952114"
            headerTitle="Contacto 3N"
            iconBgColor="lightblue"
            iconColor="green"
            btnTxt="Iniciar Chat"
            iconSize="60"
            btnTxtColor="black"
            messageBoxTxt="Hola vengo de la pagina, me podrá ayudar en: "
            footerBgColor="#999"
            headerIcon={profilep.img}
            chatPersonName="Contacto 3N"
            chatMessage={
              <>
                Hola!
                <br /> En que podemos ayudarte?
              </>
            }
          />
        </div>
      ))}
    </>
  );
};
