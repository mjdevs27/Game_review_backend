import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// this is a import for the requests to hit the server.
import dotenv from "dotenv";
import { typeDefs } from "./schema.js";
import _db from "./_db.js";

dotenv.config();


const resolvers = {
    Query:{
        games(){
            return _db.games
            },
        reviews(){
            return _db.reviews
            },
        authors(){
            return _db.authors
            },
        review(_ , args){
            return _db.reviews.find((review)=>{
                return review.id === args.id
            })
        },
        game(_ , args){
            return _db.games.find((game)=>{
                return game.id === args.id
            })
        },
        author(_ , args){
            return _db.authors.find((author)=>{
                return author.id === args.id
            })
        }
    },
    Game : {
        reviews (parent) {
            return _db.reviews.filter((review)=>parent.id === review.game_id)
        }
    },
    Author : {
        reviews (parent) {
            return _db.reviews.filter((review)=>parent.id === review.author_id)
        }
    },
    Review :{
        game(parent){
            return _db.games.find((game)=>game.id === parent.game_id)
        },
        author(parent){
            return _db.authors.find((author)=>author.id === parent.author_id)
        } 
    },
    Mutation :{
        deleteGame(_, args ){
            _db.games = _db.games.filter((game)=>game.id !== args.id)
            return _db.games
        },
        addGame(_ , args){
            let game = {
                ...args.game,
                id : Math.floor(Math.random * 200).toString()
            }
            _db.games.push(game)
            return game
        },
        updateGame(_ , args){
            _db.games = _db.games.map((game)=>{
                if(game.id === args.id){
                    return {...game.id , ...args.edits}
                }
            return game
            })
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const port = process.env.PORT
const { url } = await startStandaloneServer(server , {
    listen : {port : port}
})


console.log("Server connected at" ,  port  , url)