import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://irqobmbaebyhaceyenxs.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function signUp(email, password) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    return { data, error };
  } catch (err) {
    return { data: null, error: err };
  }
}

export async function signIn(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log("로그인 결과: ", { data, error });
    return { data, error };
  } catch (err) {
    console.error("로그인 함수에서 예외: ", err);
    return { data: null, error: err };
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    return { error };
  } catch (err) {
    return { error: err };
  }
}

export async function getCurrentUser() {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    return { user, error };
  } catch (err) {
    return { user: null, error: err };
  }
}

// async function getAllRecords() {
//   const { data, error } = await supabase.from("UserList").select("*");
//   if (error) {
//     console.error("에러 발생", error);
//     return null;
//   }
//   return data;
// }

// getAllRecords().then((data) => {
//   console.log(data);
// });
