/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AceInterviewsdb_owner:TrWI7QsLM0JE@ep-proud-block-a5yrv3kj.us-east-2.aws.neon.tech/AceInterviewsdb?sslmode=require',
    }
  };
  