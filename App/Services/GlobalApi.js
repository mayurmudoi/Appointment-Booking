import axios from "axios";
const BASE_URL="http://192.168.187.35:1337/api"

const API_KEY="YOUR_STRAPI_API_KEY"

const AxioInstance=axios.create({
    baseURL:BASE_URL,
    headers:{
        'Authorization':"Bearer "+API_KEY
    }
})

const getSlider=()=>AxioInstance.get("/sliders?populate=*");

const getCategories=()=>AxioInstance.get("/categories?populate=*")

const getPremiumHospitals=()=>AxioInstance.get("/hospitals?filters[Premium][$eq]=true&populate=*")

const getHospitalsByCategory=(category)=>
AxioInstance.get("hospitals?filters[categories][Name][$in]="+category+"&populate=*");

const getDoctorsByCategory=(category)=>
AxioInstance.get("doctors?filters[categories][Name][$in]="+category+"&populate=*")

const createAppointment=(data)=>AxioInstance.post(
    "/appointments",data
)

const getAllHospital=()=>AxioInstance.get("hospitals?populate=*");

const getAllDoctors=()=>
AxioInstance.get("doctors?populate=*")


const getUserAppointments=(email)=>
AxioInstance.get("appointments?filters[email][$eq]="+email+"&populate=*");

export default{
    getSlider,
    getCategories,
    getPremiumHospitals,
    getHospitalsByCategory,
    getDoctorsByCategory,
    createAppointment,
    getAllHospital,
    getAllDoctors,
    getUserAppointments
}