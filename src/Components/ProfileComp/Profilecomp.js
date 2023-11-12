import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./Profile.module.css"
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Profilecomp = ({ data , picture , email }) => {
  const [file, setFile] = useState();
  const onsubmitHanadler = async(e)=>{
    e.preventDefault()
    const formdata = new FormData();
    formdata.set("file",file)
    const response = await fetch("/api/upload",{
      method : "POST",
      body : formdata,
    })
    console.log(response)
  }
  return(
    <div className={styles.container}>
      <div>
        <Image 
        src={picture}
        alt="my-Image"
        width={50}
        height={50}
        className={styles.images}
        />
      </div>
        <form onSubmit={onsubmitHanadler}>
          <input type="file" id="forinput" name="file" onChange={(e)=>setFile(e.target.files?.[0])}/>
          <label for="forinput" className={styles.idLabel}><CameraAltIcon className={styles.icon}/></label>
          <button type='Submit'>Upload</button>
        </form>
    </div>
  )
}

export default Profilecomp;
