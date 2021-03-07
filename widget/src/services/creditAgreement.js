/* eslint-disable import/prefer-default-export */

// make a get to SEQURA CreditAgreementApi to get the data for a specific product value
// Recived the url from outside because it has params and will be format from outside, for the test i've saved it in base config without params
export async function getCreditAgreements(url) {
  try {
    const data = await fetch(url);
    return data.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
