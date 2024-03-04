import { Schema, Model, Types, model, Document } from "mongoose";


export interface ITrait extends Document {
  _id: Types.ObjectId;
  name: string;
}

const traitSchema = new Schema<ITrait, Model<ITrait>>({
  name: {
    type: String,
    required: true
  },
});

export const Trait = model('Trait', traitSchema);