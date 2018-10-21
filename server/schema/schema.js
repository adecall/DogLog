const graphql = require('graphql');
const _ = require('lodash');
const Dog = require('../models/dog');
const Volunteer = require('../models/volunteer');

const { GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
}
    = graphql;

const DogType = new GraphQLObjectType({
    name: 'Dog',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        size: { type: GraphQLString },
        gender: { type: GraphQLString },
        volunteer: {
            type: VolunteerType,
            resolve(parent, args) {
                return Volunteer.findById(parent.volunteer_id);

            }
        }
    })
});

const VolunteerType = new GraphQLObjectType({
    name: 'Volunteer',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        sit_rating: { type: GraphQLInt },
        lay_down_rating: { type: GraphQLInt },
        walk_on_leash_rating: { type: GraphQLInt },
        sit_in_crate_rating: { type: GraphQLInt },
        comment: { type: GraphQLString },
        dogs: {
            type: new GraphQLList(DogType),
            resolve(parent, args) {
                return Dog.find({ volunteer_id: parent.id });
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        dog: {
            type: DogType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Dog.findById(args.id);
            }
        },
        volunteer: {
            type: VolunteerType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Volunteer.findById(args.id);
            }
        },
        dogs: {
            type: new GraphQLList(DogType),
            resolve(parent, args) {
                return Dog.find({});
            }
        },
        volunteers: {
            type: new GraphQLList(VolunteerType),
            resolve(parent, args) {
                return Volunteer.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addVolunteer: {
            type: VolunteerType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                sit_rating: { type: new GraphQLNonNull(GraphQLInt) },
                lay_down_rating: { type: new GraphQLNonNull(GraphQLInt) },
                walk_on_leash_rating: { type: new GraphQLNonNull(GraphQLInt) },
                sit_in_crate_rating: { type: new GraphQLNonNull(GraphQLInt) },
                comment: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                let volunteer = new Volunteer({
                    name: args.name,
                    sit_rating: args.sit_rating,
                    lay_down_rating: args.lay_down_rating,
                    walk_on_leash_rating: args.walk_on_leash_rating,
                    sit_in_crate_rating: args.sit_in_crate_rating,
                    comment: args.comment
                });
                return volunteer.save();
            }
        },

        addDog: {
            type: DogType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
                size: { type: new GraphQLNonNull(GraphQLString) },
                gender: { type: new GraphQLNonNull(GraphQLString) },
                volunteer_id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                let dog = new Dog({
                    name: args.name,
                    age: args.age,
                    size: args.size,
                    gender: args.gender,
                    volunteer_id: args.volunteer_id
                });
                return dog.save();

            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
