import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    age: {type: Number, default: 0},
    gender: {type: String, default: ""},
    symptoms: {type: [String], default: []},
    symptoms_specific: {type: String, default: ""},
    medications: {type: [String], default: []},
    conditions: {type: [String], default: []},
    
})

export default mongoose.model("Users",UserSchema)