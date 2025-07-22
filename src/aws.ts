import 'dotenv/config';
import AWS from 'aws-sdk';
import { table } from 'console';

AWS.config.update({
  region: process.env.AWS_REGION || 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const { DynamoDB } = AWS;

const dynamodb = new DynamoDB();

// create a table
export const dynamodbCreateTable = async (
  params: AWS.DynamoDB.CreateTableInput
) => {
  try {
    const result = await dynamodb.createTable(params).promise();
    console.log('Table created successfully:', result);
    return result;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
    throw new Error('dynamodbCreateTable error object unknown type.');
  }
};
// describe a table
export const dynamodbDescribeTable = async (tableName: string) => {
  try {
    const table = await dynamodb
      .describeTable({ TableName: tableName })
      .promise();
    console.log('Table retrieved:', table);

    return table;
  } catch (e) {
    if (e instanceof Error) {
      return e;
    }
    throw new Error('dynamodbDescribeTable error object unknown type.');
  }
};

// delete a table

// create a record
