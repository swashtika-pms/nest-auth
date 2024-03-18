

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from '../entities/user.entity';

export type UsersDocument = HydratedDocument <Users>;


@Schema(
    {
        timestamps:true
    }
)
export class Users{
    @Prop()
    frist_name: string;
  
    @Prop()
    last_name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ unique: [true, 'Duplicate email entered'] })
    password: string;
   
    @Prop()
    dob: number;
    
   
}


export const UsersSchema = SchemaFactory.createForClass(Users);

