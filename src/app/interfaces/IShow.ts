export interface IShows {
  title: string;
  description: string;
  programType: string;
  images: {
    posterArt: {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
}
