 export async function fetchData() {
    try {
      const response = await fetch("https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/12", {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}

//this fetches for the london region (pes 12)

export async function fetchSolar() {
    // Declare a variable to store the HTTP response
    const response = await fetch("https://api.solar.sheffield.ac.uk/pvlive/api/v4/pes/12", {
      headers: {
        Accept: "application/json",
      },
    });

    // If the request fails log out an error
    if (!response.ok) {
      console.error(`Status: ${response.status}`);
      console.error(`Text: ${await response.text()}`);
      return;
    }

    // Use the json method that parses the reponses body as JSON.
    const data = await response.json();

    // Log out our parsed data
    console.log(typeof data, data);
  }
