// Import `dotenv` package and call the `config()` function to access the environment variables set within the `.env` file.
require("dotenv").config();

// Abstract the `createClient` functionality from the `supabase` package. 
const { createClient } = require("@supabase/supabase-js");

// Create two const variables `supabaseURL` and `supabaseSecret` with the value of the environment variables you created.

// const supabaseUrl = process.env.SUPABASE_URL;
const supabaseUrl = "https://uflknflqpqbrjfjfrjnq.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;

// Create a variable `supabase` and set the value to the execution of the `createClient` function passing in `supabaseUrl` and `supabaseSecret` variables as arguments. 
const supabase = createClient(supabaseUrl, supabaseKey);

// Export the `supabase` variable. 
module.exports = supabase;