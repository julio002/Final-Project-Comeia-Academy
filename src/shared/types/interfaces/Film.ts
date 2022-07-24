export interface FilmInput {
  title: string;
  description: string;
  release_year: Date;
  language_id: number;
  rental_duration: number;
  rental_rate: number;
  length: number;
  replacement_cost: number;
  rating: string;
}
export interface FilmOutput {
  film_id: number;
  title: string;
  description: string;
  release_year: Date;
  language_id: number;
  rental_duration: number;
  rental_rate: number;
  length: number;
  replacement_cost: number;
  rating: string;
}
