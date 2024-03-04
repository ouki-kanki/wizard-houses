import { Schema, Model, Types, model, Document } from "mongoose";


export interface IHouse extends Document {
  _id: Types.ObjectId
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: Types.ObjectId[];
  traits: Types.ObjectId[];
  // heads: Types.DocumentArray<IHead>;
  // traits: Types.DocumentArray<ITrait>;
}

const HouseSchema = new Schema<IHouse, Model<IHouse>>(
  {
    name: {
      type: String,
      required: true,
    },
    houseColours: {
      type: String,
      required: true,
    },
    founder: {
      type: String,
      required: true,
    },
    animal: {
      type: String,
      required: true,
    },
    element: {
      type: String,
      required: true,
    },
    ghost: {
      type: String,
      required: true,
    },
    commonRoom: {
      type: String,
      required: true,
    },
    heads: [
      {
        type: Schema.Types.ObjectId,
        ref: "Head",
      },
    ],
    traits: [
      {
        type: Schema.Types.ObjectId,
        ref: "Trait",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const House = model("House", HouseSchema);
