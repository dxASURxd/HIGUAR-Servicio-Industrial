import axios from "axios";

export const page_id = 159602857238811;
export const access_token = "EAAF2nAY1J58BO9zZAYE0HILdfPuZBywkbzAOu4ZBR7UaZCq3X4jGYzG8tXKS3YnJ15HDHJF6uHXq7w2pnloONlgwzqnOajS3gfKv5i77EYpYEns13N5Pt9eJ5JaiyyaRajZCxZATVHZAnv7fJoiCbTacoY7plcDlx8OxUkUBIdOZACzPtuQ9H7ZB5rwxNtpVI8UQohtT2n2ItZBfiVZAhLWttcFy1ijWqxbKLb4ZAZAQS7n8ZD";

export const buildGraphApiUrl = () => {
  return `https://graph.facebook.com/v18.0/${page_id}/feed?fields=message,full_picture,permalink_url&access_token=${access_token}`;
};

export const ApiGraph = axios.create({
  baseURL: buildGraphApiUrl(),
});
