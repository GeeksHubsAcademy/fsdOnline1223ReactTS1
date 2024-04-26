import { CharactersFetchedResults, DataFetched } from "../interfaces";

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
