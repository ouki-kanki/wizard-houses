import {  Document, Schema, Types, Model, model } from "mongoose";


export interface IHead extends Document {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
}

// TODO how to reference to the house 
const headSchema = new Schema<IHead, Model<IHead>>({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
});


export const Head = model('Head', headSchema);