export default async function postData(endpoint, body) {
  try {
    const response = await fetch(`https://tostrip.eunglyzhia.social/api/v1/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(body) 
    });

    if (!response.ok) {
      // Include the response status code for better debugging
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Handle empty responses (like status 204 No Content)
    const data = response.status === 204 ? null : await response.json();
    return data; 

  } catch (error) {
    console.error("Error while posting data:", error);
    throw error;  
  }
}
