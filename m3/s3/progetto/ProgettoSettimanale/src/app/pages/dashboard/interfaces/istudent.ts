export interface Istudent {
  id: number;
  name: string;
  surname: string;
  address: {
    street: string;
    civic: number;
    city: string;
    cap: string;
  },
  class: string;
}
