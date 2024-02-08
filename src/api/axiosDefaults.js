import axios from "axios";
// import { AccordionCollapse } from "react-bootstrap";

axios.defaults.baseURL = 'https://moments-demo-a8aecd3f16e6.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'; // Correct property name
axios.defaults.withCredentials = true; // Set withCredentials directly on axios.defaults
