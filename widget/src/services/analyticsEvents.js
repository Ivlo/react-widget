/* eslint-disable import/prefer-default-export */
import baseConfig from "../baseConfig";

// get the url of this services from de config
const { analyticsEventsUrl } = baseConfig.servicesUrl;

// method that make a post to SEQURA event API to set the event triggered recived the event as argument
export async function setEvent(event) {
  try {
    await fetch(analyticsEventsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
