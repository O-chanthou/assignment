import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/firebase-config";
import type { ImageData } from "@/shared/utils/cartoon-image.interface";
import type { async } from "@firebase/util";

const imagesRef = ref(storage, "cartoons/");
let imageUrl = "";

export const uploadCartoonImage = async (imageData: ImageData) => {
  console.log(imageData);

  //// data:image/jpeg;base64,
  let dateTime = Date();
  let newDateTime = Date.parse(dateTime);

  let fileName = newDateTime + imageData.fileName;
  let imageBase64 = imageData.imageBase64;
  const storageRef = ref(imagesRef, fileName);

  await uploadString(storageRef, imageBase64, "data_url")
    .then(async (result) => {
      console.log("upload succese");

      await getDownloadURL(ref(storage, storageRef.fullPath)).then((url) => {
        imageUrl = url;
      });
    })
    .catch((err) => {
      console.log("error");

      console.log(err);
    });

  return imageUrl;
};
