import download from 'in-browser-download';

export const Download = (data) => {
  download(JSON.stringify(data), 'info.json');
};