async function getSolar(startingDate, startingTime, EndDate, EndTime) {
  try {
    const res = await fetch(
      `https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/0?start=${startingDate}T${startingTime}&end=${EndDate}T${EndTime}`
    );

    if (!res.ok) {
      console.error('API Error:', res.status);
      throw new Error(`API Error: ${res.status}`);
    }

    const data = await res.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching solar data:', error);
    throw error;
  }
}