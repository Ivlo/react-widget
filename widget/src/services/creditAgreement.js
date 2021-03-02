// eslint-disable-next-line import/prefer-default-export
export async function getCreditAgreements(url) {
  try {
    const data = await fetch(url);
    return data.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
