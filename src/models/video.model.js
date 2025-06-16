import mongoose, {Schema} from "mongoose";
import mongoose-aggregate-paginate-v2 from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String,
            required: true
        },
        thumbnail:{
            type: String,  //cloudinary url
            required: true
        },
        title:{
            type: String,  l
            required: true
        },
        description:{
            type: String,  //cloudinary url
            required: true
        },
        duration : {
            type: Number,
            required: true
        },
        views : {
            type: Number,
            default: 0
        },
        ispublished{
            type: Boolean,
            default: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    },
    {
        timestampes: true
    }
)



videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)