import React, { useState } from 'react';
import './FileUpLoad.scss';

export const FileUpLoad = () => {
  const [file, setFile] = useState();

  const fileUpload = e => {
    setFile(e.target.files[0]);
  };

  const sendFiles = () => {
    const fileData = new FormData();
    fileData.append('imgs', file);

    for (let value of fileData.values()) {
      console.log(value);
    }
  };
  return (
    <article className="validWrap">
      <div>
        <h2>파일 업로드 + FormData 내용 확인하기</h2>
        <div>
          <input type="file" onChange={fileUpload} />
          <button onClick={sendFiles}>전송</button>
        </div>
      </div>
    </article>
  );
};
