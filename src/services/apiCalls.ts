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
    
    const data: DataFetched = await response.json();

    if(!data.success){
      throw new Error(data.message)
    }

    return data;
  } catch (error: any) {
    let answer: DataFetched = {
      message: error.message,
      data: [],
      success: false,
    };
    return answer;
  }

}
