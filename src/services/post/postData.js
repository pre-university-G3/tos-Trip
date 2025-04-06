export default async function postData(endpoint, body) {
  try {
    const response = await fetch(`https://tostrip.eunglyzhia.social/api/v1/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorMessage = await response.text(); 
      throw new Error(`Error ${response.status}: ${response.statusText} - ${errorMessage}`);
    }
    if (response.status === 204) {
      return null;
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error while posting data:", error);
    throw error;  
  }
}
