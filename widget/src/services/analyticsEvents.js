import baseConfig from "../baseConfig";
const { analyticsEventsUrl } = baseConfig.servicesUrl;

// eslint-disable-next-line import/prefer-default-export
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
