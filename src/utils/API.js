import axios from "axios";

export default{
    getEmployees: function(limit) {
        return axios.get(`https://randomuser.me/api/?results=${limit}&nat=us`)
    }
}