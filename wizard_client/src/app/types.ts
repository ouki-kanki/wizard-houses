export interface IHouse {
  _id: string;
  name: string;
  houseColours: string;
  animal: string;
  element: string;
  ghost: string;
  founder: string;
  commonRoom: string;
  heads: Record<string, string>[]
  traits: Record<string, string>[]
}