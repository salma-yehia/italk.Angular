export interface Course {
  picture: string;
  title: string;
  description: string;
  price: number;
  numOfPlaces: number;
  appointment: Date;
  crsCategory: number;
  crsLevel: number;
  instructorId: number;
  languageId: number;
}
