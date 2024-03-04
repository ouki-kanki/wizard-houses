import { House, Head, Trait } from "../models"
import { Request, Response } from 'express'
import { IHouse, IHead, ITrait } from "../models"

export const getByName = ( name : string)  => House.findOne({ name })

type Query = {
  name?: RegExp
}

// Get all houses or house by name
export const getHouses = async (req: Request, res: Response) => {
  try {
    const { name, page = 1, limit = 5 } = req.query

    const pageNumber = parseInt(page as string, 10)
    const limitNumber = parseInt(limit as string, 10)
    const skip = (pageNumber - 1) * limitNumber

    let query: Query = {}
    if (name) {
      const regex = new RegExp(name as string, 'i')
      query.name = regex 
    }

    const houses = await House.find(query)
      .skip(skip)
      .limit(limitNumber)

    const numberOfHouses = await House.countDocuments(query);

    res.status(200).json({
      success: true,
      data: {
        houses,
        currentPage: pageNumber,
        totalPages: Math.ceil(numberOfHouses / limitNumber)
      }
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("cannot fetch the items", error)

      res.status(500).json({
        success: false,
        error: error.message
      })
    }
  }
}

export const getHousesV2 = async (req: Request, res: Response) => {
  try {
    const houses: IHouse[] | null = await House.find()
      .select('-__v')
      .populate({
        path: 'heads',
        select: '-__v'
      })
      .populate({
        path: 'traits',
        select: '-__v'
      })
      .exec();

    res.status(200).json({ success: true, houses });
  } catch (error: unknown) {
    // TODO: dry this
    let message = 'Something went wrong'
    if (error instanceof Error) {
      message = `${message} - ${error.message}`
    }

    console.log(message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }  
}

// Create new House record
export const createHouse = async (req: Request<{}, {}, IHouse>, res: Response) => {
  try {
    const { heads, traits, ...houseData }: IHouse = req.body;

    const house = await House.create(houseData);
    const createdHeads = await Head.create(heads)
    const createdTraits = await Trait.create(traits)

    house.heads = createdHeads.map(head => head._id)
    house.traits = createdTraits.map(trait => trait._id)

    await house.save()

    res.status(201).json({
      success: true,
      house
    })
  } catch (error : unknown){
    if (error instanceof Error) {
      console.log("error during creating record", error)
      res.status(500).json({
        success: false,
        error: error.message
      })
    }

    console.log("something went wrog")
  } 
}