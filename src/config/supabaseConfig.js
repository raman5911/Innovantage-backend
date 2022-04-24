const createClient = require('@supabase/supabase-js').createClient;
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const createSupabaseClient = () => {
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log("Setup supabase config...");
    return supabase;
}

module.exports = createSupabaseClient;

