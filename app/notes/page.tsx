import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();
    console.log("this is notes data",notes);
    console.log("this is supabase",supabase);
  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}