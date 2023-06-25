export interface Course {
  picture: string;
  title: string;
  description: string;
  price: number;
  numOfPlaces: number;
  appointment: Date;
  crsCategory: string;
  crsLevel: string;
  instructorId: number;
  languageId: number;
}
