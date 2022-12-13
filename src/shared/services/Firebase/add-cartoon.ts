import type { Cartoon } from "../../utils/Cartoon.interface";
import { collection, addDoc,} from "firebase/firestore";
import { db } from "./firebase-config";

export const  createCartoonFB = async (cartoon: Cartoon) => {
  
    try {
      const docRef = await addDoc(collection(db, "cartoons"), {
        title: cartoon.title,
        year: cartoon.year,
        rating: cartoon.rating,
        runtime_in_minutes: cartoon.runtime_in_minutes,
        isFav: cartoon.isFav,
        image: cartoon.image,
        genre: cartoon.genre,
        episodes: cartoon.episodes,
        creator: cartoon.creator,
      });
    
      console.log("Document written with ID: ", docRef.id);
    
      return "success";
    } catch (e) {
      console.error("Error adding document: ", e);
     
      return "fail";
    }
  };