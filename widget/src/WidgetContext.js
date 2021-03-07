import { createContext } from "react";

const WidgetContext = createContext({
  instalmentFee: "",
  setInstalmentFee: () => {},
});

export const WidgetContextProvider = WidgetContext.Provider;
export const WidgetContextConsumer = WidgetContext.Consumer;

export default WidgetContext;
