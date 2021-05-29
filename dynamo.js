const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "XXXXXXXXXXXXXX";
//Aqui se le pone el nombre de la DATABASE

const getCharacters = async => {
    const params = {
        TableName: TABLE_NAME
    };
    const characters = await dynamoClient.scan(params).promise();
    console.log(characters);
    return characters;
};

const addOrUpdateCharacter = async (character) => {
    const params = {
        TableName: TABLE_NAME,
        Item: character
    }
    return await dynamoClient.put(params).promise();
};

getCharacters();

module.exports = {
    dynamoClient,
    getCharacters,
    addOrUpdateCharacter
}