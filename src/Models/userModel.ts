import mongoose, { Schema, Model, Document } from 'mongoose';

type UserDocument = Document & {
  id: Number;
  title: string;
  completed: boolean;
  image: string;
 
};

type UserInput = {
  id: UserDocument['id'];
  title: UserDocument['title'];
  completed: UserDocument['completed'];
  image: UserDocument['image'];
  
};

const usersSchema = new Schema(
  {
    id: {
      type: Schema.Types.Number,
      required: true,
       unique: true,
    },
   
    title: {
      type: Schema.Types.String,
      required: true,
     
    },
    completed: {
      type: Schema.Types.Boolean,
      required: true,
    },
    image: {
      type: Schema.Types.String,
      
    },
    
  },
  {
    collection: 'testuser',
    timestamps: true,
  },
);

const User: Model<UserDocument> = mongoose.model<UserDocument>('User', usersSchema);

export { User, UserInput, UserDocument };