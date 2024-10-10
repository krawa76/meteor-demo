import { Mongo } from 'meteor/mongo';

export const Test1 = new Mongo.Collection('test1', {idGeneration : 'MONGO'});
