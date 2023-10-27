import React from 'react';
import '../static/css/videos.css'

const Videos = ({ match }) => {
  const { id } = match.params;

  if (id === '1') {
    return (
      <div>
        <h2>Categoría de Videos</h2>
        <div className="video-container">
          <iframe
            title="Video 1 de Google Drive"
            src="https://drive.google.com/file/d/1g-uPIPwzJywYhxTuXiuH0AU8TCJiwmgn/preview"
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <iframe
            title="Video 2 de Google Drive"
            src="https://drive.google.com/file/d/11L087ZyJELE-VrLACYbFAyt8HENdGoKQ/preview"
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <iframe
            title="Video 3 de Google Drive"
            src="https://drive.google.com/file/d/1bxwVfJbETaaWJD216ijcSK1EKplT3WxD/preview"
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <iframe
            title="Video 4 de Google Drive"
            src="https://drive.google.com/file/d/12LcFtxfCV3aXSKlahTwRqNisFmIn4HkK/preview"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  } else if (id === '2') {
    return (
      <div>
        <h2>Otra Categoría de Videos</h2>
        <div className="video-container">
          <iframe
            title="Otro Video de Google Drive"
            src="https://drive.google.com/file/d/1rmNOLYgYn5djeybUnd9pXGYdh2s7WLpi/preview"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  } else if (id === '3') {
    return (
      <div>
        <h2>Otra Categoría de Videos</h2>
        <div className="video-container">
          <iframe
            title="Otro Video de Google Drive"
            src="https://drive.google.com/file/d/1ngEXxqCtky-8sa0jeDxrSYH7hp-6Btxf/preview"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  } else {
    return <div>No se encontró ninguna categoría de videos con el ID proporcionado.</div>;
  }
};

export default Videos;
