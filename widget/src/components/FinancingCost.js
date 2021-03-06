import React, { useContext } from "react";
import WidgetContext from "../WidgetContext";
import numberToFixed from "../utils";

const FinancingCost = () => {
  const { instalmentFee } = useContext(WidgetContext);
  const instalmentFeeNumberFixed = numberToFixed(instalmentFee);
  return (
    <>
      <div className="heading">
        <h1>Fracciona tu pago</h1>
        <img
          src="https://assets-global.website-files.com/5f5f72f9edda90fbda5af283/5fd274a0a7dd297f88c5d8f2_SeQura-0.svg"
          alt="Sequra"
        />
      </div>
      <ol className="financing-steps">
        <li className="financing-steps__item">
          <p className="financing-steps__item__text">
            Eliges Fracciona tu pago al realizar tu pedido y pagas solo la primera cuota.
          </p>
          <img
            src="https://assets-global.website-files.com/5f5f72f9edda90fbda5af283/5f71d32fcb2fc156704d4689_picto_formacion.svg"
            alt="financing icon"
          />
        </li>
        <li className="financing-steps__item">
          <p className="financing-steps__item__text">Recibes tu pedido</p>
          <img
            src="https://assets-global.website-files.com/5f5f72f9edda90fbda5af283/5f71d32fcb2fc156704d4689_picto_formacion.svg"
            alt="financing icon"
          />
        </li>
        <li className="financing-steps__item">
          <p className="financing-steps__item__text">
            El resto de pagos se cargaran automáticamente a tu tarjeta
          </p>
          <img
            src="https://assets-global.website-files.com/5f5f72f9edda90fbda5af283/5f71d32fcb2fc156704d4689_picto_formacion.svg"
            alt="financing icon"
          />
        </li>
      </ol>
      <p>
        <strong>¡Así de simple!</strong>
      </p>
      {instalmentFee && (
        <p>
          Además en el importe mostrado ya se incluye la cuota única mensual de{" "}
          {instalmentFeeNumberFixed} € al mes, por lo que no tendrás ninguna sorpresa
        </p>
      )}
    </>
  );
};

export default FinancingCost;
