export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  age: number;
}

export interface Plan {
  id: string;
  name: string;
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  dailyPrice: number;
  popular?: boolean;
}