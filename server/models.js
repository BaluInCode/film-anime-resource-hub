const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const UserSchema = new mongoose.Schema({
name: String,
email: { type: String, unique: true },
password: String,
role: { type: String, default: 'user' }
});
UserSchema.pre('save', async function(next){
if(!this.isModified('password')) return next();
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
next();
});
UserSchema.methods.comparePassword = function(pwd){
return bcrypt.compare(pwd, this.password);
}


const ResourceSchema = new mongoose.Schema({
title: { type: String, required: true },
description: String,
filename: String, // stored file path
uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
tags: [String],
genres: [String],
studio: String,
releaseYear: Number,
actors: [String],
directors: [String],
ratings: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, score: Number }],
createdAt: { type: Date, default: Date.now }
});


const User = mongoose.model('User', UserSchema);
const Resource = mongoose.model('Resource', ResourceSchema);


module.exports = { User, Resource };