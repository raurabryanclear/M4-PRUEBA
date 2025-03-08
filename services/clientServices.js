export const getCliente = async () => {
  try {
    const response = await fetch('http://192.168.68.117:3011/client')
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
    console.log('CREANDO...')
    const response = await fetch('http://192.168.68.117:3011/createclient', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': "application/json"
      }
    })
    if (!response.ok) {
      console.log(response.status);
    }
    const dataCreate = await response.json()
    return {
      data: dataCreate,
      status: response.status
    };
  } catch (error) {
    console.log(error)
    return {
      data: null,
      status: response.status
    };
  }
}