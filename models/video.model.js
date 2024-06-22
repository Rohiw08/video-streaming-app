import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new mongoose.Schema({

    videoFile: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    views: {
        type: Number,
        default : 0,
        required: true
    },
    likes: {
        type: Number,
        default : 0,
        required: true
    },
    dislikes: {
        type: Number,
        default : 0,
        required: true
    },
    comments: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true
    },
    isPublished : {
        type: Boolean,
        required: true,
        default : true,
    }
}, {timestamps : true});

videoSchema.default(mongooseAggregatePaginate);
