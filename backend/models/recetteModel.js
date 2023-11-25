import mongoose from "mongoose";

const recetteSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            require : true,
            trim: true,
        },
        ingerdients: [
            {
            type : String,
            }
        ],
        preparationSteps: [
            {
            type : String,
            }
        ],
        preparationTime: {
            type: Number,
            required: true,
          },
        
        photo: {
             data: Buffer,
             contentType: String,
        },
         
    },
    { timestamps: true }
);

export default mongoose.model("recetteSchema",recetteSchema);