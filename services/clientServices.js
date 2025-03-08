export const getCliente = async () => {
  try {
    const response = await fetch('http://192.168.68.117:3007/client')
    if (!response.ok) {
      console.log(response.status);
    }
    return response.json();
  } catch (error) {
    console.log(error)
  }
}

export const createClient = async (data) => {
  try {
    const response = await fetch('http://192.168.68.117:3007/createclient', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': "application/json"
      }
    })
    if (!response.ok) {
      console.log(response.status);
    }
    return response.json();
  } catch (error) {
    console.log(error)
  }
}