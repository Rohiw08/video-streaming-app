import { Schema } from 'mongoose';

const subscriptionSchema = new Schema({
    subscriber : {
        type : Schema.Types.ObjectId, // who is subscribing
        ref : "User",
    },
    channel : {
        type : Schema.Types.ObjectId, // whom subscribing
        ref : "User",
    },
    
}, { timestamps: true });

export default Subscription = mongoose.model('Subscription', subscriptionSchema);