import React from 'react';
import ReactDOM from 'react-dom';
import Upload from 'rc-upload';

export default class FileUpload extends React.Component {
  render() {
    const props = {
      action: '/api/clippings/upload',
      type: 'drag',
      accept: '.txt',
      className: 'upload',
      beforeUpload(file) {
        console.log('beforeUpload', file.name);
      },
      onStart: (file) => {
        console.log('onStart', file.name);
      },
      onSuccess(file) {
        console.log('onSuccess', file);
      },
      onProgress(step, file) {
        console.log('onProgress', Math.round(step.percent), file.name);
      },
      onError(err) {
        console.log('onError', err);
      },
      style: { display: 'inline-block', width: 200, height: 200, background: '#eee' },
      // openFileDialogOnClick: false
    };
    return (
      <Upload {...props} />
    )
  }
}