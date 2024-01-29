export async function getSolarData() {
    const dataCollected = await fetch('https://google.com');
    const data = await response.text();
    console.log(data);
  //   return {
  //     props:{googleData: data}
  //   }
  // }

    return data
}