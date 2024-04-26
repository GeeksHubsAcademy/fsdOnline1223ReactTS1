import { CharactersFetchedResults, Credentials, DataFetched } from "../interfaces";

const root: string = "https://rickandmortyapi.com/api/";

export const bringCharacters = async (): Promise<DataFetched> => {
  try {
    const response: any = await fetch(`${root}character/?page=2`);
    const dirtyData: CharactersFetchedResults = await response.json();

    const data: DataFetched = {
      success: true,
      message: "R&M Api Characters retrieved ok",
      data: dirtyData.results,
    };

    return data;
  } catch (error) {
    let answer: DataFetched = {
      success: false,
      message: "Problem encountered retrieving data",
      data: [],
    };

    return answer;
  }
};

export const logMeIn = async (credentials: Credentials): Promise<DataFetched> => {

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };
  
  try {
    const response: any = await fetch(`http://localhost:4000/api/auth/login`, options);
    //aqui en data recibimos la respuesta pura de la api, le hemos asignado la interfaz DataFetched la cual espera 3 cosas
    //un booleano success para saber si ha ido todo bien, un string message con el mensaje y data que es un array con any donde podremos incluir los datos de vuelta en un formato de array 
    //capaz de admitir cualquier tipo de datos. 
    const data: DataFetched = await response.json();

    if(!data.success){
      throw new Error(data.message)
    }

    return data;
  } catch (error: any) {
    //en este caso estamos formateando la respuesta de error que hemos provocado al recibir un false en success.
    //devolveremos mensaje y success como false y seteamos data a un array vacio
    let answer: DataFetched = {
      message: error.message,
      data: [],
      success: false,
    };
    return answer;
  }

}
