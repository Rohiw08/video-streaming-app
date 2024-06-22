import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        validate: {
            validator: function(email) {
                const re = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';
                return re.test(String(email).toLowerCase());
            },
            message: "Please enter a valid email address"
        }
    },
    password : {
        type : String,
        required : [true, "Please enter a valid password"],
        minlength : 6,
    },
    fullName : {
        type : String,
        required : true,
        trim : true,
        index : true
    },
    avatar : {
        type : String,
        required : true,
    },
    coverImage : {
        type : String,
        required : true,
    },
    watchHistory : {
        type : Schema.Types.ObjectId,
        ref : 'Video',
        default : []
    },
    refreshToken : {
        type : String,
        required : true,
    }
}, {timestmps: true});

userSchema.pre('save', async function (next) {
        if(!this.isModified('password')){
            return next();
        }
        this.password =  await bcrypt.hash(this.password, 10);
        next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateaccessToken = async function (){
    return await jwt.sign({
        _id : this._id,
        email : this.email,
        userName : this.userName,
        fullname : this.fullname,
    }),
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIN : process.env.ACCESS_TOKEN_EXPIRY,
    }
}
userSchema.methods.generateRefreshToken = async function (){
    return await jwt.sign({
        _id : this._id,
    }),
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIN : process.env.REFRESH_TOKEN_EXPIRY,
    }
}


export default User = mongoose.model('User' , userSchema);